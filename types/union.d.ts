//----------------------PRODUCTS----------------------------
import {
  AllProductsResponse,
  ProductsResponse,
  TypeWiseProductsResponse,
} from "./products";

export type CategoryPageProps = {
  pageType: "category";
  data: ProductsResponse;
  slug: string;
};

export type TypePageProps = {
  pageType: "type";
  data: TypeWiseProductsResponse;
  slug: string;
};

export type AllProductsPageProps = {
  pageType: "allProducts";
  data: AllProductsResponse;
  slug?: string;
};

export type UnionProductsProps =
  | CategoryBannerProps
  | TypeBannerProps
  | AllProductsBannerProps;

//----------------------BLOGS----------------------------
import {
  BlogCategoryResponse,
  BlogResponse,
  Post,
  PostsApiResponse,
} from "./blog";

export type AllBlogsPageProps = {
  pageType: "allBlogs";
  data: PostsApiResponse;
  slug?: string;
  recentData?: Post[];
};

export type CategoryBlogsPageProps = {
  pageType: "categoryBlogs";
  data: BlogCategoryResponse;
  slug?: string;
  recentData?: Post[];
};

export type BlogDetailPageProps = {
  pageType: "blogDetail";
  data: BlogResponse;
  slug?: string;
  recentData?: Post[];
};

export type UnionBlogsProps =
  | AllBlogsPageProps
  | BlogDetailPageProps
  | CategoryBlogsPageProps;
