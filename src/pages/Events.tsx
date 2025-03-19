import { useEffect, useState, useRef } from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";

const testimonials = [
    {
        name: "Vikram Patel",
        role: "Student Entrepreneur",
        initials: "VP",
        color: "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400",
        text: "The AI bootcamp organized by TBI was a game-changer for me. I learned practical applications that I could immediately implement in my startup. The networking opportunities were invaluable.",
    },
    {
        name: "Anjali Prakash",
        role: "Founder, EduTech Startup",
        initials: "AP",
        color: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
        text: "Pitch Day at TBI connected me with two angel investors who later funded my startup's seed round. The mentorship I received during the preparation phase was extremely helpful.",
    },
    {
        name: "Rahul Kumar",
        role: "CTO, Blockchain Venture",
        initials: "RK",
        color: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400",
        text: "The hackathon organized by TBI was intense and challenging in the best way possible. Our team developed a prototype in 48 hours that later became our flagship product.",
    },
    {
        name: "Sunita Mishra",
        role: "Angel Investor",
        initials: "SM",
        color: "bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400",
        text: "As an investor, I find TBI's events to be well-organized and focused. They bring together high-quality startups, making it easier to discover promising investment opportunities.",
    },
];

const Events: React.FC = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<HTMLDivElement[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);
    const slideWidthRef = useRef(0);

    useEffect(() => {
        function updateSlidesToShow() {
            setSlidesToShow(window.innerWidth >= 768 ? 3 : 1);
            updateSlideWidth();
            updateSliderPosition();
        }

        function updateSlideWidth() {
            if (slidesRef.current.length) {
                slideWidthRef.current = slidesRef.current[0].getBoundingClientRect().width;
            }
        }

        function updateSliderPosition() {
            if (trackRef.current) {
                trackRef.current.style.transform = `translateX(-${currentIndex * slideWidthRef.current}px)`;
            }
        }

        window.addEventListener("resize", updateSlidesToShow);
        updateSlidesToShow();

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev < testimonials.length - slidesToShow ? prev + 1 : 0));
        }, 5000);

        return () => {
            window.removeEventListener("resize", updateSlidesToShow);
            clearInterval(interval);
        };
    }, [currentIndex, slidesToShow]);

    return (
        <div>
            <Header />
            <section id="events" className="py-20 bg-gray-50 dark:bg-neutral-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span
                            className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Knowledge
                            & Networking</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Events & Workshops</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            At TBI, VIT Bhopal, we believe that continuous learning, exposure to industry trends, and networking
                            opportunities are vital for the success of startups. Our events are designed to help entrepreneurs
                            gain insights, build connections, and refine their business strategies.
                        </p>
                    </div>

                    <div className="mb-20">
                        <div className="flex flex-wrap items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Events</h3>
                            <a href="#"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                                View All Events
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div
                                className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="bg-blue-600 text-white py-2 px-4 flex justify-between items-center">
                                    <span className="font-semibold">Workshop</span>
                                    <span className="text-sm">Aug 25, 2023</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">AI for Startups: Practical
                                            Applications</h4>
                                        <span
                                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full">Virtual</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        Learn how to leverage AI technologies to optimize your startup operations and create innovative
                                        solutions.
                                    </p>
                                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>2:00 PM - 4:00 PM IST</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            <div
                                                className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                                                JS</div>
                                            <div
                                                className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                                KP</div>
                                            <div
                                                className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
                                                RV</div>
                                        </div>
                                        <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                                            Register
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="bg-green-600 text-white py-2 px-4 flex justify-between items-center">
                                    <span className="font-semibold">Hackathon</span>
                                    <span className="text-sm">Sep 10-12, 2023</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">FinTech Innovation Challenge</h4>
                                        <span
                                            className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full">In-Person</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        48-hour hackathon to build innovative financial technology solutions for real-world problems.
                                    </p>
                                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>VIT Bhopal Campus, Academic Block 2</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 py-1 px-2 rounded-full">Cash
                                            prizes worth ₹2L</span>
                                        <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                                            Register
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="bg-purple-600 text-white py-2 px-4 flex justify-between items-center">
                                    <span className="font-semibold">Investor Meetup</span>
                                    <span className="text-sm">Sep 18, 2023</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">Startup Pitch Day</h4>
                                        <span
                                            className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs px-2 py-1 rounded-full">Hybrid</span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        Opportunity for startups to pitch their ideas to a panel of angel investors and venture
                                        capitalists.
                                    </p>
                                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>1:00 PM - 6:00 PM IST</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="text-sm bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 py-1 px-2 rounded-full">Limited
                                            spots</span>
                                        <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                                            Apply to Pitch
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Types of Events We Host
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div
                                className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                                <div
                                    className="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Webinars</h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Online sessions conducted by industry experts on emerging technologies, startup strategies, and
                                    funding opportunities.
                                </p>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>60-90 minutes</span>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                                <div
                                    className="w-14 h-14 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Boot Camps</h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Intensive training programs covering startup essentials such as business model development,
                                    fundraising, and product-market fit.
                                </p>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>1-3 days</span>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                                <div
                                    className="w-14 h-14 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Networking Sessions</h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Exclusive meetups where entrepreneurs can connect with investors, mentors, and corporate leaders.
                                </p>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>2-3 hours</span>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
                                <div
                                    className="w-14 h-14 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Hackathons & Competitions</h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Opportunities for innovators to showcase their skills and build market-ready solutions in
                                    time-bound challenges.
                                </p>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>24-48 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="flex flex-wrap items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Past Events Archive</h3>
                            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Explore all past events</a>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            We maintain a detailed archive of all our previous events, complete with photo galleries, video
                            recordings, and event reports providing summaries, insights, and key takeaways.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="relative rounded-xl overflow-hidden h-64 group">
                                <div
                                    className="absolute inset-0 bg-blue-900/80 flex flex-col items-center justify-center p-6 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    <h4 className="text-lg font-bold mb-2">AI in Healthcare Summit</h4>
                                    <p className="text-sm text-center mb-4">A two-day conference exploring AI applications in healthcare
                                        with industry leaders</p>
                                    <span className="text-xs bg-white/20 py-1 px-3 rounded-full">March 2023</span>
                                </div>
                                <div
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-full flex items-center justify-center text-white text-center p-8">
                                    <div>
                                        <div className="text-5xl mb-4">🏥</div>
                                        <h4 className="text-xl font-bold">AI in Healthcare Summit</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="relative rounded-xl overflow-hidden h-64 group">
                                <div
                                    className="absolute inset-0 bg-green-900/80 flex flex-col items-center justify-center p-6 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    <h4 className="text-lg font-bold mb-2">Blockchain Bootcamp</h4>
                                    <p className="text-sm text-center mb-4">Three-day intensive hands-on workshop on blockchain
                                        development</p>
                                    <span className="text-xs bg-white/20 py-1 px-3 rounded-full">January 2023</span>
                                </div>
                                <div
                                    className="bg-gradient-to-r from-green-500 to-teal-600 h-full flex items-center justify-center text-white text-center p-8">
                                    <div>
                                        <div className="text-5xl mb-4">🔗</div>
                                        <h4 className="text-xl font-bold">Blockchain Bootcamp</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="relative rounded-xl overflow-hidden h-64 group">
                                <div
                                    className="absolute inset-0 bg-amber-900/80 flex flex-col items-center justify-center p-6 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    <h4 className="text-lg font-bold mb-2">Startup Funding Masterclass</h4>
                                    <p className="text-sm text-center mb-4">Expert panel sharing insights on securing funding for
                                        early-stage startups</p>
                                    <span className="text-xs bg-white/20 py-1 px-3 rounded-full">February 2023</span>
                                </div>
                                <div
                                    className="bg-gradient-to-r from-amber-500 to-red-600 h-full flex items-center justify-center text-white text-center p-8">
                                    <div>
                                        <div className="text-5xl mb-4">💰</div>
                                        <h4 className="text-xl font-bold">Startup Funding Masterclass</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 p-8 md:p-12">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Registration Portal for Events
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                                        Participating in our events is easy! Sign up for upcoming webinars, boot camps, and workshops.
                                        Seats are limited, so register early!
                                    </p>
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="full-name"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                                            <input type="text" id="full-name"
                                                className="block w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Your full name" />
                                        </div>
                                        <div>
                                            <label htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email
                                                Address</label>
                                            <input type="email" id="email"
                                                className="block w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="you@example.com" />
                                        </div>
                                        <div>
                                            <label htmlFor="organization"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Organization/Institution</label>
                                            <input type="text" id="organization"
                                                className="block w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Your company or institution" />
                                        </div>
                                        <div>
                                            <label htmlFor="event"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Event</label>
                                            <select id="event"
                                                className="block w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500">
                                                <option value="" disabled selected>Choose an event</option>
                                                <option>AI for Startups: Practical Applications (Aug 25)</option>
                                                <option>FinTech Innovation Challenge (Sep 10-12)</option>
                                                <option>Startup Pitch Day (Sep 18)</option>
                                            </select>
                                        </div>
                                        <button type="submit"
                                            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                                            Register Now
                                        </button>
                                    </form>
                                </div>
                                <div
                                    className="md:w-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 p-8 md:p-12 flex items-center justify-center">
                                    <div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-md">
                                            <h4 className="text-xl font-bold text-white mb-4">Why Attend Our Events?</h4>
                                            <ul className="space-y-3 text-blue-100">
                                                <li className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Learn from industry leaders and subject matter experts</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Network with investors, mentors, and fellow entrepreneurs</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Gain practical insights and applicable knowledge</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Showcase your ideas and get valuable feedback</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2 mt-0.5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                    <span>Find potential collaborators and team members</span>
                                                </li>
                                            </ul>
                                            <div className="mt-6 text-center">
                                                <span className="inline-block bg-white/20 py-2 px-4 rounded-lg text-white">
                                                    Most events include certificates & refreshments
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16 relative">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            What Participants Say
                        </h3>

                        {/* Testimonials Container */}
                        <div className="testimonials-container overflow-hidden relative">
                            <div className="testimonials-track flex transition-transform duration-300" ref={trackRef}>
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        ref={(el) => {
                                            if (el) slidesRef.current[index] = el;
                                        }}
                                        className="testimonial-slide min-w-full md:min-w-[33.33%] p-4"
                                    >
                                        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md">
                                            <div className="flex items-center mb-4">
                                                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.color}`}>
                                                    {testimonial.initials}
                                                </div>
                                                <div className="ml-3">
                                                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300 italic">{testimonial.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - slidesToShow))}
                            className="absolute top-1/2 -translate-y-1/2 left-0 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setCurrentIndex((prev) => (prev < testimonials.length - slidesToShow ? prev + 1 : 0))}
                            className="absolute top-1/2 -translate-y-1/2 right-0 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div>
                        <div className="bg-blue-600 dark:bg-blue-800 rounded-2xl shadow-xl overflow-hidden">
                            <div className="px-6 py-12 md:p-12 text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated on Future Events</h3>
                                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Subscribe to our newsletter to get exclusive invites to upcoming events, workshops, and networking
                                    opportunities. Never miss an update!
                                </p>

                                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                                    <input type="email" placeholder="Your email address"
                                        className="px-4 py-3 rounded-lg flex-grow focus:ring-blue-500 focus:border-blue-500 border-0" />
                                    <button type="submit"
                                        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded-lg transition duration-300 whitespace-nowrap">
                                        Subscribe Now
                                    </button>
                                </form>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <a href="#" className="text-white hover:text-blue-200 transition duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white hover:text-blue-200 transition duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-white hover:text-blue-200 transition duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Events;