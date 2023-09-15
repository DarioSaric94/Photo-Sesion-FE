import { Container } from '@/components/layout/container';
import { Grid, Typography } from '@mui/material';

export default function Portfolio() {
  return (
    <Container>
      <Grid item xs={12} position="relative" pt="56.25%" mt={5}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          src="https://www.youtube.com/embed/oRY3J6hy3eI?si=NwhhCV8LV1K9WzLx"
          allowFullScreen
        ></iframe>
      </Grid>
      <Grid item xs={12} position="relative" pt="56.25%" mt={5}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          src="https://www.youtube.com/embed/oRY3J6hy3eI?si=NwhhCV8LV1K9WzLx"
          allowFullScreen
        ></iframe>
      </Grid>
      <Grid item xs={12} position="relative" pt="56.25%" mt={5}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          src="https://www.youtube.com/embed/oRY3J6hy3eI?si=NwhhCV8LV1K9WzLx"
          allowFullScreen
        ></iframe>
      </Grid>
    </Container>
  );
}
