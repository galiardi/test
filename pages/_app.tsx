import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes';
import { AuthProvider } from '../context/auth';
import { UIProvider } from '../context/ui';
import { ReservasProvider } from '../context/reservas';
import { ProductosProvider } from '../context/productos';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProductosProvider>
        <ReservasProvider>
          <UIProvider>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </UIProvider>
        </ReservasProvider>
      </ProductosProvider>
    </AuthProvider>
  );
}

export default MyApp;
