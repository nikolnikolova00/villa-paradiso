import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { colors } from '../theme';

type RatingStarsProps = {
  rating: number;
  size?: number;
};

export const RatingStars = ({ rating, size = 18 }: RatingStarsProps) => (
  <Box
    sx={{ display: 'flex', gap: 0.25, color: colors.terracotta }}
    role="img"
    aria-label={`${rating} out of 5 stars`}
  >
    {Array.from({ length: 5 }).map((_, index) =>
      index < rating ? (
        <StarIcon key={index} sx={{ fontSize: size }} />
      ) : (
        <StarBorderIcon key={index} sx={{ fontSize: size }} />
      ),
    )}
  </Box>
);
