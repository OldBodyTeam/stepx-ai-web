const categoryListEntry = async ({ params }: any) => {
  const { levelOneCategoryId, levelTwoCategoryId } = await params;

  return (
    <div>
      {levelOneCategoryId}
      {levelTwoCategoryId}
    </div>
  );
};
export default categoryListEntry;
