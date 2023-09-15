import { Box, Typography } from '@mui/material';
import React from 'react';

interface InfoIconProps {
  text: string;
  icon: React.ReactElement;
}

export const InfoIcon: React.FC<InfoIconProps> = ({ text, icon }) => {
  return (
    <Box display="flex" alignItems="center" mt={1.5}>
      <Box mr={1.5}>
        {React.cloneElement(icon, {
          sx: {
            borderRadius: '50%',
            border: 2,
            p: 0.6,
            fontSize: 20,
          },
        })}
      </Box>
      <Typography
        mb={0.4}
        fontSize={14}
        sx={{
          '&:hover': {
            color: 'primary.light',
          },
          cursor: 'pointer',
          transition: 'ease-in-out 200ms',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
