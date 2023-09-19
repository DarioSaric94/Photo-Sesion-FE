import { Box, Typography, Modal } from '@mui/material';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: any;
  label: string | undefined;
  maxWidth?: number | string;
  description?: string;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  children,
  label,
  maxWidth,
  description,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'primary.contrastText',
          boxShadow: 24,
          maxWidth: maxWidth ? maxWidth : 400,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography
            id="modal-title"
            textAlign="center"
            fontSize={28}
            textTransform="uppercase"
            color="primary.light"
            p={1}
            mt={2}
          >
            {label}
          </Typography>
          <Typography>{description}</Typography>
          <Box p={4} textAlign="center">
            {children}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
