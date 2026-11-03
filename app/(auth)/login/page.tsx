import type { Metadata } from 'next';
import Link from 'next/link';
import AuthTestimonial from '@/components/auth/auth-testimonial';
import LoginForm from '@/components/auth/login-form';

export const metadata: Metadata = {
	title: 'Log In | DinnerDibs',
	description:
		'Log in to your DinnerDibs account to discover homemade food from local cooks.',
};

export default function LoginPage() {
	return (
		<div className="flex min-h-screen w-full flex-col-reverse lg:flex-row">
			{/* The reviews section */}
			<div
				className="relative flex flex-col justify-between overflow-hidden p-8 lg:min-h-screen lg:w-[48%] lg:p-12"
				style={{
					background:
						'linear-gradient(135deg, #f5b49a 0%, #e8835a 30%, #c1440e 65%, #581905 100%)',
				}}
			>
				<div className="relative z-10 flex items-center justify-between">
					<Link
						href="/"
						className="font-heading text-2xl tracking-tight text-white select-none sm:text-3xl"
					>
						DinnerDibs
					</Link>
					<Link
						href="#support"
						className="rounded-xl border border-white/30 bg-white/15 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition hover:bg-white/25 sm:text-sm"
					>
						Help
					</Link>
				</div>

				<div className="relative z-10 my-10 flex flex-col gap-6 py-6">
					<AuthTestimonial />
				</div>

				<div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-4 text-xs text-white/70">
					<p>&copy; DinnerDibs. All rights reserved.</p>
					<p>{new Date().getFullYear()}</p>
				</div>
			</div>

			{/* Login form */}
			<div className="bg-background-base flex flex-1 items-center justify-center px-6 py-12 lg:px-16">
				<div className="w-full max-w-md">
					<LoginForm />
				</div>
			</div>
		</div>
	);
}
