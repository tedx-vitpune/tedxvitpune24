"use client";

import Hero from "@/components/home/Hero";
import AboutEvent from "@/components/home/AboutEvent";
import Cards from "@/components/home/Cards";
import NewTimeLine from "@/components/home/NewTimeLine";
import Speaker from "@/components/home/Speaker";

export default function Home() {
	return (
		<main>
			<Hero />
			<AboutEvent />
			<NewTimeLine />
		</main>
	);
}
