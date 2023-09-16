import { Grid } from '@mui/material';

interface YoutubeVideoProps {
  src: string;
}

export const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ src }) => {
  return (
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
        src={src}
        allowFullScreen
      ></iframe>
    </Grid>
  );
};
