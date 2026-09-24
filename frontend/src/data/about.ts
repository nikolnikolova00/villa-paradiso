import { unsplash } from '../utils';
import type { AboutValueKey } from '../types/villa';

export const aboutImages = {
  hero: unsplash('photo-1600585154340-be6161a56a0c', 2400, 1400),
  story: unsplash('photo-1600566753086-00f18fb6b3ea', 1200, 1400),
  detail: unsplash('photo-1600585152220-90363fe7e115', 1000, 1000),
};

export const aboutValueKeys: AboutValueKey[] = [
  'location',
  'design',
  'hosting',
  'nature',
];
