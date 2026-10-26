'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar() {
	const [searchOpen, setSearchOpen] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const searchInputRef = useRef<HTMLInputElement>(null);

	// Focus input when search opens
	useEffect(() => {
		if (searchOpen && searchInputRef.current) {
			searchInputRef.current.focus();
		}
	}, [searchOpen]);

	// Close search/menu on Escape
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setSearchOpen(false);
				setMobileMenuOpen(false);
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, []);

	const navLinks = [
		{ label: 'About', href: '#' },
		{ label: 'Features', href: '#' },
	];

	const rightLinks = [
		{ label: 'Sign Up', href: '/signup' },
		{ label: 'Login', href: '#' },
		{ label: 'Support', href: '#' },
	];

	return (
		<header className="bg-background-base/95 border-border-color sticky top-0 z-50 w-full border-b backdrop-blur-sm">
			<nav className="mx-auto flex h-16 max-w-7xl items-center px-6 lg:px-8">
				<div className="flex flex-1 items-center gap-6">
					<button
						aria-label="Toggle search"
						onClick={() => setSearchOpen((prev) => !prev)}
						className="text-content-secondary hover:text-primary flex shrink-0 items-center transition-colors"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="size-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={1.75}
						>
							<circle
								cx="10.5"
								cy="10.5"
								r="6.5"
							/>
							<path
								strokeLinecap="round"
								d="M15.5 15.5 21 21"
							/>
						</svg>
					</button>

					<div
						className={cn(
							'overflow-hidden transition-all duration-300 ease-in-out',
							searchOpen ? 'w-56 opacity-100' : 'w-0 opacity-0',
						)}
					>
						<input
							ref={searchInputRef}
							type="text"
							placeholder="Search dishes, cooks…"
							className="border-border-color bg-background-muted text-content-tertiary placeholder:text-content-primary focus:border-primary w-full rounded-lg border px-3 py-1.5 text-sm transition outline-none"
						/>
					</div>

					<div className="hidden items-center gap-5 md:flex">
						{navLinks.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="text-content-secondary hover:text-primary text-sm font-medium transition-colors"
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>

				<div className="flex shrink-0 items-center justify-center px-6">
					<Link
						href="/"
						className="font-heading text-primary text-2xl tracking-tight select-none"
					>
						DinnerDibs
					</Link>
				</div>

				<div className="hidden flex-1 items-center justify-end gap-5 md:flex">
					{rightLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className={cn(
								'text-sm font-medium transition-colors',
								link.label === 'Sign Up'
									? 'bg-primary hover:bg-primary-600 rounded-lg px-4 py-2 text-white'
									: 'text-content-secondary hover:text-primary',
							)}
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* Mobile Navigation: hamburger button */}
				<div className="flex flex-1 justify-end md:hidden">
					<button
						aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={mobileMenuOpen}
						onClick={() => setMobileMenuOpen((prev) => !prev)}
						className="text-content-secondary hover:text-primary p-1 transition-colors"
					>
						{mobileMenuOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="size-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1.75}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18 18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="size-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1.75}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>
				</div>
			</nav>

			{/* Mobile dropdown menu */}
			<div
				className={cn(
					'border-border-color overflow-hidden border-t transition-all duration-300 ease-in-out md:hidden',
					mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
				)}
			>
				<div className="bg-background-base flex flex-col gap-1 px-6 py-4">
					<div className="mb-3">
						<input
							type="text"
							placeholder="Search dishes, cooks…"
							className="border-border-color bg-background-muted text-content-tertiary placeholder:text-content-primary focus:border-primary w-full rounded-lg border px-3 py-2 text-sm transition outline-none"
						/>
					</div>
					{[...navLinks, ...rightLinks].map((link) => (
						<Link
							key={link.label}
							href={link.href}
							onClick={() => setMobileMenuOpen(false)}
							className={cn(
								'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
								link.label === 'Sign Up'
									? 'bg-primary text-center text-white'
									: 'text-content-secondary hover:bg-background-muted hover:text-primary',
							)}
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
}
