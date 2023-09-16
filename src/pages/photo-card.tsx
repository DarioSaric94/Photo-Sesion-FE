import { Container } from '@/components/layout/container';
import { ListImageItem } from '@/components/shared/listImageItem';
import { Grid } from '@mui/material';

export default function PhotoCard() {
  return (
    <Container>
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
