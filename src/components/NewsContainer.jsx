import { useNews } from "../context/NewsProvider";
import { News } from "./News";

export const NewsContainer = () => {
  const { news } = useNews();
  return (
    <section className="w-full p-4">
      <h2 className="text-center text-2xl font-bold my-6 overflow-hidden">Latest news from the United States</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {news.map((notice) => (
          <News key={notice.url} data={notice} />
        ))}
      </div>
    </section>
  );
};
