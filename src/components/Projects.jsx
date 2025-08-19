import { SectionHeader } from './ui/SectionHeader';
import { projects } from '../data/ProjectData';
import { ProjectCard } from './ui/ProjectCard';

export default function Projects() {


    return (
        <section id="projects" className=" mx-auto px-4 dark:bg-dark lg:px-10 py-10 md:py-11 scroll-mt-20 transition-all duration-300 ease-in-out">
            <div className="mb-12">
                <SectionHeader text="Recent Projects" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                {projects.map((project, index) => (
                    <ProjectCard isFirst={index === 0} key={index} project={project} />
                ))}
            </div>
            {/* <div className='mt-8 flex justify-end'>
                <button className='px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50'>
                    View All
                    <MdOutlineKeyboardArrowRight className='text-lg' />
                </button>
            </div> */}

        </section>
    );
}