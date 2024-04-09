import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				cc: "30px",
			},
			backgroundImage: {
				mainbg:
					"url('https://res.cloudinary.com/dq8og12k9/image/upload/v1712680157/bg.png')",
				hero1: "url('/hero/0000.png')",
				about:
					"url('https://res.cloudinary.com/dq8og12k9/image/upload/v1712680163/bg-about.png')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				custom:
					"rgba(0, 0, 0, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.6) 0px 8px 16px -8px;",
			},
			animation: {
				"fade-in": "fadeIn 1s ease-in-out forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
		},
	},
	plugins: [],
};

export default config;
