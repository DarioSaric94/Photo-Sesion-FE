import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';

interface FooterProps {
  containerRef: React.RefObject<any>;
}

export const Footer: React.FC<FooterProps> = ({ containerRef }) => {
  const [showFooter, setShowFooter] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollPosition = container.scrollTop;
        const containerHeight = container.clientHeight;
        const contentHeight = container.scrollHeight;

        const scrollPercentage =
          (scrollPosition / (contentHeight - containerHeight)) * 100;

        if (scrollPercentage >= 80) {
          setShowFooter(true);
        } else {
          setShowFooter(false);
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

  return (
    <Box
      position="absolute"
      zIndex={showFooter ? 5 : -1}
      bottom={0}
      width="100%"
      sx={{
        transition: 'opacity 0.3s ease-in-out',
        opacity: showFooter ? 1 : 0,
      }}
    >
      <Box
        pr={5}
        pb={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box color="secondary.main" display="flex">
          <Box
            ml={5}
            sx={{
              cursor: 'pointer',
              transition: 'color 0.3s ease-in-out',
              '&:hover': {
                color: 'primary.light',
              },
            }}
          >
            <BiLogoFacebook size={40} />
          </Box>
          <Box
            ml={5}
            sx={{
              cursor: 'pointer',
              transition: 'color 0.3s ease-in-out',
              '&:hover': {
                color: 'primary.light',
              },
            }}
          >
            <BiLogoInstagram size={40} />
          </Box>
        </Box>
        <Typography fontSize={14} fontWeight="bold" color="secondary.main">
          COPYRIGHT FOTOMISKIC; 2021. SVA PRAVA SADRŽANA.
        </Typography>
      </Box>
    </Box>
  );
};
