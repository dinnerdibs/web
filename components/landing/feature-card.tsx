import Image from 'next/image';

interface FeatureBadge {
	label: string;
}

export interface FeatureCardProps {
	imageSrc: string;
	imageAlt: string;
	heading: string;
	description: string;
	badges: FeatureBadge[];
}

export default function FeatureCard({
	imageSrc,
	imageAlt,
	heading,
	description,
	badges,
}: FeatureCardProps) {
	return (
		<article className="bg-background-base border-border-color group flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-md">
			<div className="relative aspect-[16/9] w-full overflow-hidden">
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
			</div>

			<div className="flex flex-1 flex-col p-5">
				<h3 className="font-heading text-content-tertiary mb-2 text-lg">
					{heading}
				</h3>
				<p className="text-content-secondary mb-4 text-sm leading-relaxed">
					{description}
				</p>

				<div className="mt-auto flex flex-wrap gap-2">
					{badges.map((badge) => (
						<span
							key={badge.label}
							className="bg-primary-50 text-primary border-primary-100 rounded-full border px-3 py-1 text-xs font-medium"
						>
							{badge.label}
						</span>
					))}
				</div>
			</div>
		</article>
	);
}
