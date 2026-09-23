import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Container, Divider, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import { colors } from '../theme';
import { navItems } from '../router/navItems';
import { site } from '../data/site';

const linkSx: SxProps<Theme> = {
  display: 'block',
  color: 'rgba(255, 255, 255, 0.78)',
  textDecoration: 'none',
  fontSize: '0.95rem',
  lineHeight: 2,
  transition: 'color 0.2s ease',
  '&:hover': { color: colors.terracotta },
};

const columnTitleSx: SxProps<Theme> = {
  color: colors.white,
  mb: 1.5,
  fontSize: '0.8rem',
  fontWeight: 700,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
};

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.seaDark,
        color: 'rgba(255, 255, 255, 0.78)',
        pt: { xs: 7, md: 9 },
        pb: 4,
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 6 },
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '2fr 1fr 1.2fr 1fr',
            },
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 2 }}>
              <Box
                component="img"
                src="/palmIcon.png"
                alt=""
                sx={{ height: 30, width: 'auto' }}
              />
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 600,
                  fontSize: '1.5rem',
                  color: colors.white,
                  lineHeight: 1,
                }}
              >
                Villa Paradiso
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ maxWidth: 320, lineHeight: 1.8 }}>
              {t('footer.tagline')}
            </Typography>
          </Box>

          <Box>
            <Typography sx={columnTitleSx}>{t('footer.exploreTitle')}</Typography>
            {navItems.map((item) => (
              <Box
                key={item.to}
                component={Link}
                to={item.to}
                sx={linkSx}
              >
                {t(`nav.${item.key}`)}
              </Box>
            ))}
          </Box>

          <Box>
            <Typography sx={columnTitleSx}>{t('footer.contactTitle')}</Typography>
            <Typography sx={linkSx}>{site.address}</Typography>
            <Box component="a" href={`mailto:${site.email}`} sx={linkSx}>
              {site.email}
            </Box>
            <Box component="a" href={`tel:${site.phone.replace(/\s/g, '')}`} sx={linkSx}>
              {site.phone}
            </Box>
          </Box>

          <Box>
            <Typography sx={columnTitleSx}>{t('footer.followTitle')}</Typography>
            {site.socials.map((social) => (
              <Box
                key={social.label}
                component="a"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                sx={linkSx}
              >
                {social.label}
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 5, borderColor: 'rgba(255, 255, 255, 0.12)' }} />

        <Typography
          variant="body2"
          sx={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.55)' }}
        >
          {t('footer.rights', { year })}
        </Typography>
      </Container>
    </Box>
  );
};
