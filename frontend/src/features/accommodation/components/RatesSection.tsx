import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { colors } from 'theme';
import { accDetailKeys, accIncludedKeys, ratePlans } from 'data';
import { ScrollReveal, Section, SectionHeading } from 'components';

export const RatesSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="rates">
      <SectionHeading
        overline={t('accommodation.rates.overline')}
        title={t('accommodation.rates.title')}
        subtitle={t('accommodation.rates.subtitle')}
      />
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        }}
      >
        {ratePlans.map((plan, index) => (
          <ScrollReveal key={plan.key} delay={index * 80}>
            <Box
              sx={{
                height: '100%',
                p: 3,
                borderRadius: 3,
                backgroundColor: colors.white,
                border: `1px solid ${colors.sandDark}`,
              }}
            >
              <Typography
                variant="overline"
                sx={{ color: colors.terracotta, display: 'block', mb: 1 }}
              >
                {t(`accommodation.rates.plans.${plan.key}.name`)}
              </Typography>
              <Typography variant="body2" sx={{ color: colors.muted, mb: 2.5 }}>
                {t(`accommodation.rates.plans.${plan.key}.description`)}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                <Typography variant="h3" sx={{ color: colors.sea }}>
                  €{plan.price}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.muted }}>
                  {t('accommodation.rates.perNight')}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: colors.muted, mt: 1 }}>
                {t('accommodation.rates.minStay', { count: plan.minNights })}
              </Typography>
            </Box>
          </ScrollReveal>
        ))}
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {t('accommodation.rates.includedTitle')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          }}
        >
          {accIncludedKeys.map((key) => (
            <Box key={key} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: colors.terracotta,
                }}
              />
              <Typography variant="body2" sx={{ color: colors.muted }}>
                {t(`accommodation.rates.included.${key}`)}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          mt: 4,
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        }}
      >
        {accDetailKeys.map((key) => (
          <Box
            key={key}
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: 'rgba(14, 77, 100, 0.06)',
            }}
          >
            <Typography variant="body2" sx={{ color: colors.sea }}>
              {t(`accommodation.rates.details.${key}`)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
};
