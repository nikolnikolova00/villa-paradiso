import type { AmenityId, Distance, GalleryImage } from '../types/villa';

const unsplash = (id: string, w = 1600, h = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const heroImage = unsplash('photo-1507525428034-b723cf961d3e', 2400, 1600);

export const introImages = {
  main: unsplash('photo-1502672260266-1c1ef2d93688', 1200, 1500),
  secondary: unsplash('photo-1522708323590-d24dbb6b0267', 800, 800),
};

export const ctaImage = unsplash('photo-1505142468610-359e7d316be0', 2400, 1200);

export const locationImage = unsplash('photo-1519046904884-53103b34b206', 1400, 1400);

export const galleryImages: GalleryImage[] = [
  {
    id: 'pool',
    src: unsplash('photo-1571003123894-1f0594d2b5d9'),
    alt: 'Private swimming pool overlooking the sea',
  },
  {
    id: 'living',
    src: unsplash('photo-1616486338812-3dadae4b4ace'),
    alt: 'Bright open-plan living room',
  },
  {
    id: 'bedroom',
    src: unsplash('photo-1493809842364-78817add7ffb'),
    alt: 'Serene bedroom with sea breeze',
  },
  {
    id: 'terrace',
    src: unsplash('photo-1544551763-46a013bb70d5'),
    alt: 'Terrace with a view of the bay',
  },
  {
    id: 'bathroom',
    src: unsplash('photo-1571508601891-ca5e7a713859'),
    alt: 'Spa-style bathroom',
  },
  {
    id: 'dining',
    src: unsplash('photo-1414235077428-338989a2e8c0'),
    alt: 'Dining area for long evenings',
  },
  {
    id: 'coast',
    src: unsplash('photo-1500375592092-40eb2168fd21'),
    alt: 'Crystal clear water along the coast',
  },
  {
    id: 'villa',
    src: unsplash('photo-1600585154340-be6161a56a0c'),
    alt: 'The villa surrounded by Mediterranean gardens',
  },
];

export const amenityIds: AmenityId[] = [
  'pool',
  'seaView',
  'wifi',
  'kitchen',
  'ac',
  'parking',
  'bbq',
  'workspace',
];

export const distances: Distance[] = [
  { key: 'beach', value: '80 m' },
  { key: 'oldTown', value: '1.2 km' },
  { key: 'airport', value: '24 km' },
  { key: 'restaurants', value: '300 m' },
];
