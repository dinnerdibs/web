import Link from 'next/link';

interface CtaMiniProps {
	heading: string;
	subtext?: string;
	ctaLabel?: string;
	ctaHref?: string;
}

export default function CtaMini({
	heading,
	subtext,
	ctaLabel = 'Get Started',
	ctaHref = '/signup',
}: CtaMiniProps) {
	return (
		<section className="mx-auto my-12 w-full max-w-3xl px-6 lg:px-8">
			<div className="bg-primary-50 border-primary-100 flex flex-col items-center gap-4 rounded-2xl border px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
				<div>
					<h2 className="font-heading text-content-tertiary text-xl sm:text-2xl">
						{heading}
					</h2>
					{subtext && (
						<p className="text-content-secondary mt-1 text-sm leading-relaxed">
							{subtext}
						</p>
					)}
				</div>
				<Link
					href={ctaHref}
					className="bg-primary hover:bg-primary-600 shrink-0 rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors"
				>
					{ctaLabel}
				</Link>
			</div>
		</section>
	);
}
