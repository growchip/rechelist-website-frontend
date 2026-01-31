//--------------------CERTIFICATES TYPES-------------------------
export type CertificationsType = {
  title: string;
  description: string;
  certifications: { image: string }[];
};

//--------------------SPECIALITY TYPES-------------------------
export type SpecialityType = {
  title: string;
  subtitle: string;
  map_image: string;
  features: { icon: string; title: string; description: string }[];
};

//--------------------PCD PHARMA OPPORTUNITY TYPE-------------------------
export type PcdFranchise = {
  id: string;
  title: string;
  content: string;
  offers: string[];
  image: string;
};

export type PcdFranchiseResponse = {
  success: boolean;
  data: PcdFranchise;
  message: string;
};

//--------------------TESTIMONIALS TYPE-------------------------
export type Testimonial = {
  id: number;
  name: string;
  company: string;
  photo: string | null;
  message: string;
  created_at: string;
};

export type TestimonialsResponse = {
  status: boolean;
  data: Testimonial[];
};

//--------------------ABOUT US TYPE-------------------------
export type AboutData = {
  id: number;
  name: string;
  slug: string;
  content: string;
  image: string | null;
  description: string;
  template: string;
  banner: string | null;
  seo: {
    seo_title: string;
    seo_description: string;
    seo_image: string;
  };
  gallery: string[];
  created_at: string;
};

//--------------------FAQ TYPE-------------------------
export type FAQData = {
  status: string;
  data: { id: number; title: string; content: string }[];
};
