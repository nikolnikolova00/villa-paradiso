import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  sx?: SxProps<Theme>;
};

export const ScrollReveal = ({
  children,
  delay = 0,
  y = 24,
  sx,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={[
        {
          opacity: 0,
          transform: `translateY(${y}px)`,
          transition: 'opacity 0.7s ease, transform 0.7s ease',
          transitionDelay: `${delay}ms`,
        },
        ...(visible ? [{ opacity: 1, transform: 'translateY(0)' }] : []),
        ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
      ]}
    >
      {children}
    </Box>
  );
};
