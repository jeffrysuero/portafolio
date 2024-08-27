/** @type {import('next').NextConfig} */
const nextConfig = {
	output:"export",
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com"]
	},
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.(".svg")
		);

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/ // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ }, // exclude if *.svg?url
				use: ["@svgr/webpack"]
			}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},

	// Add these configurations for GitHub Pages
	assetPrefix: process.env.NODE_ENV === 'production' ? '/portafolio/' : '',
	basePath: '/portafolio',
	images: {
		domains: ["res.cloudinary.com"],
		loader: "imgix", // Use the appropriate loader for GitHub Pages
		path: "/portafolio/_next/image", // Configure image paths for GitHub Pages
	},
};

module.exports = nextConfig;
