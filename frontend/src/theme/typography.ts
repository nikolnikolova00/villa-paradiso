import type { ThemeOptions } from '@mui/material/styles';

const heading = '"Cormorant Garamond", Georgia, "Times New Roman", serif';
const body = '"Manrope", "Segoe UI", system-ui, sans-serif';

export const typography: ThemeOptions['typography'] = {
  fontFamily: body,
  h1: {
    fontFamily: heading,
    fontWeight: 600,
    fontSize: 'clamp(2.75rem, 6vw, 5rem)',
    lineHeight: 1.05,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: heading,
    fontWeight: 600,
    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
    lineHeight: 1.1,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontFamily: heading,
    fontWeight: 600,
    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
    lineHeight: 1.15,
  },
  h4: {
    fontFamily: heading,
    fontWeight: 600,
    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    lineHeight: 1.2,
  },
  h5: {
    fontFamily: heading,
    fontWeight: 600,
    fontSize: '1.35rem',
    lineHeight: 1.3,
  },
  h6: {
    fontFamily: body,
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: 1.4,
  },
  subtitle1: {
    fontWeight: 500,
    letterSpacing: '0.02em',
  },
  body1: {
    fontSize: '1.05rem',
    lineHeight: 1.75,
  },
  body2: {
    fontSize: '0.95rem',
    lineHeight: 1.7,
  },
  overline: {
    fontWeight: 700,
    fontSize: '0.75rem',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 600,
    letterSpacing: '0.03em',
    textTransform: 'none',
  },
};
