import { AxiosResponse } from "axios";
import $api from "../../../http";
import { Recipe } from "../model/Recipe.types";
interface RecipesAllParams {
  name?: string;
  pageIndex?: number;
}

interface RecipeResponse {
  currentPage: number;
  items: Recipe[];
  pageSize: number;
  totalPages: number;
  totalCount: number;
}

export default class RecipesService {
  static async all(
    params: RecipesAllParams
  ): Promise<AxiosResponse<RecipeResponse>> {
    return $api.get<RecipeResponse>("/recipes", { params });
  }

  static async get(id: string): Promise<AxiosResponse<Recipe>> {
    return $api.get<Recipe>(`/recipes/${id}`);
  }
}
