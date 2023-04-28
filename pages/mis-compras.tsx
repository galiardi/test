import { NextPage } from 'next';
import { Box, Typography } from '@mui/material';
import { Layout } from '../components/layouts';

export const MisCompras: NextPage = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6">Mis Compras</Typography>
      </Box>
    </Layout>
  );
};

export default MisCompras;