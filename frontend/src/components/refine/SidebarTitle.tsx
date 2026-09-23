import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const SidebarTitle = ({ collapsed }: { collapsed?: boolean }) => (
  <Link
    to="/"
    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}
  >
    <Box component="img" src="/palmIcon.png" alt="Villa Paradiso" sx={{ height: 24, width: 24 }} />
    {!collapsed && (
      <Typography variant="h6" fontWeight={700} color="text.primary" noWrap>
        Villa Paradiso
      </Typography>
    )}
  </Link>
);
