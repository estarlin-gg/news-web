import { useNews } from "../context/NewsProvider";

export const Select = () => {
  const { HandleCategory, category } = useNews();
  return (
    <>
      <label htmlFor="select" className="text-white font-medium text-lg">
        Categories
      </label>
      <select
        onChange={HandleCategory}
        value={category}
        name=""
        id="select"
        className="bg-white w-full  outline-none p-2 rounded-lg focus:outline-2 focus:outline-blue-700"
      >
        <option value="general">General</option>
        <option value="technology">Technology</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="entertainment">Entertainment</option>
      </select>
    </>
  );
};
