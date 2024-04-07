import Link from "next/link";
import Marquee from "react-fast-marquee";
import { HiMail } from "react-icons/hi";
import { GrYoutube } from "react-icons/gr";
import Newsletter from "./Newsletter";
import { FiSend } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
	return (
		<>
			<footer className='pt-12 px-6 border-t-4 border-[#161616] bg-black text-white'>
				<div className='max-w-6xl mx-auto px-6 lg:flex'>
					<div className='w-full lg:w-1/2 flex flex-col justify-between'>
						<div>
							<Image
								src='/icons/logo-white.png'
								alt='TEDxVITPune Logo'
								width={200}
								height={200}
								className='w-1/2 mx-auto lg:mx-0 p-0'
							/>

							<p className='p-4 w-full lg:w-3/4 text-center lg:text-left'>
								TEDxVITPune, solely believe in the power of ideas to change
								attitudes, lives, and ultimately, the world at large.
							</p>
						</div>
						<div className='hidden lg:flex flex-col w-9/12 my-12 px-4'>
							<h4 className='text-lg w-full font-bold pt-4'>Organizers</h4>
							<div className='flex items-center'>
								<div className='flex justify-center items-center'>
									Rishab Khandelwal
								</div>
								<Link href='tel:+919689898018' className='p-2'>
									+91 86684 73788
								</Link>
							</div>
							<div className='flex items-center'>
								<div className='flex justify-center items-center'>
									Harshita Jain
								</div>
								<Link href='tel:+917666345498' className='p-2'>
									+91 97667 83936
								</Link>
							</div>
							<div className='flex items-center pt-2'>
								<Link
									href='mailto:tedx@vit.edu'
									className='hover:text-[#dd1313] flex'
								>
									<div className='flex justify-center items-center pr-2'>
										<HiMail className='w-6 h-6' />
									</div>
									tedx@vit.edu
								</Link>
							</div>
						</div>
					</div>
					<div className='w-full lg:w-1/2 flex items-center flex-col justify-between'>
						<Newsletter />
						<div className='flex flex-row justify-evenly w-11/12 mt-8'>
							<a
								href='https://instagram.com/tedxvitpune'
								className='w-12 h-12 md:w-16 md:h-16 bg-[#161616] flex justify-center items-center rounded-full'
							>
								<Image
									src='/icons/instagram.svg'
									className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-all'
									alt='instagram'
									width={40}
									height={40}
								/>
							</a>
							<a
								href='https://twitter.com/tedxvitpune'
								className='w-12 h-12 md:w-16 md:h-16 bg-[#161616] flex justify-center items-center rounded-full'
							>
								<Image
									src='/icons/twitter.svg'
									className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-all'
									alt='twitter'
									width={40}
									height={40}
								/>
							</a>
							<a
								href='https://facebook.com/tedxvitpune'
								className='w-12 h-12 md:w-16 md:h-16 bg-[#161616] flex justify-center items-center rounded-full'
							>
								<Image
									src='/icons/facebook.svg'
									className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-all'
									alt='facebook'
									width={40}
									height={40}
								/>
							</a>
							<a
								href='https://www.linkedin.com/company/tedxvitpune/mycompany/'
								className='w-12 h-12 md:w-16 md:h-16 bg-[#161616] flex justify-center items-center rounded-full'
							>
								<Image
									src='/icons/linkedin.svg'
									className='w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-all'
									alt='linkedin'
									width={40}
									height={40}
								/>
							</a>
							<a
								href='https://www.youtube.com/c/TEDxVITPune'
								aria-label='TEDxVITPune Youtube Channel'
								className='w-12 h-12 md:w-16 md:h-16 bg-[#161616] flex justify-center items-center rounded-full'
							>
								<GrYoutube className='w-4 h-4 md:w-6 md:h-6 text-white hover:scale-110 transition-all' />
							</a>
						</div>
						<div className='flex justify-evenly my-12 w-3/4 mx-auto'>
							<Link
								href='/contact'
								className='text-lg text-white hover:underline'
							>
								Contact
							</Link>
							<Link href='/faqs' className='text-lg text-white hover:underline'>
								FAQs
							</Link>

							<Link
								href='/privacy'
								className='text-lg text-white hover:underline'
							>
								Privacy
							</Link>
						</div>
					</div>
				</div>
			</footer>
			<footer className='py-3 bg-black'>
				<div className=' px-5 w-full mx-auto py-4 font-bold text-lg bg-black text-white'>
					<Marquee speed={100} gradient={false} pauseOnHover={true}>
						<p className='mx-2 text-center'>&nbsp;&copy;2024 TEDxVITPune</p>

						<p className='tracking-wide text-center'>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							This independent TEDx event is operated under license from TED.
						</p>
					</Marquee>
				</div>
			</footer>
		</>
	);
}
