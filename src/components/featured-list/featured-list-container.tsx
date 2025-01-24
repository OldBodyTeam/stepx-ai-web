import { statsPopularCreate } from "@/app/(home)/article/[articleName]/[articleId]/actions";
import Title from "../title/title";
import FeaturedList from "./featured-list";

const FeaturedListContainer = async () => {
  const list = await statsPopularCreate({ page: 1, page_size: 20 });
  return (
    <div>
      <Title>Featured</Title>
      <FeaturedList
        list={list?.items ?? []}
        hasMore={list?.has_more ?? false}
        page={1}
        pageSize={20}
      />
    </div>
  );
};
export default FeaturedListContainer;
