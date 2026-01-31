// Category type
export type Category = {
  id: number;
  name: string;
  slug: string;
  url: string;
  description: string;
};

// Tag type
export type Tag = {
  id: number;
  name: string;
  slug: string;
  description: string;
};

// Blog post type
export type Post = {
  id: number;
  name: string; // Title of the post
  slug: string;
  description: string;
  image: string;
  categories?: Category[];
  tags: Tag[];
  author: string;
  created_at: string; // ISO datetime string
  updated_at: string;
};

// Pagination links (first, last, next, prev)
export type PaginationLinks = {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
};

// Meta pagination info
export type MetaLink = {
  url: string | null;
  label: string;
  active: boolean;
};

export type Meta = {
  current_page: number;
  from: number;
  last_page: number;
  links: MetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

// Main API response type
export type PostsApiResponse = {
  data: Post[];
  links: PaginationLinks;
  meta: Meta;
  error: boolean;
  message: string | null;
};

//-------------------CATEGORY WISE BLOGS TYPE-------------------
export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  author: string;
  created_at: string;
};

export type BlogCategoryResponse = {
  success: boolean;
  category: Category;
  posts: BlogPost[];
  meta: Meta;
};

//-------------------BLOG DETAIL TYPE-------------------
export type Blog = {
  id: number;
  name: string;
  slug: string;
  author_name: string;
  description: string;
  content: string;
  image: string | null;
  banner_image: string | null;
  categories: Category[];
  tags: Tag[];
  created_at: string;
  updated_at: string;
};

export type BlogResponse = {
  data: Blog;
  error: boolean;
  message: string | null;
};
