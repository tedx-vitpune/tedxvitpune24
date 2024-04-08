import React from "react";
import imageData from "../components/lookbook/images"; 

const Lookbook = () => {
  return (
    <div className="flex pt-16 mx-auto w-4/5 justify-center content-center transition duration-300 flex-wrap">
      <div className="flex flex-row flex-wrap w-auto h-auto justify-center">
        {imageData.map((image, index) => (
          <div
            className="m-2 overflow-hidden"
            key={index}
          >
            <figure className="relative">
              <img
                src={image.url}
                alt={image.alt}
                className="block w-full h-[28rem] object-cover transition duration-300 hover:scale-110"
              />
              <figcaption className="absolute bottom-0 left-0 p-6 w-full font-sans text-base text-white opacity-0 bg-gradient-to-t from-black via-transparent to-transparent transition duration-300 hover:opacity-100">
                {image.caption}
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lookbook;