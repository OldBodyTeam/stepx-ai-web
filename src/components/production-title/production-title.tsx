import { formatNumber } from "@/utils/format";
import ImageList from "../image-list/image-list";
import Image from "next/image";
import { Divider } from "antd";
import Link from "next/link";
const ProductionTitle = () => {
  return (
    <div className="flex items-center">
      <ImageList />
      <div>
        <div className="text-xs12 text-222222 mb-2">OpenAI</div>
        <div className="font-medium text-222222 text-[28px]">ChatGPT</div>
        <div className="flex items-center space-x-4">
          {[1, 2, 3, 4].map((v) => {
            return (
              <div
                key={v}
                className="px-8 py-4 rounded-4 text-xs12 font-medium text-222222 border-1 border-solid text-o342"
              >
                {v}
              </div>
            );
          })}
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-1">
            <Image
              src={"/production/date.png"}
              width={16}
              height={16}
              alt="date"
            />
            <div className="text-222222 text-xs12">2024.12.27</div>
          </div>
          <div className="flex items-center space-x-1">
            <Image
              src={"/production/hot.png"}
              width={16}
              height={16}
              alt="date"
            />
            <div className="text-222222 text-xs12">
              {formatNumber(1000000000000000)}
            </div>
          </div>
        </div>
        <Divider />
        <Link href={""}>
          <div className="px-195 py-10 bg-D0FF71 rounded-20 flex items-center justify-center font-medium text-xs14 text-222222">
            Visit Site
          </div>
        </Link>
        <div className="line-clamp-3 text-xs12 text-4F5357">
          Unleash the potential of AI with Soulkyn - your customizable,
          intelligent companion. With realistic memory and unique personalities,
          Soulkyn is your perfect digital companion. Discover the future of AI
          chat bots.
        </div>
      </div>
    </div>
  );
};
export default ProductionTitle;
