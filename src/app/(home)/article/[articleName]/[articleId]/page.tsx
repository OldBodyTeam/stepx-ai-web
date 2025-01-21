import FeaturedList from "@/components/featured-list/featured-list";
import ProductionTitle from "@/components/production-title/production-title";
import { Breadcrumb } from "antd";

const ArticleDetail = () => {
  return (
    <div className="px-60 py-24">
      <div className="mb-24">
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
          ]}
        />
      </div>

      <ProductionTitle />
      <div className="flex mt-40 sticky top-173 right-60">
        <div className="flex-1">1</div>
        <FeaturedList />
      </div>
    </div>
  );
};
export default ArticleDetail;
