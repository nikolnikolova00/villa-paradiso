import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from '../../../theme';
import { introImages } from '../../../data/home';
import { ScrollReveal } from '../../../components';
import type { Stat } from '../../../types/villa';

export const IntroSection = () => {
  const { t } = useTranslation();
  const stats = t('intro.stats', { returnObjects: true }) as Stat[];

  return (
    <Box
      sx={{
        display: 'grid',
        gap: { xs: 6, md: 10 },
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        alignItems: 'center',
      }}
    >
      <ScrollReveal>
        <Box
          sx={{
            position: 'relative',
            pr: { xs: 0, md: 6 },
            pb: { xs: 0, md: 6 },
          }}
        >
          <Box
            component="img"
            src={introImages.main}
            alt="Villa Paradiso and its pool"
            loading="lazy"
            sx={{
              width: '100%',
              aspectRatio: '4 / 5',
              objectFit: 'cover',
              borderRadius: 4,
            }}
          />
          <Box
            component="img"
            src={introImages.secondary}
            alt=""
            loading="lazy"
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '48%',
              aspectRatio: '1 / 1',
              objectFit: 'cover',
              borderRadius: 4,
              border: `6px solid ${colors.cream}`,
            }}
          />
        </Box>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
          <Typography variant="overline" sx={{ color: colors.terracotta }}>
            {t('intro.overline')}
          </Typography>
          <Typography variant="h2">{t('intro.title')}</Typography>
          <Typography variant="body1" sx={{ color: colors.muted }}>
            {t('intro.body1')}
          </Typography>
          <Typography variant="body1" sx={{ color: colors.muted }}>
            {t('intro.body2')}
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, 1fr)' },
              gap: 3,
              width: '100%',
              pt: 1,
            }}
          >
            {stats.map((stat) => (
              <Box key={stat.label}>
                <Typography variant="h3" sx={{ color: colors.sea }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.muted }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Button
            component={Link}
            to="/about"
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            {t('intro.cta')}
          </Button>
        </Stack>
      </ScrollReveal>
    </Box>
  );
};
