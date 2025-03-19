import Header from "../components/Header"
import Footer from "../components/Footer";
import { useEffect, useState, useRef } from "react";

const Startups = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(window.innerWidth >= 768 ? 3 : 1);
    const trackRef = useRef<HTMLDivElement>(null);
    // Replace the single isFlipped state with an object
    const [flippedCards, setFlippedCards] = useState({
        payme: false,
        prxis: false,
        inflynx: false
    });

    const testimonials = [
        {
            id: 1,
            name: "Sumon Nath",
            role: "CEO, Payme",
            initial: "S",
            bgColor: "bg-blue-100 dark:bg-blue-900",
            textColor: "text-blue-600 dark:text-blue-400",
            rating: 5,
            text: "Joining TBI was the best decision for our startup. The infrastructure, legal support, and direct access to investors made a huge impact on our growth.",
        },
        {
            id: 2,
            name: "Nilesh Pandey",
            role: "Founder, PRXIS Pvt Ltd",
            initial: "N",
            bgColor: "bg-purple-100 dark:bg-purple-900",
            textColor: "text-purple-600 dark:text-purple-400",
            rating: 5,
            text: "From an idea to a fully functional AI-powered legal platform, our startup journey was shaped by the guidance and support of TBI mentors.",
        },
        {
            id: 3,
            name: "Matrupriya & Ravi Shankar",
            role: "Co-founders, INFLYNX Tech",
            initial: "M",
            bgColor: "bg-indigo-100 dark:bg-indigo-900",
            textColor: "text-indigo-600 dark:text-indigo-400",
            rating: 5,
            text: "TBI helped us secure funding, refine our business model, and scale our AI-driven jurisdiction system. Highly recommended for aspiring entrepreneurs!",
        },
    ];

    // Update slidesToShow on window resize
    useEffect(() => {
        const handleResize = () => {
            setSlidesToShow(window.innerWidth >= 768 ? 3 : 1);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Move to next slide
    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev < testimonials.length - slidesToShow ? prev + 1 : 0
        );
    };

    // Move to previous slide
    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev > 0 ? prev - 1 : testimonials.length - slidesToShow
        );
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, slidesToShow]);

    return (
        <div>
            <Header />
            <section id="startups" className="py-20 bg-gray-50 dark:bg-neutral-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span
                            className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Our
                            Success Stories</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Startups @ TBI</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            At Technology Business Incubation Centre (TBI), VIT Bhopal, we are proud to foster a dynamic ecosystem
                            where innovative ideas transform into successful businesses. Our incubated startups are at the
                            forefront of cutting-edge technology.
                        </p>
                    </div>

                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Showcase of Incubated
                            Startups</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Payme Card */}
                            <div
                                className="group h-[500px] perspective"
                                onMouseEnter={() => setFlippedCards(prev => ({ ...prev, payme: true }))}
                                onMouseLeave={() => setFlippedCards(prev => ({ ...prev, payme: false }))}
                            >
                                <div
                                    className={`relative preserve-3d w-full h-full duration-1000 ${flippedCards.payme ? "my-rotate-y-180" : ""
                                        }`}
                                >
                                    <div
                                        className="absolute backface-hidden border w-full h-full bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <div
                                                className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-600 dark:bg-blue-700 text-white rounded-lg text-2xl font-bold">
                                                P</div>
                                            <div className="ml-4">
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Payme</h4>
                                                <p className="text-blue-600 dark:text-blue-400 text-sm">Blockchain-Based Payment System</p>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span
                                                    className="inline-block px-2 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full">FinTech</span>
                                                <span
                                                    className="inline-block px-2 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full">Blockchain</span>
                                                <span
                                                    className="inline-block px-2 py-1 text-xs font-semibold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 rounded-full">Payments</span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                A secure, decentralized payment platform leveraging blockchain technology to facilitate
                                                fast, transparent, and cost-effective transactions.
                                            </p>
                                            <div className="mb-4">
                                                <p className="text-sm text-gray-500 dark:text-gray-400"><span
                                                    className="font-medium text-gray-700 dark:text-gray-300">Founders:</span> Sumon Nath,
                                                    Ishant, Alam & Dr. Hemraj</p>
                                            </div>
                                            <a href="https://paymefin.tech/" target="_blank"
                                                className="inline-flex items-center text-blue-600 dark:text-blue-400 :text-blue-hover800 dark:hover:text-blue-300">
                                                Visit Website
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="absolute bottom-6 left-0 right-0 text-center">
                                            <button
                                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 transform group-hover:scale-105">
                                                Flip for more details
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow-lg p-6 overflow-hidden">
                                        <div
                                            className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                                            Key Features</div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Payme Features</h4>
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start">
                                                <span
                                                    className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">Decentralized transactions for enhanced
                                                    security</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span
                                                    className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">Low transaction fees compared to traditional
                                                    banking systems</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span
                                                    className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">Smart contract integration for automated
                                                    payments</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span
                                                    className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">Multi-currency support for global
                                                    accessibility</span>
                                            </li>
                                        </ul>
                                        <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 mt-4">
                                            <div className="flex items-center mb-2">
                                                <div className="text-2xl text-gray-400 dark:text-gray-500 mr-2">"</div>
                                                <p className="text-sm italic text-gray-600 dark:text-gray-300">
                                                    TBI VIT Bhopal provided us with the ideal launchpad – from mentorship to funding
                                                    opportunities. With expert guidance and state-of-the-art blockchain labs, we were able to
                                                    build a robust, scalable solution.
                                                </p>
                                            </div>
                                            <p className="text-right text-sm font-medium text-gray-700 dark:text-gray-300">- Sumon Nath, CEO
                                            </p>
                                        </div>
                                        <div className="absolute bottom-6 left-0 right-0 text-center">
                                            <button
                                                onClick={() => setFlippedCards(prev => ({ ...prev, payme: false }))}
                                                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition duration-300 transform group-hover:scale-105">
                                                Back to overview
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* PRXIS Card */}
                            <div
                                className="group h-[500px] perspective"
                                onMouseEnter={() => setFlippedCards(prev => ({ ...prev, prxis: true }))}
                                onMouseLeave={() => setFlippedCards(prev => ({ ...prev, prxis: false }))}
                            >
                                <div
                                    className={`relative preserve-3d w-full h-full duration-1000 ${flippedCards.prxis ? "my-rotate-y-180" : ""
                                        }`}
                                >
                                    <div
                                        className="absolute backface-hidden border w-full h-full bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <div
                                                className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-purple-600 dark:bg-purple-700 text-white rounded-lg text-2xl font-bold">
                                                P</div>
                                            <div className="ml-4">
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">PRXIS Pvt Ltd</h4>
                                                <p className="text-purple-600 dark:text-purple-400 text-sm">AI-Powered Legal Assistance</p>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span
                                                    className="inline-block px-2 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full">LegalTech</span>
                                                <span
                                                    className="inline-block px-2 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full">AI</span>
                                                <span
                                                    className="inline-block px-2 py-1 text-xs font-semibold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 rounded-full">NLP</span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                Revolutionizing the legal industry with AI-driven legal assistance that offers automated
                                                legal research, document drafting, and case law analysis.
                                            </p>
                                            <div className="mb-4">
                                                <p className="text-sm text-gray-500 dark:text-gray-400"><span
                                                    className="font-medium text-gray-700 dark:text-gray-300">Founders:</span> Nilesh, Aditya,
                                                    Dr. Hemraj Lamkuche</p>
                                            </div>
                                            <span className="inline-block text-amber-600 dark:text-amber-400 text-sm font-medium">Website:
                                                Coming Soon</span>
                                        </div>
                                        <div className="absolute bottom-6 left-0 right-0 text-center">
                                            <button
                                                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-300 transform group-hover:scale-105">
                                                Flip for more details
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-purple-50 dark:bg-purple-900/20 rounded-xl shadow-lg p-6 overflow-hidden">
                                        <div
                                            className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                                            Key Features</div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">PRXIS Features</h4>
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start">
                                                <span
                                                    className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">AI-powered case law search for instant legal
                                                    references</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span
                                                    className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">Automated contract drafting based on
                                                    predefined templates</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span
                                                    className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">Natural Language Processing (NLP) for legal
                                                    document analysis</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span
                                                    className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">Legal chatbots for quick case
                                                    consultations</span>
                                            </li>
                                        </ul>
                                        <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 mt-4">
                                            <div className="flex items-center mb-2">
                                                <div className="text-2xl text-gray-400 dark:text-gray-500 mr-2">"</div>
                                                <p className="text-sm italic text-gray-600 dark:text-gray-300">
                                                    From idea validation to prototype development, TBI provided us the resources and network
                                                    to transform our startup into a reality. The mentorship and AI lab access helped us refine
                                                    our product significantly.
                                                </p>
                                            </div>
                                            <p className="text-right text-sm font-medium text-gray-700 dark:text-gray-300">- Nilesh Pandey,
                                                Founder</p>
                                        </div>
                                        <div className="absolute bottom-6 left-0 right-0 text-center">
                                            <button
                                                onClick={() => setFlippedCards(prev => ({ ...prev, prxis: false }))}
                                                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition duration-300 transform group-hover:scale-105">
                                                Back to overview
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* INFLYNX Card */}
                            <div
                                className="group h-[500px] perspective"
                                onMouseEnter={() => setFlippedCards(prev => ({ ...prev, inflynx: true }))}
                                onMouseLeave={() => setFlippedCards(prev => ({ ...prev, inflynx: false }))}
                            >
                                <div
                                    className={`relative preserve-3d w-full h-full duration-1000 ${flippedCards.inflynx ? "my-rotate-y-180" : ""
                                        }`}
                                >
                                    <div
                                        className="absolute backface-hidden border w-full h-full bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <div
                                                className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-indigo-600 dark:bg-indigo-700 text-white rounded-lg text-2xl font-bold">
                                                I</div>
                                            <div className="ml-4">
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">INFLYNX Tech Pvt Ltd</h4>
                                                <p className="text-indigo-600 dark:text-indigo-400 text-sm">AI-Driven Jurisdiction System</p>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span
                                                    className="inline-block px-2 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">LegalTech</span>
                                                <span
                                                    className="inline-block px-2 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full">AI</span>
                                                <span
                                                    className="inline-block px-2 py-1 text-xs font-semibold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 rounded-full">Blockchain</span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                A one-stop AI-powered jurisdiction system designed to streamline legal proceedings, case
                                                tracking, and jurisdiction-based legal research.
                                            </p>
                                            <div className="mb-4">
                                                <p className="text-sm text-gray-500 dark:text-gray-400"><span
                                                    className="font-medium text-gray-700 dark:text-gray-300">Founders:</span> Matrupriya, Ravi
                                                    Shankar, Dr. Hemraj Lamkuche</p>
                                            </div>
                                            <span className="inline-block text-amber-600 dark:text-amber-400 text-sm font-medium">Website:
                                                Coming Soon</span>
                                        </div>
                                        <div className="absolute bottom-6 left-0 right-0 text-center">
                                            <button
                                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition duration-300 transform group-hover:scale-105">
                                                Flip for more details
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-indigo-50 dark:bg-indigo-900/20 rounded-xl shadow-lg p-6 overflow-hidden">
                                        <div
                                            className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                                            Key Features</div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">INFLYNX Features</h4>
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start">
                                                <span
                                                    className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">AI-powered case prediction for legal
                                                    advisors</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span
                                                    className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">Automated jurisdiction-specific
                                                    recommendations for lawyers</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span
                                                    className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">Real-time case tracking through blockchain
                                                    integration</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span
                                                    className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700 dark:text-gray-300">Legal document automation for seamless
                                                    workflows</span>
                                            </li>
                                        </ul>
                                        <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 mt-4">
                                            <div className="flex items-center mb-2">
                                                <div className="text-2xl text-gray-400 dark:text-gray-500 mr-2">"</div>
                                                <p className="text-sm italic text-gray-600 dark:text-gray-300">
                                                    TBI's support in legal tech research, AI model training, and networking with industry
                                                    leaders helped us build a robust AI-driven legal framework. We are grateful for the
                                                    mentorship and incubation support!
                                                </p>
                                            </div>
                                            <p className="text-right text-sm font-medium text-gray-700 dark:text-gray-300">- Matrupriya & Ravi
                                                Shankar, Co-founders</p>
                                        </div>
                                        <div className="absolute bottom-6 left-0 right-0 text-center">
                                            <button
                                                onClick={() => setFlippedCards(prev => ({ ...prev, inflynx: false }))}
                                                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition duration-300 transform group-hover:scale-105">
                                                Back to overview
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Startup Directory</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                At TBI, we have nurtured a diverse portfolio of startups across multiple domains, including FinTech,
                                AI, Blockchain, Cybersecurity, and IoT. Our Startup Directory serves as a platform to showcase both
                                current incubated startups and successful alumni ventures.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                        <span
                                            className="inline-block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2 text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        Current Startups at TBI
                                    </h4>
                                    <ul className="space-y-3 pl-10">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                            <span className="text-gray-700 dark:text-gray-300">Payme – Blockchain-Based Payments</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                            <span className="text-gray-700 dark:text-gray-300">PRXIS Pvt Ltd – AI-Powered LegalTech</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                            <span className="text-gray-700 dark:text-gray-300">INFLYNX Tech Pvt Ltd – AI-Driven Jurisdiction
                                                System</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                            <span className="text-gray-700 dark:text-gray-300">Additional Startup – Industry & Solution</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                            <span className="text-gray-700 dark:text-gray-300">Another Startup – Industry & Solution</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                        <span
                                            className="inline-block w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        Alumni Startups
                                    </h4>
                                    <ul className="space-y-3 pl-10">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                                            <span className="text-gray-700 dark:text-gray-300">Graduated Startup – 2023</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                                            <span className="text-gray-700 dark:text-gray-300">Another Success – 2022</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                                            <span className="text-gray-700 dark:text-gray-300">Innovation Leader – 2021</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <div className="inline-flex items-center p-2 px-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg mb-4">
                                    <span className="text-yellow-500 text-xl mr-2">🌟</span>
                                    <p className="text-gray-700 dark:text-gray-200">How to Join Our Startup Directory?</p>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    If you are an incubated startup at TBI VIT Bhopal, apply to be listed in our directory and gain
                                    exposure among investors, industry leaders, and collaborators.
                                </p>
                                <a href="#apply"
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full overflow-hidden">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            Testimonials from Founders & Investors
                        </h3>

                        {/* Track Container */}
                        <div
                            ref={trackRef}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                                width: `${testimonials.length * (100 / slidesToShow)}%`,
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="testimonial-slide min-w-full md:min-w-[33.333%] p-4"
                                >
                                    <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg h-full">
                                        <div className="flex items-center mb-4">
                                            <div className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center ${testimonial.textColor} font-bold text-xl`}>
                                                {testimonial.initial}
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex text-yellow-400 mb-2">
                                            {Array.from({ length: testimonial.rating }).map((_, index) => (
                                                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none"
                            onClick={prevSlide}
                        >
                            ❮
                        </button>
                        <button
                            className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none"
                            onClick={nextSlide}
                        >
                            ❯
                        </button>
                    </div>

                    <div className="mt-20 bg-blue-600 dark:bg-blue-800 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Be the Next Success Story!</h3>
                        <p className="text-blue-100 dark:text-blue-200 text-lg mb-8 max-w-3xl mx-auto">
                            Are you ready to launch your startup journey with TBI VIT Bhopal? Join our incubator, access expert
                            mentorship, and become part of a thriving entrepreneurial ecosystem.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#apply"
                                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-blue-50 transition duration-300 transform hover:scale-105">
                                Apply Now
                            </a>
                            <a href="mailto:tbi.support@vitbhopal.ac.in"
                                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition duration-300">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Startups;