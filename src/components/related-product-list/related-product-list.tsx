"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FC } from "react";
import { FrontProductRelatedCreate200ResponseDataItemsInner } from "@/services";
import ProductionListItem from "../production-list/production-list-item";
import Title from "../title/title";
import Link from "next/link";
export interface RelatedProductListProps {
  relatedProductList: FrontProductRelatedCreate200ResponseDataItemsInner[];
}
const RelatedProductList: FC<RelatedProductListProps> = (props) => {
  const { relatedProductList } = props;
  return (
    <div>
      <div className="flex items-center justify-between">
        <Title>You might also like</Title>
        <Link href={"/product"}>
          <div className="px-32 py-10 text-xs14 text-222222 rounded-40 overflow-hidden bg-D0FF71 cursor-pointer">
            SEE MORE
          </div>
        </Link>
      </div>
      <Swiper>
        {relatedProductList.map(
          (item: FrontProductRelatedCreate200ResponseDataItemsInner) => {
            return (
              <SwiperSlide key={item.id}>
                <ProductionListItem item={item} />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
};
export default RelatedProductList;
