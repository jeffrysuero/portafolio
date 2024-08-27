import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";

import "@/styles/globals.css";

import { PreLoader } from "@/components/Loader";
const basePath = process.env.NODE_ENV === 'production' ? '/portafolio' : '';
export default function App({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		if (loading) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [loading]);

	const title = "Portfolio | Jeffry Suero";
	const description =
		"Hello! I'm Jeffry Suero, a passionate web developer and problem solver. Welcome to my portfolio";
	const avatar = `${basePath}/assets/avatar2.jpeg`;
	const url = "";

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} key="desc" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta property="og:title" content={title} />
				<meta property="og:site_name" content={title}></meta>
				<meta property="og:description" content={description} />
				<meta property="og:image" content={avatar} />
				<meta property="og:image:width" content="612" />
				<meta property="og:image:height" content="612" />
				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />

				<meta property="twitter:image" content={avatar} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="" />
				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={description} />

				<link rel="canonical" href={url} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={`${basePath}/assets/avatar2.jpeg`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`${basePath}/assets/avatar2.jpeg`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={`${basePath}/assets/avatar2.jpeg`}
				/>
				<link
					rel="manifest"
					href={`${basePath}/assets/avatar2.jpeg`}
				/>
			</Head>

			<ThemeProvider attribute="class" defaultTheme="dark">
				<Component {...pageProps} loading={loading} />
                <Analytics />
				{loading && <PreLoader />}
			</ThemeProvider>
		</>
	);
}
