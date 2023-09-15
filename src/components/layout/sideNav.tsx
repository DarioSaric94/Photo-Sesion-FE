import { Grid, Box, Typography } from '@mui/material';

interface SideNavProps {
  detailText: string;
  pageText: string;
}

export const SideNav: React.FC<SideNavProps> = ({ detailText, pageText }) => {
  return (
    <Grid
      item
      xs={12}
      lg={2}
      display="flex"
      sx={{ flexDirection: { xs: 'column', lg: 'row' } }}
      justifyContent="center"
    >
      <Box display="flex" alignItems="center">
        <Typography
          sx={{
            transform: { lg: 'rotate(-90deg)', xs: '' },
            maxWidth: { xs: '100%', lg: 50 },
            textAlign: { xs: 'center', lg: '' },
            width: { xs: '100%' },
          }}
          fontWeight="bold"
          fontSize={16}
          mt={20}
          pt={3}
          color="primary.main"
          whiteSpace="nowrap"
        >
          {detailText}
        </Typography>
      </Box>
      <Box
        sx={{
          borderBottom: { xs: 1 },
          borderRight: { lg: 1 },
          borderColor: {
            xs: 'rgba(255, 255, 255, 0.1)',
            lg: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      />
      <Box display="flex" alignItems="center">
        <Typography
          sx={{
            transform: { lg: 'rotate(-90deg)', xs: '' },
            mt: { xs: 0, lg: 10 },
            maxWidth: { xs: '100%', lg: 50 },
            textAlign: { xs: 'center', lg: '' },
            width: { xs: '100%' },
          }}
          fontWeight="bold"
          fontSize={50}
          mt={10}
          color="primary.main"
          whiteSpace="nowrap"
        >
          {pageText}
        </Typography>
      </Box>
    </Grid>
  );
};
