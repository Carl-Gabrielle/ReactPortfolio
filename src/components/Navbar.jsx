import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoIosLink } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { Animations } from "../animations/gsap";

const navItems = [
    { label: "Home", to: "hero", icon: <IoHome size={20} /> },
    { label: "About", to: "about", icon: <FaUser size={20} /> },
    { label: "Projects", to: "projects", icon: <AiFillProject size={20} /> },
    { label: "Contact", to: "contacts", icon: <MdEmail size={20} /> },
];

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        Animations();
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved ? JSON.parse(saved) : false;
    });

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const scrollToSection = (id) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: id } });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
            closeMenu();
        }
    };

    useEffect(() => {
        if (location.pathname === "/" && location.state?.scrollTo) {
            const sectionId = location.state.scrollTo;
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, [location]);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("darkMode", true);
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("darkMode", false);
        }
    }, [darkMode]);

    useEffect(() => {
        if (menuOpen) {
            requestAnimationFrame(() => setFadeIn(true));
        } else {
            setFadeIn(false);
        }
    }, [menuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
                setFadeIn(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const closeMenu = () => {
        setFadeIn(false);
        setTimeout(() => setMenuOpen(false), 100);
    };

    return (
        <>
            <header className="w-full h-20 sticky top-0 z-30 bg-white dark:bg-dark bg-opacity-60 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out">
                <nav className="max-w-8xl mx-auto px-6 h-full flex items-center justify-between">
                    <button
                        onClick={() => scrollToSection("hero")}
                        aria-label="Homepage"
                        className="flex flex-col justify-center"
                    >
                        <div id="nameRole" className="flex flex-col items-start text-primary dark:text-slate-100">
                            <h1 className="text-sm font-bold tracking-wide font-montserrat">
                                Carl Gabrielle
                            </h1>
                            <span className="text-xs block font-light dark:text-slate-200">
                                Web Developer
                            </span>
                        </div>
                    </button>

                    <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-slate-300 text-sm font-medium">
                        {navItems.map((item) => (
                            <li id="navs" key={item.label} className="flex justify-center">
                                <button
                                    onClick={() => scrollToSection(item.to)}
                                    className={`transition-all duration-200 hover:underline font-semibold underline-offset-4 ${activeSection === item.to
                                        ? "underline text-black dark:text-white"
                                        : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                                        }`}
                                >
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="flex justify-center">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div id="cta" className="hidden md:flex items-center gap-4">
                        <a
                            href="https://www.linkedin.com/in/carl-gabrielle/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <span className="text-gray-500 dark:text-gray-400 text-md hidden sm:inline-block">
                                @carlgabrielle
                            </span>
                        </a>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            aria-label="Toggle Dark Mode"
                        >
                            {darkMode ? (
                                <FaMoon size={18} className="text-yellow-500" />
                            ) : (
                                <MdWbSunny size={18} className="text-yellow-500" />
                            )}
                        </button>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                        aria-label="Toggle navigation menu"
                    >
                        {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
                    </button>
                </nav>
            </header>

            {menuOpen && (
                <div
                    className={`fixed inset-0 z-30 transition-all duration-200 ease-in-out ${fadeIn ? "bg-black/50" : "bg-black/0 backdrop-blur-0"
                        }`}
                    onClick={closeMenu}
                >
                    <div
                        className="md:hidden bg-white dark:bg-containerDark rounded-lg shadow-sm absolute top-24 right-6 w-64 z-20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="flex flex-col items-start px-6 gap-4 py-4 text-gray-600 dark:text-gray-300 font-semibold">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <button
                                        onClick={() => scrollToSection(item.to)}
                                        className="flex items-center gap-2 hover:text-gray-950 dark:hover:text-white transition"
                                    >
                                        {item.icon}
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                            <li className="flex items-center gap-2">
                                <IoIosLink size={20} />
                                <a
                                    href="https://www.linkedin.com/in/carl-gabrielle/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 dark:text-gray-400"
                                >
                                    @carlgabrielle
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="mt-2 flex items-center gap-2  font-medium  text-gray-700  dark:text-gray-200"
                                >
                                    {darkMode ? (
                                        <FaMoon size={18} className="text-yellow-500" />
                                    ) : (
                                        <MdWbSunny size={18} className="text-yellow-500" />
                                    )}
                                    {darkMode ? "Dark Mode" : "Light Mode"}
                                </button>
                            </li>
                            <hr className="w-full" />
                            <div className="text-black dark:text-gray-400 text-xs flex items-center justify-between gap-2 w-full">
                                <span>Carl Gabrielle</span>
                                <span className="flex items-center gap-1">
                                    <FaRegCopyright /> {new Date().getFullYear()} Portfolio
                                </span>
                            </div>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}
