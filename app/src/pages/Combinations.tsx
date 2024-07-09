import CombinationsLogic from "../entities/combinations/components/CombinationsLogic";

const CombinationPage = () => {
  return (
    <div className="mt-12 w-full">
      <h2 className="text-center text-red-500 font-semibold text-4xl font-mono">
        Explore All Combinations...
      </h2>
      <div className="mt-12 w-full">
        <CombinationsLogic />
      </div>
    </div>
  );
};

export default CombinationPage;
