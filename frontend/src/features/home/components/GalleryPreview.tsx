import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';
import { galleryImages } from 'data';
import { ResponsiveImage, Section, SectionHeading } from 'components';

export const GalleryPreview = () => {
  const { t } = useTranslation();

  return (
    <Section id="gallery">
      <SectionHeading
        overline={t('gallery.overline')}
        title={t('gallery.title')}
        subtitle={t('gallery.subtitle')}
      />
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gridAutoRows: { xs: 150, md: 230 },
        }}
      >
        {galleryImages.map((image, index) => (
          <Box
            key={image.id}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 3,
              gridColumn: index === 0 ? 'span 2' : 'auto',
              gridRow: index === 0 ? { xs: 'span 1', md: 'span 2' } : 'auto',
              '&:hover img': { transform: 'scale(1.06)' },
            }}
          >
            <ResponsiveImage
              src={image.src}
              alt={image.alt}
              ratio="auto"
              sx={{
                position: 'absolute',
                inset: 0,
                height: '100%',
                transition: 'transform 0.6s ease',
              }}
            />
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Button component={Link} to="/gallery" variant="outlined" color="primary">
          {t('gallery.cta')}
        </Button>
      </Box>
    </Section>
  );
};
