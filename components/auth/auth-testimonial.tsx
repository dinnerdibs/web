'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { reviews } from '@/lib/reviews';

const ROTATE_INTERVAL = 6000;

/** Average community rating — drives both the number and the star fill. */
const RATING = 4.9;
const STAR_COLOR = '#fcd34d';
const STAR_PATH =
	'M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.51l-5.88 3.1 1.12-6.55L2.48 9.42l6.58-.96L12 2.5z';

function StarRating({
	rating,
	max = 5,
	color = STAR_COLOR,
	size = 15,
}: {
	rating: number;
	max?: number;
	color?: string;
	size?: number;
}) {
	return (
		<div
			className="flex items-center gap-0.5"
			aria-hidden="true"
		>
			{Array.from({ length: max }).map((_, index) => {
				// How much of this particular star should be filled (0 → 1).
				const fill = Math.min(Math.max(rating - index, 0), 1);

				return (
					<span
						key={index}
						className="relative shrink-0"
						style={{ width: size, height: size }}
					>
						<svg
							viewBox="0 0 24 24"
							width={size}
							height={size}
							fill="none"
							stroke={color}
							strokeWidth={1.5}
							strokeLinejoin="round"
							className="absolute inset-0"
						>
							<path d={STAR_PATH} />
						</svg>

						{fill > 0 && (
							<span
								className="absolute inset-y-0 left-0 overflow-hidden"
								style={{ width: `${fill * 100}%` }}
							>
								<svg
									viewBox="0 0 24 24"
									width={size}
									height={size}
									fill={color}
									stroke={color}
									strokeWidth={1.5}
									strokeLinejoin="round"
								>
									<path d={STAR_PATH} />
								</svg>
							</span>
						)}
					</span>
				);
			})}
		</div>
	);
}

export default function AuthTestimonial() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		if (paused) return;

		const timer = setInterval(() => {
			setActiveIndex((index) => (index + 1) % reviews.length);
		}, ROTATE_INTERVAL);

		return () => clearInterval(timer);
	}, [paused]);

	const review = reviews[activeIndex];

	return (
		<div
			className="flex flex-col gap-6"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			onFocusCapture={() => setPaused(true)}
			onBlurCapture={() => setPaused(false)}
		>
			<h2 className="font-heading text-2xl leading-snug text-white sm:text-3xl">
				Don&apos;t take our word for it.
			</h2>

			<div className="flex min-h-76 flex-col rounded-2xl border border-white/10 bg-white/10 px-6 py-6 shadow-sm backdrop-blur-sm">
				<div className="flex flex-wrap items-center gap-2.5">
					<StarRating rating={RATING} />
					<p className="text-xs font-medium text-white/75">
						{RATING} out of 5 from 2,400+ community reviews
					</p>
				</div>

				<blockquote className="font-heading mt-4 flex-1 text-lg leading-relaxed text-white">
					&ldquo;{review.review}&rdquo;
				</blockquote>

				<div className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4">
					<div className="relative size-10 shrink-0 overflow-hidden rounded-full border border-white/30">
						<Image
							src={review.avatarSrc}
							alt={review.name}
							fill
							sizes="40px"
							className="object-cover"
						/>
					</div>
					<div className="min-w-0">
						<p className="truncate text-sm font-semibold text-white">
							{review.name}
						</p>
						<p className="truncate text-xs text-white/70">{review.handle}</p>
					</div>
				</div>
			</div>

			<div
				className="flex items-center gap-2"
				role="tablist"
				aria-label="Community reviews"
			>
				{reviews.map((item, index) => (
					<button
						key={item.id}
						type="button"
						role="tab"
						aria-selected={index === activeIndex}
						aria-label={`Show review from ${item.name}`}
						onClick={() => setActiveIndex(index)}
						className={cn(
							'rounded-full transition-all duration-300',
							index === activeIndex
								? 'h-1.5 w-6 bg-white'
								: 'h-1.5 w-1.5 bg-white/40 hover:bg-white/70',
						)}
					/>
				))}
			</div>
		</div>
	);
}
