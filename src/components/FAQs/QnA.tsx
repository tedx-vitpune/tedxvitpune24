import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function QnA({
	id,
	question,
	answer,
}: {
	id: string;
	question: string;
	answer: string;
}) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const accordionHeader = document.querySelectorAll(
			`#${id}-accordion-header`
		);
		accordionHeader.forEach((header) => {
			header.addEventListener("click", function () {
				const accordionContent = header.parentElement?.querySelector(
					`#${id}-accordion-content`
				) as HTMLElement;
				let accordionMaxHeight = accordionContent?.style.maxHeight;
				if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
					accordionContent.style.maxHeight = `${
						(accordionContent?.scrollHeight ?? 0) + 32
					}px`;
					header.parentElement?.classList.add("bg-sky-950");
					setIsOpen(true);
				} else {
					accordionContent.style.maxHeight = `0px`;
					header.parentElement?.classList.remove("bg-sky-950");
					setIsOpen(false);
				}
			});
		});
	}, []);

	return (
		<>
			<div className='transition hover:bg-sky-950 my-2 py-1'>
				<div
					id={`${id}-accordion-header`}
					className='accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16'
				>
					{isOpen ? <FaMinus /> : <FaPlus />}
					<h3 className='font-bold text-xl'>{question}</h3>
				</div>
				<div
					id={`${id}-accordion-content`}
					className='accordion-content px-5 pt-0 overflow-hidden max-h-0'
				>
					<p className='leading-6 text-lg pl-9 text-justify mb-6'>{answer}</p>
				</div>
			</div>
		</>
	);
}
