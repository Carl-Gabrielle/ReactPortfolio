import { useEffect } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { staggerFadeIn } from "../animations/gsap";
import {
    FaReact, FaNodeJs, FaLaravel, FaPhp, FaHtml5, FaCss3Alt,
    FaJsSquare, FaDatabase, FaGitAlt, FaGithub
} from "react-icons/fa";
import {
    SiBootstrap, SiTailwindcss, SiInertia, SiGreensock,
    SiMysql, SiJira, SiVercel, SiShadcnui, SiTypescript
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const frontStack = [
    { name: "HTML5", icon: <FaHtml5 className="text-[#E44D26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#264DE4]" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
    { name: "Inertia.js", icon: <SiInertia className="text-[#9553E9]" /> },
    { name: "GSAP", icon: <SiGreensock className="text-[#88CE02]" /> },
    { name: "Shadcn Ui", icon: <SiShadcnui className="text-black" /> },
];

const backStack = [
    { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
    { name: "Laravel", icon: <FaLaravel className="text-[#FF2D20]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
];

const toolStack = [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "GitHub", icon: <FaGithub className="text-[#181717]" /> },
    { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
    { name: "Jira", icon: <SiJira className="text-[#0052CC]" /> },
    { name: "Vercel", icon: <SiVercel className="text-black" /> },
];

export default function TechStack() {
    useEffect(() => {
        staggerFadeIn(document.querySelectorAll(".front-card"));
        staggerFadeIn(document.querySelectorAll(".back-card"), 0.2);
        staggerFadeIn(document.querySelectorAll(".tool-card"), 0.4);
    }, []);

    return (
        <section
            id="techstack"
            className="mx-auto px-4 lg:px-10 py-10 md:py-11 dark:bg-dark transition-all duration-300 ease-in-out"
        >
            <div className="mb-16 text-center">
                <SectionHeader text="Tech Stack" />
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-lg dark:text-slate-200">
                    An overview of the tech stack I use to create web applications
                </p>
            </div>

            <div className="flex flex-col items-center sm:items-start mb-6">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-primary text-secondary text-md font-medium mb-8">
                    Frontend Development
                </div>
                <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {frontStack.map((tech, i) => (
                        <div
                            key={i}
                            className="front-card flex items-center gap-2 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border dark:bg-containerDark dark:border-0 border-gray-100 shadow-sm"
                        >
                            <div className="text-[22px] sm:text-[24px] text-gray-700/90">
                                {tech.icon}
                            </div>
                            <span className="text-gray-800 font-medium text-sm sm:text-[13px] dark:text-slate-200">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center sm:items-end mb-6 sm:justify-end justify-center">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-primary text-secondary text-md font-medium mb-8 dark:bg-black ">
                    Backend Development
                </div>
            </div>
            <div className="flex w-full justify-end px-3 sm:px-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 sm:w-auto w-full gap-3 sm:gap-4 auto-cols-fr">
                    {backStack.map((tech, i) => (
                        <div
                            key={i}
                            className="back-card flex items-center gap-2 sm:gap-4 p-3 sm:px-12 rounded-2xl bg-white/80 backdrop-blur-sm border dark:bg-containerDark dark:border-0 border-gray-100 shadow-sm  w-full"
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

            <div className="flex flex-col items-center sm:items-start">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-primary text-secondary text-md font-medium mb-8">
                    Tools & Platforms
                </div>
                <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {toolStack.map((tech, i) => (
                        <div
                            key={i}
                            className="tool-card flex items-center gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border dark:bg-containerDark dark:border-0 border-gray-100 shadow-sm"
                        >
                            <div className="text-[22px]">{tech.icon}</div>
                            <span className="text-gray-800 font-medium text-sm dark:text-slate-200">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
