import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Dialog,
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ResponsiveImage, Section, SectionHeading } from 'components';
import { gallerySections } from 'data';
import { colors } from 'theme';

export const GalleryPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [activeId, setActiveId] = useState<string | null>(null);

  const active =
    activeId === null
      ? null
      : gallerySections.flatMap((section) => section.images).find((image) => image.id === activeId) ?? null;

  return (
    <Section sx={{ pt: { xs: 3, md: 4 } }}>
      <SectionHeading
        overline={t('gallery.overline')}
        title={t('gallery.title')}
        subtitle={t('gallery.subtitle')}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 5, md: 7 } }}>
        {gallerySections.map((section) => (
          <Box key={section.id}>
            <Typography
              variant="h4"
              sx={{ mb: { xs: 2.5, md: 3.5 }, color: colors.ink }}
            >
              {t(`gallery.sections.${section.labelKey}`)}
            </Typography>
            <ImageList
              variant="masonry"
              cols={isDesktop ? 3 : 2}
              gap={16}
              sx={{ m: 0 }}
            >
              {section.images.map((image) => (
                <ImageListItem
                  key={image.id}
                  onClick={() => setActiveId(image.id)}
                  sx={{
                    cursor: 'pointer',
                    overflow: 'hidden',
                    borderRadius: 3,
                    '&:hover img': { transform: 'scale(1.05)' },
                  }}
                >
                  <ResponsiveImage
                    src={image.src}
                    alt={image.alt}
                    ratio="auto"
                    sx={{ height: 'auto', transition: 'transform 0.6s ease' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        ))}
      </Box>

      <Dialog
        open={activeId !== null}
        onClose={() => setActiveId(null)}
        maxWidth="lg"
        slotProps={{ paper: { sx: { bgcolor: 'transparent', boxShadow: 'none' } } }}
      >
        <IconButton
          onClick={() => setActiveId(null)}
          aria-label="Close"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
            color: colors.white,
            bgcolor: 'rgba(0, 0, 0, 0.4)',
            '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.6)' },
          }}
        >
          <CloseIcon />
        </IconButton>
        {active && (
          <Box>
            <Box
              component="img"
              src={active.src}
              alt={active.alt}
              sx={{
                display: 'block',
                maxWidth: '90vw',
                maxHeight: '80vh',
                width: 'auto',
                borderRadius: 2,
              }}
            />
            <Typography
              variant="body2"
              sx={{ mt: 1.5, color: colors.white, textAlign: 'center' }}
            >
              {active.alt}
            </Typography>
          </Box>
        )}
      </Dialog>
    </Section>
  );
};
