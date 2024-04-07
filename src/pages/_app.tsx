import "@/styles/globals.css";
import "@/styles/Home/about_event.css";
import '@/styles/about.css'
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
