import { History } from "../model/History.types";
const HistoryItem = ({ item }: { item: History }) => {
  return (
    <div className="cursor-default text-center p-4 border rounded-xl hover:bg-inherit hover:shadow-2xl duration-200 text-red-500">
      <h3 className="text-xl font-bold">{item.year}</h3>
      <p className="mt-2 text-red-400">{item.description}</p>
    </div>
  );
};

export default HistoryItem;
