import { Container } from '@/components/layout/container';
import { YoutubeVideo } from '@/components/shared/youtubeVideo';
import { Grid, Typography } from '@mui/material';

export default function Portfolio() {
  return (
    <Container>
      <YoutubeVideo src="https://www.youtube.com/embed/oRY3J6hy3eI?si=NwhhCV8LV1K9WzLx" />
      <YoutubeVideo src="https://www.youtube.com/embed/oRY3J6hy3eI?si=NwhhCV8LV1K9WzLx" />
      <YoutubeVideo src="https://www.youtube.com/embed/oRY3J6hy3eI?si=NwhhCV8LV1K9WzLx" />
    </Container>
  );
}
