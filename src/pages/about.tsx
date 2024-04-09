import React from "react";

const About = () => {
	return (
		<div>
			<div className='w-11/12 py-24 lg:w-4/5 mx-auto'>
				<h1 className='text-5xl heading my-28 text-center'>About Us</h1>
				<div id='flex flex-col'>
					<div className='sticky top-40 mt-10 bg-black/50 backdrop-blur-md px-12 py-10 rounded-cc'>
						<div className='flex flex-col gap-6'>
							<h2 className='heading text-5xl'>
								What is <span className='font-mblack text-red-600'>TED</span> ?
							</h2>
							<p className='text-sm lg:text-lg text-justify'>
								TED is a non-profit organization devoted to Ideas Worth
								Spreading. It started as a four-day conference in California 39
								years ago, believing passionately in the power of ideas to
								change attitudes and lives and welcoming people from every
								discipline and culture who seek a deeper understanding of the
								world. Today, the two annual TED Conferences invite the world`s
								leading thinkers and doers to speak for 18 minutes or less, and
								the total number of events conducted till now is more than 6000.
							</p>
						</div>
					</div>
					<div className='sticky top-40 mt-10 bg-black/50 backdrop-blur-md px-12 py-10 rounded-cc'>
						<div className='flex flex-col gap-6'>
							<h2 className='heading text-5xl'>
								What is <span className='font-mblack text-red-600'>TEDx</span> ?
							</h2>
							<p className='text-sm lg:text-lg text-justify'>
								In the spirit of ideas worth spreading, TEDx is a TED-created
								program of local, self-organized events that bring people
								together to share a TED-like experience. These events are
								community driven and are organized by passionate individuals who
								seek to uncover new ideas and share the latest research in their
								field of expertise that spark conversations in their communities
								and ultimately elevate them to a global stage. TEDx events aim
								to integrate ideas from every nook and corner of the world,
								thus, extending the boundaries of views and ideas.
							</p>
						</div>
					</div>
					<div className='sticky top-40 mt-10 bg-black/50 backdrop-blur-md px-12 py-10 rounded-cc'>
						<div className='flex flex-col gap-6'>
							<h2 className='heading text-4xl'>
								What is <span className='font-mblack text-red-600'>TEDx</span>
								<span className='font-mont'>VITPune</span>?
							</h2>
							<p className='text-sm lg:text-lg text-justify'>
								TEDxVITPune was among the first TEDx events in Pune and has
								grown to be a premier platform for furthering TEDs mission of
								Ideas Worth Spreading within its local community. Over the past
								nine events, TEDxVITPune has brought together visionaries,
								thinkers, and doers of different disciplines from around the
								country to create a one-day event filled with ideas and
								discussions that contribute to meaningful change. The event has
								hosted the likes of Amira Gill, Avinash Ramanathan, Mahesh Kale,
								Debanshu Roy, Jishnu Chatterjee, Mark Hannant, Ajit Kembhavi,
								Avinash Dharmadhikari, Niranjan Pedanekar, Chintan Ruparel,
								Kunal Jagwani, and Swanandi Tikekar.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
