import { Box, Typography } from '@mui/material';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';

interface HoverAnimatedTextProps {
  text: string;
  onClick: () => void;
}

export const HoverAnimatedText: React.FC<HoverAnimatedTextProps> = ({
  text,
  onClick,
}) => {
  return (
    <Box display="flex" justifyContent="end" alignItems="center">
      <Typography
        onClick={onClick}
        textAlign="end"
        fontSize={14}
        fontWeight="bold"
        color="primary.light"
        sx={{
          cursor: 'pointer',
          transition: ' padding-right 0.3s ease-in-out',
          '&:hover': {
            pr: 4,
          },
          '&:not(:hover)': {
            pr: 2,
          },
        }}
      >
        {text}
      </Typography>
      <ArrowForwardIosTwoToneIcon
        onClick={onClick}
        sx={{
          fontSize: 16,
          fontWeight: 'bold',
          mb: 0.1,
          color: 'primary.light',
          cursor: 'pointer',
        }}
      />
    </Box>
  );
};
