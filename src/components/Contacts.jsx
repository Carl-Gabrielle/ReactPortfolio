import { useEffect } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { contactAnimations } from "../animations/gsap";

const CtaCard = ({ icon, title, label }) => (
    <div className="cta-card block w-full rounded-xl overflow-hidden shadow-sm bg-white hover:-translate-y-1 dark:bg-containerDark dark:border-0 hover:scale-100 dark:text-slate-200 ">
        <div className="px-6 py-4">
            <div className="flex items-center">
                <span className="text-2xl mr-4">{icon}</span>
                <div className="flex flex-col gap-1">
                    <p className="text-gray-900 leading-none text-sm font-medium dark:text-slate-200">
                        {title}:
                    </p>
                    <p className="text-gray-600 text-xs dark:text-slate-200">
                        {label}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default function Contacts() {
    useEffect(() => {
        contactAnimations();
    }, []);

    return (
        <section
            id="contacts"
            className="mx-auto px-4 lg:px-10 py-10 md:py-11 scroll-mt-20 dark:bg-dark transition-all duration-300 ease-in-out"
        >
            <div className="mb-16 text-center">
                <SectionHeader text="Contacts" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
                <div className="contact-text sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center md:flex md:flex-col md:items-center md:justify-center md:text-center">
                    <h1 className="text-2xl lg:text-3xl tracking-wide font-bold mb-4 text-primary dark:text-slate-200">
                        Bringing Your Vision to Life. Let's Connect!
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <CtaCard
                        icon={<BiLogoGmail className="text-orange-500" />}
                        title="Send me an Email"
                        label="orfinadacarlgabrielle@gmail.com"
                    />
                    <CtaCard
                        icon={<FaFacebook className="text-blue-600" />}
                        title="Connect on Facebook"
                        label="Carl Gabrielle"
                    />
                    <CtaCard
                        icon={<FaLinkedin className="text-blue-700" />}
                        title="Connect on LinkedIn"
                        label="Carl Gabrielle"
                    />
                    <CtaCard
                        icon={<FaGithub className="text-gray-800 dark:text-slate-200" />}
                        title="My Github Account"
                        label="Carl-Gabrielle"
                    />
                </div>
            </div>
        </section>
    );
}
