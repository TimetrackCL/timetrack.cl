import Link from "next/link";
import Image from "next/image";
import blogData from "@/data/blog.json";

export default function Blog() {
    const posts = blogData.slice(0, 3);

    return (
        <section className="w-full md:w-1/2">
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Blog</h2>
                    <Link
                        href="/blog"
                        className="text-primary hover:text-primary/80 text-sm font-medium"
                    >
                        Ver todas
                    </Link>
                </div>
                <div className="space-y-6">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                        >
                            <Image
                                src={post.image}
                                alt={post.title}
                                className="w-24 h-24 rounded-lg object-cover"
                                width={96}
                                height={96}
                            />
                            <div>
                                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-100 text-orange-600">
                                    {post.category}
                                </span>
                                <h3 className="font-semibold mt-2 text-gray-900">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-sm text-gray-500">{post.date}</span>
                                    <Link href={post.link} className="text-sm text-primary">
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
