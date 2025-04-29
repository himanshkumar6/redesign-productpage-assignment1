import PatientSignUpPopup from '@/views/auth/SignUp';
import React, { useRef } from 'react';
import { BiGlobe, BiMessageSquare, BiTrendingUp, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { LuBuilding2 } from 'react-icons/lu';

const ClaimLandingSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: string) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };

    const features = [
        { icon: <BiGlobe className="w-6 h-6 text-primary" />, title: 'Online Website With AI Agent', description: 'Intelligent digital presence' },
        { icon: <LuBuilding2 className="w-6 h-6 text-primary" />, title: 'Build Digital Business', description: 'Scale your operations' },
        { icon: <BiMessageSquare className="w-6 h-6 text-primary" />, title: 'Patient Conversation', description: 'Seamless communication' },
        { icon: <BiTrendingUp className="w-6 h-6 text-primary" />, title: 'Boost Revenue', description: 'Increase your earnings' },
        { icon: <FaUsers className="w-6 h-6 text-primary" />, title: 'Lead Generation Support', description: 'Convert visitors to clients' },
        { icon: <CgLock className="w-6 h-6 text-primary" />, title: '24/7 Support for patient', description: 'Round-the-clock assistance' }
    ];

    return (
        <div className="bg-blue-50 m-0 p-0">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Scroll Buttons */}
                <div className="relative">
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
                    >
                        <BiChevronLeft className="w-6 h-6" />
                    </button>

                    <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
                        <div className="flex space-x-4 py-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="min-w-[250px] bg-white rounded-xl p-6 shadow-lg  transition-shadow duration-300 flex flex-col space-y-2"
                                >
                                    <div className="bg-indigo-100 p-3 rounded-lg w-fit">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
                    >
                        <BiChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Main CTA Section */}
                <div className="flex flex-col items-center text-center space-y-1 mt-12">
                    <div className="flex flex-col items-center justify-center text-center bg-blue-50 py-10 px-4">
                        <div className="bg-purple-600 p-4 rounded-full mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995H5z"></path>
                                <ellipse cx="8.5" cy="12" rx="1.5" ry="2"></ellipse>
                                <ellipse cx="15.5" cy="12" rx="1.5" ry="2"></ellipse>
                                <path d="M8 16h8v2H8z"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Get Your Patient Ready Website Now</h2>
                        <p className="text-gray-600 max-w-xl mb-8">
                            Use power AI to transform your online presence and automate patient interactions
                        </p>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
                            Join the Waiting List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClaimLandingSection;
