import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3 text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-4 mb-2 text-gray-900">{children}</h3>
    ),
    p: ({ children }) => <p className="text-gray-700 leading-7 mb-4">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-gray-700">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 text-gray-700">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-2">{children}</li>,
    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
    a: ({ href, children }) => (
      <a href={href} className="text-primary hover:text-primary/80 underline">
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-gray-600">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
