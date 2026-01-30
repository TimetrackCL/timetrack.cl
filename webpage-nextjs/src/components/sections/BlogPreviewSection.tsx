import Link from 'next/link';

export default function BlogPreviewSection() {
  const posts = [
    {
      slug: 'como-funciona-cronometraje-chip',
      title: 'Cronometraje de Carreras con Chip: ¿Cómo Funciona?',
      excerpt:
        'El cronometraje con chip es un sistema basado en tecnología RFID que permite medir el tiempo exacto de cada corredor...',
      category: 'Tecnología',
      date: '01 Mar, 2025',
      image: '/assets/images/blog/1-mini-photo-blog.jpg',
    },
    {
      slug: 'como-elegir-el-mejor-sistema-de-cronometraje-para-carreras',
      title: '¿Cómo Elegir el Mejor Sistema de Cronometraje?',
      excerpt:
        'Para productoras de eventos deportivos, elegir el sistema de cronometraje adecuado es una decisión estratégica...',
      category: 'Tecnología',
      date: '01 Mar, 2025',
      image: '/assets/images/blog/mini-photo-como-elegir-el-mejor-sistema-de-cronometraje-para-carreras.jpg',
    },
    {
      slug: 'tiempo-chip-vs-tiempo-disparo',
      title: 'Tiempo Chip vs. Tiempo Gunshot: ¿Cuál es la Diferencia?',
      excerpt:
        'Descubre la diferencia entre el tiempo chip y el tiempo gunshot, cuál es más preciso y cuál se utiliza en competencias oficiales...',
      category: 'Tecnología',
      date: '01 Mar, 2025',
      image: '/assets/images/blog/mini-photo-tiempo-chip-vs-tiempo-disparo.jpg',
    },
  ];

  return (
    <section className="w-full">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Blog</h2>
          <Link
            href="/blog"
            className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
          >
            Ver todas
          </Link>
        </div>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-100 text-orange-600">
                  {post.category}
                </span>
                <h3 className="font-semibold mt-2 text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Leer más →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
