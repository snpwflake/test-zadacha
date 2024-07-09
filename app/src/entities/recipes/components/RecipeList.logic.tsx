import { useEffect, useState } from "react";
import RecipesService from "../api";
import RecipeList from "./RecipeList";
import { Recipe } from "../model/Recipe.types";
import Loading from "../../../features/Loading";
import Error from "../../../features/Error";
import InfiniteScroll from "../../../features/InfinityScroll";
const RecipeListLogic = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchRecipes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await RecipesService.all({ pageIndex: page });
      setRecipes((state) => [...state, ...response.data.items]);
      setPage(response.data.currentPage + 1);
      if (response.data.currentPage >= response.data.totalPages) {
        setHasMore(false);
      }
    } catch (error) {
      setError("Failed to fetch recipes");
    }
    setIsLoading(false);
  };

  return (
    <>
      <InfiniteScroll
        onBottomHit={() => fetchRecipes()}
        isLoading={isLoading}
        hasMoreData={hasMore}
        loadOnMount={true}
      >
        <RecipeList recipes={recipes} />
      </InfiniteScroll>
      {isLoading && <Loading />}
      {error && <Error message={error} />}
    </>
  );
};

export default RecipeListLogic;
