import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { footerAnimations } from "../animations/gsap";

const navItems = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contacts" },
];

export default function Footer() {
    const [activeSection, setActiveSection] = useState("");
    const footerRef = useRef(null);

    useEffect(() => {
        const cleanup = footerAnimations(footerRef);
        return cleanup;
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
    };

    return (
        <footer className="w-full bg-gray-100 border-t border-gray-300 dark:bg-dark">
            <div
                ref={footerRef}
                className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
            >
                <div className="footer-animate text-center md:text-left" data-footer="brand">
                    <p className="text-md font-medium text-slate-700 dark:text-slate-200">
                        Carl Gabrielle
                    </p>
                    <p className="text-sm text-gray-500 dark:text-slate-200">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <ul className="footer-animate flex flex-wrap items-center justify-center gap-6 text-sm" data-footer="nav">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <button
                                onClick={() => scrollToSection(item.to)}
                                className={`footer-nav-item hover:underline dark:text-slate-200 font-semibold text-gray-600 underline-offset-4 hover:text-gray-900 transition-all duration-300 ${activeSection === item.to ? "underline text-black" : ""
                                    }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="footer-animate flex gap-4 text-gray-600 dark:text-slate-200" data-footer="socials">
                    <a
                        href="https://www.facebook.com/carl.gabrielle.716684/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-icon hover:text-primary transition-all duration-200"
                    >
                        <FaFacebook size={20} />
                    </a>
                    <a
                        href="https://github.com/Carl-Gabrielle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-icon hover:text-primary transition-all duration-200"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/carl-gabrielle/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-icon hover:text-primary transition-all duration-200"
                    >
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
