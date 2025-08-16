import { SectionHeader } from './ui/SectionHeader';
import { FaReact, FaNodeJs, FaLaravel, FaPhp, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiBootstrap, SiTailwindcss, SiInertia, SiGreensock, SiMysql, SiJira, SiVercel, SiShadcnui, SiTypescript } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";


const frontStack = [
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E44D26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#264DE4]" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-[#F7DF1E]" /> },
    { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { name: 'Inertia.js', icon: <SiInertia className="text-[#9553E9]" /> },
    { name: 'GSAP', icon: <SiGreensock className="text-[#88CE02]" /> },
    { name: 'Shadcn Ui', icon: <SiShadcnui className="text-black" /> },
];


const backStack = [
    { name: 'PHP', icon: <FaPhp className="text-[#777BB4]" /> },
    { name: 'Laravel', icon: <FaLaravel className="text-[#FF2D20]" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
];
const toolStack = [
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <FaGithub className="text-[#181717]" /> },
    { name: 'VS Code', icon: < VscVscode className="text-[#007ACC]" /> },
    { name: 'Jira', icon: <SiJira className="text-[#0052CC]" /> },
    { name: 'Vercel', icon: <SiVercel className="text-black" /> },
];

export default function TechStack() {
    return (
        <section className="mx-auto px-4 lg:px-10 py-10 md:py-11 dark:bg-dark transition-all duration-300 ease-in-out">
            <div className="mb-16 text-center">
                <SectionHeader text="Tech Stack" />
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg dark:text-slate-200 transition-all duration-300 ease-in-out">
                    An overview of the tech stack I use to create web applications
                </p>
            </div>
            <div className="flex flex-col items-center sm:items-start mb-6 sm:justify-start justify-center">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-primary text-secondary text-md font-medium mb-8  dark:bg-black transition-all duration-300 ease-in-out">
                    Frontend Development
                </div>
                <div className="flex w-full justify-center sm:justify-start px-3 sm:px-0">
                    <div className="grid w-full  xs:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                        {frontStack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 sm:gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm border dark:bg-containerDark dark:border-0 border-gray-100 shadow-sm hover:shadow-[0_3px_10px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 ease-out hover:border-gray-200"
                            >
                                <div className="text-[22px] sm:text-[24px] text-gray-700/90">
                                    {tech.icon}
                                </div>
                                <span className="text-gray-800 font-medium text-sm sm:text-[13px] tracking-tight dark:text-slate-200 transition-all duration-300 ease-in-out">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

            <div className="flex flex-col items-center sm:items-end mb-6 sm:justify-end justify-center">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-primary text-secondary text-md font-medium mb-8  dark:bg-black ">
                    Backend Development
                </div>

                <div className="flex w-full justify-end px-3 sm:px-0">
                    <div className="grid grid-cols-2 sm:grid-cols-3 sm:w-auto w-full gap-3 sm:gap-4 auto-cols-fr">
                        {backStack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 sm:gap-4 p-3 sm:px-12 rounded-xl dark:bg-containerDark dark:border-0 bg-white/80 backdrop-blur-sm border  border-gray-100 shadow-sm hover:shadow-[0_3px_10px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 ease-out hover:border-gray-200 w-full"
                            >
                                <div className="text-[22px] sm:text-[24px] text-gray-700/90">
                                    {tech.icon}
                                </div>
                                <span className="text-gray-800 font-medium text-sm sm:text-[13px] tracking-tight dark:text-slate-200 transition-all duration-300 ease-in-out">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center sm:items-start mb-6 sm:justify-start justify-center">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-primary text-secondary text-md font-medium mb-8  dark:bg-black ">
                    Tools & Platforms
                </div>
                <div className="flex w-full justify-center sm:justify-start px-3 sm:px-0">
                    <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                        {toolStack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-3 rounded-xl bg-white/80 dark:bg-containerDark dark:border-0 backdrop-blur-sm border border-gray-100 shadow-md hover:shadow-[0_3px_10px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-250 ease-out hover:border-gray-200"
                            >
                                <div className="text-[22px] text-gray-700/90">
                                    {tech.icon}
                                </div>
                                <span className="text-gray-800 font-medium text-[13px] tracking-tight dark:text-slate-200 transition-all duration-300 ease-in-out">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}