import { SortTitle } from "../title/title";
import ProductionListItem from "./production-list-item";

const ProductionList = () => {
  return (
    <div>
      <SortTitle>November</SortTitle>
      <div className="grid gap-10 grid-cols-5 mt-16">
        {Array(100)
          .fill(1)
          .map((_, index) => {
            return <ProductionListItem key={index} />;
          })}
      </div>
      <div className="flex items-center justify-center mt-16">
        <div className="px-32 py-10 text-xs14 text-FFFFFF bg-222222 rounded-40 overflow-hidden">
          SEE MORE
        </div>
      </div>
    </div>
  );
};
export default ProductionList;
