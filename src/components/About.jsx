import React, { useEffect, useRef } from "react";
import aboutImage from '../assets/images/aboutImg.webp';
import { FiMonitor } from 'react-icons/fi';
import { BiServer } from 'react-icons/bi';
import { RiStackLine } from 'react-icons/ri';
import { MdDevices } from 'react-icons/md';
import { FiPenTool } from 'react-icons/fi';
import { BsArrowReturnRight } from 'react-icons/bs';
import { SectionHeader, SectionSubHeader } from './ui/SectionHeader';
import { profileAnimations } from "../animations/gsap";


const CardStyle = ({ children, className = '' }) => (
    <div className={`group p-6 rounded-xl border border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md ${className}`}>
        {children}
    </div>
);

const ServiceCard = ({ icon, title }) => (
    <div className="service-card  services-card px-3 py-2  rounded-lg border border-gray-400 border-dashed dark:border-slate-200    shadow-sm hover:shadow-md transition-shadow dark:text-slate-200 dark:transition-all duration-300 ease-in-out">
        <div className="flex items-center space-x-3">
            <div className="rounded-full bg-primary-100 text-primary-600">{icon}</div>
            <h4 className=" font-medium text-gray-800 text-xs sm:text[2em] text-nowrap dark:text-slate-200 transition-all duration-300 ease-in-out">{title}</h4>
        </div>
    </div>
);

const ParagraphBlock = ({ textParts = [] }) => (
    <p className="text-gray-700 text-base mt-4 leading-8 text-justify dark:text-slate-200 transition-all duration-300 ease-in-out">
        {textParts.map((part, index) =>
            part.bold ? (
                <strong key={index} className="font-semibold text-gray-700 dark:text-slate-200 transition-all duration-300 ease-in-out">
                    {part.content}
                </strong>
            ) : (
                <span key={index}>{part.content}</span>
            )
        )}
    </p>
);

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cleanup = profileAnimations(sectionRef);
        return cleanup;
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="w-full h-full dark:bg-dark py-10 md:py-11 px-6 max-w-7xl mx-auto scroll-mt-20 transition-all duration-300 ease-in-out relative"
        >
            <div className="absolute bottom-8 right-0 w-72 h-72 rounded-full bg-blue-500/20 blur-2xl "></div>
            <SectionHeader text="About Me" />
            <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-8 mt-8">
                <div className="flex flex-col items-center lg:items-start space-y-4 w-full">

                    <img
                        id="aboutImage"
                        src={aboutImage}
                        alt="Portrait of the developer"
                        className="max-w-sm  w-full aspect-[2/3] object-cover rounded-xl 
                   grayscale hover:grayscale-0 transition duration-500 
                   ease-in-out shadow-lg"
                    />
                    <div className="mt-4 text-sm text-gray-600 font-medium tracking-wide text-center lg:text-left dark:text-slate-200">
                        <h1>A quiet moment, a cold brew, and big ideas brewing.</h1>
                        <p className="mt-1 text-xs text-gray-500 italic font-light tracking-normal dark:text-slate-200">
                            June 13, 2024 · Tondaligan Beach
                        </p>
                    </div>
                </div>

                <div className="space-y-4 grid col-span-2 ">
                    <SectionSubHeader text="Get to know me" />

                    <ParagraphBlock
                        textParts={[
                            {
                                content:
                                    'My journey into web development began with a curiosity about how websites are built and a drive to transform ideas into interactive digital experiences. What started as a hobby has grown into a passion for designing and developing intuitive, user-friendly, and accessible applications.',
                                bold: false,
                            },
                        ]}
                    />

                    <ParagraphBlock
                        textParts={[
                            { content: 'I specialize in building modern, responsive web solutions using technologies such as ', bold: false },
                            { content: 'React', bold: true },
                            { content: ', ', bold: false },
                            { content: 'TypeScript', bold: true },
                            { content: ', and ', bold: false },
                            { content: 'Laravel', bold: true },
                            { content: '. My toolkit includes ', bold: false },
                            { content: 'Tailwind CSS ', bold: true },
                            { content: 'and ', bold: false },
                            { content: 'Shadcn UI ', bold: true },
                            { content: 'for efficient, scalable styling, as well as ', bold: false },
                            { content: 'GSAP ', bold: true },
                            { content: 'for creating smooth, engaging animations. ', bold: false },
                        ]}
                    />

                    <ParagraphBlock
                        textParts={[
                            { content: 'In addition to working on personal projects, I thrive in collaborative environments, leveraging ', bold: false },
                            { content: 'Git', bold: true },
                            { content: ' and ', bold: false },
                            { content: 'GitHub ', bold: true },
                            { content: 'for version control and contributing effectively to team-based development workflows. My focus is on writing clean, maintainable code while continuously expanding my skills to stay aligned with evolving industry standards.', bold: false },
                        ]}
                    />

                    <div className="services-section space-y-6 w-full">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold uppercase tracking-wider text-primary-600 dark:text-slate-200">
                                Services I Provide
                            </h3>
                            <div className="flex items-center space-x-2 text-gray-500">
                                <BsArrowReturnRight className="dark:text-slate-200" />
                                <span className="text-sm font-medium dark:text-slate-200">
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
