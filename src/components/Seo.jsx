import Head from 'next/head';

export default function Seo({ seo }) {
  return (
    <Head>
      {/* Titles */}
      <title>{seo.metaTitle}</title>
      <meta property="og:title" content={seo.metaTitle} />
      <meta name="twitter:title" content={seo.metaTitle} />

      {/* Descriptions */}
      <meta name="description" content={seo.metaDescription} />
      <meta property="og:description" content={seo.metaDescription} />
      <meta name="twitter:description" content={seo.metaDescription} />

      {/* Share Images */}
      <meta property="og:image" content={seo.shareImage} />
      <meta name="twitter:image" content={seo.shareImage} />
      <meta name="image" content={seo.shareImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}