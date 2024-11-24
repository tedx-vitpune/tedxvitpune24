'use client';

import {
	type SpringOptions,
	useMotionValueEvent,
	useScroll,
	useSpring,
} from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

export interface UseScrollImageSequenceFramerCanvasProps {
	onDraw: (img: HTMLImageElement, ctx: CanvasRenderingContext2D) => void;
	keyframes: HTMLImageElement[];
	scrollOptions?: Parameters<typeof useScroll>[0];
	springConfig?: SpringOptions;
}

const useScrollImageSequenceFramerCanvas = ({
	onDraw,
	keyframes,
	scrollOptions,
	springConfig = {
		damping: 50,
		stiffness: 300,
		restSpeed: 0.5,
		restDelta: 0.001,
	},
}: UseScrollImageSequenceFramerCanvasProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const { scrollYProgress } = useScroll(scrollOptions);
	const progress = useSpring(scrollYProgress, springConfig);

	const resizeCanvas = useCallback(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
	}, []);

	const renderImage = useCallback(
		(progress: number) => {
			const constraint = (n: number, min = 0, max = keyframes.length - 1) =>
				Math.min(Math.max(n, min), max);

			if (canvasRef.current) {
				const context = canvasRef.current.getContext("2d");
				if (context) {
					onDraw(
						keyframes[constraint(Math.round(keyframes.length * progress))],
						context
					);
				}
			}
		},
		[keyframes, onDraw]
	);

	useEffect(() => {
		resizeCanvas();

		const resizeCanvasAndRerender = () => {
			resizeCanvas();
			renderImage(progress.get());
		};

		window.addEventListener("resize", resizeCanvasAndRerender);
		return () => {
			window.removeEventListener("resize", resizeCanvasAndRerender);
		};
	}, [progress, renderImage, resizeCanvas]);

	useEffect(() => {
		if (keyframes[0]) {
			keyframes[0].onload = () => {
				if (canvasRef.current) {
					const context = canvasRef.current.getContext("2d");
					if (context) {
						onDraw(keyframes[0], context);
					}
				}
			};
		}
	}, [keyframes, onDraw]);

	useMotionValueEvent(progress, "change", renderImage);

	return [progress, canvasRef] as const;
};

export default useScrollImageSequenceFramerCanvas;
