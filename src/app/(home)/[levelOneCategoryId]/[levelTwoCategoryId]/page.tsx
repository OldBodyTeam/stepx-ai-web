import ProductionList from "@/components/production-list/production-list";

const categoryListEntry = async ({
  params,
}: {
  params: Promise<{ levelOneCategoryId: string; levelTwoCategoryId: string }>;
}) => {
  const { levelOneCategoryId, levelTwoCategoryId } = await params;

  return (
    <div>
      {decodeURIComponent(levelOneCategoryId)}
      {decodeURIComponent(levelTwoCategoryId)}
      <ProductionList />
    </div>
  );
};
export default categoryListEntry;
