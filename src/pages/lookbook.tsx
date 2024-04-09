/* eslint-disable @next/next/no-img-element */
import React from "react";
import imageData from "../components/lookbook/images";

const Lookbook = () => {
	const handleMouseEnter = (index: number) => {
		const images = document.querySelectorAll(".lookbook-image");
		images.forEach((image, i) => {
			if (i !== index) {
				image.classList.add("grayscale");
			} else {
				image.classList.remove("grayscale");
			}
		});
	};

	const handleMouseLeave = () => {
		const images = document.querySelectorAll(".lookbook-image");
		images.forEach((image) => {
			image.classList.remove("grayscale");
		});
	};

	return (
		<div className='flex pt-24 mx-auto w-4/5 justify-center content-center transition duration-300 flex-wrap'>
			<h1 className='text-5xl heading my-28'>Lookbook</h1>
			<div className='flex flex-row flex-wrap w-full h-auto justify-center'>
				{imageData.map((image, index) => (
					<div
						className='m-2 overflow-hidden'
						key={index}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={handleMouseLeave}
					>
						<figure className='relative'>
							<img
								src={image.url}
								alt={image.alt}
								className='block w-full h-[15.5rem] object-cover transition duration-300 hover:scale-110 rounded-cc lookbook-image'
							/>
							<figcaption className='absolute bottom-0 left-0 p-6 w-full font-sans text-base text-white opacity-0 bg-gradient-to-t from-black via-transparent to-transparent transition duration-300 hover:opacity-100'>
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
