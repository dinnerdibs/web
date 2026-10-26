import Image from 'next/image';

interface StepCardProps {
	stepNumber: number;
	heading: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
}

export default function StepCard({
	stepNumber,
	heading,
	description,
	imageSrc,
	imageAlt,
}: StepCardProps) {
	return (
		<article className="bg-background-base border-border-color flex flex-col overflow-hidden rounded-2xl border shadow-sm">
			<div className="relative aspect-[4/3] w-full overflow-hidden">
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					className="object-cover transition-transform duration-500 hover:scale-105"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>

			<div className="flex flex-1 flex-col p-6">
				<div className="bg-primary-50 text-primary mb-4 inline-flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
					{stepNumber}
				</div>

				<h3 className="font-heading text-content-tertiary mb-2 text-xl">
					{heading}
				</h3>
				<p className="text-content-secondary text-sm leading-relaxed">
					{description}
				</p>
			</div>
		</article>
	);
}
