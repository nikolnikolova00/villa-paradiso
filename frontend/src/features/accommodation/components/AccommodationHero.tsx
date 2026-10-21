import { useTranslation } from 'react-i18next';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { colors } from 'theme';
import { accImages } from 'data';

export const AccommodationHero = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '64vh', md: '72vh' },
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `linear-gradient(rgba(10, 58, 74, 0.58), rgba(10, 58, 74, 0.8)), url(${accImages.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: colors.white,
      }}
    >
      <Container sx={{ py: { xs: 12, md: 16 } }}>
        <Stack spacing={3} sx={{ maxWidth: 760, alignItems: 'flex-start' }}>
          <Typography variant="overline" sx={{ color: colors.terracotta }}>
            {t('accommodation.hero.overline')}
          </Typography>
          <Typography
            variant="h1"
            sx={{ color: colors.white, textShadow: '0 2px 24px rgba(0, 0, 0, 0.25)' }}
          >
            {t('accommodation.hero.title')}
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 560, color: 'rgba(255, 255, 255, 0.9)' }}
          >
            {t('accommodation.hero.subtitle')}
          </Typography>
          <Button href="#booking" variant="contained" color="secondary" size="large">
            {t('accommodation.hero.cta')}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
