import { Grid, Box, Typography } from '@mui/material';

interface SideNavProps {
  detailText: string;
  pageText: string;
}

export const SideNav: React.FC<SideNavProps> = ({ detailText, pageText }) => {
  return (
    <Grid
      data-testid="side-nav-test"
      item
      lg={2}
      sx={{ display: { lg: 'flex', xs: 'none' } }}
      display="flex"
      justifyContent="center"
    >
      <Box display="flex" alignItems="center">
        <Typography
          sx={{
            transform: 'rotate(-90deg)',
            maxWidth: 50,
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
          borderRight: 1,
          borderColor: 'primary.main',
          opacity: 0.3,
        }}
      />
      <Box display="flex" alignItems="center">
        <Typography
          sx={{
            transform: 'rotate(-90deg)',
            mt: 10,
            maxWidth: 50,
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
