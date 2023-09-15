import { Typography } from '@mui/material';

interface NavbarLinkProps {
  link: string;
  onClick: () => void;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ link, onClick }) => {
  const hoverStyles = {
    color: 'primary.main',
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      color: 'primary.light',
    },
  };
  return (
    <Typography
      ml={7}
      color="primary.main"
      fontWeight="bold"
      sx={hoverStyles}
      onClick={onClick}
    >
      {link}
    </Typography>
  );
};
