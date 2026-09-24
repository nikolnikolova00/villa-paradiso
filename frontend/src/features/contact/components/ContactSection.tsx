import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Section } from 'components';
import { colors } from 'theme';

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <Section sx={{ pb: { xs: 10, md: 10 } }}>
      <Stack spacing={2} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: colors.terracotta }}>
          {t('contact.overline')}
        </Typography>
        <Typography variant="h1">{t('contact.title')}</Typography>
        <Typography variant="body1" sx={{ color: colors.muted, maxWidth: 620 }}>
          {t('contact.subtitle')}
        </Typography>
      </Stack>
    </Section>
  );
};
