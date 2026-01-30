export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
  content?: string;
}

export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
}
