import { Title } from "../title/title";
import FeaturedListItem from "./featured-list-item";

const FeaturedList = () => {
  return (
    <div>
      <Title>Featured</Title>
      <div className="space-y-12 mt-16">
        {Array(10)
          .fill(1)
          .map((_, index: number) => {
            return <FeaturedListItem key={index} />;
          })}
      </div>
    </div>
  );
};
export default FeaturedList;
