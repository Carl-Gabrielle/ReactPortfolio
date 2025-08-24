
import { B, C, D, E, PortfolioThumb, Bthumb, Dthumb, Ethumb, Cthumb } from '../assets/images';
export const projects = [
    {
        title: 'Personal Portfolio',
        count: '01',
        view: 'Project Details',
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
        thumbnail: Bthumb,
        date: '2024',
        duration: '3 months',
        category: 'E-commerce',
        project: 'Capstone Project',
        images: B,
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
        thumbnail: Ethumb,
        date: '2025',
        duration: '2 months',
        category: 'Hotel Booking System',
        project: 'Team-Based Project',
        images: E,
        description:
            'A hotel booking system that simplifies the reservation process, allowing guests to easily book rooms while helping hotels manage availability and reservations efficiently.',
        details:
            'The system gives admins a clear view of bookings and room availability, making management simple and organized. At the same time, guests can search, book, and confirm their stays effortlessly. By connecting both sides smoothly, it ensures hotels run efficiently while guests enjoy a stress-free experience.',
        features: [
            'User Authentication',
            'Room Search & Availability',
            'Online Booking & Confirmation',
            'Payment Integration',
            'Admin Booking Management'
        ],
        techStack: ['Laravel', 'React', 'Typescript', 'Tailwind CSS', 'Shadcn UI', 'MySQL', 'Inertia.js']
    },
    {
        id: 3,
        title: 'Itemaster - POS & Inventory System',
        count: '04',
        view: 'Project Details',
        status: 'Completed',
        thumbnail: Dthumb,
        date: '2025',
        duration: '3 months',
        category: 'Business / Enterprise Application',
        project: 'Internship Project',
        images: D,
        description:
            'Inventory system with a POS module that tracks stock and manages item costs for accurate pricing. It simplifies inventory control and cost management.',
        details:
            'Beyond tracking stock, the system connects every sale to your inventory, giving you a clear view of what’s coming in and going out. With precise cost tracking, you set prices confidently and protect your margins, while the POS keeps daily operations smooth and easy for your team and customers.',
        features: [
            "User Authentication & Role Management",
            "Product & Inventory Management",
            "Real-Time Stock Tracking",
            "Point of Sale (POS) Module",
            "Cost & Pricing Management",
            "Sales & Order Tracking",
            "Customer Management",
            "Reporting & Analytics",
            "Payment Integration"
        ],
        techStack: ['Laravel', 'React', 'Typescript', 'Tailwind CSS', 'Shadcn UI', 'MySQL', 'Inertia.js']
    },
    {
        id: 4,
        title: 'DriveEasy – Driver Training & Certification',
        count: '05',
        view: 'Project Details',
        status: 'Completed',
        thumbnail: Cthumb,
        date: '2025',
        duration: '1 month',
        category: 'Assessment & Certification System',
        project: 'Freelance Project',
        images: C,
        description:
            'DriveEasy guides student drivers through a structured and supportive learning process, from lessons to performance assessment.',
        details:
            'Students receive clear performance ratings and personalized feedback from instructors. Those who need extra practice get targeted learning interventions, while simulated lessons and review sessions help every learner build confidence and skill behind the wheel.',
        features: [
            "User Authentication",
            "Student Profiles",
            "Lesson Scheduling",
            "Performance Assessment",
            "Feedback & Progress Reports",
            "Learning Interventions",
            "Simulated Practice",
            "Certificate Issuance"
        ],
        techStack: ['Laravel', 'React', 'Tailwind CSS', 'Shadcn UI', 'MySQL', 'Inertia.js']
    }

];
