import { BiUser } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";

export const News = ({ data }) => {
  const { urlToImage, title, author, url, description, publishedAt } = data;
  const formattedDate = new Date(publishedAt);
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={urlToImage || "/placeholder.svg?height=200&width=400"}
        alt={title}
        width={400}
        height={200}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <FaCalendarDays className="h-4 w-4 mr-1" />
          <span>{formattedDate.toLocaleString()}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <BiUser className="h-4 w-4 mr-1" />
          <span>{author || "Unknown Author"}</span>
        </div>
      </div>
      <div className="px-6 pb-4">
        <a
          href={url}
          className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          target="blank"
        >
          Read More
        </a>
      </div>
    </div>
  );
};
