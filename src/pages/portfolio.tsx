import { Container } from '@/components/layout/container';
import { ListImageItem } from '@/components/shared/listImageItem';
import { YoutubeVideo } from '@/components/portfolio.component/youtubeVideo';
import { Box, Grid } from '@mui/material';
import { AddYoutubeLink } from '@/components/admin.component/addYoutubeLink';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { getYoutubeLinks } from '@/utils/youtubeLinks.api';
import { YoutubeLinksData } from '@/utils/types';

export default function Portfolio() {
  const admin = useSelector((state: RootState) => state?.auth?.userData?.role);
  const [youtubeLinksData, setYoutubeLinksData] =
    useState<YoutubeLinksData | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleGetYoutubeLinks = async () => {
      const response: any = await getYoutubeLinks();
      setYoutubeLinksData(response);
    };
    handleGetYoutubeLinks();
  }, [isSuccess]);

  return (
    <Container>
      {admin === 1 && (
        <AddYoutubeLink
          data={youtubeLinksData}
          onPostSuccessChange={setIsSuccess}
        />
      )}
      {youtubeLinksData?.youtubeLink1 && (
        <YoutubeVideo src={youtubeLinksData?.youtubeLink1} />
      )}
      {youtubeLinksData?.youtubeLink2 && (
        <YoutubeVideo src={youtubeLinksData?.youtubeLink2} />
      )}
      {youtubeLinksData?.youtubeLink3 && (
        <YoutubeVideo src={youtubeLinksData?.youtubeLink3} />
      )}
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
