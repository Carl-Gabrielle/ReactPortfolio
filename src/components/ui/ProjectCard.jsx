import { useEffect, useRef } from "react";
import { FiZap, FiArrowUpRight } from "react-icons/fi";
import { projectCardAnimation } from "../../animations/gsap";
import { Link } from "react-router-dom";
export const ProjectCard = ({ project, isFirst }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            projectCardAnimation(cardRef.current);
        }
    }, []);

    return (
        <div
            ref={cardRef}
            className="relative z-20 w-full h-72 bg-white rounded-tl-3xl rounded-br-3xl group overflow-hidden dark:bg-containerDark dark:border-0"
        >
            <div className="absolute z-20 inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
                src={project.thumbnail}
                alt="Project Thumbnail"
                aria-hidden="true"
                className="absolute w-full h-full object-cover   transition-transform duration-1000 ease-in-out group-hover:scale-110 "
            />

            <div className="absolute top-4 right-4 z-20">
                <span className="bg-primary shadow-md text-white px-3 py-1 text-sm font-medium rounded-lg dark:text-primary dark:bg-slate-100">
                    {project.title}
                </span>
            </div>

            <div className="absolute bottom-4 left-2 z-20">
                <span className="text-primary text-2xl font-bold opacity-80 dark:text-slate-200">
                    {project.count}
                </span>
            </div>

            {isFirst ? (
                <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium text-gray-800 shadow-sm bg-white/90 backdrop-blur-sm">
                    <FiZap className="text-yellow-500" />
                    Current Work
                </div>
            ) : (
                <Link
                    to={`/projects/${encodeURIComponent(project.title)}`}
                    className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-2.5 
             rounded-xl shadow-lg border border-white/20
             bg-gradient-to-br from-white/70 to-white/40 
             backdrop-blur-md hover:backdrop-blur-xl
             transition-all duration-300 ease-out
             group"
                    aria-label={`View ${project.view} project`}
                >
                    <span className="absolute inset-0 -z-10 rounded-xl bg-white/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                    <span className="text-sm font-semibold text-gray-800 tracking-wide group-hover:text-gray-900">
                        {project.view}
                    </span>
                    <FiArrowUpRight className="text-gray-600 group-hover:text-gray-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
            )
            }
        </div >
    );
};
