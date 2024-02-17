export const News = ({ data }) => {
  const { urlToImage, title, author, url, description } = data;
  return (
    <div className="rounded-lg p-4 flex flex-col shadow-md">
      <div className="image w-full aspect-video  ">
        <img
          src={urlToImage}
          alt={`imagen de ${title}`}
          className="aspect-video rounded-md"
          height="200px"
        />
      </div>
      <div className="content my-3">
        <span className="text-red-600 my-3 text-md font-semibold">
          {author}
        </span>
        <h2 className="text- font-medium text-xl">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
      <a
        href={url}
        target="_blank"
        className="text-white text-xl capitalize w-full bg-cyan-600 p-2 text-center mt-auto rounded-md"
        rel="noreferrer"
      >
        see news
      </a>
    </div>
  );
};
