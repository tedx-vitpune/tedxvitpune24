"use client";
import { motion, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

import useScrollImageSequenceFramerCanvas from "@/hooks/useScrollImageSequenceFramerCanvas";

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
	const canvas = ctx.canvas;
	const widthRatio = canvas.width / img.width;
	const heightRatio = canvas.height / img.height;
	const ratio = Math.max(widthRatio, heightRatio);
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
			[...new Array(145)].map((_, i) =>
				createImage(
					`https://www.apple.com/105/media/us/airpods-3rd-generation/2021/3c0b27aa-a5fe-4365-a9ae-83c28d10fa21/anim/spatial-audio/large/${i
						.toString()
						.padStart(4, "0")}.jpg`
				)
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
	const opacity = useTransform(progress, [0.25, 0.5, 0.75, 1], [0, 1, 1, 0]);
	const scale = useTransform(progress, [0.25, 0.5, 1], [0.95, 1.4, 2]);

	return (
		<section ref={containerRef} className='h-[400vh]'>
			<div className='sticky top-0'>
				<canvas ref={canvasRef} className='absolute inset-0 block' />
				<div className='mx-auto flex h-screen max-w-6xl items-center justify-center px-12'>
					<motion.h1
						style={{ opacity, scale }}
						className='heading text-center text-4xl font-semibold text-white md:text-7xl'
					>
						THE SPACE
						<br />
						BETWEEN
					</motion.h1>
				</div>
			</div>
		</section>
	);
};

export default Hero;
