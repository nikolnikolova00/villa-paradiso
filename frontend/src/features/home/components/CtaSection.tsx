import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button, Container, Typography } from '@mui/material';
import { colors } from 'theme';
import { ctaImage } from 'data';

export const CtaSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 14 },
        backgroundImage: `linear-gradient(rgba(10, 58, 74, 0.72), rgba(10, 58, 74, 0.72)), url(${ctaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: colors.white,
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ color: colors.white, mb: 2 }}>
          {t('cta.title')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: 560, mx: 'auto', mb: 4 }}
        >
          {t('cta.subtitle')}
        </Typography>
        <Button
          component={Link}
          to="/accommodation"
          variant="contained"
          color="secondary"
          size="large"
        >
          {t('cta.button')}
        </Button>
      </Container>
    </Box>
  );
};
