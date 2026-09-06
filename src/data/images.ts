import heroBg from '../assets/images/ogrod-m.jpg';
import gazebo3d from '../assets/images/gazebo-3d-visualization.png';
import patioPaving from '../assets/images/patio-paving.jpg';
import gardenRenovation from '../assets/images/garden-renovation.jpg';

export const images = {
	hero: heroBg,
	gazebo3d,
	patio: patioPaving,
	garden: gardenRenovation,
} as const;

/** Latest project photos in /public/ostatnia-praca */
export const recentWork = [
	{ src: '/ostatnia-praca/01.jpg', alt: 'Latest garden project photo 1' },
	{ src: '/ostatnia-praca/02.jpg', alt: 'Latest garden project photo 2' },
	{ src: '/ostatnia-praca/03.jpg', alt: 'Latest garden project photo 3' },
	{ src: '/ostatnia-praca/04.jpg', alt: 'Latest garden project photo 4' },
	{ src: '/ostatnia-praca/05.jpg', alt: 'Latest garden project photo 5' },
	{ src: '/ostatnia-praca/06.jpg', alt: 'Latest garden project photo 6' },
	{ src: '/ostatnia-praca/07.jpg', alt: 'Latest garden project photo 7' },
	{ src: '/ostatnia-praca/08.jpg', alt: 'Latest garden project photo 8' },
] as const;
