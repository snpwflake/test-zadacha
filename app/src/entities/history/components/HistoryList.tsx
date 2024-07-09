import HistoryItem from "./HistoryItem";
import { History } from "../model/History.types";
const HistoryList = ({ items }: { items: History[] }) => {
  return (
    <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {items?.map((item: History) => (
        <HistoryItem key={item.mileStoneId} item={item} />
      ))}
    </div>
  );
};

export default HistoryList;
