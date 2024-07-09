import { Bean } from "../model/Bean.types";
import BeanItem from "./BeanItem";

const BeansList = ({ items }: { items: Bean[] }) => {
  return (
    <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {items?.map((item: Bean) => (
        <BeanItem key={item.beanId} item={item} />
      ))}
    </div>
  );
};

export default BeansList;
