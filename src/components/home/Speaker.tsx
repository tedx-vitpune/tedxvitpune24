import React, { useEffect, useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "swiper/css";
import Image from "next/image";

// import imageSlider1 from "../../public/swiperImg/imageSlider1new.webp";
// import imageSlider2 from "../../public/swiperImg/imageSlider2.webp";
// import imageSlider3 from "../../public/swiperImg/madhuri.webp";
// import imageSlider4 from "../../public/swiperImg/bhaskhar.webp";
// import imageSlider5 from "../../public/swiperImg/hrut.webp";
// import imageSlider6 from "../../public/swiperImg/ProfPrafullaGhanekar.webp";
// import imageSlider7 from "../../public/swiperImg/NishkarshSharma.webp";

const SwiperSliderComponenet = () => {
	const [slides, setSlides] = useState(1);
	// useEffect(() => {
	//   let w = window.innerWidth
	//   w < 768 ? setSlides(1) : setSlides(1.5)
	// }, [])

	return (
		<div
			className='relative py-5 mt-16 max-w-6xl mx-auto px-6 lg:px-0'
			style={{
				// backgroundImage: "url('../backg/7.png')",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				//height: '100vh',
			}}
		>
			<div className=' py-5 md:py-[3.75rem] flex items-center justify-between'>
				<h2 className='heading w-full text-white text-center md:text-left text-3xl md:text-5xl'>
					Our Speaker Lineup
				</h2>
				{/* <div className='border border-white px-4 py-3 hidden md:block rounded-full'>
					<p className='text-white text-base font-normal flex items-center justify-center gap-2 heading tracking-wider '>
						<AiOutlineArrowLeft /> Drag <AiOutlineArrowRight />
					</p>
				</div> */}
			</div>

			<div className='cursorReplace'>
				<SwiperComponent
					// spaceBetween={50}
					slidesPerView={slides}
					grabCursor={true}
					className='w-full relative'
					autoplay={{
						delay: 5000,
						disableOnInteraction: true,
					}}
					loop={true}
					modules={[Autoplay]}
				>
					<SwiperSlide className='flex justify-start flex-col p-5 md:p-4 select-none'>
						<div className='h-[100%] w-full flex items-center justify-center'>
							<h3 className='text-2xl text-center font-bold leading-none heading text-white'>
								Coming Soon
							</h3>
						</div>
					</SwiperSlide>
					{/* <SwiperSlide className='flex justify-start flex-col w-fit p-5 md:p-4 select-none'>
						<div className='h-[100%] w-full flex items-end'>
							<div className='w-[100%] h-full md:h-[70vh] flex items-center justify-center flex-col lg:flex-row gap-5'>
								<div className='speaker-img rounded-[3rem] relative w-full md:w-1/3 h-[50vh] md:h-[70vh]'>
									<Image
										src={imageSlider1}
										className='w-full h-full object-cover rounded-[3rem]'
										alt='Ameera Patankar'
									/>
									<div className='md:hidden absolute z-10 bottom-5 flex flex-col w-full items-center gap-3'>
										<h3 className='text-2xl text-center font-bold leading-none heading text-white'>
											Ameera Patankar
										</h3>
										<p className='tracking-wider text-sm heading capitalize text-white'>
											Dancer . Artiste . Polymath
										</p>
									</div>
								</div>
								<div className='flex flex-col justify-between md:justify-evenly w-full md:w-2/3 md:h-[70vh] gap-10'>
									<p className='text-justify hidden md:block text-white tracking-wide text-base md:text-lg'>
										Ameera began Kathak training at a young age under Smt. Shama
										Bhate at Nadroop, Pune. After completing her advanced
										diploma in French, she decided to pursue dance. She won the
										1st first prize at Lalit Kala Kendra, Pune University, where
										she earned her MA in Kathak and a National scholarship from
										the Ministry of Culture. As a dynamic soloist, she has
										performed not only in India but internationally in Austria,
										France, Israel, and South Korea and was recently awarded the
										renowned RangaSetu Fellowship from the Maharashtra Cultural
										Centre, Pune for her outstanding performances.
									</p>
									<p className='text-justify text-white md:hidden tracking-wide text-base md:text-lg'>
										Ameera began Kathak training at a young age under Smt. Shama
										Bhate at Nadroop, Pune. After completing her advanced
										diploma in French, she decided to pursue dance. She won the
										1st first prize at Lalit Kala Kendra, Pune University, where
										she earned her MA in Kathak.
									</p>
									<div className='hidden md:flex flex-col w-full items-center gap-3'>
										<h3 className='text-3xl text-center md:text-5xl font-bold leading-none heading text-white'>
											Ameera Patankar
										</h3>
										<p className='tracking-wider text-base md:text-xl heading capitalize text-white'>
											Dancer . Artiste . Polymath
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='flex justify-start flex-col w-fit p-5 md:p-4 select-none'>
						<div className='h-[100%] w-full flex items-end'>
							<div className='w-[100%] h-full md:h-[70vh] flex items-center justify-center flex-col lg:flex-row gap-5'>
								<div className='speaker-img rounded-[3rem] relative w-full md:w-1/3 h-[50vh] md:h-[70vh]'>
									<Image
										src={imageSlider2}
										className='w-full h-full object-cover rounded-[3rem]'
										alt='Aneesha Nayak'
									/>
									<div className='md:hidden absolute z-10 bottom-5 flex flex-col w-full items-center gap-3'>
										<h3 className='text-2xl text-center font-bold leading-none heading text-white'>
											Aneesha Nayak
										</h3>
										<p className='tracking-wider text-sm heading capitalize text-white'>
											Dauntless . Surfer . Athlete
										</p>
									</div>
								</div>
								<div className='flex flex-col justify-between md:justify-evenly w-full md:w-2/3 md:h-[70vh] gap-10'>
									<p className='text-justify hidden md:block text-white tracking-wide text-base md:text-lg'>
										Aneesha Nayak, an exceptional individual who has made
										remarkable strides in both science and sports. She is an
										expert surfer and has participated in various national and
										international surfing competitions. Her journey has been
										highlighted by documentaries by MTV. She has also
										represented India internationally in science competitions,
										winning a bronze medal at the prestigious I-SWEEEP in Texas,
										and gold medals at I-Fest in Tunisia. She has also worked
										with charitable projects in France and Sri Lanka, empowering
										women.
									</p>
									<p className='text-justify text-white md:hidden tracking-wide text-base md:text-lg'>
										Aneesha Nayak, an exceptional individual who has made
										remarkable strides in both science and sports. She is an
										expert surfer and has participated in various national and
										international surfing competitions. Her journey has been
										highlighted by documentaries by MTV.
									</p>
									<div className='hidden md:flex flex-col w-full items-center gap-3'>
										<h3 className='text-3xl text-center md:text-5xl font-bold leading-none heading text-white'>
											Aneesha Nayak
										</h3>
										<p className='tracking-wider text-base md:text-xl heading capitalize text-white'>
											Dauntless . Surfer . Athlete
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='flex justify-start flex-col w-fit p-5 md:p-4 select-none'>
						<div className='h-[100%] w-full flex items-end'>
							<div className='w-[100%] h-full md:h-[70vh] flex items-center justify-center flex-col lg:flex-row gap-5'>
								<div className='speaker-img rounded-[3rem] relative w-full md:w-1/3 h-[50vh] md:h-[70vh]'>
									<Image
										src={imageSlider3}
										className='w-full h-full object-cover rounded-[3rem]'
										alt='Madhuri Badhuri'
									/>
									<div className='md:hidden absolute z-10 bottom-5 flex flex-col w-full items-center gap-3'>
										<h3 className='text-2xl text-center font-bold leading-none heading text-white'>
											Madhuri Badhuri
										</h3>
										<p className='tracking-wider text-sm heading capitalize text-white'>
											Painter . Luminary . Aesthete
										</p>
									</div>
								</div>
								<div className='flex flex-col justify-between md:justify-evenly w-full md:w-2/3 md:h-[70vh] gap-10'>
									<p className='text-justify hidden md:block text-white tracking-wide text-base md:text-lg'>
										Madhuri started as a painter in the 1970s. Her work has been
										featured in over 50 solo and 100 group exhibitions across
										the globe. Oil paintings are her forte. She has also
										experimented with creating unique sculptures and murals out
										of scrap metal. Madhuri&rsquo;s extraordinary work has been
										recognised with prominent accolades such as the Times of
										India Femina Pune Art award for 2019-20, Women&rsquo;s
										Economic Forum (WEF) at the Hague&rsquo;s Exceptional Woman
										of Excellence in Art award, Sarojini Naidu National Award
										for Women and the Amrita Shergill RashtriyaKala Puraskar.
									</p>
									<p className='text-justify text-white md:hidden tracking-wide text-base md:text-lg'>
										Madhuri started as a painter in the 1970s. Her work has been
										featured in over 50 solo and 100 group exhibitions across
										the globe. Oil paintings are her forte. She has also
										experimented with creating unique sculptures and murals out
										of scrap metal.
									</p>
									<div className='hidden md:flex flex-col w-full items-center gap-3'>
										<h3 className='text-3xl text-center md:text-5xl font-bold leading-none heading text-white'>
											Madhuri Badhuri
										</h3>
										<p className='tracking-wider text-base md:text-xl heading capitalize text-white'>
											Painter . Luminary . Aesthete
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='flex justify-start flex-col w-fit p-5 md:p-4 select-none'>
						<div className='h-[100%] w-full flex items-end'>
							<div className='w-[100%] h-full md:h-[70vh] flex items-center justify-center flex-col lg:flex-row gap-5'>
								<div className='speaker-img rounded-[3rem] relative w-full md:w-1/3 h-[50vh] md:h-[70vh]'>
									<Image
										src={imageSlider4}
										className='w-full h-full object-cover rounded-[3rem]'
										alt='Bhaskar Shejwal'
									/>
									<div className='md:hidden absolute z-10 bottom-5 flex flex-col w-full items-center gap-3'>
										<h3 className='text-2xl text-center font-bold leading-none heading text-white'>
											Bhaskar Shejwal
										</h3>
										<p className='tracking-wider text-sm heading capitalize text-white'>
											Adept . Mentor . Psychologist
										</p>
									</div>
								</div>
								<div className='flex flex-col justify-between md:justify-evenly w-full md:w-2/3 md:h-[70vh] gap-10'>
									<p className='text-justify hidden md:block text-white tracking-wide text-base md:text-lg'>
										Prof Bhaskar is currently the Professor Emeritus in the
										Department of Psychology at S.P. Pune University. His
										extensive expertise and research in the disciplines of
										personality and stress have led to the publication of more
										than 50 research papers at national and international
										conferences. Prof. Bhaskar, who specialises in Industrial
										Psychology, has provided consulting services to numerous
										corporate and state organisations, including established
										corporations such as Mahindra & Mahindra Nasik and the
										Reserve Bank of India.
									</p>
									<p className='text-justify text-white md:hidden tracking-wide text-base md:text-lg'>
										Prof Bhaskar is currently the Professor Emeritus in the
										Department of Psychology at S.P. Pune University. His
										extensive expertise and research in the disciplines of
										personality and stress have led to the publication of more
										than 50 research papers at national and international
										conferences.
									</p>
									<div className='hidden md:flex flex-col w-full items-center gap-3'>
										<h3 className='text-3xl text-center md:text-5xl font-bold leading-none heading text-white'>
											Bhaskar Shejwal
										</h3>
										<p className='tracking-wider text-base md:text-xl heading capitalize text-white'>
											Adept . Mentor . Psychologist
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='flex justify-start flex-col w-fit p-5 md:p-4 select-none'>
						<div className='h-[100%] w-full flex items-end'>
							<div className='w-[100%] h-full md:h-[70vh] flex items-center justify-center flex-col lg:flex-row gap-5'>
								<div className='speaker-img rounded-[3rem] relative w-full md:w-1/3 h-[50vh] md:h-[70vh]'>
									<Image
										src={imageSlider5}
										className='w-full h-full object-cover rounded-[3rem]'
										alt='Hruitvik Ambekar'
									/>
									<div className='md:hidden absolute z-10 bottom-5 flex flex-col w-full items-center gap-3'>
										<h3 className='text-2xl text-center font-bold leading-none heading text-white'>
											Hruitvik Ambekar
										</h3>
										<p className='tracking-wider text-sm heading capitalize text-white'>
											Shuttler . Prodigy . Intellectual
										</p>
									</div>
								</div>
								<div className='flex flex-col justify-between md:justify-evenly w-full md:w-2/3 md:h-[70vh] gap-10'>
									<p className='text-justify hidden md:block text-white tracking-wide text-base md:text-lg'>
										Hruitvik is an International Badminton Player having
										formerly Ranked in the Top 140 in the World Tour Rankings
										and has represented India in World Tour Superseries Tour 500
										level tournaments all across the globe. He is the founder of
										two organizations, both, serving at the PAN India level.
										Tribus Organization which is an NGO works for the upliftment
										and the betterment of the Adivasis across Maharashtra and
										The Tug Of Words is a virtual debating forum. Hruitvik was
										Shortlisted in the &quot;20 Most Brilliant Indian&rsquo;s
										Across the World&quot; for his accomplishments in various
										walks of life.
									</p>
									<p className='text-justify text-white md:hidden tracking-wide text-base md:text-lg'>
										Hruitvik is an International Badminton Player having
										formerly Ranked in the Top 140 in the World Tour Rankings
										and has represented India in World Tour Superseries Tour 500
										level tournaments all across the globe. He is the founder of
										two organizations, both, serving at the PAN India level.
									</p>
									<div className='hidden md:flex flex-col w-full items-center gap-3'>
										<h3 className='text-3xl text-center md:text-5xl font-bold leading-none heading text-white'>
											Hruitvik Ambekar
										</h3>
										<p className='tracking-wider text-base md:text-xl heading capitalize text-white'>
											Shuttler . Prodigy . Intellectual
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='flex justify-start flex-col w-fit p-5 md:p-4 select-none'>
						<div className='h-[100%] w-full flex items-end'>
							<div className='w-[100%] h-full md:h-[70vh] flex items-center justify-center flex-col lg:flex-row gap-5'>
								<div className='speaker-img rounded-[3rem] relative w-full md:w-1/3 h-[50vh] md:h-[70vh]'>
									<Image
										src={imageSlider6}
										className='w-full h-full object-cover rounded-[3rem]'
										alt='Prof Prafulla Ghanekar'
									/>
									<div className='md:hidden absolute z-10 bottom-5 flex flex-col w-full items-center gap-3'>
										<h3 className='text-2xl text-center font-bold leading-none heading text-white'>
											Prafulla Ghanekar
										</h3>
										<p className='tracking-wider text-sm heading capitalize text-white'>
											Historian . Author . Scholar
										</p>
									</div>
								</div>
								<div className='flex flex-col justify-between md:justify-evenly w-full md:w-2/3 md:h-[70vh] gap-10'>
									<p className='text-justify hidden md:block text-white tracking-wide text-base md:text-lg'>
										From witnessing 150 unusual natural phenomena to conquering
										Mt. Everest, he&rsquo;s explored the Himalayas, delved into
										the Western Ghats, and authored 54 travelogues along with a
										series of 25 books on the historical forts of Maharashtra.
										Four of his most recent works have been published in the
										past six months. The first, titled Dolas Bhatkanti
										(Observations & Excursions) is a compilation of 150 unusual
										natural phenomena that Ghanekar has personally witnessed and
										their scientific
									</p>
									<p className='text-justify text-white md:hidden tracking-wide text-base md:text-lg'>
										From witnessing 150 unusual natural phenomena to conquering
										Mt. Everest, he&rsquo;s explored the Himalayas, delved into
										the Western Ghats, and authored 54 travelogues along with a
										series of 25 books on the historical forts of Maharashtra.
									</p>
									<div className='hidden md:flex flex-col w-full items-center gap-3'>
										<h3 className='text-3xl text-center md:text-5xl font-bold leading-none heading text-white'>
											Prafulla Ghanekar
										</h3>
										<p className='tracking-wider text-base md:text-xl heading capitalize text-white'>
											Historian . Author . Scholar
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='flex justify-start flex-col w-fit p-5 md:p-4 select-none'>
						<div className='h-[100%] w-full flex items-end'>
							<div className='w-[100%] h-full md:h-[70vh] flex items-center justify-center flex-col lg:flex-row gap-5'>
								<div className='speaker-img rounded-[3rem] relative w-full md:w-1/3 h-[50vh] md:h-[70vh]'>
									<Image
										src={imageSlider7}
										className='w-full h-full object-cover rounded-[3rem]'
										alt='Nishkarsh Sharma'
									/>
									<div className='md:hidden absolute z-10 bottom-5 flex flex-col w-full items-center gap-3'>
										<h3 className='text-2xl text-center font-bold leading-none heading text-white'>
											Nishkarsh Sharma
										</h3>
										<p className='tracking-wider text-sm heading capitalize text-white'>
											Entrepreneur . Creator . Strategist
										</p>
									</div>
								</div>
								<div className='flex flex-col justify-between md:justify-evenly w-full md:w-2/3 md:h-[70vh] gap-10'>
									<p className='text-justify hidden md:block text-white tracking-wide text-base md:text-lg'>
										Nishkarsh embarked on his journey in 2012 with a passion for
										online businesses. He has since grown his business acumen to
										become the founder and CEO of Kalmin Ross, a successful
										international clothing brand that manufactures in-house and
										ships worldwide from Delhi. As an influencer, he has also
										created content about building online businesses, attracting
										a following of 100,000 online. In addition to that, he is a
										coach and mentor to aspiring eCommerce entrepreneurs and has
										helped his students generate over 50 crores in revenue for
										their businesses.
									</p>
									<p className='text-justify text-white md:hidden tracking-wide text-base md:text-lg'>
										Nishkarsh embarked on his journey in 2012 with a passion for
										online businesses. He has since grown his business acumen to
										become the founder and CEO of Kalmin Ross, a successful
										international clothing brand that manufactures in-house and
										ships worldwide from Delhi.
									</p>
									<div className='hidden md:flex flex-col w-full items-center gap-3'>
										<h3 className='text-3xl text-center md:text-5xl font-bold leading-none heading text-white'>
											Nishkarsh Sharma
										</h3>
										<p className='tracking-wider text-base md:text-xl heading capitalize text-white'>
											Entrepreneur . Creator . Strategist
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide> */}
				</SwiperComponent>

				{/* <div className='border border-white w-1/2 mx-auto px-4 py-3 block md:hidden rounded-full'>
					<p className='text-white text-base font-normal flex items-center justify-center gap-2 heading tracking-wider '>
						<AiOutlineArrowLeft /> Swipe <AiOutlineArrowRight />
					</p>
				</div> */}
			</div>
		</div>
	);
};

export default SwiperSliderComponenet;
