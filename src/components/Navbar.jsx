import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoIosLink } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";

const navItems = [
    { label: "Home", to: "/", icon: <IoHome size={20} aria-hidden="true" /> },
    { label: "About", to: "/about", icon: <FaUser size={20} aria-hidden="true" /> },
    { label: "Projects", to: "/projects", icon: <AiFillProject size={20} aria-hidden="true" /> },
    { label: "Contact", to: "/contact", icon: <MdEmail size={20} aria-hidden="true" /> },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

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
        <header className="w-full  h-20 sticky top-0 z-30 bg-white bg-opacity-60 backdrop-blur-md shadow-md  ">
            <nav className="max-w-8xl mx-auto px-6 h-full flex items-center justify-between">
                <Link to="/home" aria-label="Homepage" className="flex flex-col justify-center">
                    <div className="bg-primary text-gray-100 px-5 py-1 rounded-2xl shadow-md">
                        <h1 className="text-sm font-bold tracking-wide font-montserrat">Carl Gabrielle</h1>
                        <span className="text-xs block font-light">Web Developer</span>
                    </div>
                </Link>
                <ul className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-medium">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.to;
                        return (
                            <li key={item.label} className="flex justify-center ">
                                <Link
                                    to={item.to}
                                    className={`transition-all duration-200 hover:underline underline-offset-4 hover:text-gray-900 text-base ${isActive ? "underline text-black" : ""}`}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="flex justify-center">
                                            {item.icon}
                                        </span>
                                        <div>
                                            <span>{item.label}</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <span className="text-gray-500 text-md hidden sm:inline-block">@carlgabrielle</span>
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-700 focus:outline-none  p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
                </button>
            </nav>
            {menuOpen && (
                <div
                    className={`fixed inset-0 z-10 transition-all duration-200 ease-in-out ${fadeIn ? "bg-black/50 " : "bg-black/0 backdrop-blur-0"
                        }`}
                    onClick={closeMenu}
                >
                    <div
                        className="md:hidden bg-white rounded-lg shadow-sm absolute top-24 right-6 w-64 z-20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="flex flex-col items-start px-6 gap-4 py-4 text-gray-900 font-semibold">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.to}
                                        onClick={closeMenu}
                                        className="flex items-center gap-2 hover:text-gray-950 transition"
                                    >
                                        {item.icon}
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link className="flex items-center gap-2 hover:text-black transition font-light">
                                    <IoIosLink size={20} aria-hidden="true" />
                                    <span>@carlgabrielle</span>
                                </Link>
                            </li>
                            <hr className="w-full " />
                            <div className="text-black text-xs flex items-center justify-between gap-2 w-full">
                                <span>Carl Gabrielle</span>
                                <span className="flex items-center gap-1"><FaRegCopyright /> {new Date().getFullYear()} Portfolio</span>
                            </div>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}
