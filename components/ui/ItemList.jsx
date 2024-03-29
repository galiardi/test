import Link from 'next/link';
import { Grid } from '@mui/material';
import { Item } from './Item';

export const ItemList = ({ productos = [] }) => {
  return (
    <Grid container spacing={1.3}>
      {productos.map((producto, i) => {
        const { id } = producto;
        return (
          <Grid item xs={6} md={4} key={id}>
            <Link href={`/productos/${producto.id}`}>
              <Item itemData={producto} index={i} />
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};
