export const PROPERTY = {
  name: '404 E Main Street',
  fullAddress: '404 E Main Street, Niles, MI 49120',
  shortAddress: 'Niles, MI 49120',
  historicName: 'The Four Flags Hotel',
  tagline: 'In the Heart of Historic Downtown Niles',
  description:
    'The iconic former Four Flags Hotel—meticulously transformed into a vibrant, 48-unit multifamily residence, blending historic character with contemporary comfort.',
  unitCount: 48,
  occupancy: '94%',
  heroImage: '/404-main-st.jpeg',
  phone: '269-929-2875',
  phoneHref: 'tel:2699292875',
  smsHref: 'sms:2699292875',
} as const;

export type Feature = {
  icon: string;
  title: string;
  body: string;
};

export const FEATURES: Feature[] = [
  {
    icon: 'landmark',
    title: 'Historic Charm, Modern Living',
    body:
      'This landmark building has been thoughtfully repurposed and recently renovated, offering updated finishes, fixtures, and mechanical systems throughout many units.',
  },
  {
    icon: 'home',
    title: 'Designed for Convenience',
    body:
      'Each unit includes a private restroom, refrigerator, and heating unit—providing everything needed for comfortable, independent living.',
  },
  {
    icon: 'pin',
    title: 'Prime Walkable Location',
    body:
      'Nestled in the heart of downtown Niles, you are steps away from local dining, shopping, and entertainment. Live where you can truly live, work, and play.',
  },
  {
    icon: 'chart',
    title: 'Proven Performance & Stability',
    body:
      'With current occupancy at a strong 94% and historically low turnover, this property demonstrates consistent demand and reliable income potential.',
  },
  {
    icon: 'car',
    title: 'Ample Parking Included',
    body:
      'The sale includes two additional lots to the south and east, providing plentiful parking for residents—a rare perk in a downtown setting.',
  },
  {
    icon: 'route',
    title: 'Connected to the Region',
    body:
      'Situated less than 5 miles from the Indiana state line, and just minutes from US 12 and US 31—ideal for workers across the greater Michiana area.',
  },
];

export type Audience = {
  icon: string;
  title: string;
  body: string;
};

export const AUDIENCES: Audience[] = [
  {
    icon: 'trending',
    title: 'Investors',
    body: 'Seeking a stable, high-occupancy asset in a growing historic district.',
  },
  {
    icon: 'users',
    title: 'Local Residents & Families',
    body: 'Looking for an affordable, convenient downtown lifestyle.',
  },
  {
    icon: 'heart',
    title: 'Community-Minded',
    body: 'Anyone who values community, charm, and connectivity.',
  },
];

export const STATS: { value: string; label: string }[] = [
  { value: '48', label: 'Units' },
  { value: '94%', label: 'Occupancy' },
  { value: '2', label: 'Parking Lots' },
  { value: '<5mi', label: 'To Indiana' },
];
