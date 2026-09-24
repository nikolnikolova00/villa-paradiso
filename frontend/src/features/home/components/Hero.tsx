import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { colors } from 'theme';
import { heroImage } from 'data';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '88vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `linear-gradient(rgba(10, 58, 74, 0.55), rgba(10, 58, 74, 0.2) 45%, rgba(10, 58, 74, 0.78)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: colors.white,
      }}
    >
      <Container sx={{ py: { xs: 14, md: 18 } }}>
        <Stack spacing={3} sx={{ maxWidth: 760, alignItems: 'flex-start' }}>
          <Typography variant="overline" sx={{ color: colors.terracotta }}>
            {t('hero.overline')}
          </Typography>
          <Typography
            variant="h1"
            sx={{ color: colors.white, textShadow: '0 2px 24px rgba(0, 0, 0, 0.25)' }}
          >
            {t('hero.title')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 560,
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            {t('hero.subtitle')}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ pt: 1, width: { xs: '100%', sm: 'auto' } }}
          >
            <Button
              component={Link}
              to="/accommodation"
              variant="contained"
              color="secondary"
              size="large"
            >
              {t('hero.ctaPrimary')}
            </Button>
            <Button
              component={Link}
              to="/accommodation"
              variant="outlined"
              size="large"
              sx={{
                color: colors.white,
                borderColor: 'rgba(255, 255, 255, 0.6)',
                '&:hover': {
                  borderColor: colors.white,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              {t('hero.ctaSecondary')}
            </Button>
          </Stack>
        </Stack>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          color: 'rgba(255, 255, 255, 0.8)',
          animation: 'hero-bounce 2s infinite',
        }}
      >
        <Typography
          variant="caption"
          sx={{ letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.65rem' }}
        >
          {t('hero.scroll')}
        </Typography>
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
};
