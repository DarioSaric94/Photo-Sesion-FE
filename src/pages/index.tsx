import { Footer } from '@/components/layout/footer';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [overlayBg, setOverlayBg] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  return (
    <Box
      ref={containerRef}
      height="100vh"
      borderColor="red"
      width="100%"
      overflow="hidden"
      position="relative"
    >
      <img src="/images/cover.jpg" className="image-cover" />
      <Footer containerRef={containerRef} />
      <Box
        position="absolute"
        zIndex={2}
        height="100vh"
        right="20%"
        top={0}
        display="flex"
        flexDirection="row"
      >
        <Box
          borderLeft={1}
          sx={{ borderColor: 'secondary.light', opacity: 0.3 }}
        />
        <Box display="flex" alignItems="center">
          <Typography
            onClick={() => router.push('/contact')}
            onMouseEnter={() => setOverlayBg(true)}
            onMouseLeave={() => setOverlayBg(false)}
            sx={{
              transform: 'rotate(-90deg)',
              maxWidth: 50,
              cursor: 'pointer',
              transition:
                'color 0.3s ease-in-out, margin-bottom 0.3s ease-in-out',
              '&:hover': {
                color: 'primary.light',
                mb: -60,
              },
              fontSize: { xs: 30, md: 40 },
              pb: { xs: 2, md: 0 },
              mb: { xs: -40, md: -70 },
            }}
            fontWeight="bolder"
            fontSize={40}
            mb={-60}
            color="primary.main"
            whiteSpace="nowrap"
          >
            KONTAKTIRAJTE NAS
          </Typography>
        </Box>
      </Box>
      <Box
        className="overlay"
        sx={{ transition: ' 0.3s ease' }}
        bgcolor={overlayBg ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)'}
      />
    </Box>
  );
}
