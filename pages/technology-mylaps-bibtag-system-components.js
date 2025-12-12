import Head from 'next/head'
import { loadHtml } from '../lib/loadHtml'

export async function getStaticProps() {
  return { props: loadHtml('technology-mylaps-bibtag-system-components.html') }
}

export default function Technology({ title, description, canonical, body }) {
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
