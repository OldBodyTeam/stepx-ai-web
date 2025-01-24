import {
  FrontProductDetailCreate200ResponseDataData,
  FrontProductDetailCreateRequest,
  FrontProductRelatedCreateRequest,
  StatsPopularCreateRequest,
} from "@/services";
import api from "@/utils/service";

const getFrontProductDetail = async (
  params: FrontProductDetailCreateRequest
) => {
  return api.frontProductDetailCreate(params).then((resp) => {
    return resp.data.data as FrontProductDetailCreate200ResponseDataData;
  });
};
const getFrontProductRelated = async (
  params: FrontProductRelatedCreateRequest
) => {
  return api.frontProductRelatedCreate(params).then((resp) => {
    return resp.data.data?.items;
  });
};
const statsPopularCreate = async (params: StatsPopularCreateRequest) => {
  const response = await api.statsPopularCreate(params);
  return response.data.data;
};
export { getFrontProductDetail, getFrontProductRelated, statsPopularCreate };
