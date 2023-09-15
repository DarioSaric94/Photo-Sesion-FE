import { Button, Typography } from '@mui/material';
import { ElementType } from 'react';

interface CustomButtonProps {
  text: string;
  variant?: 'text' | 'outlined' | 'contained';
  onClick: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  variant,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      sx={{
        '&:hover': {
          borderColor: 'primary.light',
          borderWidth: 2,
          color: 'primary.light',
        },
        borderWidth: 2,
        p: 1,
        pl: 3,
        pr: 3,
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
