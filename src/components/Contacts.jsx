import { SectionHeader } from './ui/SectionHeader';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

const CtaCard = ({ icon, title, label }) => (
    <div className="block w-full rounded-xl overflow-hidden shadow-lg bg-white hover:-translate-y-1 hover:scale-100 transition duration-300 ease-in-out">
        <div className="px-6 py-4">
            <div className="flex items-center">
                <span className="text-2xl mr-4">{icon}</span>
                <div className="flex flex-col gap-1">
                    <p className="text-gray-900 leading-none text-sm font-medium ">
                        {title}:
                    </p>
                    <p className="text-gray-600 text-xs">{label}</p>
                </div>
            </div>
        </div>
    </div>
);

export default function Contacts() {
    return (
        <section className="mx-auto px-4 lg:px-10 py-10 md:py-11">
            <div className="mb-16 text-center">
                <SectionHeader text="Contacts" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-primary ">
                        Bringing Your Vision to Life. Let's Connect!
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    <CtaCard
                        icon={<BiLogoGmail style={{ color: '#EA4335' }} />}
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
                        icon={<FaGithub className="text-gray-800" />}
                        title="My Github Account"
                        label="Carl-Gabrielle"
                    />
                </div>
            </div>
        </section>
    );
}
