'use client';

import { useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface Review {
	id: number;
	name: string;
	handle: string;
	review: string;
	avatarSrc: string;
}

const reviews: Review[] = [
	{
		id: 1,
		name: 'Priya Mehta',
		handle: '@priyacooks',
		review:
			"DinnerDibs completely changed how I eat during the week. I found an incredible home cook nearby who makes the most authentic South Indian food — no delivery fees, no surprises. It feels like eating at a friend's place every time.",
		avatarSrc: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		id: 2,
		name: 'James Okonkwo',
		handle: '@jameso',
		review:
			'As a home cook, I was skeptical at first — but DinnerDibs let me start selling my dishes without any upfront cost or complicated onboarding. Within two weeks I had regulars. This platform genuinely supports small sellers.',
		avatarSrc: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		id: 3,
		name: 'Sofia Cardenas',
		handle: '@sofiac',
		review:
			"The transparency is what got me. Every listing shows ingredients, allergen info, and dietary tags. As someone with a gluten intolerance, that peace of mind is priceless. I've never felt so confident ordering food online.",
		avatarSrc: 'https://randomuser.me/api/portraits/women/68.jpg',
	},
	{
		id: 4,
		name: 'Liam Chen',
		handle: '@liamchen',
		review:
			"I'm a student and restaurant delivery fees were killing my budget. DinnerDibs connected me with three home cooks in my neighborhood. The food is better, fresher, and way more affordable. Genuinely can't go back.",
		avatarSrc: 'https://randomuser.me/api/portraits/men/85.jpg',
	},
	{
		id: 5,
		name: 'Amara Diallo',
		handle: '@amarad',
		review:
			"What I love most is the community feel. I follow my favorite cooks, see their posts, and feel like I'm part of something local and real. It's not just a marketplace — it actually feels like a neighborhood.",
		avatarSrc: 'https://randomuser.me/api/portraits/women/21.jpg',
	},
];

export default function ReviewsCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);

	// Drag state
	const dragStartX = useRef<number | null>(null);
	const isDragging = useRef(false);

	const goTo = useCallback((index: number) => {
		setActiveIndex(Math.max(0, Math.min(index, reviews.length - 1)));
	}, []);

	const goPrev = () => goTo(activeIndex - 1);
	const goNext = () => goTo(activeIndex + 1);

	// Pointer drag handlers
	const onPointerDown = (e: React.PointerEvent) => {
		dragStartX.current = e.clientX;
		isDragging.current = false;

		trackRef.current?.setPointerCapture(e.pointerId);
	};

	const onPointerMove = (e: React.PointerEvent) => {
		if (dragStartX.current === null) return;

		if (Math.abs(e.clientX - dragStartX.current) > 5) {
			isDragging.current = true;
		}
	};

	const onPointerUp = (e: React.PointerEvent) => {
		if (dragStartX.current === null) return;
		const delta = e.clientX - dragStartX.current;

		if (isDragging.current) {
			if (delta < -40) goNext();
			else if (delta > 40) goPrev();
		}

		dragStartX.current = null;
		isDragging.current = false;
	};

	return (
		<section className="bg-background-muted w-full py-16">
			<div className="mx-auto max-w-4xl px-6 lg:px-8">
				<div className="mb-12 text-center">
					<h2 className="font-heading text-content-tertiary text-3xl sm:text-4xl">
						What our community says
					</h2>
					<p className="text-content-secondary mt-3 text-sm sm:text-base">
						Real stories from buyers and sellers on DinnerDibs.
					</p>
				</div>

				<div className="relative">
					<button
						aria-label="Previous review"
						onClick={goPrev}
						disabled={activeIndex === 0}
						className={cn(
							'border-border-color bg-background-base text-content-secondary hover:text-primary absolute top-1/2 -left-5 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm transition-all sm:-left-8',
							activeIndex === 0 && 'cursor-not-allowed opacity-30',
						)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="size-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					<div className="overflow-hidden rounded-2xl">
						<div
							ref={trackRef}
							className="flex transition-transform duration-400 ease-in-out select-none"
							style={{ transform: `translateX(-${activeIndex * 100}%)` }}
							onPointerDown={onPointerDown}
							onPointerMove={onPointerMove}
							onPointerUp={onPointerUp}
						>
							{reviews.map((review) => (
								<div
									key={review.id}
									className="bg-background-base border-border-color w-full shrink-0 rounded-2xl border px-8 py-10 text-center"
									aria-hidden={reviews.indexOf(review) !== activeIndex}
								>
									<div className="mb-5 flex justify-center">
										<div className="border-primary-100 relative size-16 overflow-hidden rounded-full border-2">
											{/* eslint-disable-next-line @next/next/no-img-element */}
											<img
												src={review.avatarSrc}
												alt={review.name}
												className="size-full object-cover"
											/>
										</div>
									</div>

									<p className="font-heading text-content-tertiary text-lg">
										{review.name}
									</p>
									<p className="text-content-primary mb-6 text-xs">
										{review.handle}
									</p>

									<blockquote className="text-content-secondary mx-auto max-w-xl text-sm leading-relaxed sm:text-base">
										&ldquo;{review.review}&rdquo;
									</blockquote>
								</div>
							))}
						</div>
					</div>

					<button
						aria-label="Next review"
						onClick={goNext}
						disabled={activeIndex === reviews.length - 1}
						className={cn(
							'border-border-color bg-background-base text-content-secondary hover:text-primary absolute top-1/2 -right-5 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm transition-all sm:-right-8',
							activeIndex === reviews.length - 1 &&
								'cursor-not-allowed opacity-30',
						)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="size-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>

				<div
					className="mt-8 flex items-center justify-center gap-2"
					role="tablist"
				>
					{reviews.map((_, i) => (
						<button
							key={i}
							role="tab"
							aria-label={`Go to review ${i + 1}`}
							aria-selected={i === activeIndex}
							onClick={() => goTo(i)}
							className={cn(
								'rounded-full transition-all duration-300',
								i === activeIndex
									? 'bg-primary h-2 w-5'
									: 'bg-border-color hover:bg-content-primary h-2 w-2',
							)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
