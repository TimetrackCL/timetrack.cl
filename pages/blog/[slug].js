import Head from 'next/head'
import { loadHtml } from '../../lib/loadHtml'
import fs from 'fs'
import path from 'path'

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), 'dist/blog')
  const files = fs.readdirSync(dir).filter(f => f !== 'index.html' && f.endsWith('.html'))
  const paths = files.map(f => ({ params: { slug: f.replace(/\.html$/, '') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  return { props: loadHtml(`blog/${params.slug}.html`) }
}

export default function BlogPost({ title, description, canonical, body }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {canonical && <link rel="canonical" href={canonical} />}
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  )
}
