//--------------------PRODUCT CATEGORIES AND PRODUCTS RANGE TYPE----------------------
export type CategoryStatus = {
  value: string;
  label: string;
};

export type Category = {
  id: number;
  title: string;
  slug: string;
  desc: string | null;
  short_desc: string | null;
  image: string | null;
  status: CategoryStatus;
  created_at: string;
  updated_at: string;
};

export type CategoriesResponse = {
  success: boolean;
  data: Category[];
  message: string;
};

//-------------------FEATURD PRODUCTS TYPE / CATEGORY WISE PRODUCTS TYPE----------------------
export type Product = {
  id: number;
  title: string;
  combination: string | null;
  mrp: string | null;
  pack: string | null;
  image: string | null;
  type: string | null;
  slug?: string | null;
};

export type ProductCategoryType = {
  id: number;
  title: string;
  short_description: string | null;
  slug: string;
  seo_title: string;
  seo_description: string;
  seo_image: string;
  banner_image: string;
};

export type ProductsResponse = {
  success: boolean;
  category: ProductCategoryType;
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  data: Product[];
  message: string;
};

// --------------------TYPE WISE PRODUCTS TYPE-----------------------
export type TypeWiseProductsResponse = {
  success: boolean;
  type: ProductCategoryType;
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  data: Product[];
  message: string;
};

// --------------------ALL PRODUCTS TYPE-----------------------
export type AllProductsSEO = {
  seo_title: string;
  seo_description: string;
  seo_image: string;
  banner_image: string;
};

export type AllProductsResponse = {
  success: boolean;
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  allproducts: AllProductsSEO;
  data: Product[];
  message: string;
};
