import type { Components, Theme } from '@mui/material/styles';
import { colors } from './palette';

export const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: colors.cream,
        color: colors.ink,
      },
    },
  },
  MuiContainer: {
    defaultProps: {
      maxWidth: 'lg',
    },
    styleOverrides: {
      root: {
        paddingLeft: 24,
        paddingRight: 24,
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 999,
        paddingInline: 26,
        paddingBlock: 11,
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: colors.seaDark,
        },
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: colors.terracottaDark,
        },
      },
      outlinedPrimary: {
        borderWidth: 1.5,
        '&:hover': {
          borderWidth: 1.5,
        },
      },
    },
  },
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        boxShadow: 'none',
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      rounded: {
        borderRadius: 20,
      },
    },
  },
  MuiCard: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        borderRadius: 20,
        border: `1px solid ${colors.sandDark}`,
        backgroundColor: colors.white,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 999,
        fontWeight: 600,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        backgroundColor: colors.white,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textUnderlineOffset: 4,
      },
    },
  },
};
