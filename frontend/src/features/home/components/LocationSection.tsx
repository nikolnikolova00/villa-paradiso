import { useTranslation } from 'react-i18next';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { colors } from '../../../theme';
import { distances, locationImage } from '../../../data/home';
import { site } from '../../../data/site';
import { ScrollReveal } from '../../../components';

export const LocationSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'grid',
        gap: { xs: 5, md: 8 },
        gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' },
        alignItems: 'center',
      }}
    >
      <ScrollReveal>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 4,
            overflow: 'hidden',
            aspectRatio: '4 / 3',
            backgroundColor: colors.sand,
          }}
        >
          <Box
            component="img"
            src={locationImage}
            alt="The bay near Villa Paradiso"
            loading="lazy"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Chip
            icon={<PlaceOutlinedIcon />}
            label={t('location.mapNote')}
            sx={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              backgroundColor: 'rgba(253, 251, 247, 0.92)',
              color: colors.sea,
              px: 1,
            }}
          />
        </Box>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
          <Typography variant="overline" sx={{ color: colors.terracotta }}>
            {t('location.overline')}
          </Typography>
          <Typography variant="h2">{t('location.title')}</Typography>
          <Typography variant="body1" sx={{ color: colors.muted }}>
            {t('location.body')}
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 2.5,
              width: '100%',
            }}
          >
            {distances.map((distance) => (
              <Box key={distance.key}>
                <Typography variant="h5" sx={{ color: colors.sea }}>
                  {distance.value}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.muted }}>
                  {t(`location.distances.${distance.key}`)}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="body2" sx={{ color: colors.muted }}>
            {site.address}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`}
            target="_blank"
            rel="noreferrer"
          >
            {t('location.cta')}
          </Button>
        </Stack>
      </ScrollReveal>
    </Box>
  );
};
