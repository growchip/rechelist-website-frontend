// Contact Information
export type Contact = {
  address: string;
  email: string;
  phone: string;
};

// Recursive Menu Item
export type MenuItem = {
  id: number;
  title: string;
  url: string;
  icon: string | null;
  target: "_self" | "_blank";
  has_child: number;
  children: MenuItem[];
};

export type MenuGroup = {
  id: number;
  name: string;
  slug: string;
  items: MenuItem[];
};

// Root Object
export type MenuData = {
  menus: MenuGroup[];
  contact: Contact;
};
