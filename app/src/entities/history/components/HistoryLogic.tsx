import { useEffect, useState } from "react";
import HistoryService from "../api";
import HistoryList from "./HistoryList";
import { History } from "../model/History.types";
import Loading from "../../../features/Loading";
import Error from "../../../features/Error";
import InfiniteScroll from "../../../features/InfinityScroll";
const HistoryLogic = () => {
  const [items, setItems] = useState<History[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await HistoryService.all({ pageIndex: page });
      setItems((state) => [...state, ...response.data.items]);
      setPage(response.data.currentPage + 1);
      if (response.data.currentPage >= response.data.totalPages) {
        setHasMore(false);
      }
    } catch (error) {
      setError("Failed to fetch history");
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
        <HistoryList items={items} />
      </InfiniteScroll>

      {error && <Error message={error} />}
      {isLoading && <Loading />}
    </>
  );
};

export default HistoryLogic;
