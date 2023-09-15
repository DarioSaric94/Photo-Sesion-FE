import { Typography, Menu } from '@mui/material';
import { useState } from 'react';

interface DropDownProps {
  leaveMouse: () => void;
}

export const DropDown: React.FC<DropDownProps> = ({ leaveMouse }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseLeave = () => {
    handleClose(); // Close the menu on mouse leave
    leaveMouse(); // Call the leaveMouse function passed as a prop
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
          onClick={handleClose}
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
          onClick={handleClose}
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
