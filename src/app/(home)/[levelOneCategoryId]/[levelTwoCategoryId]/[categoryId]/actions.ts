import { FrontProductListCreateRequest } from "@/services";
import api from "@/utils/service";

const getFrontProductList = async (params: FrontProductListCreateRequest) => {
  return api.frontProductListCreate(params).then((resp) => {
    return resp.data.data?.items;
  });
};
export { getFrontProductList };
