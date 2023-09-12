import { Box } from '@mui/material';

interface ContainerProps {
  children: any;
  height?: string | number;
}

export const Container: React.FC<ContainerProps> = ({ children, height }) => {
  return (
    <Box
      minHeight={height}
      sx={{
        paddingLeft: '24px',
        paddingRight: '24px',
        maxWidth: 1536,
        ml: 'auto',
        mr: 'auto',
      }}
    >
      {children}
    </Box>
  );
};
