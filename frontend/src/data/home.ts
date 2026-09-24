import type { AmenityId, Distance, GalleryImage, GallerySection } from 'types';
import { unsplash } from 'utils';

export const heroImage = unsplash('photo-1507525428034-b723cf961d3e', 2400, 1600);

export const introImages = {
  main: unsplash('photo-1502672260266-1c1ef2d93688', 1200, 1500),
  secondary: unsplash('photo-1522708323590-d24dbb6b0267', 800, 800),
};

export const ctaImage = unsplash('photo-1505142468610-359e7d316be0', 2400, 1200);

export const locationImage = unsplash('photo-1519046904884-53103b34b206', 1400, 1400);

export const gallerySections: GallerySection[] = [
  {
    id: 'backyard',
    labelKey: 'backyard',
    images: [
      { id: 'pool', src: unsplash('photo-1571003123894-1f0594d2b5d9'), alt: 'Private swimming pool overlooking the sea' },
      { id: 'garden', src: unsplash('photo-1600585154340-be6161a56a0c'), alt: 'The villa surrounded by Mediterranean gardens' },
      { id: 'pergola', src: unsplash('photo-1600607687939-ce8a6c25118c'), alt: 'Shaded pergola for alfresco afternoons' },
    ],
  },
  {
    id: 'dining',
    labelKey: 'dining',
    images: [
      { id: 'dining', src: unsplash('photo-1414235077428-338989a2e8c0'), alt: 'Dining area for long evenings' },
      { id: 'living', src: unsplash('photo-1616486338812-3dadae4b4ace'), alt: 'Bright open-plan living room' },
      { id: 'kitchen', src: unsplash('photo-1600489000022-c2086d79f9d4'), alt: 'Fully equipped kitchen' },
    ],
  },
  {
    id: 'bedroom',
    labelKey: 'bedroom',
    images: [
      { id: 'bedroom', src: unsplash('photo-1493809842364-78817add7ffb'), alt: 'Serene bedroom with sea breeze' },
      { id: 'bedroomTwo', src: unsplash('photo-1522708323590-d24dbb6b0267'), alt: 'Second bedroom bathed in morning light' },
      { id: 'bedroomThree', src: unsplash('photo-1560448204-e02f11c3d0e2'), alt: 'Cosy twin bedroom' },
    ],
  },
  {
    id: 'bathroom',
    labelKey: 'bathroom',
    images: [
      { id: 'bathroom', src: unsplash('photo-1571508601891-ca5e7a713859'), alt: 'Spa-style bathroom' },
      { id: 'bathroomTwo', src: unsplash('photo-1552321554-5fefe8c9ef14'), alt: 'Marble bathroom with walk-in shower' },
    ],
  },
  {
    id: 'surroundings',
    labelKey: 'surroundings',
    images: [
      { id: 'coast', src: unsplash('photo-1500375592092-40eb2168fd21'), alt: 'Crystal clear water along the coast' },
      { id: 'beach', src: unsplash('photo-1507525428034-b723cf961d3e'), alt: 'Quiet pebble beach moments away' },
      { id: 'snorcheling', src: unsplash('photo-1544551763-46a013bb70d5'), alt: 'Terrace with a view of the bay' },
    ],
  },
];

export const galleryImages: GalleryImage[] = gallerySections.flatMap(
  (section) => section.images,
);

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
