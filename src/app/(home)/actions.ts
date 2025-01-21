import {
  FrontCategoryListCreate200ResponseDataItemsInner,
  FrontCategoryListCreateRequest,
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
export { getFrontCategoryList };
