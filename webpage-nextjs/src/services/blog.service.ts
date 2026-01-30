import { BlogPost } from '@/types/blog';
import { getAllPosts, getPostBySlug, getPostsByCategory } from '@/lib/mdx';

export class BlogService {
  private dataSource: 'local' | 'api' = 'local';

  async getAllPosts(): Promise<BlogPost[]> {
    if (this.dataSource === 'local') {
      return this.getLocalPosts();
    } else {
      return this.getApiPosts();
    }
  }

  async getPostBySlug(slug: string): Promise<BlogPost> {
    if (this.dataSource === 'local') {
      return getPostBySlug(slug);
    } else {
      return this.getApiPost(slug);
    }
  }

  async getPostsByCategory(category: string): Promise<BlogPost[]> {
    if (this.dataSource === 'local') {
      return getPostsByCategory(category);
    } else {
      return this.getApiPostsByCategory(category);
    }
  }

  private async getLocalPosts(): Promise<BlogPost[]> {
    return getAllPosts();
  }

  private async getApiPosts(): Promise<BlogPost[]> {
    // Preparado para API futura
    const res = await fetch('https://api.timetrack.cl/blog');
    return res.json();
  }

  private async getApiPost(slug: string): Promise<BlogPost> {
    // Preparado para API futura
    const res = await fetch(`https://api.timetrack.cl/blog/${slug}`);
    return res.json();
  }

  private async getApiPostsByCategory(category: string): Promise<BlogPost[]> {
    // Preparado para API futura
    const res = await fetch(`https://api.timetrack.cl/blog/category/${category}`);
    return res.json();
  }
}

// Export singleton instance
export const blogService = new BlogService();
