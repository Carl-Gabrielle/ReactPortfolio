import { FiZap } from 'react-icons/fi';
import { FiArrowUpRight } from 'react-icons/fi';
export const ProjectCard = ({ project, onClick, isFirst }) => (
    <div
        className="relative z-20  w-full h-72 bg-white  rounded-tl-3xl rounded-br-3xl hover:scale transition-transform duration-300 group overflow-hidden"
    >
        <div className="absolute z-20 inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div
            aria-hidden="true"
            className="absolute w-full h-full transition-transform duration-1000 ease-in-out group-hover:scale-110 rounded-2xl"
            style={{
                backgroundImage: `url(${project.thumbnail})`,
                backgroundSize: '70%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        />
        <div className="absolute top-4 right-4 z-20">
            <span className="bg-gray-900 text-white px-3 py-1 text-sm font-medium rounded-lg">
                {project.title}
            </span>
        </div>

        <div className="absolute bottom-4 left-4 z-20">
            <span className="text-primary text-2xl font-bold opacity-80">{project.count}</span>
        </div>
        {
            isFirst && (
                <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 rounded-full border bg-white/90 px-3 py-1 text-sm font-medium text-gray-800 shadow-sm backdrop-blur-sm">
                    <FiZap className="text-yellow-500" />
                    Current Work
                </div>
            )
        }
        {
            !isFirst && (
                <div
                    onClick={onClick}
                    role="button"
                    className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 ease-in-out"
                    aria-label={`View ${project.view} project`}
                >
                    <span className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                        {project.view}
                    </span>
                    <FiArrowUpRight className="text-gray-500 hover:text-gray-700 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
            )
        }
    </div >
);
