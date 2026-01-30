import Link from 'next/link';
import { blogService } from '@/services/blog.service';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Timetrack',
  description:
    'Descubre las últimas novedades sobre cronometraje deportivo, tecnología MyLaps, consejos para organizadores y experiencias de nuestros clientes en eventos deportivos por todo Chile.',
};

export default async function BlogPage() {
  const posts = await blogService.getAllPosts();

  const tags = ['Cronometraje', 'Tecnología', 'Eventos', 'Tutoriales', 'Running', 'Triatlón', 'Ciclismo', 'Tips', 'Noticias'];

  return (
    <>
      <section className="pt-36 pb-20">
        <div className="container">
          <div className="absolute inset-0 h-96 bg-cover bg-no-repeat bg-center bg-[url('/assets/images/blog/hero-2.png')]">
            <div className="relative w-full h-full z-30 bg-black/10"></div>
          </div>

          <div className="relative lg:w-3/5 mx-auto z-30">
            <div className="text-center text-white">
              <h2 className="text-5xl font-semibold mb-8">Blog</h2>
              <p className="text-base/relaxed tracking-wide">
                Descubre las últimas novedades sobre cronometraje deportivo, tecnología MyLaps,
                consejos para organizadores y experiencias de nuestros clientes en eventos
                deportivos por todo Chile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-24">
        <div className="container">
          <div className="flex items-center gap-2">
            <p>Tags:</p>
            <div className="flex flex-wrap items-center gap-1">
              {tags.map((tag, index) => (
                <a
                  key={index}
                  href="#"
                  className="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {posts.length > 0 && (
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center lg:py-16 py-14" data-aos="fade-up" data-aos-duration="300">
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-5 gap-10">
                  <div className="md:col-span-2 col-span-3">
                    <img src={posts[0].image} className="w-full h-full rounded-md object-cover" alt={posts[0].title} />
                  </div>

                  <div className="col-span-3">
                    <div className="flex flex-col gap-14 justify-between xl:h-full">
                      <div>
                        <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
                          {posts[0].category}
                        </span>
                        <h1 className="text-lg my-3 transition-all hover:text-primary">
                          <Link href={`/blog/${posts[0].slug}`}>{posts[0].title}</Link>
                        </h1>
                        <p className="text-sm/relaxed tracking-wider text-gray-500">
                          {posts[0].description}
                          <Link href={`/blog/${posts[0].slug}`} className="text-primary ml-1">
                            leer más
                          </Link>
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <img
                            src="/assets/images/avatars/mcantillana.jpg"
                            className="h-10 w-10 rounded-md"
                            alt={posts[0].author}
                          />
                          <div>
                            <h6 className="text-sm transition-all hover:text-primary">
                              {posts[0].author}
                            </h6>
                            <p className="text-sm text-gray-500">{posts[0].date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:py-16 py-14" data-aos="fade-up">
            {posts.slice(1).map((post) => (
              <div key={post.slug}>
                <img src={post.image} className="rounded-md mb-5" alt={post.title} />

                <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
                  {post.category}
                </span>
                <h1 className="text-lg my-3 transition-all hover:text-primary">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h1>
                <p className="text-sm/relaxed tracking-wider text-gray-500">
                  {post.description}
                  <Link href={`/blog/${post.slug}`} className="text-primary ml-1">
                    leer más
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
