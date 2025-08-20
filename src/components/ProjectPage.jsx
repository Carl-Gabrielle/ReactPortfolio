import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { projects } from "../data/ProjectData";

export default function ProjectPage() {
    const { id } = useParams();

    const project = projects.find(
        (p) => p.title.toLowerCase() === decodeURIComponent(id).toLowerCase()
    );
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    if (!project) {
        return (
            <>
                <Navbar />
                <div className="flex flex-col items-center justify-center py-20">
                    <h1 className="text-2xl font-bold text-red-500">Project not found</h1>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <div className="flex flex-col min-h-screen  dark:bg-dark">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-14   rounded-b-3xl relative  ">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-500/20 blur-2xl "></div>
                <header className="mb-11">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                {project.category} • {project.date}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary dark:text-white mb-6 leading-8">
                                {project.title}
                            </h1>
                        </div>
                    </div>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    <div className="space-y-8 ">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                                    Project Duration
                                </h2>
                                <p className="mt-1 text-base font-medium text-gray-900 dark:text-slate-100">
                                    {project.duration}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                                    Project Type
                                </h2>
                                <p className="mt-1 text-base font-medium text-gray-900 dark:text-slate-100">
                                    {project.project}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-widerr">
                                Tech Stack
                            </h3>
                            <ul className="flex flex-wrap gap-2 mt-4">
                                {project.techStack.map((tech, idx) => (
                                    <li
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-600
                   bg-gray-50 dark:bg-containerDark 
                   text-sm font-medium text-gray-700 dark:text-gray-200
                   shadow-sm hover:shadow-md 
                   hover:bg-primary hover:text-white hover:border-primary
                   transition-all duration-200"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                                Project Features
                            </h3>
                            <ul className="flex flex-wrap gap-2 mt-4">
                                {project.features.map((feat, idx) => (
                                    <li
                                        key={idx}
                                        className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 
                                        bg-gray-50 dark:bg-containerDark 
                                        text-sm text-gray-700 dark:text-gray-200 
                                        hover:bg-primary hover:text-white hover:border-primary 
                                        transition-colors duration-200"
                                    >
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <div className="max-w-3xl">
                        <p className="text-lg font-semibold text-gray-900 dark:text-slate-100 leading-relaxed">
                            {project.description}
                        </p>
                        <p className="mt-4 text-base text-gray-600 dark:text-slate-300 leading-7">
                            {project.details}
                        </p>
                    </div>

                </section>
            </main>

            <section className=" container mx-auto px-6 py-14  relative bg-slate-200  dark:bg-containerDark">
                <div className="absolute top-24 right-0 w-72 h-72 rounded-full bg-blue-500/20 blur-2xl "></div>
                <div className="absolute bottom-24 left-0 w-72 h-72 rounded-full bg-blue-500/20 blur-2xl "></div>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        User Interface & Experience
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        A visual journey through the project's user interface and experience design
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.images.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative rounded-xl overflow-hidden bg-gray-50 dark:bg-slate-900 shadow-md hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={img}
                                alt={`${project.title} ${idx + 1}`}
                                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </section>
            {/* <section className=" container mx-auto px-6 py-10   ">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4 mt-6">
                    Related Projects
                </h2>
            </section> */}
            <Footer />
        </div>
    );
}
