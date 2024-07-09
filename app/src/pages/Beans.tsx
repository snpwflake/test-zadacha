import { useEffect, useState } from "react";
import BeansLogic from "../entities/beans/components/BeansLogic";
import InputSearch from "../features/Search";
const BeansPage = () => {
  const [search, setSearch] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  console.log(query);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setQuery(search);
    }, 500);

    return () => clearTimeout(timeOut);
  }, [search]);

  return (
    <div className="mt-12">
      <div className="grid grid-cols-12">
        <div className="col-span-3"></div>
        <div className="col-span-6">
          {" "}
          <h2 className="text-center text-red-500 font-semibold text-4xl font-mono">
            Explore All Beans...
          </h2>
        </div>
        <div className="col-span-3">
          <InputSearch placeholder="Search Beans" onChange={onChange} />
        </div>
      </div>

      <div className="mt-12">
        <BeansLogic query={query} />
      </div>
    </div>
  );
};

export default BeansPage;
