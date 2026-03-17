import { Helmet } from "react-helmet-async";

const SITE_NAME = "Paydex";
const BASE_URL = "https://paydex.com"; 
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

export default function PageSEO({
  title,
  description,
  keywords = "",
  image = DEFAULT_IMAGE,
  noIndex = false,
}) {
  const pageTitle = `${title} | ${SITE_NAME} — Global B2B Payment Infrastructure`;

  const canonical =
    typeof window !== "undefined"
      ? `${BASE_URL}${window.location.pathname}`
      : BASE_URL;

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}