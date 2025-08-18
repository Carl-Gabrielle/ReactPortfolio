import { useEffect, useRef } from "react";
import { FiZap, FiArrowUpRight } from "react-icons/fi";
import { projectCardAnimation } from "../../animations/gsap";

export const ProjectCard = ({ project, onClick, isFirst }) => {
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
            <div
                aria-hidden="true"
                className="absolute w-full h-full transition-transform duration-1000 ease-in-out group-hover:scale-110 rounded-2xl"
                style={{
                    backgroundImage: `url(${project.thumbnail})`,
                    backgroundSize: "70%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div className="absolute top-4 right-4 z-20">
                <span className="bg-gray-900 text-white px-3 py-1 text-sm font-medium rounded-lg dark:text-primary dark:bg-slate-100">
                    {project.title}
                </span>
            </div>

            <div className="absolute bottom-4 left-4 z-20">
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
                <div
                    onClick={onClick}
                    role="button"
                    className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-slate-100 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 ease-in-out"
                    aria-label={`View ${project.view} project`}
                >
                    <span className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                        {project.view}
                    </span>
                    <FiArrowUpRight className="text-gray-500 hover:text-gray-700 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
            )}
        </div>
    );
};
