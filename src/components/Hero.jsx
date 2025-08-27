import { Link } from 'react-router-dom';
import { FaDownload, FaGithub } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaFacebook, FaLaptopCode } from "react-icons/fa";
import ProfileImage from '../assets/images/profile.jpeg';
import BlurText from "./BlurText";
import { HiLocationMarker } from 'react-icons/hi';
import { useEffect } from "react";
import { Animations } from "../animations/gsap";
import cvFile from '../assets/Carl-Orfinada-CV.pdf';
export default function Hero() {

    useEffect(() => {
        Animations();
    }, []);
    const StatisticCard = ({ number, description, isLast }) => (
        <div className={`px-8 sm:px-12 lg:px-16 flex flex-col items-center border-gray-400 dark:border-slate-200  transition-all duration-300 ease-in-out  ${!isLast ? 'sm:border-r-2 border-dashed' : ''}`}>
            <div className='flex space-x-4 items-center justify-center flex-col'>
                <BlurText
                    text={number}
                    delay={50}
                    animateBy="chars"
                    direction="top"
                    className="text-1xl sm:text-2xl font-bold text-gray-600 bg-white bg-opacity-60 backdrop-blur-md shadow-md border  transition-all duration-300 ease-in-out dark:bg-containerDark dark:border-containerDark dark:text-slate-200 border-zinc-300 px-6 rounded-2xl"
                />
                <BlurText
                    text={description}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-gray-500 text-center text-md dark:text-slate-200"
                />
            </div>
        </div >
    );
    const PrimaryBadge = ({ title }) => {
        return (
            <div id='primBadge' className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium tracking-wide shadow-md  hover:shadow-lg">
                <FaLaptopCode className="text-base" />
                <span>{title}</span>
            </div>
        );
    };
    const SecondaryBadge = ({ title }) => {
        return (
            <div id='seconBadge' className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                    bg-white/80 dark:bg-white/10 backdrop-blur-md
                    border border-gray-200/40 dark:border-white/20
                    text-gray-800 dark:text-white 
                    font-medium tracking-wide text-sm
                    shadow-sm hover:shadow-md hover:border-emerald-500/60">
                <FaLaptopCode className="text-emerald-600 dark:text-emerald-400" />
                <span>{title}</span>
            </div>
        );
    };
    return (
        <>
            <section id="hero" className="w-full h-full   dark:bg-dark  py-10  md:py-9 px-6  max-w-full  mx-auto relative scroll-mt-20 transition-all duration-300 ease-in-out">
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <PrimaryBadge title="Open to Web Development Projects" />
                    <SecondaryBadge title="React & Laravel Specialist" />
                </div>
                <div className="grid grid-cols md:grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full py-12 ">
                    <div className="flex justify-center   lg:order-2 w-full relative">
                        <div
                            role="img"
                            aria-label="Portfolio preview image"
                            className="w-80 h-96  rounded-2xl shadow-inner overflow-hidden  "
                        >
                            <img
                                src={ProfileImage}
                                alt="Portfolio preview image"
                                className="w-full h-full object-cover  transition duration-500 ease-in-out transform hover:scale-105"
                            />
                        </div>
                        <div id='address' className="hidden md:flex absolute -bottom-3 left-3 items-center gap-2 px-3 py-2 dark:border-containerDark  dark:bg-containerDark  bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/80 shadow-sm hover:shadow dark:transition-all dark:duration-300 group max-w-fit">
                            <HiLocationMarker className="text-indigo-600 group-hover:text-indigo-700 transition-colors" size={18} />
                            <div className="flex flex-col leading-tight ">
                                <span className="text-sm font-medium text-gray-900 dark:text-slate-200  dark:transition-all dark:duration-300 dark:ease-in-out">Alaminos City, Pangasinan</span>
                                <span className="text-xs text-gray-500 dark:text-slate-200 dark:transition-all dark:duration-300 dark:ease-in-out">    Philippines • 22 y/o • 1 Year Experience</span>
                            </div>
                        </div>

                    </div>
                    <div className="space-y-5 order-2 md:order-1 text-center md:text-left w-full ">
                        <h1 id='hero-text' style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }} className="  text-7xl  text- tracking-wide font-extrabold mb-2 dark:text-slate-200 transition-all duration-300 ease-in-out">
                            Hello,{" "}
                            <span className=" px-6 transition duration-300 ease-in-out hover:text-white hover:bg-primary dark:hover:bg-slate-200  dark:hover:text-primary  rounded-lg py-2 inline-flex items-center">
                                I'm Carl
                            </span>
                        </h1>
                        <p
                            id="description"
                            className="text-base text-justify text-gray-700 leading-8 dark:text-slate-200"
                        >
                            Recent{" "}
                            <BlurText
                                text="BS in Information Technology"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="font-semibold text-nowrap text-primary dark:text-slate-200 dark:transition-all dark:duration-300 dark:ease-in-out"
                            />{" "}
                            graduate and  passionate {" "}
                            <BlurText
                                text="web developer," w
                                delay={150}
                                animateBy="words"
                                direction="top"
                                className="font-semibold text-nowrap text-primary dark:text-slate-200 dark:transition-all dark:duration-300 dark:ease-in-out"
                            />{" "}
                            dedicated to mastering modern frameworks and best practices.
                            I stay current with industry trends to build dynamic,
                            user-focused solutions and am eager to apply my technical expertise to meaningful, impactful projects. 🚀
                        </p>

                        <hr className="mt-4 w-full border-gray-300" />
                        <div className="w-full flex items-center justify-between gap-4">
                            <a href={cvFile} target="_blank" rel="noopener noreferrer">
                                <span
                                    id="cvBtn"
                                    className="px-8 py-2.5 shadow-xl bg-primary rounded-full text-secondary font-semibold flex items-center justify-center dark:bg-slate-200 dark:text-primary dark:transition-all dark:duration-300 dark:ease-in-out"
                                >
                                    <FaDownload className="mr-2" /> Download CV
                                </span>
                            </a>
                            <ul id='socialLinks' className="flex items-center gap-4 text-gray-700 dark:text-slate-200 dark:transition-all dark:duration-300 dark:ease-in-out">
                                <li>
                                    <a href="https://www.facebook.com/carl.gabrielle.716684/" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook size={26} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Carl-Gabrielle" target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={26} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/carl-gabrielle/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn size={26} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5   mt-5">
                    <StatisticCard number="5+" description="Completed Projects" />
                    <StatisticCard number="3+" description="Years of Learning" />
                    <StatisticCard number="2+" description="Team Contributions" isLast />
                </div>
            </section >
        </>
    );
}
