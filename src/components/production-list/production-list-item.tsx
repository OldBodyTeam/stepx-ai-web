/* eslint-disable @next/next/no-img-element */
import { FrontPreloadProductsCreate200ResponseDataItemsInnerProductsInner } from "@/services";
import { formatNumber } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
export interface ProductionListItemProps {
  item: FrontPreloadProductsCreate200ResponseDataItemsInnerProductsInner;
}
const ProductionListItem: FC<ProductionListItemProps> = (props) => {
  const { item } = props;
  return (
    <Link
      prefetch={false}
      href={`/article/${encodeURIComponent(item.product_name ?? "")}/${
        item.id
      }`}
    >
      <div
        className="p-12 rounded-12 overflow-hidden cursor-pointer"
        style={{ backgroundColor: item.background_color }}
      >
        <div className="flex items-center justify-between">
          <div className="bg-white15 px-6 py-5 flex justify-between items-center rounded-4 overflow-hidden">
            <div className="text-xs12">{formatNumber(10000000000000)}</div>
          </div>
          <Image
            src={"/production/love.png"}
            alt="love"
            width={24}
            height={24}
          />
        </div>
        <div className="mt-4 mb-6 flex items-center justify-center">
          <img alt="logo" src={item?.logo} width={120} height={120} />
        </div>
        <div className="flex items-center mb-2">
          <div className="text-xs14 text-FFFFFF font-medium mr-4">
            {item.product_name}
          </div>
          <Image src={"/production/yes.png"} width={16} height={16} alt="yes" />
        </div>
        <div className="text-xs12 text-FFFFFF mb-10">{item.subtitle}</div>
        <div className="space-x-6 flex items-center">
          {[1, 2].map((v) => {
            return (
              <div
                className="flex items-center justify-center px-8 py-2 text-FFFFFF text-xs12 font-medium border-1 border-solid border-white20 rounded-4 overflow-hidden"
                key={v}
              >
                {v}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};
export default ProductionListItem;
