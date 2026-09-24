import { useTranslation } from 'react-i18next';
import { Box, Stack, Typography } from '@mui/material';
import { colors } from 'theme';
import { aboutImages, aboutValueKeys } from 'data';
import { ResponsiveImage, ScrollReveal, Section, SectionHeading } from 'components';

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '46vh', md: '56vh' },
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `linear-gradient(rgba(10, 58, 74, 0.62), rgba(10, 58, 74, 0.62)), url(${aboutImages.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: colors.white,
          textAlign: 'center',
        }}
      >
        <Box sx={{ width: '100%', px: 3 }}>
          <Typography variant="overline" sx={{ color: colors.sandDark }}>
            {t('about.overline')}
          </Typography>
          <Typography variant="h1" sx={{ color: colors.white, mt: 1.5, mx: 'auto', maxWidth: 900 }}>
            {t('about.title')}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255, 255, 255, 0.88)', mt: 2.5, mx: 'auto', maxWidth: 620 }}
          >
            {t('about.subtitle')}
          </Typography>
        </Box>
      </Box>

      <Section>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 6, md: 10 },
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            alignItems: 'center',
          }}
        >
          <ScrollReveal>
            <Box sx={{ position: 'relative' }}>
              <ResponsiveImage
                src={aboutImages.story}
                alt="The story of Villa Paradiso"
                ratio="4 / 5"
                sx={{ borderRadius: 4 }}
              />
              <ResponsiveImage
                src={aboutImages.detail}
                alt=""
                ratio="1 / 1"
                sx={{
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  right: -24,
                  bottom: -24,
                  width: '46%',
                  borderRadius: 4,
                  border: `6px solid ${colors.cream}`,
                }}
              />
            </Box>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <Stack spacing={3}>
              <Typography variant="overline" sx={{ color: colors.terracotta }}>
                {t('about.story.overline')}
              </Typography>
              <Typography variant="h2">{t('about.story.title')}</Typography>
              <Typography variant="body1" sx={{ color: colors.muted }}>
                {t('about.story.body1')}
              </Typography>
              <Typography variant="body1" sx={{ color: colors.muted }}>
                {t('about.story.body2')}
              </Typography>
              <Typography variant="body1" sx={{ color: colors.muted }}>
                {t('about.story.body3')}
              </Typography>
            </Stack>
          </ScrollReveal>
        </Box>
      </Section>

      <Section background={colors.sand}>
        <SectionHeading
          overline={t('about.values.overline')}
          title={t('about.values.title')}
          subtitle={t('about.values.subtitle')}
        />
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
          }}
        >
          {aboutValueKeys.map((key, index) => (
            <ScrollReveal key={key} delay={index * 80}>
              <Box
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: colors.white,
                  border: `1px solid ${colors.sandDark}`,
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {t(`about.values.items.${key}.title`)}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.muted }}>
                  {t(`about.values.items.${key}.description`)}
                </Typography>
              </Box>
            </ScrollReveal>
          ))}
        </Box>
      </Section>

    </Box>
  );
};
