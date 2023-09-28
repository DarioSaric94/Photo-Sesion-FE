import { Box, Drawer, Typography } from '@mui/material';
import router from 'next/router';
import { useState } from 'react';

interface SmallScreenDrawerProps {
  openDrawer: boolean;
  onClose: (bool: boolean) => void;
}

export const SmallScreenDrawer: React.FC<SmallScreenDrawerProps> = ({
  openDrawer,
  onClose,
}) => {
  const [openPhotoPlus, setOpenPhotoPlus] = useState<boolean>(false);
  return (
    <Drawer
      data-testid="small-screen-drawer-test"
      sx={{ display: { xs: 'flex', lg: 'none' } }}
      anchor="right"
      open={openDrawer}
      onClose={() => onClose(false)}
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
        <Box width={45} height="100%" onClick={() => onClose(false)}>
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
              onClose(false);
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
              router.push('/portfolio');
              onClose(false);
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
              router.push('/private');
              onClose(false);
            }}
          >
            PRIVATNO
          </Typography>
          <Box>
            <Typography
              mt={2}
              fontSize={24}
              fontWeight="bold"
              sx={{
                color: 'secondary.main',
                cursor: 'pointer',
                transition: 'color 0.3s ease-in-out',
                '&:hover': {
                  color: 'primary.light',
                },
              }}
              onClick={() => setOpenPhotoPlus(!openPhotoPlus)}
            >
              FOTO PLUS
            </Typography>
            <Box
              display="flex"
              overflow="hidden"
              sx={{
                transition: 'max-height 0.3s ease-in-out',
              }}
              maxHeight={openPhotoPlus ? 200 : 0}
            >
              {openPhotoPlus && (
                <>
                  <Box width={40} display="flex" justifyContent="center">
                    <Box borderRight={1} height="100%" sx={{ opacity: 0.3 }} />
                  </Box>
                  <Box mt={2}>
                    <Typography
                      fontWeight="bold"
                      color="secondary.main"
                      onClick={() => {
                        router.push('/wooden-boxes');
                        onClose(false);
                      }}
                      sx={{
                        cursor: 'pointer',
                        transition: 'color 0.3s ease-in-out',
                        '&:hover': {
                          color: 'primary.light',
                        },
                      }}
                    >
                      Drvene Kutije
                    </Typography>
                    <Typography
                      fontWeight="bold"
                      color="secondary.main"
                      onClick={() => {
                        router.push('/photo-card');
                        onClose(false);
                      }}
                      sx={{
                        cursor: 'pointer',
                        transition: 'color 0.3s ease-in-out',
                        '&:hover': {
                          color: 'primary.light',
                        },
                      }}
                      mt={2}
                    >
                      Foto Zahvalnice
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
          </Box>
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
              router.push('/services');
              onClose(false);
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
              router.push('/contact');
              onClose(false);
            }}
          >
            KONTAKT
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};
