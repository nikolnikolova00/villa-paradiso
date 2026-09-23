import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

type ResponsiveImageProps = {
  src: string;
  alt: string;
  ratio?: string;
  loading?: 'lazy' | 'eager';
  sx?: SxProps<Theme>;
};

export const ResponsiveImage = ({
  src,
  alt,
  ratio = '4 / 3',
  loading = 'lazy',
  sx,
}: ResponsiveImageProps) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    loading={loading}
    sx={[
      {
        width: '100%',
        height: '100%',
        aspectRatio: ratio,
        objectFit: 'cover',
        display: 'block',
      },
      ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
    ]}
  />
);
