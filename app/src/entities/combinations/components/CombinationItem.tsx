import { Combination } from "../model/Combination.types";

const CombinationItem = ({ item }: { item: Combination }) => {
  return (
    <div className="p-3 ">
      <h1 className="text-2xl text-red-500 font-semibold">{item.name}</h1>
      <p className="text-red-400 text-sm mt-2">
        Combination: {item.tag.join(" ")}
      </p>
    </div>
  );
};
export default CombinationItem;
