import { FiSend } from "react-icons/fi";

export default function Newsletter() {
	return (
		<>
			<h3 className='text-3xl font-bold mb-4 mt-8 lg:mt-0'>
				Join our Newsletter
			</h3>
			<form className='flex flex-col lg:flex-row w-9/12'>
				<input
					type='text'
					name='Email'
					className='w-full lg:w-3/4 px-4 py-2 rounded-lg bg-[#161616] text-white mb-4 lg:mb-0 md:mr-4 outline-none focus:border-1 focus:border-[#dd1313]'
					placeholder='Enter your email'
				/>
				<button className='w-full lg:w-1/4 px-4 py-2 rounded-lg bg-[#dd1313]'>
					<FiSend className='text-white w-6 h-6 mx-auto' />
				</button>
			</form>
			<p className='py-4 w-3/4'>
				Be the first one to hear from us! You can unsubscribe our update any
				time you want.
			</p>
		</>
	);
}
