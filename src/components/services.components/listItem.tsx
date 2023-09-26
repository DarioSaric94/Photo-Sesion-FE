import { Box, Grid, Typography } from '@mui/material';

interface ListItemProps {
  item: string;
  title: string;
  description: string;
  image: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  item,
  title,
  description,
  image,
}) => {
  return (
    <Grid item xs={12} md={6}>
      <Box position="relative">
        <Box
          pt={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography
            textAlign="end"
            fontSize={14}
            fontWeight="bold"
            color="primary.main"
          >
            {item}
          </Typography>
          <Typography
            textAlign="end"
            sx={{ fontSize: { xs: 22, lg: 28 } }}
            fontWeight="bold"
            color="primary.light"
            lineHeight={1.2}
            minHeight={70}
            pl={18}
          >
            {title}
          </Typography>
        </Box>
        <Box
          pt={5}
          pl={3}
          pr={3}
          pb={4}
          sx={{ ml: { xs: 0, md: 4 } }}
          bgcolor="primary.contrastText"
        >
          <Typography color="primary.main">{description}</Typography>
        </Box>
        <Box
          position="absolute"
          sx={{ ml: { xs: -2 } }}
          height={130}
          width={130}
          borderRadius="50%"
          overflow="hidden"
          top={0}
          left={0}
          bgcolor="primary.light"
        >
          <img src={image} height="100%" width="100%" alt={image} />
        </Box>
      </Box>
    </Grid>
  );
};
