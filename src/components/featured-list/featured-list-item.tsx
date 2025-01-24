import { StatsPopularCreate200ResponseDataItemsInner } from "@/services";
import { formatNumber } from "@/utils/format";
import Image from "next/image";
import { FC } from "react";
export interface ProductionTitleProps
  extends StatsPopularCreate200ResponseDataItemsInner {
  poi: number;
}
const FeaturedListItem: FC<ProductionTitleProps> = (props) => {
  console.log(props);
  return (
    <div className="rounded-16 overflow-hidden border-1 border-solid border-E8E8E9">
      <div className="p-16 flex items-center justify-between space-x-16">
        <div className="w-46 h-46 rounded-8 overflow-hidden bg-D0FF71">
          <Image
            src={"/production/love.png"}
            alt="logo"
            width={46}
            height={46}
          />
        </div>
        <div>
          <div className="flex items-center mb-6">
            <div className="text-xs16 font-medium text-222222 mr-6">
              MimicPC- Open
            </div>
            <Image
              src={"/production/yes.png"}
              alt="yes"
              width={20}
              height={20}
            />
          </div>
          <div className="text-xs12 text-222222">
            Source AI applications platform
          </div>
        </div>
      </div>
      <div className="px-16 py-12 flex items-center justify-between bg-F5F5F5">
        <div className="text-222222 text-xs12">CYBER BYET PTE. LTD</div>
        <div className="flex items-center">
          <div className="text-222222 text-xs12">
            {formatNumber(10000000000000)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedListItem;
