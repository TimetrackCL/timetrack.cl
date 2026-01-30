import { blogService } from '@/services/blog.service';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const post = await blogService.getPostBySlug(slug);
    return {
      title: `${post.title} | Blog | Timetrack`,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        images: [post.image],
      },
    };
  } catch {
    return {
      title: 'Post no encontrado | Timetrack',
    };
  }
}

export async function generateStaticParams() {
  const posts = await blogService.getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  let post;
  try {
    post = await blogService.getPostBySlug(slug);
  } catch {
    notFound();
  }

  // Read MDX content
  const contentDirectory = path.join(process.cwd(), 'src/content/blog');
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  // Remove frontmatter
  const content = fileContent.replace(/^---[\s\S]*?---\n/, '');

  return (
    <>
      <section className="pt-20">
        <div className="container">
          <div className="py-14">
            <div className="flex flex-wrap items-center gap-2 bg-gray-100 py-2 px-3">
              <Link href="/" className="transition-all hover:text-primary">
                Home
              </Link>{' '}
              /
              <Link href="/blog" className="transition-all hover:text-primary">
                Blog
              </Link>{' '}
              /
              <p className="text-gray-500">{post.title}</p>
            </div>
          </div>

          <div className="w-full">
            <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
              {post.category}
            </span>
            <h1 className="lg:text-4xl/snug text-3xl/snug mt-3">{post.title}</h1>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3 mt-7">
                <img
                  src="/assets/images/avatars/mcantillana.jpg"
                  alt="avatar"
                  className="h-11 w-11 rounded-full"
                />

                <div>
                  <h6 className="text-sm transition-all hover:text-primary">{post.author}</h6>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Section */}
      <section>
        <div className="container">
          <article className="prose prose-lg max-w-none">
            <MDXRemote source={content} />
          </article>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all"
            >
              <i className="fa-solid fa-arrow-left mr-2"></i>
              Volver al Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
