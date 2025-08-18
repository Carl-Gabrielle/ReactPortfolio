import React from 'react';
import { useEffect, useRef } from "react";
import { fadeInUp } from "../../animations/gsap";


export const SectionHeader = ({ text }) => {
    const headerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current) {
            fadeInUp(headerRef.current);
        }
    }, []);

    return (
        <h2
            ref={headerRef}
            className="text-center mt-5 hover:-translate-y-1 hover:scale-100  
            text-primary font-extrabold text-4xl sm:text-5xl tracking-wide 
            hover:underline dark:text-slate-200 dark:transition-all dark:duration-300 dark:ease-in-out"
        >
            {text}
        </h2>
    );
};

export const SectionSubHeader = ({ text }) => (
    <h3 className="text-md font-semibold uppercase tracking-wide sm:text-left text-center bg-primary text-secondary px-4 py-1 rounded-full max-w-fit dark:text-slate-200 dark:bg-black   transition-all duration-300 ease-in-out">
        {text}
    </h3>

);
export const SectionTitle = ({ text, icon }) => (
    <div className=" inline-flex items-center gap-2 rounded-full border bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur-sm dark:text-slate-200 dark:bg-containerDark dark:border-slate-200  transition-all duration-300 ease-in-out">
        {icon && <span >{icon}</span>}
        {text}
    </div>
);