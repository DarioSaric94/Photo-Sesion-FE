import { Button, Typography } from '@mui/material';
import { ElementType } from 'react';

interface CustomButtonProps {
  text: string;
  width?: string;
  variant?: 'text' | 'outlined' | 'contained';
  icon?: ElementType;
  borderRadius?: number;
  onClick: () => void;
  bgcolor?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  width,
  variant,
  icon: Icon,
  borderRadius,
  onClick,
  bgcolor,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      startIcon={Icon && <Icon className="w-25 h-25 mb-2" />}
      sx={{
        bgcolor,
        borderRadius,
        width: width,

        '&:hover': {
          backgroundColor: 'secondary.light',
        },
        p: 1,
        pl: 2.5,
        pr: 2.5,
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
