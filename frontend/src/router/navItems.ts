export const navItems = [
  { key: 'home', to: '/' },
  { key: 'accommodation', to: '/accommodation' },
  { key: 'gallery', to: '/gallery' },
  { key: 'about', to: '/about' },
  { key: 'contact', to: '/contact' },
] as const;

export type NavKey = (typeof navItems)[number]['key'];
