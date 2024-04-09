"use client";

import Hero from "@/components/home/Hero";
import AboutEvent from "@/components/home/AboutEvent";
import Cards from "@/components/home/Cards";
import TimeLine from "@/components/home/TimeLine";
import Speaker from "@/components/home/Speaker";

export default function Home() {
	return (
		<main>
			<div className='overflow-clip'>
				<Hero />
				<AboutEvent />
				{/* <Speaker /> */}
				<TimeLine />
				{/* <Cards /> */}
			</div>
		</main>
	);
}
