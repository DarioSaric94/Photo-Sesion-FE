import { Box } from '@mui/material';
import { NavbarLink } from './navbarLink';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { DropDown } from '../shared/dropdown';
import { CustomDrawer } from './customDrawer';

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const toggleDrawer = (isOpen: boolean) => {
    setOpenDrawer(isOpen);
  };

  return (
    <>
      <Box
        position="fixed"
        zIndex={5}
        width="100%"
        height={150}
        color="white"
        display="flex"
        alignItems="center"
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={5}
        >
          <Box>Foto Miskic</Box>
          <Box
            height={50}
            display="flex"
            alignItems="center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <NavbarLink link="POČETNA" onClick={() => router.push('/')} />
            <NavbarLink
              link="PORTFOLIO"
              onClick={() => router.push('/portfolio')}
            />
            <NavbarLink
              link="PRIVATNO"
              onClick={() => router.push('/private')}
            />
            <DropDown leaveMouse={() => setIsHovered(false)} />
            <NavbarLink
              link="USLUGE"
              onClick={() => router.push('/services')}
            />
            <NavbarLink
              link="KONTAKT"
              onClick={() => router.push('/contact')}
            />
            <NavbarLink link=". . ." onClick={() => setOpenDrawer(true)} />
          </Box>
        </Box>
        <CustomDrawer
          openDrawer={openDrawer}
          onClose={() => toggleDrawer(false)}
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
