export interface Review {
	id: number;
	name: string;
	handle: string;
	review: string;
	avatarSrc: string;
}

export const reviews: Review[] = [
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
