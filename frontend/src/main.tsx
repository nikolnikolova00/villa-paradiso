import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Refine } from '@refinedev/core';
import routerProvider from '@refinedev/react-router';
import { DevtoolsProvider } from '@refinedev/devtools';
import { CssBaseline } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import {
  RefineSnackbarProvider,
  RefineThemes,
  useNotificationProvider,
} from '@refinedev/mui';
import './index.css';
import { QueryProvider } from './providers';
import { AppRoutes } from './router';
import { adminResources } from './admin/resources';
import { stubDataProvider } from './admin/stubDataProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DevtoolsProvider>
      <BrowserRouter>
        <QueryProvider>
          <ThemeProvider theme={RefineThemes.Blue}>
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' } }} />
            <RefineSnackbarProvider>
              <Refine
                routerProvider={routerProvider}
                dataProvider={stubDataProvider}
                notificationProvider={useNotificationProvider}
                resources={adminResources.map(({ name }) => ({
                  name,
                  list: `/admin/${name}`,
                }))}
                options={{ syncWithLocation: true }}
              >
                <AppRoutes />
              </Refine>
            </RefineSnackbarProvider>
          </ThemeProvider>
        </QueryProvider>
      </BrowserRouter>
    </DevtoolsProvider>
  </StrictMode>,
);
