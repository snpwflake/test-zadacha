import { AxiosResponse } from "axios";
import $api from "../../../http";
import { History } from "../model/History.types";
interface HistoryAllParams {
  year?: number;
  pageIndex?: number;
}

interface HistoryResponse {
  currentPage: number;
  items: History[];
  pageSize: number;
  totalPages: number;
  totalCount: number;
}

export default class HistoryService {
  static async all(
    params: HistoryAllParams
  ): Promise<AxiosResponse<HistoryResponse>> {
    return $api.get<HistoryResponse>("/mileStones", { params });
  }
  // static async get(id: string): Promise<AxiosResponse<History>> {
  //   return $api.get<History>(`/mileStones/${id}`);
  // }
}
