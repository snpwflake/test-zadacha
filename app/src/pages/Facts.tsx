import FactsLogic from "../entities/facts/components/FactsLogic";

const FactsPage = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-12 font-mono text-red-500">
        Explore All Facts...
      </h2>
      <FactsLogic />
    </div>
  );
};

export default FactsPage;
