"use client";
import Image from "next/image";
import React from "react";

const AboutEvent = () => {
	return (
		<div
			id='about'
			className='relative w-full bg-about -mt-[40px] rounded-t-[40px] px-8 py-16 lg:px-36 lg:py-24 flex flex-col gap-8 transition z-10'
		>
			<div className='flex flex-col items-center justify-center'>
				<Image src={"/Pivtol.png"} alt='pivtol' width={48} height={100} />
				<h1 className='text-black text-lg lg:text-2xl font-msbold tracking-widest text-center'>
					THE SPACE BETWEEN
				</h1>
				<h3 className='heading-m bg-[#015eea] bg-clip-text text-transparent text-5xl md:text-8xl mt-6 lg:mt-16 text-center'>
					27 APRIL 2024
				</h3>
			</div>
			<p className='py-4 text-md lg:text-lg text-black text-center'>
				Our theme, &quot;The Space Between,&quot; captures life&rsquo;s dynamism
				and moments shaping our journey. Imagine a child&rsquo;s laughter
				echoing through time, fading into grown-up dreams. This transition, this
				metamorphosis, is our ethereal dance. Like petals unfurling, this space
				is where we grow and blossom. It symbolizes pauses between actions,
				emotions between words, and thoughts between thoughts.
			</p>
		</div>
	);
};

export default AboutEvent;
