import React from 'react';



export const SectionHeader = ({ text }) => (
    <h2 className="text-center mt-5 hover:-translate-y-1 hover:scale-100 transition  duration-300 ease-in-out text-gray-800 font-extrabold text-4xl sm:text-5xl tracking-wide hover:underline">
        {text}
    </h2>
);

export const SectionSubHeader = ({ text }) => (
    <h3 className="text-md font-semibold uppercase tracking-wide sm:text-left text-center bg-primary text-secondary px-4 py-1 rounded-full max-w-fit">
        {text}
    </h3>

);
export const SectionTitle = ({ text, icon }) => (
    <div className=" inline-flex items-center gap-2 rounded-full border bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur-sm">
        {icon && <span >{icon}</span>}
        {text}
    </div>
);