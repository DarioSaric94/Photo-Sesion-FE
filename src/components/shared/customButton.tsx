import { Button } from '@mui/material';

interface CustomButtonProps {
  text: string;
  variant?: 'text' | 'outlined' | 'contained';
  onClick: () => void;
  fullWidth?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  variant,
  onClick,
  fullWidth,
}) => {
  return (
    <Button
      data-testid="custom-button"
      fullWidth={fullWidth}
      onClick={onClick}
      variant={variant}
      sx={{
        borderRadius: 0,
        '&:hover': {
          borderColor: 'primary.light',
          borderWidth: 2,
          color: 'primary.light',
        },
        borderWidth: 2,
        p: 1.5,
        pl: 5,
        pr: 5,
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </Button>
  );
};
