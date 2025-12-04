import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "TeamYearng - Professional System & App Development",
  description = "We build POS systems, school & library systems, mobile apps, websites, and configure servers.",
  image = "https://your-domain.vercel.app/og-image.png",
  url = "https://your-domain.vercel.app",
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook / Instagram */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* WhatsApp */}
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/png" />
    </Helmet>
  );
};

export default SEO;
