import HistoryLogic from "../entities/history/components/HistoryLogic";

const HistoryPage = () => {
  return (
    <div className="mt-12 w-full">
      <h2 className="text-center text-red-500 font-semibold text-4xl font-mono">
        Explore All History...
      </h2>
      <div className="mt-12 w-full">
        <HistoryLogic />
      </div>
    </div>
  );
};

export default HistoryPage;
