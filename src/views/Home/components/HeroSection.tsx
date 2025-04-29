import { motion } from 'framer-motion';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '../../../components/shared/Popups/HcfSignupPopup';
import { Button } from '@/components/ui';
import { string } from 'zod';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="relative text-white py-8 px-6 md:px-20 pt-32 min-h-screen overflow-hidden bottom-5">
            {/* Navbar */}
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            {/* Blurred Animated Background Bubbles */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <motion.div
                    animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 left-10 w-40 h-40 bg-purple-500 opacity-60 rounded-full blur-2xl"
                />
                <motion.div
                    animate={{ y: [0, -30, 0], x: [0, 80, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 opacity-50 rounded-full blur-2xl"
                />
                <motion.div
                    animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 right-1/2 w-32 h-32 bg-pink-400 opacity-50 rounded-full blur-2xl"
                />
                <motion.div
                    animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-teal-400 opacity-40 rounded-full blur-3xl"
                />
            </div>

            {/* Hero Main Content */}
            <div className="text-center space-y-6 my-20 z-10 relative">
                <h1 className="text-4xl md:text-6xl font-bold text-blue-600">AI Front Office</h1>
                <h2 className="text-3xl md:text-5xl font-extrabold text-blue-800">For Healthcare Agents</h2>

                <p className="text-lg md:text-xl text-blue-600 mt-4">
                    Create <span className="font-semibold">AI Store</span> in 2 min<br />
                    Scale with <span className="text-blue-800 font-semibold">Digital Marketing</span>
                </p>

                <HcfSignupPopup
                    popupButtonStatus
                    buttonChildren={
                        <Button
                            size="md"
                            variant="solid"
                            className="rounded-[10px] mt-6 px-8 py-3 bg-purple-500 hover:bg-purple-600 transition font-semibold shadow-md"
                        >
                            Get Started
                        </Button>

                    }
                    hcfLogin={true}
                />
            </div>

            {/* Stats Section */}
            <div className="flex flex-col md:flex-row justify-center gap-10 mt-10 text-blue-600 z-10 relative">
                {[
                    { title: "2100+", label: "Qualified Doctors" },
                    { title: "1000+", label: "Hospitals" },
                    { title: "800+", label: "Treatment Plans" }
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h3 className="text-3xl md:text-4xl font-bold">
                            {item.title.split("+")[0]}<span className="text-purple-400">+</span>
                        </h3>
                        <p className="text-lg mt-2">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
