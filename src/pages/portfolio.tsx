import { Container } from '@/components/layout/container';
import { ListImageItem } from '@/components/shared/listImageItem';
import { YoutubeVideo } from '@/components/portfolio.component/youtubeVideo';
import { Grid } from '@mui/material';

export default function Portfolio() {
  return (
    <Container>
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
