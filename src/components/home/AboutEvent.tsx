"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const AboutEvent = () => {
	return (
		<div className='h-screen bg-about absolute top-[170.4vh] lg:top-[300vh] w-full rounded-t-[40px] px-4 py-16 lg:px-36 lg:py-24 flex flex-col gap-8 transition'>
			<div className='flex flex-col items-center justify-center'>
				<Image src={"/Pivtol.png"} alt='pivtol' width={50} height={100} />
				<h1 className='text-black text-lg lg:text-2xl font-msbold tracking-widest text-center'>
					THE SPACE BETWEEN
				</h1>
				<h3 className='heading bg-cliptext bg-clip-text text-transparent text-5xl md:text-9xl mt-6 lg:mt-16 font-mblack text-center'>
					27 APRIL 2024
				</h3>
			</div>
			<p className='py-4 text-lg lg:text-xl text-black text-center'>
				We fearlessly embark on a journey of discovery, navigating through the
				unfamiliar paths of a complex problem. Our thirst for knowledge leads us
				to constantly seek fresh insights and perspectives that will steer us
				towards the right path. By immersing ourselves in the diverse realities
				we encounter, we strive to reveal the concealed truths that will guide
				us to a place of genuine tranquility and inner peace, even amid chaos
				and uncertainty.
			</p>
			{/* <Image
				src={"/hand.png"}
				className='absolute bottom-0 right-0 z-20'
				alt='hand'
				width={430}
				height={430}
			/> */}
			<div className='flex justify-center items-center z-50'>
				<button className='px-24 py-4 bg-black text-white z-50 text-2xl rounded-full shadow-2xl shadow-black/50 hover:shadow-black/70 hover:bg-cliptext transition-all font-mbold tracking-wide'>
					Grab Your Tickets
				</button>
			</div>
		</div>
	);
};

export default AboutEvent;
