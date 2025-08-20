import B1 from '../assets/images/B1.png';
import B2 from '../assets/images/B2.png';
import B3 from '../assets/images/B3.png';
import B4 from '../assets/images/B4.png';
import B5 from '../assets/images/B5.png';
import B6 from '../assets/images/B6.png';
import C1 from '../assets/images/C1.png';
import C2 from '../assets/images/C2.png';
import C3 from '../assets/images/C3.png';
import C4 from '../assets/images/C4.png';
import C5 from '../assets/images/C5.png';
import C6 from '../assets/images/C6.png';
import C7 from '../assets/images/C7.png';
import C8 from '../assets/images/C8.png';
import D1 from '../assets/images/D1.png';
import D2 from '../assets/images/D2.png';
import D3 from '../assets/images/D3.png';
import D4 from '../assets/images/D4.png';
import D5 from '../assets/images/D5.png';
import D6 from '../assets/images/D6.png';
import E1 from '../assets/images/E1.png';
import E2 from '../assets/images/E2.png';
import E3 from '../assets/images/E3.png';
import E4 from '../assets/images/E4.png';
import E5 from '../assets/images/E5.png';
import E6 from '../assets/images/E6.png';
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
        id: 1,
        title: 'BiliNao - E-commerce for Handicrafts',
        count: '02',
        view: 'Project Details',
        status: 'Completed',
        date: '2024',
        duration: '3 months',
        category: 'E-commerce',
        project: 'Capstone Project',
        images: [B1, B2, B3, B4, B5, B6],
        description:
            "Bili-Nao is a platform that connects communities through the artistry of handmade crafts. It highlights authentic, locally crafted products and gives artisans a space to share their culture with a wider audience, ensuring traditions are celebrated and preserved.",

        details:
            "A curated collection of home décor, wearable crafts, and cultural keepsakes — each piece crafted with care to embody both tradition and individuality.",
        features: [
            'User Authentication',
            'Product Management',
            'Shopping Cart',
            'Order Management',
            'Payment Integration'
        ],
        techStack: ['React', 'Tailwind', 'Inertia', 'Laravel', 'MySQL']
    },
    {
        id: 2,
        title: 'OneHotel - Booking Management System',
        count: '03',
        view: 'Project Details',
        status: 'Completed',
        date: '2025',
        duration: '2 months',
        category: 'Hotel Booking System',
        project: 'Team-Based Project',
        images: [E1, E2, E3, E4, E5, E6],
        description:
            'A hotel booking system that simplifies the reservation process, allowing guests to easily book rooms while helping hotels manage availability and reservations efficiently.',
        details:
            'The system gives admins a clear view of bookings and room availability, making management simple and organized. At the same time, guests can search, book, and confirm their stays effortlessly. By connecting both sides smoothly, it ensures hotels run efficiently while guests enjoy a stress-free experience.',
        features: [
            'User Authentication',
            'Product Management',
            'Shopping Cart',
            'Order Management',
            'Payment Integration'
        ],
        techStack: ['Laravel', 'React', 'Tailwind CSS', 'Shadcn UI', 'MySQL', 'Inertia.js']
    },
    {
        id: 3,
        title: 'Itemaster - POS & Inventory System',
        count: '04',
        view: 'Project Details',
        status: 'Completed',
        date: '2025',
        duration: '3 months',
        category: 'Business / Enterprise Application',
        project: 'Internship Project',
        images: [D1, D2, D3, D4, D5, D6],
        description:
            'Inventory system with a POS module that tracks stock and manages item costs for accurate pricing. It simplifies inventory control and cost management.',
        details:
            'Beyond tracking stock, the system connects every sale to your inventory, giving you a clear view of what’s coming in and going out. With precise cost tracking, you set prices confidently and protect your margins, while the POS keeps daily operations smooth and easy for your team and customers.',
        features: [
            'User Authentication',
            'Product Management',
            'Shopping Cart',
            'Order Management',
            'Payment Integration'
        ],
        techStack: ['Laravel', 'React', 'Tailwind CSS', 'Shadcn UI', 'MySQL', 'Inertia.js']
    },
    {
        id: 4,
        title: 'DriveEasy – Driver Training & Certification',
        count: '05',
        view: 'Project Details',
        status: 'Completed',
        date: '2025',
        duration: '1 month',
        category: 'Assessment & Certification System',
        project: 'Freelance Project',
        images: [C1, C2, C3, C4, C5, C6, C7, C8],
        description:
            'DriveEasy guides student drivers through a structured and supportive learning process, from lessons to performance assessment.',
        details:
            'Students receive clear performance ratings and personalized feedback from instructors. Those who need extra practice get targeted learning interventions, while simulated lessons and review sessions help every learner build confidence and skill behind the wheel.',
        features: [
            'User Authentication',
            'Product Management',
            'Shopping Cart',
            'Order Management',
            'Payment Integration'
        ],
        techStack: ['Laravel', 'React', 'Tailwind CSS', 'Shadcn UI', 'MySQL', 'Inertia.js']
    }

];
