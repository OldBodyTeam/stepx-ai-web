import {
  FrontCategoryListCreate200ResponseDataItemsInner,
  FrontCategoryListCreateRequest,
  FrontPreloadProductsCreate200ResponseDataItemsInner,
  FrontProductListCreateRequest,
} from "@/services";
import api from "@/utils/service";

const getFrontCategoryList = async (params: FrontCategoryListCreateRequest) => {
  return api.frontCategoryListCreate(params).then((resp) => {
    return (
      resp.data.data?.items ??
      ([] as FrontCategoryListCreate200ResponseDataItemsInner[])
    );
  });
};
const getFrontPreloadProducts = async () => {
  return api.frontPreloadProductsCreate().then((resp) => {
    return (
      resp.data.data?.items ??
      ([] as FrontPreloadProductsCreate200ResponseDataItemsInner[])
    );
  });
};

const getFrontProductList = async (params: FrontProductListCreateRequest) => {
  return api.frontProductListCreate(params).then((resp) => {
    return resp.data.data?.items;
  });
};

export { getFrontCategoryList, getFrontPreloadProducts, getFrontProductList };
