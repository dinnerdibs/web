import Link from 'next/link';

export default function Page() {
	return (
		<div className="p-5">
			<h1 className="font-heading text-content-secondary text-2xl">
				DinnerDibs
			</h1>
			<h3 className="font-body mt-2">
				Welcome to DinnerDibs! Find and discover your favorite homemade meals
				from chefs around you
			</h3>

			<Link
				href="/signup"
				className="text-content-tertiary underline underline-offset-2"
			>
				Sign Up
			</Link>
		</div>
	);
}
