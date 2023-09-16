import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, Typography } from '@mui/material';
import { useState } from 'react';
import { NavbarLink } from './navbarLink';
import { useRouter } from 'next/router';

export const SmallScreenNavbar = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const router = useRouter();

  const toggleDrawer = (isOpen: boolean) => {
    setOpenDrawer(isOpen);
  };

  return (
    <>
      <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
        <MenuIcon
          sx={{
            fontSize: 28,
            cursor: 'pointer',
            color: 'primary.main',
            transition: 'color 0.3s ease-in-out',
            '&:hover': {
              color: 'primary.light',
            },
          }}
          onClick={() => toggleDrawer(true)}
        />
      </Box>
      <Drawer
        sx={{ display: { xs: 'flex', lg: 'none' } }}
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: 430,
            background: 'transparent',
            boxShadow: 0,
          },
        }}
      >
        <Box width="100%" borderColor="white" height="100%" display="flex">
          <Box width={45} height="100%" onClick={() => toggleDrawer(false)}>
            <Typography
              mt={11}
              fontWeight="bold"
              whiteSpace="nowrap"
              color="primary.main"
              sx={{
                cursor: 'pointer',
                transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: 'primary.light',
                },
                transform: 'rotate(-90deg)',
              }}
            >
              <Typography component="span" mr={3}>
                X
              </Typography>
              ZATVORI
            </Typography>
          </Box>
          <Box
            width="100%"
            height="100%"
            bgcolor="primary.dark"
            color="primary.main"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="start"
            p={5}
          >
            <Typography
              mt={2}
              fontSize={24}
              fontWeight="bold"
              sx={{
                color: 'primary.main',
                cursor: 'pointer',
                transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
              onClick={() => {
                router.push('/');
                toggleDrawer(false);
              }}
            >
              POČETNA
            </Typography>
            <Typography
              mt={2}
              fontSize={24}
              fontWeight="bold"
              sx={{
                color: 'primary.main',
                cursor: 'pointer',
                transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
              onClick={() => {
                router.push('/');
                toggleDrawer(false);
              }}
            >
              PORTFOLIO
            </Typography>
            <Typography
              mt={2}
              fontSize={24}
              fontWeight="bold"
              sx={{
                color: 'primary.main',
                cursor: 'pointer',
                transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
              onClick={() => {
                router.push('/');
                toggleDrawer(false);
              }}
            >
              PRIVATNO
            </Typography>
            <Typography
              mt={2}
              fontSize={24}
              fontWeight="bold"
              sx={{
                color: 'primary.main',
                cursor: 'pointer',
                transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
              onClick={() => {
                router.push('/');
                toggleDrawer(false);
              }}
            >
              FOTO PLUS
            </Typography>
            <Typography
              mt={2}
              fontSize={24}
              fontWeight="bold"
              sx={{
                color: 'primary.main',
                cursor: 'pointer',
                transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
              onClick={() => {
                router.push('/');
                toggleDrawer(false);
              }}
            >
              USLUGE
            </Typography>
            <Typography
              mt={2}
              fontSize={24}
              fontWeight="bold"
              sx={{
                color: 'primary.main',
                cursor: 'pointer',
                transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
              onClick={() => {
                router.push('/');
                toggleDrawer(false);
              }}
            >
              KONTAKT
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
