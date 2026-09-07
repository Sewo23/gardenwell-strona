export type ClientReview = {
	name: string;
	rating: 1 | 2 | 3 | 4 | 5;
	experience: string;
	photo: string;
	photoAlt: string;
};

/** Published client reviews shown on the homepage */
export const clientReviews: ClientReview[] = [
	{
		name: 'Sophie',
		rating: 5,
		experience: 'The perfect service <3',
		photo: '/reviews/sophie.jpg',
		photoAlt: 'Garden planting with lavender shared by Sophie',
	},
];
