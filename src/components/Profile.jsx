import { useEffect, useRef } from "react";
import { SectionTitle } from './ui/SectionHeader';
import AcnhsLogo from '../assets/images/AcnhsLogo.webp';
import PsuLogo from '../assets/images/psuLogo.webp';
import AccsLogo from '../assets/images/AccsLogo.webp';
import { LiaCertificateSolid } from "react-icons/lia";
import { PiGraduationCap } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { profileAnimations } from "../animations/gsap";


const EducationCard = ({ logo, title, date, school, program, isLast }) => (
    <div className="relative group pl-8 education-card">
        <div className="absolute left-0 top-5 h-3 w-3 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 border-2 border-white shadow-md transform -translate-x-1/2 z-30 transition-all duration-300 group-hover:scale-125"></div>

        {!isLast && (
            <div className="absolute left-0 top-8 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
        )}

        <div className="rounded-xl shadow-sm p-4 flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 bg-white dark:bg-containerDark">
            <div className="p-1.5 bg-white rounded-lg border border-gray-100 shadow-xs flex-shrink-0 mt-0.5">
                <img
                    src={logo}
                    alt={`${school} Logo`}
                    className="w-10 h-10 object-contain"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm dark:text-slate-100">{title}</h3>
                <p className="text-gray-600 text-xs font-medium mt-1 dark:text-slate-200">{date}</p>
                <p className="text-gray-500 text-xs mt-0.5 dark:text-slate-200">{program}</p>
                <p className="text-gray-700 text-xs mt-1.5 dark:text-slate-200">{school}</p>
            </div>
        </div>
    </div>
);

const CertificationCard = ({ title, date, organization }) => (
    <div className="group mt-4 certification-card">
        <div className="rounded-xl shadow-sm p-3 border border-gray-200 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 bg-white dark:bg-containerDark">
            <div className="flex justify-between items-start">
                <span className="text-gray-800 font-semibold text-sm dark:text-slate-100">
                    {organization}
                </span>
                <span className="text-gray-600 text-xs bg-gray-50 rounded italic px-0.5 dark:text-primary dark:bg-white/90">
                    {date}
                </span>
            </div>
            <p className="text-gray-600 text-xs mt-1 dark:text-slate-200">{title}</p>
        </div>
    </div>
);

const ExperienceCard = ({ role, company, date, description }) => (
    <div className="relative pl-6 border-l border-gray-200 experience-card">
        <div className="mb-8 ml-4">
            <div className="absolute left-0 top-0 h-3 w-3 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 border-2 border-white shadow-md transform -translate-x-1/2 z-10"></div>
            <h3 className="text-md font-semibold text-gray-800 dark:text-slate-100">{role}</h3>
            <div className="text-xs text-gray-500 flex justify-between items-center flex-wrap">
                <span className="text-sm font-medium text-indigo-600">{company}</span>
                <span className="text-xs text-gray-400 dark:text-slate-200">{date}</span>
            </div>
            <p className="mt-2 text-gray-600 text-xs leading-relaxed dark:text-slate-200">
                {description}
            </p>
        </div>
    </div>
);

export default function Profile() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cleanup = profileAnimations(sectionRef);
        return cleanup;
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full h-full dark:bg-dark py-10 md:py-11 px-6 max-w-full mx-auto"
        >
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="border border-gray-100 bg-white rounded-3xl p-6 shadow-sm dark:bg-containerDark dark:border-0">
                    <SectionTitle
                        icon={<PiGraduationCap size={20} />}
                        text="Education"
                    />
                    <div className="mt-6 space-y-6 relative">
                        <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-100 transform -translate-x-1/2"></div>

                        <EducationCard
                            logo={PsuLogo}
                            title="Tertiary Education"
                            program="Bachelor of Science in Information Technology"
                            school="Pangasinan State University"
                            date="August 2021 - 2025"
                            isLast={false}
                        />
                        <EducationCard
                            logo={AcnhsLogo}
                            title="Upper Secondary Education"
                            program="STEM Strand"
                            date="June 2019 - 2021"
                            school="Alaminos City National High School"
                            isLast={false}
                        />
                        <EducationCard
                            logo={AcnhsLogo}
                            title="Lower Secondary Education"
                            program="Special Program in the Arts (SPA)"
                            date="June 2016 - 2019"
                            school="Alaminos City National High School"
                            isLast={false}
                        />
                        <EducationCard
                            logo={AccsLogo}
                            title="Primary Education"
                            program="Elementary Education"
                            date="June 2010 - 2016"
                            school="Alaminos City Central School"
                            isLast={true}
                        />
                    </div>
                </div>

                <div className="border border-gray-100 bg-white rounded-3xl p-6 shadow-sm md:col-span-1 lg:col-span-2 dark:bg-containerDark dark:border-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <SectionTitle
                                icon={<IoBriefcaseOutline size={20} />}
                                text="Professional Experience"
                            />
                            <div className="mt-6">
                                <ExperienceCard
                                    role="Full-Stack Web Developer"
                                    company="Freelance"
                                    date="June 2025 – Present"
                                    description="Building modern, responsive, and intuitive web applications with clean, maintainable code."
                                />
                                <ExperienceCard
                                    role="Full-Stack Web Developer Intern"
                                    company="Techniqal Group MCS"
                                    date="Jan 2025 – June 2025"
                                    description="Contributed to the development of an Inventory Management System with POS module."
                                />
                                <ExperienceCard
                                    role="Developer & Designer"
                                    company="Capstone Project"
                                    date="June 2024 – Nov 2024"
                                    description="Built a full-featured e-commerce platform for traditional crafts and local artisans."
                                />
                            </div>
                        </div>

                        <div className="sm:border-l-2 border-dashed pl-2 border-0">
                            <SectionTitle
                                icon={<LiaCertificateSolid size={20} />}
                                text="Certifications"
                            />
                            <div className="mt-6">
                                <CertificationCard
                                    organization="Techniqal Group MCS"
                                    title="Full-Stack Web Developer Intern"
                                    date={2025}
                                />
                                <CertificationCard
                                    organization="TestDome"
                                    title="SQL"
                                    date={2025}
                                />
                                <CertificationCard
                                    organization="TestDome"
                                    title="Software Engineering"
                                    date={2025}
                                />
                                <CertificationCard
                                    organization="Armada Logics"
                                    title="Web Fundamentals Training"
                                    date={2024}
                                />
                                <CertificationCard
                                    organization="Data Analytics Philippines"
                                    title="Querying Fundamentals with MYSQL"
                                    date={2024}
                                />
                                <CertificationCard
                                    organization="freeCodeCamp"
                                    title="Responsive Web Design Certification"
                                    date={2023}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
