import { Box } from '@mui/material';
import {
  AccommodationHero,
  BookingSection,
  EnquirySection,
  RatesSection,
  StayOverviewSection,
} from 'features';

export const AccommodationPage = () => (
  <Box>
    <AccommodationHero />
    <BookingSection />
    <RatesSection />
    <StayOverviewSection />
    <EnquirySection />
  </Box>
);
