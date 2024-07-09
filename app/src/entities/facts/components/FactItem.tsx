import { Fact } from "../model/Fact.types";

const FactItem = ({ item }: { item: Fact }) => {
  return (
    <div
      key={item.factId}
      className="text-center p-4 border rounded-xl border-hidden hover:border-solid hover:border-red-500 hover:bg-inherit hover:shadow-2xl duration-200"
    >
      <h3 className="text-lg font-bold">
        {item.factId} - {item.title}
      </h3>
      <p className="mt-2">{item.description}</p>
    </div>
  );
};

export default FactItem;
