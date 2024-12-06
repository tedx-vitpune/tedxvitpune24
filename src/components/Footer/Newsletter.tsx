"use client";
import { FiSend } from "react-icons/fi";
import { db } from  "@/firebase/db"; // Adjust the path as necessary
import { ref, push } from "firebase/database";
import { collection, addDoc } from 'firebase/firestore';
import {firestore } from "@/firebase/db"; // Adjust the path as necessary
import { useState } from "react";



export default function Newsletter() {
	const [email,setEmail] = useState("")


	const pushDataToFirebase = async () => {
	

    try {
      // Add a new document with a generated ID
      await addDoc(collection(firestore, 'letters'), {
        email: email,
        // In real apps, NEVER store plain text passwords!
      });

      alert("Email added to the newsletter list");
    //   Router.push('/auth/login');
    } catch (error) {
      console.error('Error storing user data:', error);
      alert('Failed to store data in Firestore');
    }
	  };
	  const handleEmailSubmission = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		if(email === "") return;
		if(!email.includes("@")) return;
		if(!email.includes(".")) return;
		if(email.length < 5) return;
		if(email.length > 50) return;
		if(email.includes(" ")) return;
		pushDataToFirebase();
		console.log("Email submitted:", email);
		setEmail("");
	  }

	return (
		<>
			<h3 className='text-3xl font-bold mb-4 mt-8 lg:mt-0'>
				Join our Newsletter
			</h3>
			<form className='flex flex-col lg:flex-row w-9/12'>
				<input
					type='text'
					name='Email'
					onChange={(e)=>setEmail(e.target.value)}
					value={email}
					className='w-full lg:w-3/4 px-4 py-2 rounded-lg bg-[#161616] text-white mb-4 lg:mb-0 md:mr-4 outline-none focus:border-1 focus:border-[#dd1313]'
					placeholder='Enter your email'
				/>
				<button className='w-full lg:w-1/4 px-4 py-2 rounded-lg bg-[#dd1313]' onClick={handleEmailSubmission} >
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
