import { StatsPopularCreate200ResponseDataItemsInner } from "@/services";
import { formatNumber } from "@/utils/format";
import { Typography } from "antd";
import Image from "next/image";
import { FC } from "react";
export interface ProductionTitleProps
  extends StatsPopularCreate200ResponseDataItemsInner {
  poi: number;
}
const FeaturedListItem: FC<ProductionTitleProps> = (props) => {
  const { product_name, subtitle, total_views } = props;
  return (
    <div className="rounded-16 overflow-hidden border-1 border-solid border-E8E8E9 min-w-332 w-332">
      <div className="p-16 flex items-center space-x-16">
        <div className="w-46 h-46 rounded-8 overflow-hidden bg-D0FF71">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/production/love.png`}
            alt="logo"
            width={46}
            height={46}
          />
        </div>
        <div>
          <div className="flex items-center mb-6">
            <Typography.Title
              className="!text-xs16 !font-medium !text-222222 !mr-6 !mb-0"
              ellipsis={{ rows: 1, tooltip: true }}
            >
              {product_name}
            </Typography.Title>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/production/yes.png`}
              alt="yes"
              width={20}
              height={20}
            />
          </div>
          <Typography.Title
            className="!text-xs12 !text-222222"
            ellipsis={{ rows: 1, tooltip: true }}
          >
            {subtitle}
          </Typography.Title>
        </div>
      </div>
      <div className="px-16 py-12 flex items-center justify-between bg-F5F5F5">
        <div className="text-222222 text-xs12">CYBER BYET PTE. LTD</div>
        <div className="flex items-center">
          <div className="text-222222 text-xs12">
            {formatNumber(total_views || 0)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedListItem;
