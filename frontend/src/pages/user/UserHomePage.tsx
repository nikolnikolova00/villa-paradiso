import { Box, Container } from '@mui/material';
import { Section } from '../../components';
import { Hero } from '../../features/home/components/Hero';
import { BookingWidget } from '../../features/home/components/BookingWidget';
import { IntroSection } from '../../features/home/components/IntroSection';
import { AmenitiesSection } from '../../features/home/components/AmenitiesSection';
import { GalleryPreview } from '../../features/home/components/GalleryPreview';
import { ReviewsSection } from '../../features/home/components/ReviewsSection';
import { LocationSection } from '../../features/home/components/LocationSection';
import { CtaSection } from '../../features/home/components/CtaSection';

export const UserHomePage = () => {
  return (
    <Box>
      <Hero />
      <Box sx={{ position: 'relative', zIndex: 2, mt: { xs: -6, md: -8 } }}>
        <Container>
          <BookingWidget />
        </Container>
      </Box>
      <Section>
        <IntroSection />
      </Section>
      <AmenitiesSection />
      <GalleryPreview />
      <ReviewsSection />
      <Section>
        <LocationSection />
      </Section>
      <CtaSection />
    </Box>
  );
};
