import ProductionList from "@/components/production-list/production-list";
import { getFrontProductList } from "./actions";
import { LIMIT } from "@/constrains/var";
import Title from "@/components/title/title";
import Empty from "@/components/empty/empty";

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
  console.log("products", products);
  return (
    <div className="px-60 py-40 h-full">
      {(products?.length || 0) > 0 ? (
        <ProductionList
          products={products}
          title={decodeURIComponent(levelTwoCategoryId)}
        />
      ) : (
        <div className="w-full h-full flex flex-col">
          <Title>{decodeURIComponent(levelTwoCategoryId)}</Title>
          <Empty />
        </div>
      )}
    </div>
  );
};
export default categoryListEntry;
