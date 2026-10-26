'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
	Coins01Icon,
	CheckmarkBadge01Icon,
	Chat01Icon,
} from '@hugeicons/core-free-icons';
import AuthFeatureCard from '@/components/auth/auth-feature-card';
import PasswordInput from '@/components/auth/password-input';

const features = [
	{
		icon: Coins01Icon,
		heading: 'Zero Platform Fees',
		description:
			'Buy and sell freely with 0% commission, no hidden service charges, and transparent pricing for everyone.',
		accentColor: '#f59e0b',
		align: 'self-start' as const,
	},
	{
		icon: CheckmarkBadge01Icon,
		heading: 'Verified Community Cooks',
		description:
			'Discover trusted home cooks with verified badges, dish ingredients, allergen alerts, and honest reviews.',
		accentColor: '#10b981',
		align: 'self-center' as const,
	},
	{
		icon: Chat01Icon,
		heading: 'Direct Buyer-Cook Chat',
		description:
			'Coordinate orders, ask about ingredients, and arrange delivery or pickup directly with the cook.',
		accentColor: '#38bdf8',
		align: 'self-end' as const,
	},
];

export default function SignUpPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');

	return (
		<div className="flex min-h-screen w-full flex-col-reverse lg:flex-row">
			{/* Left side: features section with some 2-3 features in a gist */}
			<div
				className="relative flex flex-col justify-between overflow-hidden p-8 lg:min-h-screen lg:w-[48%] lg:p-12"
				style={{
					background:
						'linear-gradient(135deg, #f9d5c2 0%, #e8835a 30%, #c1440e 65%, #581905 100%)',
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

				<div className="relative z-10 my-10 flex flex-col gap-5 py-6">
					{features.map((feature) => (
						<AuthFeatureCard
							key={feature.heading}
							{...feature}
						/>
					))}
				</div>

				<div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-4 text-xs text-white/70">
					<p>&copy; DinnerDibs. All rights reserved.</p>
					<p>{new Date().getFullYear()}</p>
				</div>
			</div>

			{/* Right side: actual authentication form for the user */}
			<div className="bg-background-base flex flex-1 items-center justify-center px-6 py-12 lg:px-16">
				<div className="w-full max-w-md">
					<h1 className="font-heading text-content-tertiary text-3xl sm:text-4xl">
						Create your account
					</h1>
					<p className="text-content-secondary mt-2.5 text-sm leading-relaxed">
						Getting your store up and running is quick and simple — no
						commitments, no contracts, and cancel anytime.
					</p>

					<form
						className="mt-8 flex flex-col gap-4"
						onSubmit={(e) => e.preventDefault()}
					>
						<div className="flex flex-col gap-1.5">
							<label
								htmlFor="email"
								className="text-content-tertiary text-sm font-medium"
							>
								Email address
							</label>
							<input
								id="email"
								type="email"
								placeholder="you@example.com"
								autoComplete="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="border-border-color text-content-tertiary placeholder:text-content-primary focus:border-primary focus:ring-primary/20 w-full rounded-xl border bg-white px-4 py-3 text-sm transition outline-none focus:ring-2"
							/>
						</div>

						{/* Initial password input + password confirmation input  */}
						<PasswordInput
							id="password"
							label="Password"
							placeholder="Create a secure password"
							value={password}
							onChange={setPassword}
						/>

						<PasswordInput
							id="confirm-password"
							label="Password confirmation"
							placeholder="Confirm your password"
							value={confirm}
							onChange={setConfirm}
						/>

						<button
							type="submit"
							className="bg-primary hover:bg-primary-600 mt-2 w-full rounded-xl py-3.5 text-sm font-semibold text-white shadow-sm transition-all active:scale-[0.99]"
						>
							Create account
						</button>
					</form>

					<div className="my-6 flex items-center gap-4">
						<div className="border-border-color flex-1 border-t" />
						<span className="text-content-primary text-xs tracking-wider uppercase">
							or
						</span>
						<div className="border-border-color flex-1 border-t" />
					</div>

					<div className="flex flex-col gap-3">
						{/* Sign in with Google */}
						<button
							type="button"
							className="border-border-color hover:bg-background-muted flex w-full items-center justify-center gap-3 rounded-xl border bg-white py-3 text-sm font-medium text-[#1f1f1f] shadow-xs transition-colors"
						>
							<svg
								className="size-4 shrink-0"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
									fill="#4285F4"
								/>
								<path
									d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
									fill="#34A853"
								/>
								<path
									d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
									fill="#FBBC05"
								/>
								<path
									d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
									fill="#EA4335"
								/>
							</svg>
							Sign in with Google
						</button>

						{/* Sign in with Apple */}
						<button
							type="button"
							className="flex w-full items-center justify-center gap-3 rounded-xl bg-black py-3 text-sm font-medium text-white shadow-xs transition-opacity hover:opacity-90"
						>
							<svg
								className="size-4 shrink-0"
								viewBox="0 0 24 24"
								aria-hidden="true"
								fill="currentColor"
							>
								<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4zm-3.1-17.5c.06 2.3-1.7 4.16-3.9 4-0.29-2.04 1.73-4.08 3.9-4z" />
							</svg>
							Sign in with Apple
						</button>

						{/* Sign in with Facebook */}
						<button
							type="button"
							className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#1877F2] py-3 text-sm font-medium text-white shadow-xs transition-opacity hover:opacity-90"
						>
							<svg
								className="size-4 shrink-0"
								viewBox="0 0 24 24"
								aria-hidden="true"
								fill="currentColor"
							>
								<path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
							</svg>
							Sign in with Facebook
						</button>
					</div>

					<p className="text-content-primary mt-6 text-center text-xs leading-relaxed">
						Signing up for a DinnerDibs account means you agree to the{' '}
						<Link
							href="#"
							className="text-primary underline-offset-2 hover:underline"
						>
							Privacy Policy
						</Link>{' '}
						&amp;{' '}
						<Link
							href="#"
							className="text-primary underline-offset-2 hover:underline"
						>
							Terms of Service
						</Link>
						.
					</p>

					<div className="mt-8 text-center">
						<p className="text-content-secondary text-sm">
							Have an account?{' '}
							<Link
								href="#"
								className="text-primary hover:text-primary-600 font-semibold underline underline-offset-2"
							>
								Log in to your DinnerDibs account
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
