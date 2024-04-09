import { episodesBySeason } from "@/components/CC/episodesBySeason";

const ccEventCard = () => {
  return (
    <div className="bg-black text-white py-16">
      {Object.entries(episodesBySeason).map(([season, episodes]) => (
        <div
          key={season}
          className="max-w-6xl mx-auto px-6 lg:px-0 flex flex-col items-center"
        >
          <h2 className="text-4xl py-4 tracking-wider font-msbold">{season}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 xl:gap-16 my-12">
            {episodes.map((episode, index) => (
              <div
                key={index}
                className="container bg-no-repeat bg-center bg-cover rounded-cc col-span-2"
                style={{ backgroundImage: `url(${episode.imageUrl})` }}
              >
                <div className="outter">
                  <h3 className="outterTitle text-4xl font-mbold">
                    {episode.title}
                  </h3>
                  <h3 className="outterTitle2 text-2xl font-mbold">{season}</h3>
                  <p className="middle flex text-xl h-[30rem] mt-0 text-justify">
                    {episode.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ccEventCard;
