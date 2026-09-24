import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ResponsiveImage, ScrollReveal, Section } from 'components';
import { contactFaqKeys, locationImage } from 'data';
import { colors } from 'theme';

export const FAQSection = () => {
  const { t } = useTranslation();

  return (
    <Section background={colors.sand} sx={{ pt: { xs: 0, md: 0 } }}>
      <Box
        sx={{
          display: 'grid',
          gap: { xs: 5, md: 8 },
          gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
          alignItems: 'center',
        }}
      >
        <ScrollReveal>
          <ResponsiveImage
            src={locationImage}
            alt="The bay near Villa Paradiso"
            ratio="4 / 3"
            sx={{ borderRadius: 4, border: `1px solid ${colors.sandDark}` }}
          />
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <Stack spacing={2.5}>
            <Typography variant="overline" sx={{ color: colors.terracotta }}>
              {t('contact.faq.overline')}
            </Typography>
            <Typography variant="h2">{t('contact.faq.title')}</Typography>
            <Typography variant="body1" sx={{ color: colors.muted }}>
              {t('contact.faq.subtitle')}
            </Typography>

            <Box sx={{ mt: 1 }}>
              {contactFaqKeys.map((key, index) => (
                <Accordion
                  key={key}
                  defaultExpanded={index === 0}
                  disableGutters
                  elevation={0}
                  sx={{
                    backgroundColor: 'transparent',
                    borderBottom: `1px solid ${colors.sandDark}`,
                    '&:before': { display: 'none' },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: colors.sea }} />}>
                    <Typography variant="h5">
                      {t(`contact.faq.items.${key}.question`)}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ color: colors.muted }}>
                      {t(`contact.faq.items.${key}.answer`)}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Stack>
        </ScrollReveal>
      </Box>
    </Section>
  );
};
