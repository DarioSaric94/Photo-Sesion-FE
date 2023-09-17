import { Container } from '@/components/layout/container';
import { ITEMS } from '@/components/services.components/items';
import { ListItem } from '@/components/services.components/listItem';
import { Grid } from '@mui/material';

export default function Services() {
  return (
    <Container>
      <Grid container spacing={4} mb={20}>
        {ITEMS.map((item, index) => {
          return (
            <ListItem
              key={index}
              item={item.item}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
