"use client";
import { FC, useState } from "react";
import ProductionListItem from "./production-list-item";
import {
  FrontPreloadProductsCreate200ResponseDataItemsInnerProductsInner,
  FrontProductListCreateRequestSortOrderEnum,
} from "@/services";
import { useDebounceFn, useMemoizedFn } from "ahooks";
import { getFrontProductList } from "@/app/(home)/actions";
import { Skeleton, Spin } from "antd";
import { uniqBy } from "lodash";
import SortTitle from "../title/sort-title";
import { LIMIT } from "@/constrains/var";
export interface ProductionListProps {
  title?: string;
  products?: FrontPreloadProductsCreate200ResponseDataItemsInnerProductsInner[];
  timeValue?: number;
}

const ProductionList: FC<ProductionListProps> = (props) => {
  const { title, products = [], timeValue } = props;
  const [productsList, setProductsList] = useState<
    FrontPreloadProductsCreate200ResponseDataItemsInnerProductsInner[]
  >(products || []);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] =
    useState<FrontProductListCreateRequestSortOrderEnum>(
      FrontProductListCreateRequestSortOrderEnum.Desc
    );
  const { run: handleLoadMore } = useDebounceFn(
    async () => {
      setLoading(true);
      const list = await getFrontProductList({
        time_value: timeValue,
        page_size: LIMIT,
        page: page,
        sort_order: sortType,
      });
      setPage((prev) => prev + 1);
      setProductsList((prev) => uniqBy([...prev, ...(list || [])], "id"));
      setLoading(false);
    },
    { leading: true }
  );
  const handleSortData = useMemoizedFn(
    (key: FrontProductListCreateRequestSortOrderEnum) => {
      setSortType(key);
      setPage(1);
      setProductsList([]);
      setTimeout(() => {
        handleLoadMore();
      });
    }
  );
  return (
    <div>
      <SortTitle title={title} onChange={handleSortData}>
        {title}
      </SortTitle>
      {!loading ? (
        <div className="grid gap-10 grid-cols-5 mt-16">
          {(productsList || []).map((item) => {
            return <ProductionListItem key={item.id} item={item} />;
          })}
        </div>
      ) : (
        <div className="py-10">
          <Skeleton />
        </div>
      )}
      {products?.length >= LIMIT ? (
        <div className="flex items-center justify-center mt-16 cursor-pointer">
          <Spin spinning={loading}>
            <div
              className="px-32 py-10 text-xs14 text-FFFFFF bg-222222 rounded-40 overflow-hidden"
              onClick={handleLoadMore}
            >
              SEE MORE
            </div>
          </Spin>
        </div>
      ) : (
        <div className="mt-16" />
      )}
    </div>
  );
};
export default ProductionList;
