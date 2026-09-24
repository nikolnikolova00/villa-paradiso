export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

export type GallerySectionKey =
  | 'backyard'
  | 'dining'
  | 'bedroom'
  | 'bathroom'
  | 'surroundings';

export type GallerySection = {
  id: string;
  labelKey: GallerySectionKey;
  images: GalleryImage[];
};

export type Review = {
  name: string;
  location: string;
  rating: number;
  comment: string;
};

export type AboutValueKey = 'location' | 'design' | 'hosting' | 'nature';

export type ContactInfoKey = 'email' | 'phone' | 'address';

export type ContactFaqKey = 'booking' | 'checkIn' | 'pets' | 'parking';

export type Stat = {
  value: string;
  label: string;
};

export type DistanceKey = 'beach' | 'oldTown' | 'airport' | 'restaurants';

export type Distance = {
  key: DistanceKey;
  value: string;
};

export type AmenityId =
  | 'pool'
  | 'seaView'
  | 'wifi'
  | 'kitchen'
  | 'ac'
  | 'parking'
  | 'bbq'
  | 'workspace';
