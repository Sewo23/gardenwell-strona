export const SITE = {
	name: 'Gardenwell',
	url: 'https://gardenwell.ie',
	title: 'Gardenwell | Garden Design in Ireland',
	description:
		'Bespoke garden design for Irish homeowners — buildable plans tailored to your site, budget, and long-term upkeep. Commissioned projects across Dublin, Kildare, and Meath.',
	ogDescription:
		'Garden design on commission for Irish homes — thoughtful layouts, Irish-suited planting, and honest planning you can actually build and live with.',
	phone: '+353838245203',
	phoneDisplay: '+353 83 824 5203',
	/** WhatsApp inbox only — never shown on the public site */
	whatsapp: '48660448631',
	whatsappDefaultMessage:
		"Hi Gardenwell, I'd like to discuss a garden design for my home.",
	email: 'gardenwell.ie@gmail.com',
	googleVerification: 'zhOCMrmS0KH4AOR-61y4WFI5DJzgYFlsFLe6bSwEgZw',
	areasServed: ['Dublin', 'Kildare', 'Meath'],
} as const;

export const services = [
	{
		title: 'Bespoke Garden Design',
		description:
			'Tailored design concepts shaped around your home and lifestyle — clear in detail, and always rooted in what your garden can realistically become.',
	},
	{
		title: 'Buildable Layout Planning',
		description:
			'Clear outdoor layouts with practical zones, access, drainage, and proportions — designed so the vision can actually be built, not just admired on paper.',
	},
	{
		title: 'Planting for Irish Gardens',
		description:
			'Planting schemes suited to Irish climate and seasonal change, chosen for structure, beauty, and manageable long-term care — not high-maintenance complexity.',
	},
] as const;
