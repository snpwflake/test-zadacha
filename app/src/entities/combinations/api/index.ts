import { AxiosResponse } from "axios";
import $api from "../../../http";
import { Combination } from "../model/Combination.types";
interface CombinationsAllParams {
  name?: string;
  pageIndex?: number;
}

interface CombinationsResponse {
  currentPage: number;
  items: Combination[];
  pageSize: number;
  totalPages: number;
  totalCount: number;
}

export default class CombinationsService {
  static async all(
    params: CombinationsAllParams
  ): Promise<AxiosResponse<CombinationsResponse>> {
    return $api.get<CombinationsResponse>("/combinations", { params });
  }

  static async get(id: string): Promise<AxiosResponse<Combination>> {
    return $api.get<Combination>(`/combinations/${id}`);
  }
}
