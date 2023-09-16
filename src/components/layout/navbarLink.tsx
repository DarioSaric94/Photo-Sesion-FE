import { Typography } from '@mui/material';

interface NavbarLinkProps {
  link: string;
  onClick: () => void;
  display?: any;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  link,
  onClick,
  display,
}) => {
  const hoverStyles = {
    color: 'primary.main',
    cursor: 'pointer',
    ml: { xs: 2, lg: 7 },
    display,
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      color: 'primary.light',
    },
  };
  return (
    <Typography
      color="primary.main"
      fontWeight="bold"
      sx={hoverStyles}
      onClick={onClick}
    >
      {link}
    </Typography>
  );
};
