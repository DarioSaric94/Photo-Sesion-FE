import { Grid, Box, Typography } from '@mui/material';
import { DeleteIcon } from '../admin.component/deleteIcon';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/router';
import { AlbumSesion } from '@/utils/types';

interface ListItemProps {
  album: AlbumSesion;
  onDelete: (album: AlbumSesion) => void;
}

export const ListItem: React.FC<ListItemProps> = ({ album, onDelete }) => {
  const isAdmin = useSelector(
    (state: RootState) => state?.auth?.userData?.role
  );

  const router = useRouter();
  return (
    <Grid item xs={12} md={6} lg={4} mb={2} position="relative">
      <Box
        overflow="hidden"
        sx={{ aspectRatio: 1 / 1.05 }}
        onClick={() => router.push(`/private/${album?.id}`)}
      >
        <img
          src={album?.images[0]?.image}
          alt={album?.images[0]?.image}
          className="image-portfolio"
        />
      </Box>
      <Box mt={2}>
        <Typography
          fontWeight="bold"
          fontSize={12}
          color="primary.main"
          textTransform="uppercase"
        >
          {album?.albumName}
        </Typography>
        <Typography
          fontWeight="bolder"
          color="primary.light"
          lineHeight={1.1}
          textTransform="uppercase"
          fontSize={24}
        >
          {album?.participants}
        </Typography>
      </Box>
      {isAdmin === 1 && <DeleteIcon onClick={() => onDelete(album)} />}
    </Grid>
  );
};
