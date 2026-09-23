const en = {
  nav: {
    home: 'Home',
    accommodation: 'Accommodation',
    gallery: 'Gallery',
    about: 'About',
    contact: 'Contact',
    bookNow: 'Book now',
  },
  hero: {
    overline: 'Mediterranean seaside retreat',
    title: 'Your escape to Villa Paradiso',
    subtitle:
      'A sun-drenched villa where the sea meets the horizon — slow mornings, golden evenings and unforgettable stays.',
    ctaPrimary: 'Book your stay',
    ctaSecondary: 'Explore the villa',
    scroll: 'Scroll to discover',
  },
  booking: {
    title: 'Plan your stay',
    checkIn: 'Check-in',
    checkOut: 'Check-out',
    guests: 'Guests',
    guest: 'guest',
    guestsPlural: 'guests',
    search: 'Check availability',
    note: 'Free cancellation up to 30 days before arrival',
  },
  intro: {
    overline: 'Welcome',
    title: 'A home by the sea',
    body1:
      'Villa Paradiso is a private Mediterranean retreat designed for slow living. Wake to the sound of the waves, breakfast under the pergola and spend long afternoons between the pool and the shore.',
    body2:
      'Thoughtfully restored and finished with natural stone and warm oak, the villa sleeps eight guests across four serene bedrooms — the perfect setting for family holidays and gatherings with friends.',
    cta: 'Discover our story',
    stats: [
      { value: '12', label: 'Years hosting' },
      { value: '4.9', label: 'Guest rating' },
      { value: '80 m', label: 'To the beach' },
      { value: '8', label: 'Sleeps' },
    ],
  },
  amenities: {
    overline: 'Amenities',
    title: 'Everything you need to unwind',
    subtitle:
      'Comforts chosen with care, so the only thing on your mind is where to watch the sunset from.',
    items: {
      pool: {
        title: 'Private pool',
        description: 'A heated infinity pool with sun loungers and shade.',
      },
      seaView: {
        title: 'Sea view',
        description: 'Uninterrupted views across the bay from every terrace.',
      },
      wifi: {
        title: 'Fast Wi-Fi',
        description: 'Reliable fibre connection throughout the villa.',
      },
      kitchen: {
        title: 'Chef kitchen',
        description: 'A fully equipped kitchen for long, lazy dinners.',
      },
      ac: {
        title: 'Air conditioning',
        description: 'Cool, quiet climate control in every room.',
      },
      parking: {
        title: 'Private parking',
        description: 'Secure off-street parking for two cars.',
      },
      bbq: {
        title: 'Outdoor grill',
        description: 'A stone barbecue and alfresco dining pergola.',
      },
      workspace: {
        title: 'Workspace',
        description: 'A calm desk with sea views if you must work.',
      },
    },
  },
  gallery: {
    overline: 'Gallery',
    title: 'Moments at the villa',
    subtitle:
      'A glimpse of the spaces, the light and the little details that make a stay here feel like home.',
    cta: 'View full gallery',
  },
  reviews: {
    overline: 'Guest reviews',
    title: 'Loved by our guests',
    subtitle: 'A few words from the people who have stayed with us.',
    items: [
      {
        name: 'Sofia & Mark',
        location: 'London, UK',
        rating: 5,
        comment:
          'The most beautiful week we have had in years. The villa is even better than the photos and the sunsets from the pool are unreal.',
      },
      {
        name: 'Elena Petrova',
        location: 'Sofia, Bulgaria',
        rating: 5,
        comment:
          'Immaculately clean, beautifully designed and just steps from the sea. We did not want to leave.',
      },
      {
        name: 'The Müller family',
        location: 'Munich, Germany',
        rating: 5,
        comment:
          'Perfect for our family. Plenty of space, a wonderful kitchen and a host who thought of everything.',
      },
    ],
  },
  location: {
    overline: 'Location',
    title: 'On the edge of the bay',
    body: 'Tucked between olive groves and the sea, the villa is a short stroll from a quiet pebble beach and a handful of family-run konobas.',
    distances: {
      beach: 'Beach',
      oldTown: 'Old town',
      airport: 'Airport',
      restaurants: 'Restaurants',
    },
    cta: 'Get directions',
    mapNote: 'Interactive map coming soon',
  },
  cta: {
    title: 'Ready for your escape?',
    subtitle: 'Check availability and reserve your dates in just a few clicks.',
    button: 'Book your stay',
  },
  footer: {
    tagline:
      'A Mediterranean villa for slow living, sea air and unforgettable gatherings.',
    exploreTitle: 'Explore',
    contactTitle: 'Contact',
    followTitle: 'Follow',
    rights: '© {{year}} Villa Paradiso. All rights reserved.',
  },
  common: {
    comingSoonTitle: 'Coming soon',
    comingSoonBody:
      'This page is on its way. We are crafting something beautiful — please check back shortly.',
    backHome: 'Back to home',
    language: 'Language',
  },
};

export default en;
export type Translation = typeof en;
