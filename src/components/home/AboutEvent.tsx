"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const AboutEvent = () => {
	return (
		<div className='h-screen bg-about absolute top-[170.4vh] lg:top-[300vh] w-full rounded-t-[40px] px-4 py-16 lg:px-36 lg:py-24 flex flex-col gap-8 transition'>
			<div className='flex flex-col items-center justify-center'>
				<Image src={"/Pivtol.png"} alt='pivtol' width={48} height={100} />
				<h1 className='text-black text-lg lg:text-2xl font-msbold tracking-widest text-center'>
					THE SPACE BETWEEN
				</h1>
				<h3 className='heading bg-cliptext bg-clip-text text-transparent text-5xl md:text-8xl mt-6 lg:mt-16 font-mblack text-center'>
					27 APRIL 2024
				</h3>
			</div>
			<p className='py-4 text-sm lg:text-lg text-black text-center'>
				We fearlessly embark on a journey of discovery, navigating through the
				unfamiliar paths of a complex problem. Our thirst for knowledge leads us
				to constantly seek fresh insights and perspectives that will steer us
				towards the right path. By immersing ourselves in the diverse realities
				we encounter, we strive to reveal the concealed truths that will guide
				us to a place of genuine tranquility and inner peace, even amid chaos
				and uncertainty.
			</p>
			<div className='flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center z-20'>
				<Link href={"/tickets-vit"}>
					<button className='px-16 py-4 bg-black text-white z-50 text-lg lg:text-xl rounded-full shadow-2xl shadow-black/50 hover:shadow-black/70 hover:scale-105 transition-all font-mbold tracking-wide'>
						Tickets (VIT)
					</button>
				</Link>
				<Link href={"/tickets-non-vit"}>
					<button className='px-16 py-4 bg-black text-white z-50 text-lg lg:text-xl rounded-full shadow-2xl shadow-black/50 hover:shadow-black/70 hover:scale-105 transition-all font-mbold tracking-wide'>
						Tickets (Others)
					</button>
				</Link>
			</div>
		</div>
	);
};

export default AboutEvent;
