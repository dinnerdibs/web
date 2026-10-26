import Link from 'next/link';

const footerColumns = [
	{
		heading: 'Explore',
		links: [
			{ label: 'About', href: '#' },
			{ label: 'Features', href: '#' },
			{ label: 'How It Works', href: '#' },
		],
	},
	{
		heading: 'Account',
		links: [
			{ label: 'Sign Up', href: '/signup' },
			{ label: 'Login', href: '#' },
			{ label: 'Support', href: '#' },
		],
	},
	{
		heading: 'Legal',
		links: [
			{ label: 'Privacy Policy', href: '#' },
			{ label: 'Terms of Service', href: '#' },
			{ label: 'Food Safety Guide', href: '#' },
		],
	},
];

export default function Footer() {
	return (
		<footer className="border-border-color bg-background-muted border-t">
			<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
				<div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
					<div className="col-span-2 md:col-span-1">
						<Link
							href="/"
							className="font-heading text-primary text-2xl tracking-tight select-none"
						>
							DinnerDibs
						</Link>
						<p className="text-content-primary mt-3 max-w-xs text-sm leading-relaxed">
							A community-driven marketplace for homemade food. Connect with
							local cooks and enjoy real meals at honest prices.
						</p>
					</div>

					{footerColumns.map((col) => (
						<div key={col.heading}>
							<h3 className="text-content-tertiary mb-3 text-xs font-semibold tracking-widest uppercase">
								{col.heading}
							</h3>
							<ul className="space-y-2">
								{col.links.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											className="text-content-secondary hover:text-primary text-sm transition-colors"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="border-border-color mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row">
					<p className="text-content-primary text-xs">
						&copy; {new Date().getFullYear()} DinnerDibs. All rights reserved.
					</p>
					<p className="text-content-primary text-xs">
						Made with care for home cooks everywhere.
					</p>
				</div>
			</div>
		</footer>
	);
}
