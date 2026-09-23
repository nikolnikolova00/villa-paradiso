import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { colors } from '../theme';
import { navItems } from '../router/navItems';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;
  const textColor = transparent ? colors.white : colors.ink;

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="h5"
        sx={{ my: 2.5, fontFamily: '"Cormorant Garamond", serif', color: colors.sea }}
      >
        Villa Paradiso
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton
              component={Link}
              to={item.to}
              onClick={handleDrawerToggle}
              selected={isActive(item.to)}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={t(`nav.${item.key}`)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Button
          component={Link}
          to="/accommodation"
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleDrawerToggle}
        >
          {t('nav.bookNow')}
        </Button>
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          p: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: colors.muted }}>
          {t('common.language')}
        </Typography>
        <LanguageSwitcher />
      </Box>
    </Box>
  );

  return (
    <Box component="header">
      <AppBar
        position="fixed"
        sx={{
          color: textColor,
          backgroundColor: transparent ? 'transparent' : 'rgba(253, 251, 247, 0.9)',
          backdropFilter: transparent ? 'none' : 'blur(12px)',
          borderBottom: transparent
            ? '1px solid transparent'
            : `1px solid ${colors.sandDark}`,
          transition:
            'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 76 } }}>
          <IconButton
            color="inherit"
            aria-label="Open navigation"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.25,
              textDecoration: 'none',
              color: 'inherit',
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            <Box
              component="img"
              src="/palmIcon.png"
              alt=""
              sx={{ height: 34, width: 'auto' }}
            />
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
                fontSize: '1.5rem',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              Villa Paradiso
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 0.5,
              mx: 'auto',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={Link}
                to={item.to}
                sx={{
                  color: 'inherit',
                  fontWeight: isActive(item.to) ? 700 : 500,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 6,
                    left: 26,
                    right: 26,
                    height: 2,
                    backgroundColor: colors.terracotta,
                    transform: isActive(item.to) ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.25s ease',
                  },
                }}
              >
                {t(`nav.${item.key}`)}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <LanguageSwitcher color={textColor} />
            <Button
              component={Link}
              to="/accommodation"
              variant="contained"
              color="secondary"
            >
              {t('nav.bookNow')}
            </Button>
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
            }}
          >
            <LanguageSwitcher color={textColor} />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
