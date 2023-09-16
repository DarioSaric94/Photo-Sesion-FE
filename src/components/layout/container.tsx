import { Box, Grid, Typography } from '@mui/material';
import { SideNav } from './sideNav';
import { useRef } from 'react';
import { ScrollToTop } from './scrollToTop';
import { useRouter } from 'next/router';
import { getPageTexts } from '@/helpers/pageProps';
import { Footer } from './footer';

interface ContainerProps {
  children: any;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useRouter();
  const { detailText, pageText, text1, text2 } = getPageTexts(pathname);

  return (
    <Grid container position="relative">
      <SideNav detailText={detailText} pageText={pageText} />
      <Grid item xs={12} lg={8}>
        <Grid
          container
          ref={containerRef}
          maxWidth={1280}
          margin="auto"
          height="100vh"
          sx={{
            overflowY: 'scroll',
            scrollBehavior: 'smooth',
          }}
          pr={3}
          pl={3}
        >
          <Grid
            item
            xs={12}
            sx={{ display: { xs: 'flex', lg: 'none' } }}
            flexDirection="column"
            mt={20}
          >
            <Typography
              fontSize={16}
              textAlign="center"
              fontWeight="bold"
              color="primary.main"
              lineHeight={2}
            >
              {detailText}
            </Typography>
            <Box
              borderBottom={1}
              borderColor="primary.main"
              sx={{ opacity: 0.3 }}
            />
            <Typography
              lineHeight={1.4}
              fontSize={50}
              textAlign="center"
              fontWeight="bold"
              color="primary.main"
            >
              {pageText}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            mt={5}
            mb={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ pt: { xs: 0, lg: 5 }, mt: { xs: 5, lg: 20 } }}
          >
            <Typography textAlign="center" color="primary.main" maxWidth={600}>
              {text1}
            </Typography>
            <Typography
              textAlign="center"
              mt={5}
              color="primary.main"
              maxWidth={600}
            >
              {text2}
            </Typography>
          </Grid>
          {children}
        </Grid>
      </Grid>
      <ScrollToTop containerRef={containerRef} />
      <Footer containerRef={containerRef} />
    </Grid>
  );
};
