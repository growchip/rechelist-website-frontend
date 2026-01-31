import { Metadata } from "next";

type PageType = "website" | "article";

export type ApiSeoData = {
  seo_title?: string;
  seo_description?: string;
  seo_image?: string;
};

export const generateSeoMetadata = (
  seo: ApiSeoData,
  pageUrl: string | null,
  pageType?: PageType
): Metadata => {
  const baseImageUrl = process.env.NEXT_PUBLIC_SERVER_IMAGE_URL || "";

  const title = seo.seo_title || "Rechelist Pharma";
  const description =
    seo.seo_description ||
    "Join hands with Rechelist Pharma – a trusted name in PCD Pharma Franchise. We deliver high-quality, affordable medicines backed by certifications and timely support to help your business grow.";

  const image = seo.seo_image ? `${baseImageUrl}/${seo.seo_image}` : undefined;

  const metadata: Metadata = {
    title,
    description,
  };

  // ---------- FACEBOOK OPEN GRAPH ----------
  metadata.openGraph = {
    title,
    description,
    siteName: "RechElist Pharma",
    locale: "en_IN",
    ...(pageType ? { type: pageType } : {}),
    ...(pageUrl ? { url: pageUrl } : {}),
    ...(image
      ? {
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        }
      : {}),
  };

  // ---------- TWITTER ----------
  metadata.twitter = {
    card: "summary_large_image",
    title,
    description,
    ...(image ? { images: [image] } : {}),
  };

  // ---------- CANONICAL ----------
  if (pageUrl) {
    metadata.alternates = {
      canonical: pageUrl,
    };
  }

  return metadata;
};
