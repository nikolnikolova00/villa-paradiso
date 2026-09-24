import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { colors } from 'theme';

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

export const BookingWidget = () => {
  const { t } = useTranslation();
  const [checkIn, setCheckIn] = useState<Dayjs | null>(dayjs().add(1, 'day'));
  const [checkOut, setCheckOut] = useState<Dayjs | null>(dayjs().add(4, 'day'));
  const [guests, setGuests] = useState(2);

  return (
    <Paper
      sx={{
        p: { xs: 2.5, md: 3 },
        borderRadius: 3,
        border: `1px solid ${colors.sandDark}`,
        boxShadow: '0 30px 70px -35px rgba(10, 58, 74, 0.5)',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr auto' },
          alignItems: 'end',
        }}
      >
        <DatePicker
          label={t('booking.checkIn')}
          value={checkIn}
          onChange={(value) => setCheckIn(value)}
          minDate={dayjs()}
          slotProps={{ textField: { fullWidth: true } }}
        />
        <DatePicker
          label={t('booking.checkOut')}
          value={checkOut}
          onChange={(value) => setCheckOut(value)}
          minDate={checkIn ?? dayjs()}
          slotProps={{ textField: { fullWidth: true } }}
        />
        <TextField
          select
          label={t('booking.guests')}
          value={guests}
          onChange={(event) => setGuests(Number(event.target.value))}
          fullWidth
        >
          {guestOptions.map((count) => (
            <MenuItem key={count} value={count}>
              {count} {count === 1 ? t('booking.guest') : t('booking.guestsPlural')}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ height: 56, whiteSpace: 'nowrap' }}
        >
          {t('booking.search')}
        </Button>
      </Box>
      <Typography variant="body2" sx={{ mt: 2, color: colors.muted }}>
        {t('booking.note')}
      </Typography>
    </Paper>
  );
};
