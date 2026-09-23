import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button, Container, Typography } from '@mui/material';
import { colors } from '../../theme';

export const ComingSoonPage = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const title = pathname.replace('/', '');

  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        minHeight: '60vh',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="overline" sx={{ color: colors.terracotta }}>
          {title}
        </Typography>
        <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
          {t('common.comingSoonTitle')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: colors.muted, maxWidth: 520, mx: 'auto', mb: 4 }}
        >
          {t('common.comingSoonBody')}
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary">
          {t('common.backHome')}
        </Button>
      </Container>
    </Box>
  );
};
