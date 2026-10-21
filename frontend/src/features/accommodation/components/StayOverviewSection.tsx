import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { colors } from 'theme';
import { accFacts, accImages } from 'data';
import { ResponsiveImage, ScrollReveal, Section } from 'components';

export const StayOverviewSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="overview">
      <Box
        sx={{
          display: 'grid',
          gap: { xs: 6, md: 10 },
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          alignItems: 'center',
        }}
      >
        <ScrollReveal>
          <ResponsiveImage
            src={accImages.overview}
            alt="The villa and its pool by the sea"
            ratio="4 / 5"
            sx={{ borderRadius: 4 }}
          />
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
            <Typography variant="overline" sx={{ color: colors.terracotta }}>
              {t('accommodation.overview.overline')}
            </Typography>
            <Typography variant="h2">{t('accommodation.overview.title')}</Typography>
            <Typography variant="body1" sx={{ color: colors.muted }}>
              {t('accommodation.overview.body1')}
            </Typography>
            <Typography variant="body1" sx={{ color: colors.muted }}>
              {t('accommodation.overview.body2')}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 2.5,
                width: '100%',
              }}
            >
              {accFacts.map((fact) => (
                <Box key={fact.key}>
                  <Typography variant="h4" sx={{ color: colors.sea }}>
                    {fact.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.muted }}>
                    {t(`accommodation.overview.facts.${fact.key}`)}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Button
              component={Link}
              to="/gallery"
              variant="outlined"
              color="primary"
              endIcon={<ArrowForwardIcon />}
            >
              {t('accommodation.overview.cta')}
            </Button>
          </Stack>
        </ScrollReveal>
      </Box>
    </Section>
  );
};
