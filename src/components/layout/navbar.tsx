import { Box } from '@mui/material';
import { NavbarLink } from './navbarLink';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { DropDown } from './dropdown';
import { CustomDrawer } from './customDrawer';
import { Logo } from './logo';
import { SmallScreenNavbar } from './smallScreenNavbar';
import { SmallScreenDrawer } from './smallScreenDrawer';
import { useEffect } from 'react';
import { getUserData } from '@/utils/userData.api';
import { setUserData } from '@/store/userData.slice';
import { useDispatch } from 'react-redux';

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openSmallScreenDrawer, setOpenSmallScreenDrawer] =
    useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    const userData = async () => {
      try {
        const response: any = await getUserData();
        dispatch(setUserData(response));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    userData();
    console.log('radi');
  }, [dispatch]);
  return (
    <>
      <Box
        position="fixed"
        zIndex={5}
        width="100%"
        color="white"
        display="flex"
        alignItems="center"
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: { xs: 2, lg: 5 } }}
        >
          <Logo />
          <Box
            height={50}
            display="flex"
            alignItems="center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <NavbarLink
              link="POČETNA"
              onClick={() => router.push('/')}
              display={{ xs: 'none', lg: 'flex' }}
            />
            <NavbarLink
              link="PORTFOLIO"
              onClick={() => router.push('/portfolio')}
              display={{ xs: 'none', lg: 'flex' }}
            />
            <NavbarLink
              link="PRIVATNO"
              onClick={() => router.push('/private')}
              display={{ xs: 'none', lg: 'flex' }}
            />
            <DropDown
              leaveMouse={() => setIsHovered(false)}
              display={{ xs: 'none', lg: 'flex' }}
            />
            <NavbarLink
              link="USLUGE"
              onClick={() => router.push('/services')}
              display={{ xs: 'none', lg: 'flex' }}
            />
            <NavbarLink
              link="KONTAKT"
              onClick={() => router.push('/contact')}
              display={{ xs: 'none', lg: 'flex' }}
            />
            <SmallScreenNavbar onClick={() => setOpenSmallScreenDrawer(true)} />
            <NavbarLink link=". . ." onClick={() => setOpenDrawer(true)} />
          </Box>
        </Box>
        <CustomDrawer
          openDrawer={openDrawer}
          onClose={() => setOpenDrawer(false)}
        />
        <SmallScreenDrawer
          openDrawer={openSmallScreenDrawer}
          onClose={() => setOpenSmallScreenDrawer(false)}
        />
      </Box>
      <Box
        bgcolor="black"
        position="fixed"
        width="100%"
        height="100vh"
        zIndex={isHovered ? 4 : -1}
        sx={{
          opacity: isHovered ? 0.7 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  );
};
