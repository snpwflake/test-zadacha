import SearchIcon from "../icons/Search";

const InputSearch = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="relative z-10 w-full">
      <button className="absolute top-1/2 right-3 -translate-y-1/2 text-red-300">
        <SearchIcon />
      </button>
      <input
        type="text"
        className="px-3 py-2 rounded-2xl w-full outline-none border border-red-300"
        {...props}
      />
    </div>
  );
};

export default InputSearch;
