import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sign Up | DinnerDibs',
	description:
		'Create your free DinnerDibs account and start discovering homemade food near you.',
};

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
