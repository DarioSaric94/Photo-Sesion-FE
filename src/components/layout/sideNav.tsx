import { Grid, Box, Typography } from '@mui/material';

interface SideNavProps {
  detailText: string;
  pageText: string;
}

export const SideNav: React.FC<SideNavProps> = ({ detailText, pageText }) => {
  return (
    <Grid item xs={1} lg={2} display="flex" justifyContent="center">
      <Box display="flex" alignItems="center">
        <Typography
          sx={{ transform: 'rotate(-90deg)' }}
          fontWeight="bold"
          fontSize={16}
          mt={20}
          pt={3}
          maxWidth={50}
          color="primary.main"
          whiteSpace="nowrap"
        >
          {detailText}
        </Typography>
      </Box>
      <Box className="white-border" />
      <Box display="flex" alignItems="center">
        <Typography
          sx={{ transform: 'rotate(-90deg)' }}
          fontWeight="bold"
          fontSize={50}
          maxWidth={50}
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
