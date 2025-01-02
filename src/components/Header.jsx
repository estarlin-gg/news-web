import { Select } from "./Select";

export const Header = () => {
  return (
    <header className="w-full bg-sky-400 flex justify-between gap-2 items-center px-4 py-6 sm:py-3 lg:p-4 sticky top-0">
      <h2 className="text-white text-xl sm:text-2xl font-medium lg:text-xl">News-app</h2>
      <div className=" lg:w-2/6 flex gap-2 items-center">
        <Select />
      </div>
    </header>
  );
};
