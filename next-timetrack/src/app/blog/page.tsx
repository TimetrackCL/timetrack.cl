import Link from "next/link";
import Image from "next/image";
import blogData from "@/data/blog.json";

export default function BlogIndex() {
    return (
        <main className="pt-32 pb-20">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
                        Blog
                    </span>
                    <h1 className="text-3xl font-medium my-3">Noticias y Artículos</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Mantente informado sobre las últimas novedades del mundo del
                        cronometraje deportivo.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                            <Link href={post.link}>
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </Link>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-100 text-orange-600">
                                        {post.category}
                                    </span>
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                </div>
                                <Link href={post.link}>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                </Link>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={post.link}
                                    className="text-primary font-medium text-sm hover:underline"
                                >
                                    Leer más →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
