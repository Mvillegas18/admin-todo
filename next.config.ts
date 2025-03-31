import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tailus.io',
				port: '',
				pathname:
					'/sources/blocks/stats-cards/preview/images/second_user.webp',
				search: '',
			},
		],
	},
};

export default nextConfig;
