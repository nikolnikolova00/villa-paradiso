export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

export type Review = {
  name: string;
  location: string;
  rating: number;
  comment: string;
};

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
