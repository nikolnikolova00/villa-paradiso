import { Box, Typography } from '@mui/material';
import { colors } from '../theme';

type SectionHeadingProps = {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export const SectionHeading = ({
  overline,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) => (
  <Box
    sx={{
      textAlign: align,
      maxWidth: align === 'center' ? 720 : 'none',
      mx: align === 'center' ? 'auto' : 0,
      mb: { xs: 5, md: 7 },
    }}
  >
    {overline && (
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          mb: 1.5,
          color: light ? colors.sandDark : colors.terracotta,
        }}
      >
        {overline}
      </Typography>
    )}
    <Typography variant="h2" sx={{ color: light ? colors.white : colors.ink }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography
        variant="body1"
        sx={{ mt: 2.5, color: light ? 'rgba(255, 255, 255, 0.8)' : colors.muted }}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);
