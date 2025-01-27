import { formatNumber } from "@/utils/format";
import ImageList from "../image-list/image-list";
import Image from "next/image";
import { Divider } from "antd";
import Link from "next/link";
import type { FC } from "react";
import { FrontProductDetailCreate200ResponseDataData } from "@/services";
export interface ProductionTitleProps {
  articleDetail?: FrontProductDetailCreate200ResponseDataData;
}
const ProductionTitle: FC<ProductionTitleProps> = (props) => {
  const { articleDetail } = props;
  return (
    <div className="flex space-x-32">
      <ImageList cover={articleDetail?.cover} />
      <div>
        <div className="text-xs12 text-222222 mb-2">
          {articleDetail?.product_name}
        </div>
        <div className="font-medium text-222222 text-[28px]">
          {articleDetail?.subtitle}
        </div>
        <div className="flex items-center space-x-4">
          {(articleDetail?.categories || []).map((v) => {
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
        <div className="flex items-center space-x-8 mt-12">
          <div className="flex items-center space-x-1">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/production/date.png`}
              width={16}
              height={16}
              alt="date"
            />
            <div className="text-222222 text-xs12">2024.12.27</div>
          </div>
          <div className="flex items-center space-x-1">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/production/hot.png`}
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
        <Link href={articleDetail?.product_link || ""} className="block">
          <div className="py-10 bg-D0FF71 rounded-20 flex items-center justify-center font-medium text-xs14 text-222222">
            Visit Site
          </div>
        </Link>
        <div className="line-clamp-3 text-xs12 text-4F5357 mt-12">
          {articleDetail?.description}
        </div>
      </div>
    </div>
  );
};
export default ProductionTitle;
