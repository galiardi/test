import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar, Sidebar, Footer } from '../ui';

interface Props {
  title?: string;
  children: any;
}

export const Layout: FC<Props> = ({ title = 'tiendita nomada', children }) => {
  return (
    <div className="main-div">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box
        sx={{
          padding: '0.6rem',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {children}
      </Box>
      <Footer />
    </div>
  );
};
