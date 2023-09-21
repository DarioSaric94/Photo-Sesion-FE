import { Grid, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface ListImageItemProps {
  src: string;
}

export const ListImageItem: React.FC<ListImageItemProps> = ({ src }) => {
  const [aspectRatio, setAspectRatio] = useState(1 / 1);
  const { pathname } = useRouter();
  console.log(src);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      if (pathname === '/wooden-boxes') {
        setAspectRatio(1 / 1);
      } else if (img.width > img.height) {
        setAspectRatio(1 / 0.7);
      } else {
        setAspectRatio(1 / 1.3);
      }
    };
  }, [src]);

  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <Box overflow="hidden" sx={{ aspectRatio }}>
          <img src={src} className="image-portfolio" />
        </Box>
      </Grid>
    </>
  );
};
