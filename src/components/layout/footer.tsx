import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';

interface FooterProps {
  containerRef: React.RefObject<any>;
}

export const Footer: React.FC<FooterProps> = ({ containerRef }) => {
  const { pathname } = useRouter();
  const [showFooter, setShowFooter] = useState<boolean>(
    pathname === '/' ? true : false
  );

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollPosition = container.scrollTop;
        const containerHeight = container.clientHeight;
        const contentHeight = container.scrollHeight;

        const scrollPercentage =
          (scrollPosition / (contentHeight - containerHeight)) * 100;

        if (scrollPercentage >= 90) {
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
        pl={5}
        pb={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      >
        <Box
          color="secondary.main"
          display="flex"
          width="100%"
          sx={{ justifyContent: { xs: 'space-around', md: 'start' } }}
        >
          <Box
            sx={{
              mr: { xs: 0, md: 5 },
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
            sx={{
              mr: { xs: 0, md: 5 },
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
        {pathname !== '/' && (
          <Typography
            width="100%"
            fontSize={14}
            sx={{
              fontSize: { xs: 10, md: 14 },
              textAlign: { xs: 'center', md: 'end' },
            }}
            fontWeight="bold"
            color="secondary.main"
          >
            COPYRIGHT FOTOMISKIC; 2021. SVA PRAVA SADRŽANA.
          </Typography>
        )}
      </Box>
    </Box>
  );
};
