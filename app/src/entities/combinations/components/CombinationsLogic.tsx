import { useState, useEffect } from "react";
import CombinationsService from "../api";
import CombinationList from "./CombinationList";
import { Combination } from "../model/Combination.types";
import Loading from "../../../features/Loading";
import Error from "../../../features/Error";
import InfiniteScroll from "../../../features/InfinityScroll";
const CombinationLogic = () => {
  const [items, setItems] = useState<Combination[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await CombinationsService.all({ pageIndex: page });
      setItems((state) => [...state, ...response.data.items]);
      setPage(response.data.currentPage + 1);
      if (response.data.currentPage >= response.data.totalPages) {
        setHasMore(false);
      }
    } catch (error) {
      setError("Failed to fetch combinations");
    }
    setIsLoading(false);
  };
  return (
    <>
      <InfiniteScroll
        onBottomHit={() => fetchData()}
        isLoading={isLoading}
        hasMoreData={hasMore}
        loadOnMount={true}
      >
        <CombinationList items={items} />
      </InfiniteScroll>
      {isLoading && <Loading />}
      {error && <Error message={error} />}
    </>
  );
};

export default CombinationLogic;
