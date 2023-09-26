import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/material';

interface DeleteIconProps {
  onClick: () => void;
}

export const DeleteIcon: React.FC<DeleteIconProps> = ({ onClick }) => {
  return (
    <Box position="absolute" zIndex={2} top={20} left={20}>
      <ClearIcon
        data-testid="delete-icon-test"
        color="secondary"
        sx={{
          bgcolor: 'secondary.light',
          borderRadius: '50%',
          p: 0.3,
        }}
        onClick={onClick}
      />
    </Box>
  );
};
