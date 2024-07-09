const Error = ({ message }: { message: string }) => {
  return (
    <div className="w-full h-full flex justify-center flex-col items-center my-8">
      <div className="w-[300px] duration-1000 rounded-full">
        <img src="./beamLoading.png" alt="" />
      </div>
      <p className="text-red-500 text-4xl font-bold">{message}</p>
    </div>
  );
};

export default Error;
