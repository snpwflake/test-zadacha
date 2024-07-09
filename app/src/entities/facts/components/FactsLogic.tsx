import { useState, useEffect } from "react";
import FactsService from "../api";
import { Fact } from "../model/Fact.types";
import FactsList from "./FactsList";
import Loading from "../../../features/Loading";
import Error from "../../../features/Error";
import InfiniteScroll from "../../../features/InfinityScroll";
const FactsLogic = () => {
  const [items, setItems] = useState<Fact[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await FactsService.all({ pageIndex: page });
      const data = response.data;
      setItems((prevItems: any) => [...prevItems, ...data.items]);
      setPage(response.data.currentPage + 1);
      if (response.data.currentPage >= response.data.totalPages) {
        setHasMore(false);
      }
    } catch (error) {
      setError("Failed to fetch facts");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <InfiniteScroll
        onBottomHit={() => fetchData()}
        isLoading={isLoading}
        hasMoreData={hasMore}
        loadOnMount={true}
      >
        <FactsList items={items} />
      </InfiniteScroll>
      {error && <Error message={error} />}
      {isLoading && <Loading />}
    </>
  );
};

export default FactsLogic;
