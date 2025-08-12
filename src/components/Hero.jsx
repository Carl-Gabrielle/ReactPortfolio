import { Link } from 'react-router-dom';
import { FaDownload, FaGithub } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ProfileImage from '../assets/images/profile.jpeg';
import BlurText from "./BlurText";
import { HiLocationMarker } from 'react-icons/hi';

export default function Hero() {
    const StatisticCard = ({ number, description, isLast }) => (
        <div className={`px-8 sm:px-12 lg:px-16 flex flex-col items-center border-gray-400 ${!isLast ? 'sm:border-r-2 border-dashed' : ''}`}>
            <div className='flex space-x-4 items-center justify-center flex-col'>
                <BlurText
                    text={number}
                    delay={50}
                    animateBy="chars"
                    direction="top"
                    onAnimationComplete={() => console.log('Number animation completed')}
                    className="text-1xl sm:text-2xl font-bold text-gray-600 bg-white bg-opacity-60 backdrop-blur-md shadow-md border  border-zinc-300 px-6 rounded-2xl"
                />
                <BlurText
                    text={description}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={() => console.log('Description animation completed')}
                    className="text-gray-500 text-center text-md"
                />
            </div>
        </div >
    );
    return (
        <section className="w-full h-full   py-10 md:py-9 px-6  max-w-full  mx-auto relative">
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
                    <div className="hidden md:flex absolute -bottom-3 left-3 items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/80 shadow-sm hover:shadow transition-all duration-300 group max-w-fit">
                        <HiLocationMarker className="text-indigo-600 group-hover:text-indigo-700 transition-colors" size={18} />
                        <div className="flex flex-col leading-tight">
                            <span className="text-sm font-medium text-gray-900">Alaminos City, Pangasinan</span>
                            <span className="text-xs text-gray-500">Philippines • 1 Year of  Experience</span>
                        </div>
                    </div>

                </div>
                <div className="space-y-6 order-2 md:order-1 text-center md:text-left w-full ">
                    <h1 className="text-7xl  text- tracking-wide font-extrabold mb-2">
                        Hello,{" "}
                        <span className="px-6 transition duration-300 ease-in-out hover:text-white hover:bg-primary rounded-lg py-2 inline-flex items-center">
                            I'm Carl
                        </span>
                    </h1>

                    <p className="text-base text-justify text-gray-700 leading-8">
                        As a recent graduate with a Bachelor of Science in Information Technology, I am a passionate and driven
                        <BlurText
                            text="aspiring web developer"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="font-bold text-nowrap shadow-md  bg-primary text-gray-100 px-3 rounded-lg "
                        />  dedicated to Sharpening my skills in evolving development frameworks. I actively stay updated with industry trends and emerging innovations to deliver dynamic, user-centric web solutions.Eager to apply my technical skills to impactful tech projects🚀
                    </p>
                    <hr className="mt-4 w-full border-gray-300" />
                    <div className="w-full flex items-center justify-between gap-4">
                        <a href="">
                            <span className="px-8 py-2.5 shadow-xl bg-primary rounded-full  text-secondary font-semibold flex items-center justify-center">
                                <FaDownload className="mr-2" /> Download CV
                            </span>
                        </a>
                        <ul className="flex items-center gap-4 text-gray-700">
                            <li>
                                <a href="https://www.instagram.com/carlgabrielle/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={26} />
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

    );
}
