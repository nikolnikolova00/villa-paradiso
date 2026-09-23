import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollTop } from './ScrollTop';

export const SiteLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      {!isHome && <Toolbar sx={{ minHeight: { xs: 64, md: 76 } }} />}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
      <ScrollTop />
    </Box>
  );
};
