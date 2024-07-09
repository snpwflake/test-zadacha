import { Combination } from "../model/Combination.types";
import CombinationItem from "./CombinationItem";

const CombinationList = ({ items }: { items: Combination[] }) => {
  return (
    <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {items?.map((item: Combination) => (
        <CombinationItem key={item.combinationId} item={item} />
      ))}
    </div>
  );
};
export default CombinationList;
