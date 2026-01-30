export interface Event {
  id: number;
  slug: string;
  title: string;
  date: string;
  location: string;
  category: 'running' | 'trail' | 'triatlon' | 'ciclismo';
  image: string;
  participants: number;
  linkType: 'internal' | 'external';
  link: string;
  status: 'upcoming' | 'live' | 'finished';
  liveLink?: string;
  results?: EventResult[];
}

export interface EventResult {
  distance: string;
  file: string;
  displayName?: string;
}
