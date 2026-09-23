import type { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

type SectionProps = {
  id?: string;
  children: ReactNode;
  background?: string;
  container?: boolean;
  sx?: SxProps<Theme>;
};

export const Section = ({
  id,
  children,
  background,
  container = true,
  sx,
}: SectionProps) => (
  <Box
    component="section"
    id={id}
    sx={[
      { py: { xs: 8, md: 12 }, backgroundColor: background },
      ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
    ]}
  >
    {container ? <Container>{children}</Container> : children}
  </Box>
);
