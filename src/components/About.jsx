import React from 'react'
import { LuUser } from "react-icons/lu";
import { FiCode } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";
import { FaUniversity } from 'react-icons/fa';
import { GiGears } from 'react-icons/gi';
const CardStyle = ({ children }) => (
    <div className="group space-y-6 p-8  rounded-xl border border-gray-300 transition-all duration-300 shadow-sm bg-gray-50/50">
        {children}
    </div>
);

export default function About() {
    return (
        <section className="w-full h-full px-4 lg:px-10 py-10 md:py-11">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                <div className='gap-8 grid grid-rows-1 md:grid-rows-2'>
                    <CardStyle>
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl border border-gray-300  group-hover:shadow-md transition-shadow">
                                <LuUser />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-primary">About Me</h2>
                                <div className='flex items-center gap-2 text-gray-500'>
                                    <MdOutlineSubdirectoryArrowRight />
                                    <span className='text-sm '>Get to know  me </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-600">
                            <p className="flex gap-2 items-start">
                                <FiCode className="flex-shrink-0 mt-1 text-blue-500" size={18} />
                                <span className="leading-relaxed ">
                                    My journey into web development began with a curiosity about how websites are built and a desire to bring ideas to life through code.
                                    I have experience in front-end development, working with technologies such as HTML, CSS, JavaScript, and starting to learn frameworks like React. I'm also proficient in using tools like Tailwind CSS to build responsive and visually appealing user interfaces.
                                    When I'm not coding, I enjoy exploring new design trends, reading tech blogs, and continuously learning new skills to enhance my development expertise.
                                </span>
                            </p>

                        </div>
                    </CardStyle>
                    <CardStyle>
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl border border-gray-300  group-hover:shadow-md transition-shadow">
                                <LuUser />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-primary">Certificates</h2>
                                <div className='flex items-center gap-2 text-gray-500'>
                                    <MdOutlineSubdirectoryArrowRight />
                                    <span className='text-sm '>Get to know  me </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-600">
                            <p className="flex gap-2 items-start">
                                <FiCode className="flex-shrink-0 mt-1 text-blue-500" size={18} />
                                <span className="leading-relaxed ">
                                    My journey into web development began with a curiosity about how websites are built and a desire to bring ideas to life through code.
                                    I have experience in front-end development, working with technologies such as HTML, CSS, JavaScript, and starting to learn frameworks like React. I'm also proficient in using tools like Tailwind CSS to build responsive and visually appealing user interfaces.
                                    When I'm not coding, I enjoy exploring new design trends, reading tech blogs, and continuously learning new skills to enhance my development expertise.
                                </span>
                            </p>
                        </div>
                    </CardStyle>
                </div>
                <CardStyle>
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl border border-gray-300  group-hover:shadow-md transition-shadow">
                            <FaUniversity />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-primary">Education</h2>
                            <div className='flex items-center gap-2 text-gray-500'>
                                <MdOutlineSubdirectoryArrowRight />
                                <span className='text-sm '>My Education Journey</span>
                            </div>
                        </div>
                    </div>
                    <CardStyle>
                        <div className="space-y-4 text-gray-600">
                            <div className="flex items-center">
                                <div className="p-2 rounded-full bg-gray-200 mr-4">
                                    <SlGraduation size={24} />
                                </div>
                                <div>
                                    <span className="leading-relaxed text-md font-semibold text-primary">
                                        Bachelor of Science in Information Technology
                                    </span>
                                    <p className='text-xs text-gray-500'>August 2021 - 2025</p>
                                    <p className='text-xs text-gray-500'>Pangasinan State University - Alaminos City Campus</p>
                                </div>
                            </div>
                        </div>
                    </CardStyle>
                    <CardStyle>
                        <div className="space-y-4 text-gray-600">
                            <div className="flex items-center">
                                <div className="p-2 rounded-full bg-gray-200 mr-4">
                                    <GiGears size={24} />
                                </div>
                                <div>
                                    <span className="leading-relaxed text-md font-semibold text-primary">
                                        Science technology Engineering and Mathematics
                                    </span>
                                    <p className='text-xs text-gray-500'>June 2019 - 2021</p>
                                    <p className='text-xs text-gray-500'>Alaminos City National High School</p>
                                </div>
                            </div>
                        </div>
                    </CardStyle>
                    <CardStyle>
                        <div className="space-y-4 text-gray-600">
                            <div className="flex items-center">
                                <div className="p-2 rounded-full bg-gray-200 mr-4">
                                    <SlGraduation size={24} />
                                </div>
                                <div>
                                    <span className="leading-relaxed text-md font-semibold text-primary">
                                        Bachelor of Science in Information Technology
                                    </span>
                                    <p className='text-xs text-gray-500'>August 2021 - 2025</p>
                                    <p className='text-xs text-gray-500'>Pangasinan State University - Alaminos City Campus</p>
                                </div>
                            </div>
                        </div>
                    </CardStyle>
                </CardStyle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>

            </div>
        </section>
    )
}


