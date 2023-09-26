import { TextField, TextFieldVariants } from '@mui/material';

interface InputProps {
  multiline?: boolean;
  rows?: number;
  label: string;
  name: string;
  register: any;
  defaultValue?: string | number;
  variant?: TextFieldVariants;
  type?: string;
  errors?: Record<string, any>;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  multiline,
  rows,
  label,
  variant,
  type,
  defaultValue,
  register,
  errors,
  name,
  required,
}) => {
  return (
    <TextField
      data-testid="input-test"
      {...register(name, { required: required })}
      error={errors && errors[name] && true}
      defaultValue={defaultValue}
      label={label}
      multiline={multiline}
      rows={rows}
      fullWidth
      variant={variant}
      type={type}
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
