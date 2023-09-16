import { Grid, Box, Typography } from '@mui/material';

export const ListItem = () => {
  return (
    <Grid item xs={12} md={6} lg={4} mb={2}>
      <Box sx={{ aspectRatio: 1 / 1 }}>
        <Box overflow="hidden">
          <img src="/images/djedmraz.jpg" className="image-portfolio" />
        </Box>
        <Box mt={2}>
          <Typography
            fontWeight="bold"
            fontSize={12}
            color="primary.main"
            textTransform="uppercase"
          >
            Vjencanje
          </Typography>
          <Typography
            fontWeight="bolder"
            color="primary.light"
            lineHeight={1.4}
            textTransform="uppercase"
            fontSize={22}
          >
            Ljubica i Slobodan
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
