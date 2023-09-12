import { createTheme } from '@mui/material';
import { darken, lighten, alpha } from '@mui/system';

const primaryColor = '#292524';
const secondaryColor = '#faebd7';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      light: alpha(primaryColor, 0.8),
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: secondaryColor,
      light: 'rgb(234 179 8)',
      dark: darken(secondaryColor, 0.2),
      contrastText: lighten(secondaryColor, 0.5),
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
