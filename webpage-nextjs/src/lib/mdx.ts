import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/types/blog';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const files = fs.readdirSync(contentDirectory);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace('.mdx', '');
        const post = await getPostBySlug(slug);
        return post;
      })
    );

    // Sort by date descending
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Extract frontmatter
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = frontmatterRegex.exec(fileContent);
  
  if (!match) {
    throw new Error(`No frontmatter found in ${slug}.mdx`);
  }

  const frontmatter = match[1];
  const metadata: any = {};
  
  frontmatter.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      // Remove quotes if present
      metadata[key.trim()] = value.replace(/^['"]|['"]$/g, '');
    }
  });

  // Parse tags if they exist
  if (metadata.tags) {
    try {
      metadata.tags = JSON.parse(metadata.tags.replace(/'/g, '"'));
    } catch {
      metadata.tags = metadata.tags.split(',').map((tag: string) => tag.trim());
    }
  } else {
    metadata.tags = [];
  }

  return {
    slug,
    title: metadata.title || '',
    description: metadata.description || '',
    date: metadata.date || '',
    author: metadata.author || '',
    category: metadata.category || '',
    image: metadata.image || '',
    tags: metadata.tags || [],
  };
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}
