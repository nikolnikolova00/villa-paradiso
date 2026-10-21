import type {
  AccommodationDetailKey,
  AccommodationFact,
  AccommodationIncludedKey,
  RatePlan,
} from 'types';
import { unsplash } from 'utils';

export const accImages = {
  hero: unsplash('photo-1507525428034-b723cf961d3e', 2400, 1400),
  overview: unsplash('photo-1502672260266-1c1ef2d93688', 1200, 1500),
};

export const accFacts: AccommodationFact[] = [
  { key: 'guests', value: '8' },
  { key: 'bedrooms', value: '4' },
  { key: 'bathrooms', value: '3' },
  { key: 'beach', value: '80 m' },
];

export const ratePlans: RatePlan[] = [
  { key: 'spring', price: 320, minNights: 3 },
  { key: 'summer', price: 480, minNights: 5 },
  { key: 'autumn', price: 360, minNights: 3 },
];

export const accIncludedKeys: AccommodationIncludedKey[] = [
  'linens',
  'cleaning',
  'utilities',
  'welcome',
];

export const accDetailKeys: AccommodationDetailKey[] = [
  'checkIn',
  'checkOut',
  'cancellation',
];
