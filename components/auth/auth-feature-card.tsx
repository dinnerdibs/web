import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';
import { cn } from '@/lib/utils';

interface AuthFeatureCardProps {
	icon: IconSvgElement;
	heading: string;
	description: string;
	accentColor: string;

	/** Tailwind alignment class e.g. 'self-start' | 'self-center' | 'self-end' */
	align?: 'self-start' | 'self-center' | 'self-end';
}

export default function AuthFeatureCard({
	icon,
	heading,
	description,
	accentColor,
	align = 'self-start',
}: AuthFeatureCardProps) {
	return (
		<div
			className={cn(
				'w-full max-w-xs rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-sm backdrop-blur-sm',
				align,
			)}
		>
			<div className="mb-2 flex items-center gap-3">
				<div
					className="flex size-8 shrink-0 items-center justify-center rounded-lg"
					style={{ backgroundColor: `${accentColor}33` }}
				>
					<HugeiconsIcon
						icon={icon}
						size={18}
						style={{ color: accentColor }}
						className="shrink-0"
					/>
				</div>
				<h3 className="text-sm leading-snug font-semibold text-white">
					{heading}
				</h3>
			</div>
			<p className="text-xs leading-relaxed text-white/80">{description}</p>
		</div>
	);
}
