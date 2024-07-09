import { AxiosResponse } from "axios";
import $api from "../../../http";
import { Bean } from "../model/Bean.types";
interface BeamsAllParams {
  groupName?: string;
  flavorName?: string;
  colorGroup?: string;
  glutenFree?: boolean;
  sugarFree?: boolean;
  seasonal?: boolean;
  kosher?: boolean;
  pageIndex?: number;
  pageSize?: number;
}

interface BeansResponse {
  currentPage: number;
  items: Bean[];
  pageSize: number;
  totalPages: number;
  totalCount: number;
}

export default class BeansService {
  static async all(
    params: BeamsAllParams
  ): Promise<AxiosResponse<BeansResponse>> {
    return $api.get<BeansResponse>("/beans", { params });
  }

  static async get(id: string): Promise<AxiosResponse<Bean>> {
    return $api.get<Bean>(`/beans/${id}`);
  }
}
