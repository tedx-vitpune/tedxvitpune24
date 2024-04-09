"use client";
import { motion, useTransform } from "framer-motion";
import { useMemo, useRef, useEffect } from "react";

import useScrollImageSequenceFramerCanvas from "@/hooks/useScrollImageSequenceFramerCanvas";
import Image from "next/image";

const createImage = (src: string) => {
	if (typeof window === "undefined") return null;
	const img = document.createElement("img");
	img.src = src;
	return img;
};

const handleDrawCanvas = (
	img: HTMLImageElement,
	ctx: CanvasRenderingContext2D
) => {
	if (typeof window === "undefined") return null;
	const canvas = ctx.canvas;
	const widthRatio = canvas.width / img.width;
	const heightRatio = canvas.height / img.height;
	let ratio;
	if (window.innerWidth < 900) {
		ratio = widthRatio + heightRatio / 2.4;
	} else {
		ratio = Math.max(widthRatio, heightRatio);
	}
	// const ratio = Math.min(widthRatio, heightRatio);
	const centerX = (canvas.width - img.width * ratio) / 2;
	const centerY = (canvas.height - img.height * ratio) / 2;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(
		img,
		0,
		0,
		img.width,
		img.height,
		centerX,
		centerY,
		img.width * ratio,
		img.height * ratio
	);
};

const Hero = () => {
	const keyframes = useMemo(
		() =>
			[...new Array(217)].map((_, i) =>
				createImage(`/hero/${i.toString().padStart(4, "0")}.png`)
			),
		[]
	);

	const containerRef = useRef<HTMLElement>(null);
	const [progress, canvasRef] = useScrollImageSequenceFramerCanvas({
		onDraw: handleDrawCanvas,
		keyframes: keyframes.filter(
			(frame) => frame !== null
		) as HTMLImageElement[],
		scrollOptions: {
			target: containerRef,
			offset: ["start", "end"],
		},
	});

	// We know that the entire animation spans across 4 screen height.
	const opacity = useTransform(progress, [0, 0.5, 1], [1, 1, 0]);

	return (
		<section ref={containerRef} className='h-[270.4vh] lg:h-[400vh]'>
			<div className='sticky top-0 w-full h-auto'>
				<canvas
					ref={canvasRef}
					className='absolute inset-0 block h-[67.6vh] lg:h-screen w-[100%] object-cover'
				/>
				<div className='mx-auto flex h-[67.6vh] lg:h-screen max-w-6xl items-center justify-center px-12'>
					<motion.h1
						style={{ opacity }}
						className='heading text-center text-4xl font-semibold text-white md:text-7xl'
					></motion.h1>
				</div>
			</div>
			<motion.div
				style={{ opacity }}
				className='h-[33.4vh] lg:h-0 bg-about rounded-t-[40px] flex items-center justify-center text-black tracking-widest fixed font-msbold text-2xl w-full'
			>
				SCROLL
			</motion.div>
		</section>
	);
};

export default Hero;
