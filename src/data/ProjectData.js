import B1 from '../assets/images/B1.png';
import B2 from '../assets/images/B2.png';
import B3 from '../assets/images/B3.png';
import B4 from '../assets/images/B4.png';
import B5 from '../assets/images/B5.png';
import B6 from '../assets/images/B6.png';
import PortfolioThumb from '../assets/images/E-Portfolio_Mockup.png';
export const projects = [
    {
        title: 'Personal Portfolio',
        count: '01',
        view: 'Project Details',
        images: [B1, B2, B3, B4, B5, B6],
        thumbnail: PortfolioThumb,
        description: 'A sleek personal portfolio website to showcase my projects and skills.',
        techStack: ['React', 'Tailwind CSS', 'Framer Motion']
    },
    {
        title: 'BiliNao - E-commerce for Handicrafts',
        count: '02',
        view: 'Project Details',
        status: 'Completed',
        date: '2024',
        duration: '4 months',
        category: 'E-commerce',
        project: 'Capstone Project',
        images: [B1, B2, B3, B4, B5, B6],
        description:
            'BiliNao is a user-friendly, web and mobile-responsive e-commerce platform for promoting and selling locally made handicrafts. It helps artisans reach a wider audience through a modern digital marketplace. ',
        features: [
            'User Authentication',
            'Product Management',
            'Shopping Cart',
            'Order Management',
            'Payment Integration'
        ],
        techStack: ['React', 'Tailwind', 'Laravel', 'MySQL']
    },
    {
        title: 'OneHotel - Booking Management System',
        count: '03',
        view: 'Project Details',
        status: 'In progress',
        date: '2025',
        duration: '2 months',
        category: 'Hotel Booking System',
        project: 'Team-Based Project',
        images: [B1, B2, B3, B4, B5, B6],
        description:
            'A hotel booking system that simplifies the reservation process, allowing guests to easily book rooms while helping hotels manage availability and reservations efficiently.',
        techStack: ['Laravel', 'React', 'Tailwind CSS', 'Shadcn UI', 'MySQL', 'Inertia.js']
    },
    {
        title: 'Itemaster - POS & Inventory System',
        count: '04',
        view: 'Project Details',
        status: 'Completed',
        date: '2025',
        duration: '3 months',
        category: 'Business / Enterprise Applications',
        project: 'Internship Project',
        images: [B1, B2, B3, B4, B5, B6],
        description:
            'Inventory system with a POS module that tracks stock and manages item costs for accurate pricing. It simplifies inventory control and cost management.',
        techStack: ['Laravel', 'React', 'Tailwind CSS', 'Shadcn UI', 'MySQL', 'Inertia.js']
    }
];
