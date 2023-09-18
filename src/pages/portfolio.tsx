import { Container } from '@/components/layout/container';
import { ListImageItem } from '@/components/shared/listImageItem';
import { YoutubeVideo } from '@/components/portfolio.component/youtubeVideo';
import { Grid } from '@mui/material';
import { AddYoutubeLink } from '@/components/admin.component/addYoutubeLink';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Portfolio() {
  const admin = useSelector((state: RootState) => state?.auth?.userData?.role);
  return (
    <Container>
      {admin === 1 && <AddYoutubeLink />}
      <YoutubeVideo src="https://www.youtube.com/embed/oRY3J6hy3eI?si=NwhhCV8LV1K9WzLx" />
      <YoutubeVideo src="https://www.youtube.com/embed/oRY3J6hy3eI?si=NwhhCV8LV1K9WzLx" />
      <YoutubeVideo src="https://www.youtube.com/embed/oRY3J6hy3eI?si=NwhhCV8LV1K9WzLx" />
      <Grid container spacing={3} mb={20} mt={0}>
        <ListImageItem src="/images/cat.jpg" />
        <ListImageItem src="/images/cat.jpg" />
        <ListImageItem src="/images/cat.jpg" />
        <ListImageItem src="/images/djedmraz.jpg" />
        <ListImageItem src="/images/djedmraz.jpg" />
        <ListImageItem src="/images/djedmraz.jpg" />
        <ListImageItem src="/images/cat.jpg" />
        <ListImageItem src="/images/cat.jpg" />
        <ListImageItem src="/images/cat.jpg" />
      </Grid>
    </Container>
  );
}
