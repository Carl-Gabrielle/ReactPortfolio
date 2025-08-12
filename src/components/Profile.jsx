import { SectionTitle } from './ui/SectionHeader';
import AcnhsLogo from '../assets/images/AcnhsLogo.png';
import PsuLogo from '../assets/images/psuLogo.png';
import AccsLogo from '../assets/images/AccsLogo.png';
import { FaGraduationCap } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const EducationCard = ({ logo, title, date, school, program, isLast }) => (
    <div className="relative group pl-8">
        <div className="animate-pulse absolute left-0 top-5 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 border-2  border-white shadow-md transform -translate-x-1/2 z-10 transition-all duration-300 group-hover:scale-125"></div>

        {!isLast && (
            <div className="absolute left-0 top-8 h-full w-0.5 bg-gray-200  transform -translate-x-1/2"></div>
        )}

        <div className=" rounded-xl shadow-sm p-4 flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
            <div className="p-1.5 bg-white rounded-lg border border-gray-100 shadow-xs flex-shrink-0 mt-0.5">
                <img
                    src={logo}
                    alt={`${school} Logo`}
                    className="w-10 h-10 object-contain"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-sm text-nowrap">{title}</h3>
                <p className="text-gray-600 text-[0.70rem] font-medium mt-1 italic">{program}</p>
                <p className="text-gray-600 text-xs font-medium mt-1">{date}</p>
                <p className="text-gray-600 text-xs mt-1.5 text-nowrap">{school}</p>
            </div>
        </div>
    </div>
);

const CertificationCard = ({ title, date, organization }) => (
    <div className="group mt-4">
        <div className="rounded-xl shadow-sm p-3 border border-gray-200 transition-all duration-300 hover:shadow-md  hover:-translate-y-0.5">
            <div className="flex justify-between items-start">
                <span className="text-gray-800 font-semibold text-sm">
                    {organization}
                </span>

                <span className="text-gray-600 text-xs bg-gray-50  rounded italic px-0.5">
                    {date}
                </span>
            </div>
            <p className="text-gray-600 text-xs mt-1">{title}</p>
        </div>
    </div>
);

const ExperienceCard = ({ role, company, date, description }) => (
    <div className="relative pl-6 border-l border-gray-200">
        <div className="mb-8 ml-4">
            <div className="animate-pulse absolute left-0 top-0 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 border-2  border-white shadow-md transform -translate-x-1/2 z-10 transition-all duration-300 group-hover:scale-125"></div>
            <h3 className="text-md font-semibold text-gray-800">{role}</h3>
            <div className="text-muted text-xs text-gray-500 flex justify-between items-center flex-wrap">
                <span className="text-sm font-medium text-indigo-600">{company}</span>
                <span className="text-xs text-gray-400">{date}</span>
            </div>
            <p className="mt-2 text-gray-600 text-xs leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

export default function Profile() {
    return (
        <section className="w-full h-full   py-10 md:py-11 px-6  max-w-full  mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="border border-gray-100 bg-white rounded-3xl p-6 shadow-sm">
                    <SectionTitle
                        icon={<PiGraduationCap size={20} />}
                        text="Education"
                    />
                    <div className="mt-6 space-y-6 relative">
                        <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-100 transform -translate-x-1/2"></div>

                        <EducationCard
                            logo={PsuLogo}
                            title="Tertiary Education"
                            date="August 2021 - 2025"
                            school="Pangasinan State University "
                            isFirst={true}
                            isLast={false}
                        />

                        <EducationCard
                            logo={AcnhsLogo}
                            title="Upper Secondary Education"
                            // program="STEM"
                            date="June 2019 - 2021"
                            school="Alaminos City National High School "
                            isFirst={false}
                            isLast={false}
                        />

                        <EducationCard
                            logo={AcnhsLogo}
                            title="Lower Secondary Education"
                            date="June 2016 - 2019"
                            school="Alaminos City National High School"
                            isFirst={false}
                            isLast={false}
                        />

                        <EducationCard
                            logo={AccsLogo}
                            title="Primary Education"
                            date="June 2010 - 2016"
                            school="Alaminos City Central School"
                            isFirst={false}
                            isLast={true}
                        />
                    </div>
                </div>

                <div className="border border-gray-100 bg-white rounded-3xl p-6 shadow-sm md:col-span-1 lg:col-span-2">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <SectionTitle icon={<IoBriefcaseOutline size={20} />} text="Professional Experience" />
                            <div className="mt-6">
                                <ExperienceCard
                                    role="Full-Stack  Developer "
                                    company="Freelance"
                                    date="June 2025 – Present"
                                    description="I'm currently working as a freelance full-stack developer, building modern, responsive, and intuitive web applications with clean, maintainable code"
                                />
                                <ExperienceCard
                                    role="Full-Stack  Developer Intern"
                                    company="Techniqal Group MCS"
                                    date="January 2025 – June 2025"
                                    description="Contributed to the development of an Inventory Management System with a Point of Sale (POS) module."
                                />
                                <ExperienceCard
                                    role="Developer & Designer "
                                    company="Capstone Project"
                                    date="June 2024 – November 2024"
                                    description="Built a full-featured e-commerce platform for traditional crafts and local artisans in Bolinao, Pangasinan."
                                />
                            </div>
                        </div>
                        <div className='sm:border-l-2 border-dashed pl-2  border-0 '>
                            <SectionTitle icon={<LiaCertificateSolid size={20} />} text="Certifications" />
                            <div className="mt-6">
                                <div className="relative pl-4">
                                    <a href="">
                                        <CertificationCard
                                            organization="TechniqalGroup MCS "
                                            title="Full-Stack Web Developer Intern"
                                            date={2025}
                                        />
                                    </a>
                                    <a href="https://www.testdome.com/certificates/5a12814ebc0740568ba0e2cacf233b34" target='blank'>
                                        <CertificationCard
                                            organization="TestDome"
                                            title="SQL"
                                            date={2025}
                                        />
                                    </a>
                                    <a href="https://www.testdome.com/certificates/12fde3a7e62448ad955279d93dae7520" target='blank'>
                                        <CertificationCard
                                            organization="TestDome"
                                            title="Software Engineering"
                                            date={2025}
                                        />
                                    </a>
                                    <a href="">
                                        <CertificationCard
                                            organization="Armada Logics"
                                            title="Web Fundamentals Training"
                                            date={2024}
                                        />
                                    </a>
                                    <a href="">
                                        <CertificationCard
                                            organization="Data Analytics Philippines"
                                            title="Querying Fundamentals with MYSQL "
                                            date={2024}
                                        />
                                    </a>
                                    <a href="">
                                        <CertificationCard
                                            organization="freeCodeCamp "
                                            title="Responsive Web Design Certification"
                                            date={2023}
                                        />
                                    </a>
                                    {/* <div className='mt-4 flex justify-end'>
                                        <button className='flex items-center space-x-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-200'>
                                            View all
                                            <MdOutlineKeyboardArrowRight className='text-lg' />
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}