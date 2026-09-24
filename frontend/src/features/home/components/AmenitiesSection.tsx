import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import type { SvgIconComponent } from '@mui/icons-material';
import PoolIcon from '@mui/icons-material/Pool';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DeskIcon from '@mui/icons-material/Desk';
import { colors } from 'theme';
import { amenityIds } from 'data';
import { ScrollReveal, Section, SectionHeading } from 'components';
import type { AmenityId } from 'types';

const amenityIcons: Record<AmenityId, SvgIconComponent> = {
  pool: PoolIcon,
  seaView: BeachAccessIcon,
  wifi: WifiIcon,
  kitchen: KitchenIcon,
  ac: AcUnitIcon,
  parking: LocalParkingIcon,
  bbq: OutdoorGrillIcon,
  workspace: DeskIcon,
};

export const AmenitiesSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="amenities" background={colors.sand}>
      <SectionHeading
        overline={t('amenities.overline')}
        title={t('amenities.title')}
        subtitle={t('amenities.subtitle')}
      />
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {amenityIds.map((id, index) => {
          const Icon = amenityIcons[id];
          return (
            <ScrollReveal key={id} delay={index * 70}>
              <Box
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: colors.white,
                  border: `1px solid ${colors.sandDark}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 24px 50px -30px rgba(10, 58, 74, 0.45)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: 'rgba(14, 77, 100, 0.08)',
                    color: colors.sea,
                    mb: 2.5,
                  }}
                >
                  <Icon />
                </Box>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {t(`amenities.items.${id}.title`)}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.muted }}>
                  {t(`amenities.items.${id}.description`)}
                </Typography>
              </Box>
            </ScrollReveal>
          );
        })}
      </Box>
    </Section>
  );
};
