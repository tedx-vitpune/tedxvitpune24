"use client";
import React from "react";

const AboutEvent = () => {
	return (
		<div className='h-screen bg-white absolute top-[300vh] w-full rounded-t-[40px] px-36 py-32 flex flex-col gap-8'>
			<div className='flex flex-col justify-center'>
				<h1 className='text-black text-2xl font-msbold tracking-widest text-center'>
					THE SPACE BETWEEN
				</h1>
				<h3 className='heading text-black text-7xl md:text-7xl lg:text-9xl mt-20 font-mblack text-center'>
					27 APRIL 2024
				</h3>
			</div>
			<p className='py-4 text-xl text-black text-center'>
				We fearlessly embark on a journey of discovery, navigating through the
				unfamiliar paths of a complex problem. Our thirst for knowledge leads us
				to constantly seek fresh insights and perspectives that will steer us
				towards the right path. By immersing ourselves in the diverse realities
				we encounter, we strive to reveal the concealed truths that will guide
				us to a place of genuine tranquility and inner peace, even amid chaos
				and uncertainty. The world is brimming with fragments of inspiration,
				ideas, and emotions. Our unique experiences shape us into the
				individuals we are today, each one remarkable in its own way. All we
				need to do is unearth and piece together these fragments, unlocking our
				full potential.
			</p>
			<div className='flex justify-center items-center'>
				<button className='px-24 py-4 bg-black text-white text-2xl rounded-full shadow-2xl shadow-black/50 hover:shadow-black/70 hover:text-black hover:bg-white transition-all'>
					Register
				</button>
			</div>
		</div>
	);
};

export default AboutEvent;
