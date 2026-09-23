import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

export { colors } from './palette';

export const appTheme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 12,
  },
  components,
});
