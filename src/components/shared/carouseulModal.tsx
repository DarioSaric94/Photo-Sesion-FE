import { Box, Modal } from '@mui/material';

interface CaroseulModalProps {
  open: boolean;
  onClose: () => void;
  images?: any;
  selectedIndex: number;
}

export const CaroseulModal: React.FC<CaroseulModalProps> = ({
  open,
  onClose,
  images,
  selectedIndex,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{ m: 2 }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxHeight: '90vh',
          height: '100%',
          maxWidth: 900,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: 0,
        }}
        border={2}
      >
        <img
          src={images[selectedIndex]}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
    </Modal>
  );
};
