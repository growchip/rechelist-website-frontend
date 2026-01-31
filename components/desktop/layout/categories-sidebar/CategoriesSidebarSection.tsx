import { getCategories } from "@/apis/get-apis";
import CategoriesSidebar from "./CategoriesSidebar";

export default async function SidebarSection() {
  const categories = await getCategories();
  return <CategoriesSidebar categoriesList={categories} />;
}
