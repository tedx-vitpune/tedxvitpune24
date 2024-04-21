/* eslint-disable @next/next/no-img-element */
import ccBTS from "@/components/CC/ccBTS";

const BTSSection = () => {
  return (
    <div className="pb-8">
      <h2 className="text-4xl py-4 font-extrabold font-msbold text-black text-center m-3">
        Behind The Scenes
      </h2>
      <div className="flex flex-row flex-wrap w-auto h-auto justify-center">
        {ccBTS.map((image, index) => (
          <div className="m-2 overflow-hidden" key={index}>
            <figure className="relative">
              <img
                src={image.url}
                alt={image.alt}
                className="block w-full h-[16rem] object-cover transition duration-300 hover:scale-110 rounded-cc lookbook-image"
              />
              {/*<figcaption className="absolute bottom-0 left-0 p-6 w-full font-sans text-base text-white opacity-0 bg-gradient-to-t from-black via-transparent to-transparent transition duration-300 hover:opacity-100">
                {image.caption}
        </figcaption>*/}
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BTSSection;
