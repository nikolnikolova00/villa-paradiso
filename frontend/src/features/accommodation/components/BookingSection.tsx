import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@mui/material';
import { colors } from 'theme';
import { Section, SectionHeading } from 'components';
import { BookingWidget } from '../../home/components/BookingWidget';

export const BookingSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="booking" background={colors.sand}>
      <SectionHeading
        overline={t('accommodation.booking.overline')}
        title={t('accommodation.booking.title')}
        subtitle={t('accommodation.booking.subtitle')}
      />
      <Box sx={{ maxWidth: 980, mx: 'auto' }}>
        <BookingWidget searchHref="/contact" />
        <Typography
          variant="body2"
          sx={{ mt: 2, color: colors.muted, textAlign: 'center' }}
        >
          {t('accommodation.booking.note')}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button component={Link} to="/contact" variant="outlined" color="primary">
          {t('accommodation.booking.enquiry')}
        </Button>
      </Box>
    </Section>
  );
};
