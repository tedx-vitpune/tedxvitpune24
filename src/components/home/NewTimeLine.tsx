import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function TimeLine() {
	const [activePane, setActivePane] = useState(6);

	const panes = [
		{
			year: "2015",
			color: "bg-[#1dc8fc]",
			title: "Growth",
			subtitle: "The Pilot | Ed 01",
			content: `The "Growth" of TEDxVITPune began in April 2015, as we aspired to put forth the best of all events with a mission to bring together brilliant minds competent in "Spreading Ideas". With a 9 speaker line-up, the pilot event garnered attention all across Pune and was set to embark on a journey toseek inspiration from revolutionary ideas.`,
			videoLink:
				"https://www.youtube.com/playlist?list=PL0687I2dEWcksr9RextzeIRFms8yjaKQi",
			icon: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/15_fqiof1.svg",
		},
		{
			year: "2016",
			color: "bg-[#00c0fa]",
			title: "Let's Crossover",
			subtitle: "Traversing All Hurdles | Ed 02",
			content: `After "Growth" came the moment to
				"Crossover". The moment to foster the fire within us
				and fight all barriers for seeking answers to challenging
				existing norms. With an exceptional lineup of speakers and an
				elevated event experience, the second edition of TEDxVITPune
				carried the legacy forward with an intent to put together a
				marvellous experience.`,
			videoLink:
				"https://www.youtube.com/playlist?list=PL0687I2dEWclNQ5LLwulDH20FUvGDsSlG",
			icon: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/16_l6ewrv.svg",
		},
		{
			year: "2017",
			color: "bg-[#00b0f7]",
			title: "Connecting the Dots",
			subtitle: "Pause & Take a Step Back | Ed 03",
			content: `The third edition brought together a national award-winning
				singer and prominent figures like Aniruddha Sen and Sachin
				Sanghe, uniting innovators, filmmakers, and entertainers. Alumni
				shared inspiring life stories, aiding in &quot;Connecting the
				Dots&quot; to uncover everyday magic. The event was enriched by
				speakers who demonstrated the impact of powerful ideas.`,
			videoLink:
				"https://www.youtube.com/playlist?list=PL0687I2dEWcm2PSEaGCYzm_mok3pfVVkT",
			icon: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/17_vas4kn.svg",
		},
		{
			year: "2018",
			color: "bg-[#009bf4]",
			title: "Walking the Wire",
			subtitle: "Infinite Risks & No What-ifs | Ed 04",
			content: `The fourth TEDxVITPune edition, held in October 2018, emphasized
				courage and the journey to discovery. It transcended a typical
				event, offering a blend of powerful talks, innovative ideas, and
				music, featuring notable speakers like Girish Narayandass and
				Anusree Raha, defining the essence of a TEDx experience.`,
			videoLink:
				"https://www.youtube.com/playlist?list=PLsRNoUx8w3rNNKU261Gx7oEemGRuY_kFB",
			icon: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/18_gjf3ro.svg",
		},
		{
			year: "2019",
			color: "bg-[#0184f0]",
			title: "Unravelling The Parallax",
			subtitle: "Broadening The Outlook | Ed 05",
			content: `The 5th Edition of TEDxVITPune delved into uncharted
				territories, merging science and art while emphasizing
				psychological well-being. It showcased compelling talks and
				fostered brilliant ideas, offering attendees a captivating
				experience through various workshops such as coffee brewing and
				decoupage & miniature art, enriching the evening with knowledge
				and creativity.`,
			videoLink:
				"https://www.youtube.com/playlist?list=PLsRNoUx8w3rPXX5LlzJQQNYrvIvz5nhOz",
			icon: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/19_zfvvop.svg",
		},
		{
			year: "2021",
			color: "bg-[#016fed]",
			title: "Reemergence",
			subtitle: "Resurfacing Amidst Turmoil | Ed 06",
			content: `The 6th edition of TEDxVITPune highlighted the resilience needed
			to thrive after challenges, aiming to spark social change and
			personal growth. This online event showcased speakers such as
			Amira Gill and Jishnu Chatterjee, who presented powerful
			concepts and guidance for becoming the best version of oneself
			amidst turmoil.`,
			videoLink:
				"https://www.youtube.com/playlist?list=PL0687I2dEWckuZn6AEuZF8FOnr7T1QcVV",
			icon: "https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/21_wpmxtr.svg",
		},
		{
			year: "2022",
			color: "bg-[#015eea]",
			title: "Embracing the Pandemonium",
			subtitle: "The chaos makes sense | Ed 07",
			content: `The 7th TEDxVITPune edition celebrated embracing chaos and
				uncertainty, recognizing them as paths to growth and resilience.
				With an impressive lineup including Swanandi Tikekar, Samar
				Nakhate, and Sonal Barmecha, the event offered a rich tapestry
				of ideas across diverse themes, encouraging personal and
				collective discovery.`,
			videoLink:
				"https://www.youtube.com/playlist?list=PL0687I2dEWcmn9TrEf8KrLySuacdzmpS3",
			icon: "https://res.cloudinary.com/dq8og12k9/image/upload/v1712680059/2022pivotal.png",
		},
		{
			year: "2023",
			color: "bg-[#0057db]",
			title: "Fragments",
			subtitle: "Puzzle of our design | Ed 08",
			content:
				"The 8th TedXVITPune edition empowered individuals to shape their realities and confront uncertainties. Through inspiring thoughts and transformative ideas, noteworthy speakers like Madhuri Bhaduri, Nishkarsh Sharma, and Prof. Bhaskar Shejwal explored how fragmented emotions can be reassembled into strength and clarity. The event inspired attendees to embrace introspection, resilience, and courage to navigate uncertainties and design unique paths.",
			videoLink: "/",
			icon: "https://res.cloudinary.com/dq8og12k9/image/upload/v1712680060/2023pivotal.png",
		},

		{
			year: "2024",
			color: "bg-[#0057db]",
			title: "The Space Between",
			subtitle: "The Space Between | Ed 09",
			content:
				"TEDxVITPune’s 9th edition, “The Space Between” explores the chaotic journey through uncertainty and discovery. It invites us to embrace the gap between where we are and where we want to be, recognising it as a space rich with potential and insight. The event featured speakers like Karan Darda, who explored the design of Pune's metro stations, and Nachiket Utpat, who shed light on the realities of pet adoption, both delving into the concept of traversing “The Space Between”.",
			videoLink: "/",
			icon: "https://res.cloudinary.com/dq8og12k9/image/upload/v1712680063/Pivtol.png",
		},
	];

	function handleClick(index: number) {
		setActivePane(index === activePane ? activePane : index);
	}

	return (
		<>
			<section className='lg:w-4/5 mx-auto mt-16 pb-32 px-6 lg:px-0'>
				<h2 className='heading text-center text-3xl md:text-5xl text-white py-5 lg:py-14'>
					Our Journey
				</h2>
				<div className='flex flex-col w-full lg:flex-row gap-4 min-h-[55vh] text-black'>
					{panes.map((pane, index) => (
						<div
							key={index}
							className={cn(
								"w-full lg:w-14 min-h-14 lg:h-50vh rounded-cc transition-all duration-700  relative overflow-y-hidden px-4 py-2",
								pane.color,
								index === activePane ? "flex-1 min-h-[55vh]" : "flex-2"
							)}
							onClick={(e) => handleClick(index)}
						>
							<div
								className={cn(
									"relative transition-all duration-700 h-full",
									index === activePane
										? "hidden"
										: "flex lg:flex-col flex-row items-center justify-between transform"
								)}
							>
								<div className='bg-gray-900 flex h-10 icon items-center justify-center rounded-full text-red-500 w-10'>
									<Image src={pane.icon} alt='icon' width={25} height={25} />
								</div>
								<p className='font-mblack text-xl lg:-rotate-90 lg:mb-4'>
									{pane.year}
								</p>
							</div>
							<div
								className={cn(
									"absolute bottom-0 transition-all duration-700 mb-2",
									index === activePane
										? "flex flex-row gap-2 justify-center items-center"
										: "hidden"
								)}
							>
								<div className='bg-gray-900 flex h-10 icon items-center justify-center rounded-full w-10'>
									<Image src={pane.icon} alt='icon' width={25} height={25} />
								</div>
								<div className='flex flex-col gap-0'>
									<h3 className='font-msbold text-base'>{pane.title}</h3>
									<p className='text-sm'>{pane.subtitle}</p>
								</div>
							</div>
							<div
								className={cn(
									"transition-all duration-700 pl-2 pr-6 py-2 text-justify",
									index === activePane ? "block absolute" : "hidden"
								)}
							>
								<p className='text-sm lg:text-base'>{pane.content}</p>
								<button className='mt-4 heading text-sm md:text-base text-border tracking-wide rounded-full px-6 py-2 bg-black text-white transition-all hover:scale-105'>
									<Link
										href={pane.videoLink}
										className='font-msbold'
										target='_blank'
										rel='noreferrer'
									>
										Watch
									</Link>
								</button>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
