import { Box, Grid, Typography } from '@mui/material';
import { Container } from '../../components/base/container';
import { NavBarExtension } from '../../components/base/navBarExtension';
import { useRouter } from 'next/router';
import { SubTitle } from '@/components/shared/subTitle';
import { CourseCard } from '@/components/courses/courseCard';
import { getCourseById, getSimilarCourses } from '@/utils/courses.api';
import {
  Course,
  CourseGroup,
  CourseLesson,
  LessonProgress,
} from '@/utils/types';
import { useState, useEffect } from 'react';
import { extractIdFromSlug } from '@/helpers/extractIdFromSlug';
import { Description } from '@/components/shared/description';
import { Card } from '@/components/shared/card';
import { CustomButton } from '@/components/shared/customButton';
import { Breadcrums } from '@/components/shared/breadcrums';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { CustomModal } from '@/components/shared/customModal';
import { LoginForm } from '../auth/logInForm';
import { Subscribe } from '@/components/base/subscribe';

function calculateGroupProgress(
  group: CourseGroup,
  finishedLessons: LessonProgress[] | undefined
) {
  const totalLessons = group.lessons.length;
  const completedLessons = finishedLessons?.filter(
    (lesson: LessonProgress) => lesson.courseGroupId === group.id
  ).length;
  const progressPercent = ((completedLessons || 0) / totalLessons) * 100;

  return isNaN(progressPercent) ? 0 : progressPercent.toFixed(0);
}

export default function Courses() {
  const [coursesData, setCoursesData] = useState<Course | null>(null);
  const [similarCourses, setSimilarCourses] = useState<Course[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openSubscribeModal, setOpenSubscribeModal] = useState<boolean>(false);
  const finishedLessons = useSelector(
    (state: RootState) => state.auth.userData?.lessonProgresses
  );
  const token = useSelector((state: RootState) => state.auth.token);
  const subscribed = useSelector(
    (state: RootState) => state.auth.userData?.subscription
  );
  const router = useRouter();
  const slug = router.query.slug as string;
  const courseId = extractIdFromSlug(slug, 'course-');
  const isLiked = useSelector(
    (state: any) => state?.auth?.userData?.favoriteCourses
  );
  useEffect(() => {
    if (courseId) {
      const getCourses = async () => {
        try {
          const [course, similarCourses] = await Promise.all([
            getCourseById({ id: courseId }),
            getSimilarCourses({ id: courseId }),
          ]);
          setCoursesData(course);
          setSimilarCourses(similarCourses);
        } catch (error) {}
      };
      getCourses();
    }
  }, [courseId]);

  const isCourseLocked = (lesson: CourseLesson) => {
    if (token) {
      if (subscribed) {
        router.push(`${slug}/${lesson?.slug}`);
      } else {
        setOpenSubscribeModal(true);
      }
    } else {
      setOpenModal(true);
    }
  };

  return (
    <Box pb={5}>
      <NavBarExtension>
        <Breadcrums
          crumbs={[
            { name: 'Courses', link: '/courses' },
            {
              name: coursesData?.title || '',
              link: `/courses/${coursesData?.slug}`,
            },
          ]}
        />
      </NavBarExtension>
      <Container height="70vh">
        <SubTitle subTitle={coursesData?.title} />
        <Description description={coursesData?.description} />
        <Grid container spacing={5} mt={1}>
          <Grid item xs={12} lg={8} md={12}>
            <Card>
              {coursesData?.courseGroups?.map((group: CourseGroup) => {
                const progressPercent = calculateGroupProgress(
                  group,
                  finishedLessons
                );
                return (
                  <Box mb={5} key={group?.id}>
                    <Box
                      bgcolor="primary.main"
                      color="primary.contrastText"
                      borderRadius={1}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      p={1.5}
                    >
                      <Typography fontSize={18} fontWeight="bold">
                        {group?.title}
                      </Typography>
                      <Typography fontSize={14} letterSpacing={0.2}>
                        Progress {progressPercent}%
                      </Typography>
                    </Box>
                    {group?.lessons?.map((lesson: CourseLesson) => {
                      const isLessonFinished = finishedLessons?.some(
                        (finished: { lessonId: number }) =>
                          finished.lessonId === lesson.id
                      );

                      return (
                        <Box
                          key={lesson?.id}
                          p={1}
                          borderBottom={2}
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          borderColor="secondary.contrastText"
                        >
                          <Box display="flex" alignItems="center">
                            <Typography>- {lesson?.title}</Typography>
                            <Typography
                              ml={1}
                              mr={1}
                              mb={0.1}
                              fontWeight="bold"
                              color="primary.light"
                              fontSize={18}
                            >
                              |
                            </Typography>
                            <Typography>{lesson?.lessonType?.type}</Typography>
                          </Box>
                          <CustomButton
                            variant="contained"
                            text={
                              subscribed
                                ? isLessonFinished
                                  ? 'Redo'
                                  : 'Enroll'
                                : 'Locked'
                            }
                            bgcolor="primary.light"
                            onClick={() => isCourseLocked(lesson)}
                          />
                        </Box>
                      );
                    })}
                  </Box>
                );
              })}
            </Card>
          </Grid>
          <Grid item xs={12} lg={4} md={12}>
            <Grid container spacing={5}>
              {similarCourses?.map((course: Course) => {
                const isCourseLiked = isLiked?.some(
                  (likedCourse: { courseId: number }) =>
                    likedCourse.courseId === course.id
                );
                return (
                  <CourseCard
                    key={course?.id}
                    id={course?.id}
                    isLiked={!!isCourseLiked}
                    small
                    title={course?.title}
                    slug={course?.slug}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <CustomModal open={openModal} onClose={() => setOpenModal(false)}>
        <LoginForm />
      </CustomModal>
      <CustomModal
        maxWidth={600}
        open={openSubscribeModal}
        onClose={() => setOpenSubscribeModal(false)}
      >
        <Subscribe closeModal={setOpenSubscribeModal} />
      </CustomModal>
    </Box>
  );
}
