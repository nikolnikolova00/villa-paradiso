import { Box, Container } from '@mui/material';
import { Section } from 'components';
import { Hero } from 'features';
import { BookingWidget } from 'features';
import { IntroSection } from 'features';
import { AmenitiesSection } from 'features';
import { GalleryPreview } from 'features';
import { ReviewsSection } from 'features';
import { LocationSection } from 'features';
import { CtaSection } from 'features';

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
