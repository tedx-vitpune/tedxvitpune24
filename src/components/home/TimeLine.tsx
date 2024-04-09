import { useState } from "react";
import cn from "classnames";
import styles from "@/styles/timeline.module.css";
import Image from "next/image";

export default function TimeLine() {
	const [pane0, setPane0] = useState(false);
	const [pane1, setPane1] = useState(false);
	const [pane2, setPane2] = useState(false);
	const [pane3, setPane3] = useState(false);
	const [pane4, setPane4] = useState(false);
	const [pane5, setPane5] = useState(false);
	const [pane6, setPane6] = useState(false);
	const [pane7, setPane7] = useState(true);

	const paneClassName = cn(
		styles.pane,
		"cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 lg:min-h-[60vh] min-w-14 overflow-hidden relative rounded-cc transition-all"
	);
	const activePaneClassName = cn(
		styles.pane,
		styles.active,
		"cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-[50vh] md:min-h-[70vh] lg:min-h-[70vh] min-w-14 overflow-hidden relative rounded-cc transition-all"
	);

	function handleClick(idx: number) {
		switch (idx) {
			case 0:
				setPane0(true);
				setPane1(false);
				setPane2(false);
				setPane3(false);
				setPane4(false);
				setPane5(false);
				setPane6(false);
				setPane7(false);
				break;
			case 1:
				setPane0(false);
				setPane1(true);
				setPane2(false);
				setPane3(false);
				setPane4(false);
				setPane5(false);
				setPane6(false);
				setPane7(false);
				break;
			case 2:
				setPane0(false);
				setPane1(false);
				setPane2(true);
				setPane3(false);
				setPane4(false);
				setPane5(false);
				setPane6(false);
				setPane7(false);
				break;
			case 3:
				setPane0(false);
				setPane1(false);
				setPane2(false);
				setPane3(true);
				setPane4(false);
				setPane5(false);
				setPane6(false);
				setPane7(false);
				break;
			case 4:
				setPane0(false);
				setPane1(false);
				setPane2(false);
				setPane3(false);
				setPane4(true);
				setPane5(false);
				setPane6(false);
				setPane7(false);
				break;
			case 5:
				setPane0(false);
				setPane1(false);
				setPane2(false);
				setPane3(false);
				setPane4(false);
				setPane5(true);
				setPane6(false);
				setPane7(false);
				break;
			case 6:
				setPane0(false);
				setPane1(false);
				setPane2(false);
				setPane3(false);
				setPane4(false);
				setPane5(false);
				setPane6(true);
				setPane7(false);
				break;
			case 7:
				setPane0(false);
				setPane1(false);
				setPane2(false);
				setPane3(false);
				setPane4(false);
				setPane5(false);
				setPane6(false);
				setPane7(true);
				break;
		}
	}

	return (
		<>
			<section className='lg:w-4/5 mx-auto mt-16 px-6 lg:px-0'>
				<h2 className='heading text-center text-3xl md:text-5xl text-white py-5 lg:py-14'>
					Our Journey
				</h2>
				<div className='flex flex-col w-full lg:flex-row'>
					<div
						className={pane0 ? activePaneClassName : paneClassName}
						onClick={(e) => handleClick(0)}
					>
						<div
							className={cn(
								styles.background,
								"absolute bg-red-500 duration-500 ease-in-out inset-0 transition-all z-10"
							)}
						>
							<p className='text-sm md:text-md text-white text-justify'>
								The &quot;Growth&quot; of TEDxVITPune began in April 2015, as we
								aspired to put forth the best of all events with a mission to
								bring together brilliant minds competent in &quot;Spreading
								Ideas&quot;. With a 9 speaker line-up, the pilot event garnered
								attention all across Pune and was set to embark on a journey to
								seek inspiration from revolutionary ideas.
							</p>
							<button className='mt-4 heading text-sm md:text-base text-border tracking-wide rounded-full px-6 py-2 bg-black text-white transition-all hover:scale-105'>
								<a
									href='https://www.youtube.com/playlist?list=PL0687I2dEWcksr9RextzeIRFms8yjaKQi'
									className='font-msbold'
									target='_blank'
									rel='noreferrer'
								>
									Watch
								</a>
							</button>
						</div>

						<div className='absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20'></div>
						<div
							className={cn(
								styles.label,
								"absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 lg:mb-3 lg:ml-2 transition-all z-20"
							)}
						>
							<div className='bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-red-500 w-10'>
								<Image
									src='https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/15_fqiof1.svg'
									alt='icon'
									width={25}
									height={25}
								/>
							</div>
							{!pane0 && (
								<div className='lg:-rotate-90 absolute text-black font-mblack uppercase text-2xl text-center lg:bottom-36 lg:-left-1 left-14'>
									2015
								</div>
							)}
							<div
								className={cn(
									styles.content,
									"flex flex-col justify-center leading-tight text-white whitespace-pre"
								)}
							>
								<div className='ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8'>
									Growth
								</div>
								<div className='delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8'>
									The Pilot | Edition 1
								</div>
							</div>
						</div>
					</div>

					<div
						className={pane1 ? activePaneClassName : paneClassName}
						onClick={(e) => handleClick(1)}
					>
						<div
							className={cn(
								styles.background,
								"absolute  bg-center bg-cover bg-orange-500  bg-yellow-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 px-14 sm:px-32 pt-16 md:pt-32 lg:pt-20"
							)}
							style={{
								backgroundImage: "url(/timeline/2.png)",
							}}
						>
							<p className='text-sm lg:text-md text-white text-justify'>
								After &quot;Growth&quot; came the moment to
								&quot;Crossover&quot;. The moment to foster the fire within us
								and fight all barriers for seeking answers to challenging
								existing norms. With an exceptional lineup of speakers and an
								elevated event experience, the second edition of TEDxVITPune
								carried the legacy forward with an intent to put together a
								marvellous experience.
							</p>
							<button className='mt-4 heading text-sm md:text-base text-border tracking-wide rounded-full px-6 py-2 bg-black text-white transition-all hover:scale-105'>
								<a
									href='https://www.youtube.com/playlist?list=PL0687I2dEWclNQ5LLwulDH20FUvGDsSlG'
									className='font-msbold'
									target='_blank'
									rel='noreferrer'
								>
									Watch
								</a>
							</button>
						</div>

						<div className='absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20'></div>
						<div
							className={cn(
								styles.label,
								"absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 lg:mb-3 lg:ml-2 transition-all z-20"
							)}
						>
							<div className='bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-yellow-500 w-10'>
								<Image
									src='https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/16_l6ewrv.svg'
									alt='icon'
									width={25}
									height={25}
								/>
								{!pane1 && (
									<div className='lg:-rotate-90 absolute text-black font-mblack uppercase text-2xl text-center lg:bottom-36 lg:-left-1 left-14'>
										2016
									</div>
								)}
							</div>
							<div
								className={cn(
									styles.content,
									" flex flex-col justify-center leading-tight text-white whitespace-pre"
								)}
							>
								<div className='ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8'>
									Let&rsquo;s Crossover
								</div>
								<div className='delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8'>
									Traversing All Hurdles | Edition 2
								</div>
							</div>
						</div>
					</div>

					<div
						className={pane2 ? activePaneClassName : paneClassName}
						onClick={(e) => handleClick(2)}
					>
						<div
							className={cn(
								styles.background,
								"absolute  bg-center bg-yellow-500 bg-green-img bg-cover  bg-red-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 px-14 sm:px-32 pt-16 md:pt-32 lg:pt-20"
							)}
							style={{
								backgroundImage: "url(/timeline/3.png)",
							}}
						>
							<p className='text-sm lg:text-md text-white text-justify'>
								The third edition brought together a national award-winning
								singer and prominent figures like Aniruddha Sen and Sachin
								Sanghe, uniting innovators, filmmakers, and entertainers. Alumni
								shared inspiring life stories, aiding in &quot;Connecting the
								Dots&quot; to uncover everyday magic. The event was enriched by
								speakers who demonstrated the impact of powerful ideas.
							</p>
							<button className='mt-4 heading text-sm md:text-base text-border tracking-wide rounded-full px-6 py-2 bg-black text-white transition-all hover:scale-105'>
								<a
									href='https://www.youtube.com/playlist?list=PL0687I2dEWcm2PSEaGCYzm_mok3pfVVkT'
									className='font-msbold'
									target='_blank'
									rel='noreferrer'
								>
									Watch
								</a>
							</button>
						</div>
						<div className='absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20'></div>
						<div
							className={cn(
								styles.label,
								"absolute bottom-0 duration-700 ease-in-out flex  left-0 mb-2 ml-3 lg:mb-3 lg:ml-2 transition-all z-20"
							)}
						>
							<div className='bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-green-500 w-10'>
								<Image
									src='https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/17_vas4kn.svg'
									alt='icon'
									width={25}
									height={25}
								/>
								{!pane2 && (
									<div className='lg:-rotate-90 absolute text-black font-mblack uppercase text-2xl text-center lg:bottom-36 lg:-left-1 left-14'>
										2017
									</div>
								)}
							</div>
							<div
								className={cn(
									styles.content,
									"flex flex-col justify-center leading-tight text-white whitespace-pre"
								)}
							>
								<div className='ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8'>
									Connecting the Dots
								</div>
								<div className='delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8'>
									Pause & Take a Step Back | Edition 3
								</div>
							</div>
						</div>
					</div>

					<div
						className={pane3 ? activePaneClassName : paneClassName}
						onClick={(e) => handleClick(3)}
					>
						<div
							className={cn(
								styles.background,
								"absolute  bg-center bg-cover bg-green-500 bg-blue-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 px-14 sm:px-32 pt-16 md:pt-32 lg:pt-20"
							)}
							style={{
								backgroundImage: "url(/timeline/1.png)",
							}}
						>
							<p className='text-sm lg:text-md text-white text-justify'>
								The fourth TEDxVITPune edition, held in October 2018, emphasized
								courage and the journey to discovery. It transcended a typical
								event, offering a blend of powerful talks, innovative ideas, and
								music, featuring notable speakers like Girish Narayandass and
								Anusree Raha, defining the essence of a TEDx experience.
							</p>
							<button className='mt-4 heading text-sm md:text-base text-border tracking-wide rounded-full px-6 py-2 bg-black text-white transition-all hover:scale-105'>
								<a
									href='https://www.youtube.com/playlist?list=PLsRNoUx8w3rNNKU261Gx7oEemGRuY_kFB'
									className='font-msbold'
									target='_blank'
									rel='noreferrer'
								>
									Watch
								</a>
							</button>
						</div>

						<div className='absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20'></div>
						<div
							className={cn(
								styles.label,
								"absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 lg:mb-3 lg:ml-2 transition-all z-20"
							)}
						>
							<div className='bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-blue-500 w-10'>
								<Image
									src='https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/18_gjf3ro.svg'
									alt='icon'
									width={25}
									height={25}
								/>
								{!pane3 && (
									<div className='lg:-rotate-90 absolute text-black font-mblack uppercase text-2xl text-center lg:bottom-36 lg:-left-1 left-14'>
										2018
									</div>
								)}
							</div>
							<div
								className={cn(
									styles.content,
									"flex flex-col justify-center leading-tight text-white whitespace-pre"
								)}
							>
								<div className='ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8'>
									Walking the Wire
								</div>
								<div className='delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8'>
									Infinite Risks & No What-ifs | Edition 4
								</div>
							</div>
						</div>
					</div>

					<div
						className={pane4 ? activePaneClassName : paneClassName}
						onClick={(e) => handleClick(4)}
					>
						<div
							className={cn(
								styles.background,
								"absolute  bg-center bg-cover bg-cyan-500 bg-violet-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 px-14 sm:px-32 pt-16 md:pt-32 lg:pt-20"
							)}
							style={{
								backgroundImage: "url(/timeline/2.png)",
							}}
						>
							<p className='text-sm lg:text-md text-white text-justify'>
								The 5th Edition of TEDxVITPune delved into uncharted
								territories, merging science and art while emphasizing
								psychological well-being. It showcased compelling talks and
								fostered brilliant ideas, offering attendees a captivating
								experience through various workshops such as coffee brewing and
								decoupage & miniature art, enriching the evening with knowledge
								and creativity.
							</p>
							<button className='mt-4 heading text-sm md:text-base text-border tracking-wide rounded-full px-6 py-2 bg-black text-white transition-all hover:scale-105'>
								<a
									href='https://www.youtube.com/playlist?list=PLsRNoUx8w3rPXX5LlzJQQNYrvIvz5nhOz'
									className='font-msbold'
									target='_blank'
									rel='noreferrer'
								>
									Watch
								</a>
							</button>
						</div>

						<div className='absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20'></div>
						<div
							className={cn(
								styles.label,
								"absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 lg:mb-3 lg:ml-2 transition-all z-20"
							)}
						>
							<div className='bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10'>
								<Image
									src='https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/19_zfvvop.svg'
									alt='icon'
									width={20}
									height={20}
								/>
								{!pane4 && (
									<div className='lg:-rotate-90 absolute text-black font-mblack uppercase text-2xl text-center lg:bottom-36 lg:-left-1 left-14'>
										2019
									</div>
								)}
							</div>
							<div
								className={cn(
									styles.content,
									"flex flex-col justify-center leading-tight text-white whitespace-pre"
								)}
							>
								<div className='ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8'>
									Unravelling The Parallax
								</div>
								<div className='delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8'>
									Broadning The Outlook | Edition 5
								</div>
							</div>
						</div>
					</div>

					<div
						className={pane5 ? activePaneClassName : paneClassName}
						onClick={(e) => handleClick(5)}
					>
						<div
							className={cn(
								styles.background,
								"absolute  bg-center bg-cover bg-fuchsia-500 bg-orange-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 px-14 sm:px-32 pt-16 md:pt-32 lg:pt-20"
							)}
							style={{
								backgroundImage: "url(/timeline/3.png)",
							}}
						>
							<p className='text-sm lg:text-md text-white text-justify'>
								The 6th edition of TEDxVITPune highlighted the resilience needed
								to thrive after challenges, aiming to spark social change and
								personal growth. This online event showcased speakers such as
								Amira Gill and Jishnu Chatterjee, who presented powerful
								concepts and guidance for becoming the best version of oneself
								amidst turmoil.
							</p>
							<button className='mt-4 heading text-sm md:text-base text-border tracking-wide rounded-full px-6 py-2 bg-black text-white transition-all hover:scale-105'>
								<a
									href='https://www.youtube.com/playlist?list=PL0687I2dEWckuZn6AEuZF8FOnr7T1QcVV'
									className='font-msbold'
									target='_blank'
									rel='noreferrer'
								>
									Watch
								</a>
							</button>
						</div>

						<div className='absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20'></div>
						<div
							className={cn(
								styles.label,
								"absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 lg:mb-3 lg:ml-2 transition-all z-20"
							)}
						>
							<div className='bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10'>
								<Image
									src='https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/21_wpmxtr.svg'
									alt='icon'
									width={20}
									height={20}
								/>
								{!pane5 && (
									<div className='lg:-rotate-90 absolute text-black font-mblack uppercase text-2xl text-center lg:bottom-36 lg:-left-1 left-14'>
										2021
									</div>
								)}
							</div>
							<div
								className={cn(
									styles.content,
									"flex flex-col justify-center leading-tight text-white whitespace-pre"
								)}
							>
								<div className='ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8'>
									Reemergence
								</div>
								<div className='delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8'>
									Resurfacing Amidst Turmoil | E. 6
								</div>
							</div>
						</div>
					</div>

					<div
						className={pane6 ? activePaneClassName : paneClassName}
						onClick={(e) => handleClick(6)}
					>
						<div
							className={cn(
								styles.background,
								"absolute  bg-center bg-cover bg-pink-700  bg-indigo-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 px-14 sm:px-32 pt-16 md:pt-32 lg:pt-20"
							)}
							style={{
								backgroundImage: "url(/timeline/1.png)",
							}}
						>
							<p className='text-sm lg:text-md text-white text-justify'>
								The 7th TEDxVITPune edition celebrated embracing chaos and
								uncertainty, recognizing them as paths to growth and resilience.
								With an impressive lineup including Swanandi Tikekar, Samar
								Nakhate, and Sonal Barmecha, the event offered a rich tapestry
								of ideas across diverse themes, encouraging personal and
								collective discovery.
							</p>
							<button className='mt-4 heading text-sm md:text-base text-border tracking-wide rounded-full px-6 py-2 bg-black text-white transition-all hover:scale-105'>
								<a
									href='https://www.youtube.com/playlist?list=PL0687I2dEWcmn9TrEf8KrLySuacdzmpS3'
									className='font-msbold'
									target='_blank'
									rel='noreferrer'
								>
									Watch
								</a>
							</button>
						</div>

						<div className='absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20'></div>
						<div
							className={cn(
								styles.label,
								"absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 lg:mb-3 lg:ml-2 transition-all z-20"
							)}
						>
							<div className='bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10'>
								<Image
									src='/2022pivotal.png'
									width={25}
									height={25}
									alt='icon'
								/>
								{!pane6 && (
									<div className='lg:-rotate-90 absolute text-black font-mblack uppercase text-2xl text-center lg:bottom-36 lg:-left-1 left-14'>
										2022
									</div>
								)}
							</div>
							<div
								className={cn(
									styles.content,
									"flex flex-col justify-center leading-tight text-white whitespace-pre"
								)}
							>
								<div className='ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8'>
									Embracing the Pandemonium
								</div>
								<div className='delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8'>
									The chaos makes sense | Edition 7
								</div>
							</div>
						</div>
					</div>

					<div
						className={pane7 ? activePaneClassName : paneClassName}
						onClick={(e) => handleClick(7)}
					>
						<div
							className={cn(
								styles.background,
								"absolute  bg-center bg-cover bg-pink-700  bg-indigo-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 px-14 sm:px-32 pt-16 md:pt-32 lg:pt-20"
							)}
							style={{
								backgroundImage: "url(/timeline/1.png)",
							}}
						>
							<p className='text-sm lg:text-md text-white text-justify'>
								Embracing the chaos and the unknown with open hearts, for it is
								through these experiences that we grow and discover the depths
								of our strength and resilience. The 7th edition of TEDxVITPune
								saw a phenomenal speaker lineup, including Swanandi Tikekar,
								Sandeep Godbole, Samar Nakhate, Suchitha Champak, Abhinav
								Kafare, Deepak Krishnan, Karan Arjun Singh, and Sonal Barmecha,
								spread their ideas on diverse topics.
							</p>
							<button className='mt-4 heading text-sm md:text-base text-border tracking-wide rounded-full px-6 py-2 bg-black text-white transition-all hover:scale-105'>
								<a
									href='https://www.youtube.com/playlist?list=PL0687I2dEWcmn9TrEf8KrLySuacdzmpS3'
									className='font-msbold'
									target='_blank'
									rel='noreferrer'
								>
									Watch
								</a>
							</button>
						</div>

						<div className='absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20'></div>
						<div
							className={cn(
								styles.label,
								"absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 lg:mb-3 lg:ml-2 transition-all z-20"
							)}
						>
							<div className='bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10'>
								<Image
									src='/2022pivotal.png'
									width={25}
									height={25}
									alt='icon'
								/>
								{!pane7 && (
									<div className='lg:-rotate-90 absolute text-black font-mblack uppercase text-2xl text-center lg:bottom-36 lg:-left-1 left-14'>
										2023
									</div>
								)}
							</div>
							<div
								className={cn(
									styles.content,
									"flex flex-col justify-center leading-tight text-white whitespace-pre"
								)}
							>
								<div className='ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8'>
									Fragments
								</div>
								<div className='delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8'>
									The chaos makes sense | Edition 8
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
