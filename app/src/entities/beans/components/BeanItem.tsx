import { Bean } from "../model/Bean.types";

const BeanItem = ({ item }: { item: Bean }) => {
  return (
    <a
      href={`/beans/${item.beanId}`}
      key={item.beanId}
      className="relative p-4 py-8 border border-inherit rounded-xl border-hidden hover:border-solid hover:border-red-500 hover:bg-inherit hover:shadow-2xl hover:scale-[1.01] transition-all duration-200 ease-in-out "
    >
      <h3 className="text-xl font-semibold relative z-10 text-center text-red-500">
        {item.flavorName}
      </h3>
      <div className="aspect-square w-full flex items-center mt-8">
        <img loading="lazy" src={item.imageUrl} alt="" className="w-full" />
      </div>

      <p className="text-center text-red-400 text-sm relative z-10 mt-8">
        {item.description}
      </p>
    </a>
  );
};

export default BeanItem;
