import { Grid, Box, Typography } from '@mui/material';
import { DeleteIcon } from '../admin.component/deleteIcon';

interface ListItemProps {
  album: any;
  onDelete: (album: any) => void;
}

export const ListItem: React.FC<ListItemProps> = ({ album, onDelete }) => {
  return (
    <Grid item xs={12} md={6} lg={4} mb={2} position="relative">
      <Box overflow="hidden" sx={{ aspectRatio: 1 / 1.05 }}>
        <img src={album?.images[0]?.image} className="image-portfolio" />
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
      <DeleteIcon onClick={() => onDelete(album)} />
    </Grid>
  );
};
