import { Box } from '@mui/material';

interface CardProps {
  children: any;
  width?: number | string;
  hover?: boolean;
  maxWidth?: number;
  bgColor?: string;
  p?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  width,
  hover,
  maxWidth,
  bgColor,
  p,
}) => {
  const classNames = `shadow ${hover ? 'scale' : ''}`;

  return (
    <Box
      className={classNames}
      bgcolor={bgColor ? bgColor : 'primary.contrastText'}
      border={2}
      width={width}
      maxWidth={maxWidth}
      p={p ? p : 3}
      borderRadius={1}
    >
      {children}
    </Box>
  );
};
