"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FC, useMemo, useRef } from "react";
import { FreeMode } from "swiper/modules";
import { FrontProductRelatedCreate200ResponseDataItemsInner } from "@/services";
import ProductionListItem from "../production-list/production-list-item";
import Title from "../title/title";
import Link from "next/link";
import { useSize } from "ahooks";
export interface RelatedProductListProps {
  relatedProductList: FrontProductRelatedCreate200ResponseDataItemsInner[];
}
const blockWidth = 196;
const blockMarginRight = 10;
const RelatedProductList: FC<RelatedProductListProps> = (props) => {
  const { relatedProductList } = props;
  const divRef = useRef<HTMLDivElement>(null);
  const size = useSize(divRef);
  const num = useMemo(() => {
    const width = size?.width ?? 0;
    return Math.floor(width / (blockWidth + blockMarginRight));
  }, [size?.width]);
  return (
    <div>
      <div className="flex items-center justify-between" ref={divRef}>
        <Title>You might also like</Title>
        <Link href={"/product"}>
          <div className="px-32 py-10 text-xs14 text-222222 rounded-40 overflow-hidden bg-D0FF71 cursor-pointer">
            SEE MORE
          </div>
        </Link>
      </div>
      <Swiper
        modules={[FreeMode]}
        spaceBetween={10}
        freeMode={true}
        slidesPerView={num}
      >
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
