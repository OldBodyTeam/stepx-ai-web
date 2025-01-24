import ProductionList from "@/components/production-list/production-list";
import { getFrontProductList } from "./actions";
import { LIMIT } from "@/constrains/var";

const categoryListEntry = async ({
  params,
}: {
  params: Promise<{
    levelOneCategoryId: string;
    levelTwoCategoryId: string;
    categoryId: string;
  }>;
}) => {
  const { levelTwoCategoryId, categoryId } = await params;
  const products = await getFrontProductList({
    category_id: Number(categoryId),
    page: 1,
    page_size: LIMIT,
  });
  return (
    <div className="px-60">
      <ProductionList
        products={products}
        title={decodeURIComponent(levelTwoCategoryId)}
      />
    </div>
  );
};
export default categoryListEntry;
