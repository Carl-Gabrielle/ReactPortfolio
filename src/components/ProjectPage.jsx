import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { projects } from "../data/ProjectData";

export default function ProjectPage() {
    const { id } = useParams();

    const project = projects.find(
        (p) => p.title.toLowerCase() === decodeURIComponent(id).toLowerCase()
    );

    if (!project) {
        return (
            <>
                <Navbar />
                <div className="text-center py-10">
                    <h1 className="text-2xl font-bold text-red-500">Project not found</h1>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-10">
                <div className="mb-10">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2 inline-block">
                                {project.category} • {project.date}
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                {project.title}
                            </h1>
                        </div>
                        <div className="text-right">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                                {project.status}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div>
                            <div className="mb-6">
                                <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                    Project Duration
                                </h2>
                                <p className="mt-1 text-base font-semibold text-gray-800 dark:text-slate-200">
                                    {project.duration}
                                </p>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                    Project Type
                                </h2>
                                <p className="mt-1 text-base font-semibold text-gray-800 dark:text-slate-200">
                                    {project.project}
                                </p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                Tech Stack
                            </h3>
                            <ul className="flex flex-wrap gap-2 mt-2">
                                {project.techStack.map((tech, idx) => (
                                    <li
                                        key={idx}
                                        className="px-3 py-1 rounded-full bg-gray-200 dark:bg-slate-700 text-sm font-medium text-gray-700 dark:text-slate-200"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>
                <h1 className="mt-6 text-3xl font-medium text-gray-800 dark:text-slate-200">
                    User Interface Design
                </h1>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {project.images.map((img, idx) => (
                        <div
                            key={idx}
                            className="  relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={img}
                                alt={`${project.title} ${idx + 1}`}
                                className="w-full h-full object-cover rounded-2xl hover:scale-105 bg-gray-200 p-3   transition-transform duration-1000 ease-in-out group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

            </main>
            <Footer />
        </div>
    );
}
