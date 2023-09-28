import { AlbumData } from '@/utils/types';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface AlbumSelectProps {
  value?: string | number | null;
  onChange: (value: string | number) => void;
  albumData?: AlbumData[];
  label: string;
}

export const AlbumSelect: React.FC<AlbumSelectProps> = ({
  value,
  onChange,
  albumData,
  label,
}) => {
  return (
    <FormControl fullWidth data-testid="album-select-test">
      <InputLabel
        id="demo-simple-select-label"
        sx={{
          color: 'primary.main',
          '&.Mui-focused': {
            color: 'primary.light',
          },
          fontSize: 14,
          fontWeight: 'bold',
        }}
      >
        {label}
      </InputLabel>
      <Select
        data-testid="album-select-data-test"
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 300,
            },
          },
        }}
        sx={{
          color: 'primary.light',
          fontWeight: 'bold',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
            borderRadius: 0,
            borderWidth: 2,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'secondary.main',
            borderRadius: 0,
            borderWidth: 2,
          },
          '& .MuiSelect-select:focus': {
            borderColor: 'secondary.main',
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={value}
        className="custom-select-scrollbar"
        label={label}
        onChange={(e) => onChange(e.target.value as string | number)}
      >
        {albumData?.map((item: any) => (
          <MenuItem
            key={item?.id}
            value={item?.id}
            sx={{
              color: 'primary.light',
              bgcolor: 'primary.contrastText',
              fontWeight: 'bold',
              '&.Mui-selected': {
                backgroundColor: 'primary.contrastText',
                color: 'primary.light',
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              },
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
              },
            }}
          >
            {item?.participants}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
