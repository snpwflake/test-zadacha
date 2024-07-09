import { Fact } from "../model/Fact.types";

const FactsList = ({ items }: { items: Fact[] }) => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-red-500 mt-12">
      {items?.map((item: any) => (
        <div
          key={item.id}
          className="text-center p-4 border rounded-xl border-hidden hover:border-solid hover:border-red-500 hover:bg-inherit hover:shadow-2xl duration-200"
        >
          <h3 className="text-lg font-bold">
            {item.factId} - {item.title}
          </h3>
          <p className="mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FactsList;
