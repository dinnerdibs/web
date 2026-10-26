import type { Metadata } from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	weight: 'variable',
	variable: '--font-body',
});

const dmSerifDisplay = DM_Serif_Display({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-heading',
});

export const metadata: Metadata = {
	title:
		'DinnerDibs | Discover and order fresh homemade food by your favorite chefs!',
	description:
		'Community-based platform for homemade foods and local cooks. Buy and sell homemade food with zero fees.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${dmSerifDisplay.variable} antialiased`}
			suppressHydrationWarning
		>
			<body className="bg-background-base text-content-secondary min-h-screen antialiased">
				{children}
			</body>
		</html>
	);
}
