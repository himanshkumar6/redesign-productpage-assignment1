import React, { useState } from 'react';
import { useAuth } from '@/auth';
import { FaBars } from 'react-icons/fa';
import { Button } from '@/components/ui';
import { useNavigate } from 'react-router-dom';
import HcfSignupPopup from '../Popups/HcfSignupPopup';
import SignIn from '@/views/auth/SignIn';

interface HomeNavbarProps {
	scrollToSection?: (ref: React.RefObject<HTMLElement>) => void;
	featuresRef?: React.RefObject<HTMLElement>;
	aboutRef?: React.RefObject<HTMLElement>;
	contactRef?: React.RefObject<HTMLElement>;
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({
	scrollToSection,
	featuresRef,
	aboutRef,
	contactRef,
}) => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const [showSignup, setShowSignup] = useState(false);

	const menuItems = [
		{ label: 'About', ref: aboutRef },
		{ label: 'F&Q', ref: featuresRef },
		{ label: 'Contact Us', ref: contactRef },
	];

	const handleClick = (ref?: React.RefObject<HTMLElement>) => {
		if (ref?.current && scrollToSection) {
			scrollToSection(ref);
			setMenuOpen(false);
		}
	};

	return (
		<>
			{/* Navbar */}
			<nav className="bg-blue-800 fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-6 py-2 flex items-center justify-between rounded-full h-[60px]">
				{/* Logo */}
				<div className="flex">
					<img
						src="https://in.gogetwell.ai/img/logo/logo-dark-full.png"
						alt="Logo"
						className="my-auto h-5 md:h-10 cursor-pointer"
						onClick={() => navigate('/')}
					/>
				</div>

				{/* Desktop Menu */}
				<div className="hidden lg:flex items-center space-x-8">
					{user?.role?.[0] === 'admin' ? (
						<div className="mt-3">
							<Button
								variant="solid"
								className="rounded-[5px]"
								onClick={() => navigate('/stores')}
							>
								Go to Admin Dashboard
							</Button>
						</div>
					) : (
						<div className="flex items-center space-x-4">
							<div className="hidden md:flex items-center space-x-6">
								<ul className="flex space-x-6 text-white">
									{menuItems.map((item) => (
										<li
											key={item.label}
											onClick={() => handleClick(item.ref)}
											className="relative cursor-pointer group"
										>
											<span className="whitespace-nowrap hover:text-yellow-300 relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 group-hover:after:w-full font-semibold">
												{item.label}
											</span>
										</li>
									))}
								</ul>
							</div>

							<Button size='sm'
								onClick={() => navigate('/SignIn')}
								block
								className="rounded-[5px]s"
							>
								Login
							</Button>

							<HcfSignupPopup
								popupButtonStatus
								buttonChildren={
									<Button block variant="solid" className="rounded-[5px]s mb-10" size='sm'>
										Get Started
									</Button>
								}
								hcfLogin={true}
							/>
						</div>
					)}
				</div>

				{/* Mobile Hamburger */}
				<div
					className="lg:hidden flex flex-col justify-center items-center space-y-1 cursor-pointer z-50"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{/* Top Line */}
					<span
						className={`block h-1 w-6 bg-white transform transition duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2.5' : ''
							}`}
					></span>

					{/* Middle Line */}
					<span
						className={`block h-1 w-6 bg-white transition duration-300 ease-in-out ${menuOpen ? 'opacity-0' : ''
							}`}
					></span>

					{/* Bottom Line */}
					<span
						className={`block h-1 w-6 bg-white transform transition duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''
							}`}
					></span>
				</div>
			</nav>

			{/* Mobile Dropdown */}
			<div
				className={`rounded-3xl my-5 flex flex-col items-center bg-blue-700 text-white md:hidden overflow-hidden transition-all duration-500 ease-in-out mt-[-36] ${menuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'}`}
			>
				<ul className="flex flex-col items-center space-y-4">
					{menuItems.map((item) => (
						<li
							key={item.label}
							onClick={() => handleClick(item.ref)}
							className="cursor-pointer hover:underline hover:text-yellow-400 transition whitespace-nowrap"
						>
							{item.label}
						</li>
					))}
				</ul>
				<div className="flex flex-col space-y-2 mt-4 my-2">
					{user?.role?.[0] === 'admin' ? (
						<button
							className="px-6 py-2 bg-white text-blue-800 rounded font-semibold transition hover:bg-slate-200 hover:scale-105 shadow-md hover:shadow-lg"
							onClick={() => navigate('/dashboard')}
						>
							Dashboard
						</button>
					) : (
						<>
							<button
								className="px-6 py-2 bg-white text-blue-800 rounded font-semibold transition hover:bg-slate-200 hover:scale-105 shadow-md hover:shadow-lg"
								onClick={() => setShowLogin(true)}
							>
								Login
							</button>
							<button
								className="px-6 py-2 bg-yellow-500 text-white rounded-md font-semibold transition hover:bg-yellow-600 hover:scale-105 shadow-md hover:shadow-lg"
								onClick={() => setShowSignup(true)}
							>
								Get Started
							</button>
						</>
					)}
				</div>
			</div>

			{/* Login Modal */}
			{showLogin && (
				<div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
					<div className="bg-white p-8 rounded-lg shadow-lg w-80 relative">
						<button
							className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
							onClick={() => setShowLogin(false)}
						>
							&#10005;
						</button>
						<h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
						<form className="flex flex-col space-y-4">
							<input type="email" placeholder="Email" className="border p-2 rounded" />
							<input type="password" placeholder="Password" className="border p-2 rounded" />
							<button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
						</form>
					</div>
				</div>
			)}

			{/* Signup Modal */}
			{showSignup && (
				<div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
					<div className="bg-white p-8 rounded-lg shadow-lg w-80 relative">
						<button
							className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
							onClick={() => setShowSignup(false)}
						>
							&#10005;
						</button>
						<h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
						<form className="flex flex-col space-y-4">
							<input type="text" placeholder="Name" className="border p-2 rounded" />
							<input type="email" placeholder="Email" className="border p-2 rounded" />
							<input type="password" placeholder="Password" className="border p-2 rounded" />
							<button className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">Sign Up</button>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default HomeNavbar;
