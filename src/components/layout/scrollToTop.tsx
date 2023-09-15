import { Grid, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

interface SideNavProps {
  hover?: boolean;
  containerRef: React.RefObject<any>;
}

export const ScrollToTop: React.FC<SideNavProps> = ({ containerRef }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        if (scrollPosition >= 500) {
          setShowText(true);
        } else {
          setShowText(false);
        }
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  return (
    <Grid item xs={1} lg={2} display="flex" justifyContent="center">
      <Box display="flex" alignItems="center">
        <Typography
          sx={{
            transform: 'rotate(-90deg)',
            opacity: showText ? 1 : 0,
            cursor: 'pointer',
            '&:hover': {
              color: 'primary.light',
            },
          }}
          className="hovered-text"
          fontWeight="bold"
          fontSize={16}
          mt={showText ? 80 : 90}
          pt={3}
          maxWidth={50}
          color="primary.main"
          whiteSpace="nowrap"
          onClick={scrollToTop}
        >
          {showText ? 'NAZAD NA' : ''}
        </Typography>
      </Box>
      <Box className="white-border" />
      <Box display="flex" alignItems="center">
        <Typography
          sx={{
            transform: 'rotate(-90deg)',
            opacity: showText ? 1 : 0,
            cursor: 'pointer',
            '&:hover': {
              color: 'primary.light',
            },
          }}
          className="hovered-text"
          fontWeight="bold"
          fontSize={50}
          maxWidth={50}
          mt={showText ? 70 : 60}
          color="primary.main"
          whiteSpace="nowrap"
          onClick={scrollToTop}
        >
          {showText ? 'VRH' : ''}
        </Typography>
      </Box>
    </Grid>
  );
};
