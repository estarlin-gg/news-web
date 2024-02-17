import { Select } from "./Select";

export const Header = () => {
  return (
    <header className="w-full bg-sky-400 flex justify-between items-center px-4 py-2 sticky top-0">
      <h1 className="text-white text-2xl font-medium md:text-2xl">News-app</h1>
      <div className=" lg:w-2/6 flex gap-2 items-center">
        <Select />
      </div>
    </header>
  );
};
