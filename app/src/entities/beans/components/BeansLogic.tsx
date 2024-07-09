import { useState, useEffect } from "react";
import BeansService from "../api/index";
import { Bean } from "../model/Bean.types";
import BeansList from "./BeansList";
import Loading from "../../../features/Loading";
import Error from "../../../features/Error";
import InfiniteScroll from "../../../features/InfinityScroll";
const BeansLogic = ({ query }: { query: string | undefined }) => {
  const [items, setItems] = useState<Bean[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const fetchRecipes = async (page: number, query: string | undefined) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await BeansService.all({
        pageIndex: page,
        groupName: query || "",
      });
      setItems((state) => [...state, ...response.data.items]);
      if (response.data.currentPage >= response.data.totalPages) {
        setHasMore(false);
      }
    } catch (error) {
      setError("Failed to fetch recipes");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setSearchQuery(query || "");
    setItems([]);
    setPage(1);
    setHasMore(true);
  }, [query]);

  useEffect(() => {
    fetchRecipes(page, searchQuery);
  }, [page, searchQuery]);

  return (
    <>
      <InfiniteScroll
        onBottomHit={() => setPage((state) => state + 1)}
        isLoading={isLoading}
        hasMoreData={hasMore}
        loadOnMount={true}
      >
        <BeansList items={items} />
      </InfiniteScroll>
      {items.length === 0 && !error && !isLoading && (
        <p className="text-red-500 text-center">No recipes found</p>
      )}
      {error && <Error message={error} />}
      {isLoading && <Loading />}
    </>
  );
};

export default BeansLogic;
