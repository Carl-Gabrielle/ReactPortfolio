import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Animations } from "../animations/gsap";

const navItems = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contacts" },
];

export default function Footer() {
    const [activeSection, setActiveSection] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: id } });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <footer className="w-full bg-gray-100 border-t border-gray-300 dark:bg-dark">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="text-center md:text-left">
                    <p className="text-md font-medium text-slate-700 dark:text-slate-200">
                        Carl Gabrielle
                    </p>
                    <p className="text-sm text-gray-500 dark:text-slate-200">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <button
                                onClick={() => scrollToSection(item.to)}
                                className={`hover:underline dark:text-slate-200 font-semibold text-gray-600 underline-offset-4 hover:text-gray-900 transition-all duration-300 ${activeSection === item.to
                                    ? "underline text-black dark:text-white"
                                    : ""
                                    }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-4 text-gray-600 dark:text-slate-200">
                    <a
                        href="https://www.facebook.com/carl.gabrielle.716684/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-all duration-200"
                    >
                        <FaFacebook size={20} />
                    </a>
                    <a
                        href="https://github.com/Carl-Gabrielle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-all duration-200"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/carl-gabrielle/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-all duration-200"
                    >
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
