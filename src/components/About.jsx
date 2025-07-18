import React from 'react';

import aboutImage from '../assets/images/aboutImg.jpg';
import { FiMonitor } from 'react-icons/fi';
import { BiServer } from 'react-icons/bi';
import { RiStackLine } from 'react-icons/ri';
import { MdDevices } from 'react-icons/md';
import { FiPenTool } from 'react-icons/fi';
import { BsArrowReturnRight } from 'react-icons/bs';

const CardStyle = ({ children, className = '' }) => (
    <div className={`group p-6 rounded-xl border border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md ${className}`}>
        {children}
    </div>
);

const SectionHeader = ({ text }) => (
    <h2 className="text-center mt-5 hover:-translate-y-1 hover:scale-100 transition duration-300 ease-in-out text-gray-800 font-extrabold text-4xl sm:text-5xl tracking-wide hover:underline">
        {text}
    </h2>
);

const SectionSubHeader = ({ text }) => (
    <h3 className="text-md font-semibold uppercase tracking-wide sm:text-left text-center bg-primary text-secondary px-4 py-1 rounded-full">
        {text}:
    </h3>
);

const ServiceCard = ({ icon, title }) => (
    <div className="service-card px-3 py-2 rounded-lg border-2 border-gray-400 border-dashed shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-3">
            <div className="rounded-full bg-primary-100 text-primary-600">{icon}</div>
            <h4 className="font-medium text-gray-800 text-sm text-nowrap">{title}</h4>
        </div>
    </div>
);

const ParagraphBlock = ({ textParts = [] }) => (
    <p className="text-gray-700 mt-4 leading-8 text-justify">
        {textParts.map((part, index) =>
            part.bold ? (
                <strong key={index} className="font-semibold text-gray-700">
                    {part.content}
                </strong>
            ) : (
                <span key={index}>{part.content}</span>
            )
        )}
    </p>
);

export default function About() {
    return (
        <section className="w-7xl mx-auto px-4 lg:px-10 py-10 md:py-11">
            <SectionHeader text="About Me" />
            <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-6 px-4 mt-8">
                {/* Image + caption */}
                <div className="flex flex-col items-center  md:items-center lg:items-start space-y-4 sm:space-y-0 sm:w-full w-auto">
                    <img
                        id="aboutImage"
                        src={aboutImage}
                        alt="Portrait of the developer"
                        className="w-full max-w-xs aspect-[2/3] object-cover rounded-xl grayscale hover:grayscale-0 transition duration-500 ease-in-out shadow-lg mb-2"
                    />
                    <div className="mt-4 text-sm text-gray-600 font-medium tracking-wide text-center sm:text-left md:text-center lg:text-start">
                        <h1>
                            A quiet moment, a cold brew, and big ideas brewing.
                        </h1>
                        <p className="mt-1 text-xs text-gray-500 italic font-light tracking-normal">
                            June 13, 2024 · Tondaligan Beach
                        </p>
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center items-start space-y-4 sm:border-l-2 border-dashed md:border-0 lg:border-l-2 border-gray-400 sm:pl-6">
                    <SectionSubHeader text="Get to know me" />
                    <ParagraphBlock
                        textParts={[
                            {
                                content:
                                    'My journey into web development began with a curiosity about how websites are built and a desire to bring ideas to life through code. What started as a hobby quickly evolved into a passion for creating intuitive, accessible digital experiences.',
                                bold: false,
                            },
                        ]}
                    />
                    <ParagraphBlock
                        textParts={[
                            { content: 'I specialize in front-end development with expertise in modern technologies including ', bold: false },
                            { content: 'React', bold: true },
                            { content: ', ', bold: false },
                            { content: 'TypeScript', bold: true },
                            { content: ', and ', bold: false },
                            { content: 'Laravel', bold: true },
                            { content: '. My toolkit includes ', bold: false },
                            { content: 'Tailwind CSS', bold: true },
                            { content: ', ', bold: false },
                            { content: 'Shadcn UI', bold: true },
                            { content: ' for efficient styling and ', bold: false },
                            { content: 'GSAP', bold: true },
                            { content: ' for engaging animations. I\'m committed to writing clean, maintainable code following best practices.', bold: false },
                        ]}
                    />
                    <ParagraphBlock
                        textParts={[
                            { content: 'Beyond solo projects, I actively collaborate using ', bold: false },
                            { content: 'Git', bold: true },
                            { content: ' and ', bold: false },
                            { content: 'GitHub', bold: true },
                            { content: ' for version control, contributing to team-based development. I follow best practices like ', bold: false },
                            { content: 'semantic commit messages', bold: true },
                            { content: ', ', bold: false },
                            { content: 'branch management', bold: true },
                            { content: ', and ', bold: false },
                            { content: 'pull request reviews', bold: true },
                            { content: ' to ensure smooth teamwork. I stay current with modern tech stacks through continuous learning, experimenting with new tools in personal repositories and sharing knowledge through code reviews and documentation.', bold: false },
                        ]}
                    />

                    {/* Services */}
                    <div className="services-section space-y-6 w-full">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold uppercase tracking-wider text-primary-600">
                                Services I Provide
                            </h3>
                            <div className="flex items-center space-x-2 text-gray-500">
                                <BsArrowReturnRight />
                                <span className="text-sm font-medium">
                                    I build user-friendly websites with a focus on design, performance, and functionality
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <ServiceCard icon={<FiMonitor size={18} />} title="Frontend Development" />
                            <ServiceCard icon={<BiServer size={18} />} title="Backend Development" />
                            <ServiceCard icon={<RiStackLine size={18} />} title="Full-Stack Development" />
                            <ServiceCard icon={<MdDevices size={18} />} title="Responsive Design" />
                            <ServiceCard icon={<FiPenTool size={18} />} title="UI/UX Design" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
