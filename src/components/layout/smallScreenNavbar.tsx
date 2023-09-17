import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

interface SmallScreenNavbarProps {
  onClick: () => void;
}

export const SmallScreenNavbar: React.FC<SmallScreenNavbarProps> = ({
  onClick,
}) => {
  return (
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
        onClick={onClick}
      />
    </Box>
  );
};
