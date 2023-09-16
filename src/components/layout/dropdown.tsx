import { Typography, Menu } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface DropDownProps {
  leaveMouse: () => void;
  display: any;
}

export const DropDown: React.FC<DropDownProps> = ({ leaveMouse, display }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseLeave = () => {
    handleClose();
    leaveMouse();
  };
  return (
    <>
      <Typography
        ml={7}
        color="secondary.main"
        fontWeight="bold"
        id="menu-dropdown"
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          display,
          transition: 'color 0.3s ease-in-out',
          '&:hover': {
            color: 'primary.light',
          },
          cursor: 'pointer',
        }}
      >
        FOTO PLUS
      </Typography>
      <Menu
        sx={{ background: 'transparent' }}
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleMouseLeave,
          'aria-labelledby': 'menu-dropdown',
        }}
      >
        <Typography
          mt={3}
          onClick={() => router.push('/wooden-boxes')}
          fontWeight="bold"
          color="secondary.main"
          sx={{
            transition: 'color 0.3s ease-in-out',
            '&:hover': {
              color: 'primary.light',
            },
            cursor: 'pointer',
          }}
        >
          DRVENE KUTIJE
        </Typography>
        <Typography
          mt={3}
          mb={1}
          onClick={() => router.push('/photo-card')}
          fontWeight="bold"
          color="secondary.main"
          sx={{
            transition: 'color 0.3s ease-in-out',
            '&:hover': {
              color: 'primary.light',
            },
            cursor: 'pointer',
          }}
        >
          FOTO ZAHVALNICE
        </Typography>
      </Menu>
    </>
  );
};
