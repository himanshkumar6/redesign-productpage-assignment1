import React, { useEffect, useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import ClaimLandingSection from './components/ClaimLandingSection';
import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';

const Home: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const contactRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const featuresRef = useRef<HTMLDivElement>(null);
	const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};


	useEffect(() => {
		let lastScrollTop = 0;
		const handleScroll = () => {
			const hcf = document.querySelector(".hcf-profile");
			const scrollTop = window.scrollY;

			if (hcf) {
				if (scrollTop > lastScrollTop) {
					hcf.classList.add("hcf-profile-fixed");
				} else {
					hcf.classList.remove("hcf-profile-fixed");
				}
			}
			lastScrollTop = scrollTop;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<div className="flex flex-col">
				{/* Hero Section */}
				<section >
					<HeroSection
						scrollToSection={scrollToSection}
						featuresRef={featuresRef}
						contactRef={contactRef}
						aboutRef={aboutRef}
					/>
				</section>

				{/* Claim / Secondary Hero */}
				<section className="bg-blue-50 py-16">
					<ClaimLandingSection />
				</section>

				{/* Features */}
				<section className="bg-blue-50 py-20" ref={featuresRef}>
					<div className="container mx-auto px-4">
						<FeaturesGrid />
					</div>
				</section>

				{/* About / Info */}
				<section className="bg-white py-20" ref={aboutRef}>
					<div className="container mx-auto px-4">
						<InfoSection />
					</div>
				</section>

				{/* FAQs */}
				<section className="bg-blue-50 py-20">
					<div className="container mx-auto px-4">
						<HomeFAQs />
					</div>
				</section>

				{/* Contact Form */}
				<section className="bg-blue-50 py-20" ref={contactRef}>
					<div className="container mx-auto px-4">
						<ContactForm />
					</div>
				</section>

				{/* Footer */}
				<footer className="bg-footer">
					<div className="container mx-auto px-4">
						<MainFooter />
					</div>
				</footer>
			</div>
		</>
	);
};

export default Home;
