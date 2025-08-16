import React, { useState } from 'react';
import Slider from 'react-slick';
import { SectionHeader } from './ui/SectionHeader';
import { Dialog, Transition } from '@headlessui/react';
import { projects } from '../data/ProjectData';
import { IoMdClose } from "react-icons/io"
import { CiCalendarDate } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { GoProject } from "react-icons/go";
import { FiStar } from 'react-icons/fi';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ProjectCard } from './ui/ProjectCard';
import BlurText from "./BlurText";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section id="projects" className=" mx-auto px-4 dark:bg-dark lg:px-10 py-10 md:py-11 scroll-mt-20 transition-all duration-300 ease-in-out">
            <div className="mb-12">
                <SectionHeader text="Recent Projects" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                {projects.map((project, index) => (
                    <ProjectCard isFirst={index === 0} key={index} project={project} onClick={() => setSelectedProject(project)} />
                ))}
            </div>
            {/* <div className='mt-8 flex justify-end'>
                <button className='px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50'>
                    View All
                    <MdOutlineKeyboardArrowRight className='text-lg' />
                </button>
            </div> */}
            <Transition show={!!selectedProject} as={React.Fragment}>
                <Dialog onClose={() => setSelectedProject(null)} className="relative z-50">
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
                    </Transition.Child>

                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="fixed inset-0 flex items-center justify-center p-4">
                            <Dialog.Panel className="bg-white rounded-xl max-w-7xl w-full overflow-hidden shadow-2xl border border-gray-200 transform transition-all ">
                                <div className="grid grid-cols-1 md:grid-cols-2 ">
                                    <div className="p-4 md:p-6 border-r border-gray-200 bg-gray-50">
                                        <Slider {...settings}>
                                            {selectedProject?.images.map((img, idx) => (
                                                <div key={idx} className="relative w-full  overflow-hidden rounded-lg ">
                                                    <img
                                                        src={img}
                                                        alt=""
                                                        className="w-full h-full object-cover rounded-lg"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                        <div className="mt-6 space-y-4  ">
                                            <div className="flex justify-between items-center">
                                                <h2 className="text-xl font-semibold text-gray-500 ">Project 02</h2>
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${selectedProject?.status === "In progress"
                                                    ? "bg-orange-100 text-orange-800"
                                                    : "bg-blue-100 text-blue-800"
                                                    }`}>
                                                    {selectedProject?.status}
                                                </span>
                                            </div>

                                            <div className="grid  grid-cols-2 gap-4">
                                                <div className="flex items-start space-x-3">
                                                    <div className="p-2  border-2  border-gray-200   rounded-lg">
                                                        <CiCalendarDate className="h-5 w-5 text-gray-500" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-semibold text-gray-500 ">Timeline</p>
                                                        <p className="text-sm text-gray-800 ">
                                                            {selectedProject?.date}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start space-x-3">
                                                    <div className="p-2  border-2  border-gray-200   rounded-lg">
                                                        <FaRegClock className="h-5 w-5 text-gray-500 " />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-semibold text-gray-500 ">Duration</p>
                                                        <p className="text-sm text-gray-800 ">
                                                            {selectedProject?.duration}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start space-x-3">
                                                    <div className="p-2  border-2  border-gray-200   rounded-lg">
                                                        <CiShoppingTag className="h-5 w-5 text-gray-500 " />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-semibold text-gray-500 ">Category</p>
                                                        <p className="text-sm text-gray-800 ">
                                                            {selectedProject?.category}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start space-x-3">
                                                    <div className="p-2  border-2  border-gray-200   rounded-lg">
                                                        <GoProject className="h-5 w-5 text-gray-600 " />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-semibold text-gray-500 ">Project Type</p>
                                                        <p className="text-sm text-gray-800 ">
                                                            {selectedProject?.project}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col justify-between h-full overflow-scroll ">
                                        <div>
                                            <div className="flex justify-between items-start  pb-4 border-b border-gray-100">
                                                <Dialog.Title className="text-2xl font-bold text-gray-900 tracking-tight">
                                                    {selectedProject?.title}
                                                </Dialog.Title>
                                                <button
                                                    onClick={() => setSelectedProject(null)}
                                                    className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                                                    aria-label="Close"
                                                >
                                                    <IoMdClose className="h-6 w-6" />
                                                </button>
                                            </div>

                                            <div className="mt-4">
                                                <p className="mt-1 text-gray-600 text-base leading-8 text-justify">
                                                    {selectedProject?.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-3">
                                                Technical Features
                                            </h4>
                                            <ul className="space-y-2.5">
                                                {selectedProject?.features?.map((feature, index) => (
                                                    <li key={index} className="flex items-start border-l-2 border-gray-200 pl-3">
                                                        <span className="text-gray-700 text-sm font-normal leading-snug">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mt-4">
                                            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-700 mb-3">
                                                Tech Stack:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject?.techStack.map((tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="bg-gray-100 px-3 py-1 text-sm rounded-full border border-gray-200 font-medium text-gray-700"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-6 flex justify-end">
                                            <button
                                                onClick={() => setSelectedProject(null)}
                                                className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                                            >
                                                Close Project
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </section>
    );
}