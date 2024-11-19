"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const AboutEvent = () => {
	return (
		<div
			id='about'
			className='h-screen bg-about absolute top-[170.4vh] lg:top-[300vh] w-full rounded-t-[40px] px-4 py-16 lg:px-36 lg:py-24 flex flex-col gap-8 transition'
		>
			<div className='flex flex-col items-center justify-center'>
				<Image src={"/Pivtol.png"} alt='pivtol' width={48} height={100} />
				<h1 className='text-black text-lg lg:text-2xl font-msbold tracking-widest text-center'>
					THE SPACE BETWEEN
				</h1>
				<h3 className='heading-m bg-[#015eea] bg-clip-text text-transparent text-6xl md:text-8xl mt-6 lg:mt-16 text-center'>
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
			{/* <div className='flex flex-col md:flex-row gap-3 md:gap-6 justify-center items-center z-20'>
				<Link href={"/tickets-vit"}>
					<button className='px-14 py-3 bg-black text-white z-50 text-lg lg:text-xl rounded-full shadow-2xl shadow-black/50 hover:shadow-black/70 hover:scale-105 transition-all font-msbold tracking-wide'>
						Tickets (VIT)
						<p className="pt-1 text-lg lg:text-xl">900 Rs</p>
					</button>
				</Link>
				<Link href={"/tickets-non-vit"}>
					<button className='px-14 py-3 bg-black text-white z-50 text-lg lg:text-xl rounded-full shadow-2xl shadow-black/50 hover:shadow-black/70 hover:scale-105 transition-all font-msbold tracking-wide'>
						Tickets (Others)
						<p className="pt-1 text-lg lg:text-xl">1100 Rs+GST</p>
					</button>
				</Link>
			</div>
			<Link href={"/tedx-insta-vit"}>
			<p className="pt-4 text-[red] lg:text-xl text-center">*DM Us On <span className="text-[red] underline ">Instagram</span> To Get A Discount On Non VIT Tickets</p> 
			</Link>
			 */}
			
		</div>
	);
};

export default AboutEvent;
