import { AxiosResponse } from "axios";
import $api from "../../../http";
import { Fact } from "../model/Fact.types";
interface FactsAllParams {
  title?: string;
  pageIndex?: number;
  pageSize?: number;
}

interface FactsResponse {
  currentPage: number;
  items: Fact[];
  pageSize: number;
  totalPages: number;
  totalCount: number;
}

export default class FactsService {
  static async all(
    params: FactsAllParams
  ): Promise<AxiosResponse<FactsResponse>> {
    return $api.get<FactsResponse>("/facts", { params });
  }

  static async get(id: string): Promise<AxiosResponse<Fact>> {
    return $api.get<Fact>(`/facts/${id}`);
  }
}
