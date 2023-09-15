import { Grid, Typography } from '@mui/material';
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
    <Grid container>
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
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ pt: { xs: 0, lg: 20 }, height: { xs: 300, lg: 500 } }}
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
