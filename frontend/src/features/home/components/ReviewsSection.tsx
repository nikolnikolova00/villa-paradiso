import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { colors } from '../../../theme';
import { RatingStars, ScrollReveal, Section, SectionHeading } from '../../../components';
import type { Review } from '../../../types';

export const ReviewsSection = () => {
  const { t } = useTranslation();
  const reviews = t('reviews.items', { returnObjects: true }) as Review[];

  return (
    <Section id="reviews" background={colors.sand}>
      <SectionHeading
        overline={t('reviews.overline')}
        title={t('reviews.title')}
        subtitle={t('reviews.subtitle')}
      />
      <Box
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        }}
      >
        {reviews.map((review, index) => (
          <ScrollReveal key={review.name} delay={index * 90}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                p: 3.5,
                borderRadius: 3,
                backgroundColor: colors.white,
                border: `1px solid ${colors.sandDark}`,
              }}
            >
              <FormatQuoteIcon
                sx={{
                  position: 'absolute',
                  top: 18,
                  right: 20,
                  fontSize: 48,
                  color: 'rgba(14, 77, 100, 0.1)',
                }}
              />
              <RatingStars rating={review.rating} />
              <Typography
                variant="body1"
                sx={{ my: 2.5, color: colors.ink, fontStyle: 'italic' }}
              >
                “{review.comment}”
              </Typography>
              <Typography variant="h6">{review.name}</Typography>
              <Typography variant="body2" sx={{ color: colors.muted }}>
                {review.location}
              </Typography>
            </Box>
          </ScrollReveal>
        ))}
      </Box>
    </Section>
  );
};
