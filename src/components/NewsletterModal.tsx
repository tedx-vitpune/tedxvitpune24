"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "@/firebase/db";
import { FiSend } from "react-icons/fi";

const NewsletterModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const pushDataToFirebase = async () => {
		try {
			// Add a new document with a generated ID
			await addDoc(collection(firestore, "letters"), {
				email: email,
				// In real apps, NEVER store plain text passwords!
			});

			setMessage("Thank you for subscribing!");
			// wait for 2 seconds and close the modal
			setTimeout(() => {
				setIsOpen(false);
			}, 2000);
			//   Router.push('/auth/login');
		} catch (error) {
			console.error("Error storing user data:", error);
			alert("Failed to store data in Firestore");
		}
	};
	const handleEmailSubmission = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (email === "") return;
		if (!email.includes("@")) return;
		if (!email.includes(".")) return;
		if (email.length < 5) return;
		if (email.length > 50) return;
		if (email.includes(" ")) return;
		pushDataToFirebase();
		console.log("Email submitted:", email);
		setEmail("");
	};

	// Automatically show the modal when the component loads
	useEffect(() => {
		setIsOpen(true);
	}, []);

	// Close the modal
	const handleClose = () => setIsOpen(false);

	return (
		<>
			{isOpen && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
					<div className='relative bg-white text-black rounded-lg shadow-lg overflow-hidden w-[90%] max-w-lg'>
						{/* Background Image */}
						<div className='relative h-36 md:h-48'>
							<Image
								src='https://res.cloudinary.com/dq8og12k9/image/upload/v1735207861/Zoomers_1.png' // Replace with your image path
								alt='Newsletter Background'
								layout='fill'
								className='object-cover'
							/>
						</div>

						{/* Content */}
						<div className='p-6'>
							<h2 className='text-2xl font-bold text-center text-black'>
								Next Newsletter drops Dec 29th
							</h2>
							<p className='mt-4 text-center text-gray-800'>
								Our focus on this newsletter is on &apos;here and now&apos;, and
								there&apos;s no better name for it than Gen Z.
							</p>

							{!(message.length > 0) && (
								<form className='flex flex-col gap-2 lg:flex-row mt-8'>
									<input
										type='text'
										name='Email'
										onChange={(e) => setEmail(e.target.value)}
										value={email}
										className='w-full px-4 py-2 rounded-lg bg-gray-300 text-black outline-none focus:border-1 focus:border-[#dd1313]'
										placeholder='Enter your email'
									/>
									<button
										className='px-4 py-2 flex justify-center items-center gap-4 rounded-lg bg-[#dd1313]'
										onClick={handleEmailSubmission}
									>
										<FiSend className='text-white w-6 h-6' /><p className="text-xl lg:hidden">Subscribe</p> 
									</button>
								</form>
							)}
							{message.length > 0 && (
								<p className='text-center text-xl text-red-500 my-8'>
									{message}
								</p>
							)}
						</div>

						{/* "Not Interested" Close Link */}
						{!(message.length > 0) && (
							<div className='text-center pb-4'>
								<button
									onClick={handleClose}
									className='text-sm text-gray-500 hover:text-gray-300 transition'
								>
									Not interested
								</button>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default NewsletterModal;
