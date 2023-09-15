import { TextField } from '@mui/material';

interface InputProps {
  multiline?: boolean;
  rows?: number;
  label: string;
}

export const Input: React.FC<InputProps> = ({ multiline, rows, label }) => {
  return (
    <TextField
      label={label}
      multiline={multiline}
      rows={rows}
      fullWidth
      InputProps={{
        sx: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
            borderWidth: 2,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'secondary.main',
          },
          color: 'primary.light',
          borderRadius: 0,
        },
      }}
      InputLabelProps={{
        sx: {
          color: 'primary.main',
          '&.Mui-focused': {
            color: 'primary.light',
          },
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}
      autoComplete="off"
    />
  );
};
