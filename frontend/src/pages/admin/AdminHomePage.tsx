import { Link } from 'react-router-dom';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { adminResources } from 'admin';

export const AdminHomePage = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5">Admin Dashboard</Typography>
      <Paper sx={{ p: 2 }}>
        <Stack direction="row" spacing={3}>
          {adminResources.map(({ name }) => (
            <Box
              key={name}
              component={Link}
              to={`/admin/${name}`}
              sx={{ textTransform: 'capitalize' }}
            >
              {name}
            </Box>
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
};
