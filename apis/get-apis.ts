//---------------------UTILITY FUNCTION------------------------------
import { notFound } from "next/navigation";

type FetchOptions = {
  throw404?: boolean;
  params?: Record<string, string | number | boolean | undefined>;
} & RequestInit; // Allow native fetch options like `next: { revalidate }`

const buildURL = (endpoint: string, params?: FetchOptions["params"]) => {
  const url = new URL(`${process.env.SERVER_API_URL}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) url.searchParams.append(key, String(value));
    });
  }
  return url.toString();
};

export const fetchFromAPI = async (
  endpoint: string,
  options?: FetchOptions
) => {
  const { throw404, params, ...fetchOptions } = options || {};
  const url = buildURL(endpoint, params);

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.API_KEY as string,
    },
    ...fetchOptions,
  });

  if (throw404 && res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint} - ${res.status}`);
  }

  return res.json();
};

// ---------------- PRODUCT APIs ----------------
export const getCategories = () =>
  fetchFromAPI("/product-categories", {
    // next: { revalidate: 600 },
    next: { revalidate: 10 },
  });

export const getRange = () =>
  fetchFromAPI("/product-types", {
    // next: { revalidate: 600 },
    next: { revalidate: 10 },
  });

export const getFeaturedProducts = () =>
  fetchFromAPI("/products/featured", {
    // next: { revalidate: 600 },
    next: { revalidate: 10 },
  });

// ---------------- STATIC DATA APIs ----------------
export const getLogoAndDesc = () =>
  fetchFromAPI("/theme-options/logo", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getBannerAndDesc = () =>
  fetchFromAPI("/site-desc", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getCertificates = () =>
  fetchFromAPI("/certifications", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getSpeciality = () =>
  fetchFromAPI("/why-us", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getTestimonials = () =>
  fetchFromAPI("/testimonials", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

// ---------------- NAVIGATION ----------------
export const getNavItems = () =>
  fetchFromAPI("/menus", {
    // next: { revalidate: 600 },
    next: { revalidate: 10 },
  });

// --------------------------- BLOGS ---------------------------------
export const getBlogs = () =>
  fetchFromAPI("/posts", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getBlogCategories = () =>
  fetchFromAPI("/categories", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getCategoryWiseBlogs = (slug: string) =>
  fetchFromAPI(`/categories/${slug}/posts`, {
    throw404: true,
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getBlogDetail = (slug: string) =>
  fetchFromAPI(`/posts/${slug}`, {
    throw404: true,
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

// ---------------- PAGES ----------------
export const getAboutUsData = () =>
  fetchFromAPI("/pages/about-us", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getAboutUsInnerData = () =>
  fetchFromAPI("/aboutsection", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getContactData = () =>
  fetchFromAPI("/contactad", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getServicesData = () =>
  fetchFromAPI("/pages/services", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getPcdOpportunity = () =>
  fetchFromAPI("/site-options/pcd-franchise", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getCareerData = () =>
  fetchFromAPI("/pages/career", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getTermsConditionsData = () =>
  fetchFromAPI("/pages/terms-and-conditions", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getHowWeWorkData = () =>
  fetchFromAPI("/pages/how-we-work", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

export const getFaqData = () =>
  fetchFromAPI("/faqs", {
    // next: { revalidate: 3600 },
    next: { revalidate: 10 },
  });

// ---------------- TYPE/ CATEGORY/ PRODUCTS ROUTE API ----------------
export const getCategoryWiseProducts = (slug: string) =>
  fetchFromAPI(`/products/${slug}`, {
    throw404: true,
    params: { per_page: 9 },
    // next: { revalidate: 600 },
    next: { revalidate: 10 },
  });

export const getTypeWiseProducts = (slug: string) =>
  fetchFromAPI(`/products/type/${slug}`, {
    throw404: true,
    params: { per_page: 9 },
    // next: { revalidate: 600 },
    next: { revalidate: 10 },
  });

export const getAllProducts = () =>
  fetchFromAPI("/products", {
    params: { per_page: 9 },
    // next: { revalidate: 600 },
    next: { revalidate: 10 },
  });

export const getProductDetails = (slug: string) =>
  fetchFromAPI(`/product/${slug}`, {
    params: { per_page: 9 },
    // next: { revalidate: 600 },
    next: { revalidate: 10 },
  });

//-----------------------------------EXTRA CODE------------------------------------
// export const getPcdOpportunity = async () => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_API_URL}/site-options/pcd-franchise`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "X-API-KEY": process.env.API_KEY as string,
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Response was not OK!");
//   }

//   if (response.status === 200) {
//     const pcdOpportunity = await response.json();
//     return pcdOpportunity;
//   }
// };
{
  //OLD UTILITY FUNCTION-----------------------------
  // export const fetchFromAPI = async (endpoint: string) => {
  //   const res = await fetch(`${process.env.SERVER_API_URL}${endpoint}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-API-KEY": process.env.API_KEY as string,
  //     },
  //   });
  //   if (!res.ok) {
  //     throw new Error(`Failed to fetch ${endpoint}`);
  //   }
  //   return res.json();
  // };
}
