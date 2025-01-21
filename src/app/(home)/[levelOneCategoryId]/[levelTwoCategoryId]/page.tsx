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
    </div>
  );
};
export default categoryListEntry;
