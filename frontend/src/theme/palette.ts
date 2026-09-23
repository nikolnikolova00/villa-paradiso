import type { PaletteOptions } from '@mui/material/styles';

export const colors = {
  sea: '#0E4D64',
  seaDark: '#0A3A4A',
  seaLight: '#3A7C90',
  sand: '#F5EFE6',
  sandDark: '#E7DCCB',
  cream: '#FDFBF7',
  terracotta: '#C77B4E',
  terracottaDark: '#A9603A',
  olive: '#6B7A52',
  ink: '#1C2B33',
  muted: '#5C6B72',
  white: '#FFFFFF',
} as const;

export const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: colors.sea,
    dark: colors.seaDark,
    light: colors.seaLight,
    contrastText: colors.white,
  },
  secondary: {
    main: colors.terracotta,
    dark: colors.terracottaDark,
    contrastText: colors.white,
  },
  background: {
    default: colors.cream,
    paper: colors.white,
  },
  text: {
    primary: colors.ink,
    secondary: colors.muted,
  },
  divider: 'rgba(14, 77, 100, 0.12)',
};
