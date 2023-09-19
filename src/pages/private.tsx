import { AddAlbum } from '@/components/admin.component/addAlbum';
import { Container } from '@/components/layout/container';
import { ListItem } from '@/components/private.components/listItem';
import { RootState } from '@/store/store';
import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Private() {
  const isAdmin = useSelector(
    (state: RootState) => state?.auth?.userData?.role
  );
  return (
    <Container>
      {isAdmin === 1 && (
        <Box mb={5}>
          <AddAlbum />
        </Box>
      )}
      <Grid container spacing={4} mb={20}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Grid>
    </Container>
  );
}
