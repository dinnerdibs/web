import Link from 'next/link';
import MainContainer from '@/layouts/main-container';
import StepCard from '@/components/landing/step-card';
import FeatureCard from '@/components/landing/feature-card';
import CtaMini from '@/components/landing/cta-mini';
import ReviewsCarousel from '@/components/landing/reviews-carousel';

const steps = [
	{
		stepNumber: 1,
		heading: 'Create your free account',
		description:
			'Sign up in seconds using your email or Google account - no credit card required. Whether you want to eat or cook, DinnerDibs is open to everyone at absolutely zero cost.',
		imageSrc:
			'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
		imageAlt: 'Person signing up on a laptop',
	},
	{
		stepNumber: 2,
		heading: 'Discover local homemade food',
		description:
			'Browse meals from home cooks near you. Filter by cuisine, dietary needs, or distance. Every listing includes detailed ingredients, allergen info, and honest pricing, no surprises.',
		imageSrc:
			'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
		imageAlt: 'Colorful homemade food dishes spread on a table',
	},
	{
		stepNumber: 3,
		heading: 'Connect and enjoy, fee-free',
		description:
			'Message the cook directly to place your order and coordinate pickup or delivery on your terms. DinnerDibs never takes a cut - every dollar goes straight to the person who made your meal.',
		imageSrc:
			'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
		imageAlt: 'Two people exchanging a takeaway food bag',
	},
];

const features = [
	{
		heading: 'Zero Fees, Always',
		description:
			'DinnerDibs charges no commissions, no service fees, and no hidden costs, ever. Sellers keep 100% of what they earn, and buyers pay exactly what the cook asks.',
		imageSrc:
			'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
		imageAlt: 'Smiling people at a community food table',
		badges: [{ label: 'No platform fees' }, { label: 'Free to join' }],
	},
	{
		heading: 'Full Food Transparency',
		description:
			"Every dish listing includes ingredients, allergen disclosures, and dietary tags like vegan, halal, or gluten-free. Know exactly what you're eating before you order.",
		imageSrc:
			'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
		imageAlt: 'Healthy colorful food ingredients laid out',
		badges: [{ label: 'Allergen disclosure' }, { label: 'Dietary tags' }],
	},
	{
		heading: 'Verified Community Sellers',
		description:
			'Home cooks can earn trust badges through email and phone verification, building a reliable reputation. Buyers can browse reviews and ratings before committing.',
		imageSrc:
			'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
		imageAlt: 'Home cook preparing food in kitchen',
		badges: [{ label: 'Verified sellers' }, { label: 'Community reviews' }],
	},
	{
		heading: 'Direct Buyer–Seller Chat',
		description:
			'Skip the middleman entirely. Message your cook directly through the app to discuss your order, arrange pickup, or ask any question,  no third-party involved.',
		imageSrc:
			'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
		imageAlt: 'Person using a messaging app on a phone',
		badges: [{ label: 'In-app messaging' }, { label: 'Seller contact info' }],
	},
	{
		heading: 'Open to Everyone, Everywhere',
		description:
			"No regional restrictions, no invite-only barriers. Anyone can sign up and browse freely. Only register when you're ready to buy or sell - privacy-first, always.",
		imageSrc:
			'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
		imageAlt: 'Diverse group of people sharing a meal together',
		badges: [{ label: 'Global access' }, { label: 'No region lock' }],
	},
];

export default function Page() {
	return (
		<MainContainer>
			<section className="bg-primary w-full">
				<div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center lg:py-32">
					<span className="text-primary-100 mb-5 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium tracking-wider uppercase">
						Community homemade food marketplace
					</span>

					<h1 className="font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
						Real food, from real people,{' '}
						<span className="text-primary-200">right around the corner.</span>
					</h1>

					<p className="text-primary-100 mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
						DinnerDibs connects home cooks with hungry neighbors - no delivery
						fees, no hidden charges, no restaurant markup. Just honest, homemade
						food at the price it deserves.
					</p>

					<div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
						<Link
							href="/signup"
							className="text-primary hover:bg-primary-50 rounded-lg bg-white px-7 py-3 text-sm font-semibold transition-colors"
						>
							Get started - it&apos;s free
						</Link>
						<Link
							href="#how-it-works"
							className="text-primary-100 rounded-lg px-7 py-3 text-sm font-medium transition-colors hover:text-white"
						>
							See how it works ↓
						</Link>
					</div>
				</div>
			</section>

			<section
				id="how-it-works"
				className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
			>
				<div className="mb-12 text-center">
					<h2 className="font-heading text-content-tertiary text-3xl sm:text-4xl">
						Up and running in 3 simple steps
					</h2>
					<p className="text-content-secondary mt-3 text-sm sm:text-base">
						No complexity, no commitment. Start browsing homemade food in
						minutes.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{steps.map((step) => (
						<StepCard
							key={step.stepNumber}
							{...step}
						/>
					))}
				</div>
			</section>

			<CtaMini
				heading="Ready to start your homemade food journey?"
				subtext="Join thousands of home cooks and food lovers already on DinnerDibs for free."
				ctaLabel="Create your account"
				ctaHref="/signup"
			/>

			<section
				id="features"
				className="bg-background-muted w-full py-20"
			>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					{/* Heading */}
					<div className="mb-12 text-center">
						<h2 className="font-heading text-content-tertiary text-3xl sm:text-4xl">
							Built differently, on purpose
						</h2>
						<p className="text-content-secondary mx-auto mt-3 max-w-2xl text-sm sm:text-base">
							DinnerDibs was designed from the ground up to solve everything
							that&apos;s broken about food delivery - starting with fees,
							transparency, and community.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						{features.map((feature) => (
							<FeatureCard
								key={feature.heading}
								{...feature}
							/>
						))}
					</div>
				</div>
			</section>

			<ReviewsCarousel />

			<CtaMini
				heading="Your next favourite meal is a tap away."
				subtext="Sign up free and discover home-cooked food made with care in your community."
				ctaLabel="Join DinnerDibs"
				ctaHref="/signup"
			/>
		</MainContainer>
	);
}
