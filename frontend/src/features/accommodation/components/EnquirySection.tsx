import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';
import { colors } from 'theme';
import { site } from 'data';
import { Section, SectionHeading } from 'components';

export const EnquirySection = () => {
  const { t } = useTranslation();

  return (
    <Section id="enquiry" background={colors.seaDark}>
      <SectionHeading
        overline={t('accommodation.enquiry.overline')}
        title={t('accommodation.enquiry.title')}
        subtitle={t('accommodation.enquiry.subtitle')}
        light
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          color="secondary"
          size="large"
        >
          {t('accommodation.enquiry.contact')}
        </Button>
        <Button
          href={`mailto:${site.email}`}
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
          {t('accommodation.enquiry.email')}
        </Button>
      </Box>
    </Section>
  );
};
