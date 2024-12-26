"use client";

import Image from "next/image";

const Hero = () => {
	return (
		<section className='relative w-full'>
			<div className='sticky top-0 w-full'>
				<div className='relative w-full aspect-[2/3] md:aspect-[3/3] lg:aspect-[16/9]'>
					<Image
						src='https://res.cloudinary.com/dq8og12k9/image/upload/v1712679808/hero/0216.png'
						alt='Hero'
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 100vw'
					/>
				</div>
			</div>
		</section>
	);
};

const NextComponent = () => {
	return (
		<section className='w-full h-[200vh] bg-gray-200'>
			<div className='w-full h-full flex items-center justify-center'>
				<h1 className='text-black text-4xl'>This is the next component.</h1>
			</div>
		</section>
	);
};

export default Hero;
