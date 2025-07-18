import { Link } from 'react-router-dom';
import { FaDownload, FaGithub } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ProfileImage from '../assets/images/profile.jpeg';
import BlurText from "./BlurText";

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
        <section className="w-full h-full px-4 lg:px-10 py-10 md:py-11">
            <div className="grid grid-cols md:grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full py-12 ">
                <div className="flex justify-center   lg:order-2 w-full relative">
                    <div className='hidden lg:block  absolute z-20 bg-white bg-opacity-60 backdrop-blur-md shadow-md border  border-zinc-300 px-4 rounded-xl -top-3 left-20 -rotate-12 '>
                        <h1 className='text-primary text-sm'>Carl Gabrielle </h1>
                        <p className='text-gray-500 text-xs'>Web Developer</p>
                    </div>
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

                </div>
                <div className="space-y-6 order-2 md:order-1 text-center md:text-left w-full ">
                    <h1 className="text-7xl  text- tracking-wide font-extrabold mb-2">
                        Hello,{" "}
                        <span className="px-6 transition duration-300 ease-in-out hover:text-white hover:bg-primary rounded-lg py-2 inline-flex items-center">
                            I'm Carl
                        </span>
                    </h1>
                    <p className="text-base text-justify text-gray-700 leading-8">
                        I’m a 22-year-old , recently completed my internship during my fourth year as an I.T. student. I have a strong passion for becoming
                        <BlurText
                            text="a proficient web developer"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="font-bold text-nowrap shadow-md  bg-primary text-gray-100 px-3 rounded-lg "
                        /> and I am committed to continuous learning and expanding my expertise in the tech industry. Driven by a desire to grow in my field, I stay current with the latest trends and technological breakthroughs to deliver innovative web solutions. 🚀
                    </p>
                    <hr className="mt-4 w-full border-gray-300" />
                    <div className="w-full flex items-center justify-between gap-4">
                        <a href="">
                            <span className="px-8 py-3.5 shadow-xl bg-primary rounded-full  text-secondary font-semibold flex items-center justify-center">
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
