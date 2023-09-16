import { Container } from '@/components/layout/container';
import { ListItem } from '@/components/private.components/listItem';
import { Box, Grid } from '@mui/material';

export default function Private() {
  return (
    <Container>
      <Grid container spacing={4} mb={20}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Grid>
    </Container>
  );
}
