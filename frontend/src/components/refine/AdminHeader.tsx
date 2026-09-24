import { AppBar, Box, Toolbar } from '@mui/material';
import { SelectLanguage } from 'components';

export const AdminHeader = () => (
  <AppBar
    position="sticky"
    color="inherit"
    sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
  >
    <Toolbar sx={{ justifyContent: 'flex-end', minHeight: 64 }}>
      <Box>
        <SelectLanguage />
      </Box>
    </Toolbar>
  </AppBar>
);
