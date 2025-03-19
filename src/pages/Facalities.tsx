import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const Facilities = () => {
    const [activeTab, setActiveTab] = useState("coworking");

    // Facility Tabs Array (Easily Add/Edit Here)
    const tabs = [
        { id: "coworking", label: "Co-Working Space" },
        { id: "prototype", label: "Prototype Lab" },
        { id: "networking", label: "Networking & Events" },
        { id: "legal", label: "Legal & IP Support" },
        { id: "mentorship", label: "Mentorship & Funding" },
    ];
    const countersData = [
        { target: 100, label: "Startups Incubated" },
        { target: 45, label: "Industry Partners" },
        { target: 8000, label: "Sq. Ft. Co-working Space" },
        { target: 180, label: "High-Performance Workstations" },
      ];

    const [counts, setCounts] = useState(countersData.map(() => 0));

    useEffect(() => {
      const interval = setInterval(() => {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            count < countersData[i].target ? count + Math.ceil(countersData[i].target / 100) : countersData[i].target
          )
        );
      }, 20);
  
      setTimeout(() => clearInterval(interval), 2000); // Stops animation after 2s
      return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Header />
            <section id="hero"
                className="pt-28 pb-20 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 text-white overflow-hidden relative">
                <div id="particles-js" className="absolute inset-0"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                                Transform Your <span className="text-yellow-400">Ideas</span> into
                                <span
                                    className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">Reality</span>
                            </h1>

                            <p className="text-lg md:text-xl opacity-90 mb-8">
                                At Technology Business Incubation Centre (TBI), VIT Bhopal, we provide
                                world-class infrastructure,
                                cutting-edge technology, and a collaborative ecosystem to nurture startups,
                                researchers, and
                                entrepreneurs.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="/application"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
                                    Apply for Incubation
                                </a>
                                <a href="#facilities"
                                    className="border-2 border-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition duration-300">
                                    Explore Facilities
                                </a>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative">
                            <div
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 transform -rotate-2 hover:rotate-0 transition duration-500">
                                <div className="grid grid-cols-2 gap-4">
                                    <div
                                        className="bg-blue-800/70 dark:bg-neutral-800/70 rounded-lg p-5 transform hover:-translate-y-2 transition duration-300">
                                        <div className="text-3xl mb-2">💻</div>
                                        <h3 className="text-lg font-semibold mb-1">Co-Working Space</h3>
                                        <p className="text-sm opacity-80">8000 sq. ft. of creativity & innovation
                                        </p>
                                    </div>

                                    <div
                                        className="bg-blue-700/70 dark:bg-neutral-700/70 rounded-lg p-5 transform hover:-translate-y-2 transition duration-300">
                                        <div className="text-3xl mb-2">🔬</div>
                                        <h3 className="text-lg font-semibold mb-1">Prototype Lab</h3>
                                        <p className="text-sm opacity-80">Advanced labs for R&D</p>
                                    </div>

                                    <div
                                        className="bg-blue-700/70 dark:bg-neutral-700/70 rounded-lg p-5 transform hover:-translate-y-2 transition duration-300">
                                        <div className="text-3xl mb-2">🤝</div>
                                        <h3 className="text-lg font-semibold mb-1">Networking Events</h3>
                                        <p className="text-sm opacity-80">Connect with industry experts</p>
                                    </div>

                                    <div
                                        className="bg-blue-800/70 dark:bg-neutral-800/70 rounded-lg p-5 transform hover:-translate-y-2 transition duration-300">
                                        <div className="text-3xl mb-2">💰</div>
                                        <h3 className="text-lg font-semibold mb-1">Funding Assistance</h3>
                                        <p className="text-sm opacity-80">From seed funding to VC connect</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute -top-12 -right-8 w-24 h-24 rounded-full bg-blue-500/30 dark:bg-blue-400/10 blur-xl animate-pulse">
                            </div>
                            <div
                                className="absolute -bottom-8 -left-12 w-36 h-36 rounded-full bg-teal-500/20 dark:bg-teal-400/10 blur-xl animate-pulse delay-700">
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {countersData.map((counter, i) => (
                            <div key={counter.label} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
                                    {counts[i]}
                                </div>
                                <p className="text-sm text-white/80">{counter.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
                        preserveAspectRatio="none">
                        <path fill="white" fill-opacity="1"
                            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                    </svg>
                </div>
            </section>
            <section id="facilities" className="py-20 bg-white dark:bg-neutral-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Facilities
                            & Resources
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            At Technology Business Incubation Centre (TBI), VIT Bhopal, we provide world-class
                            infrastructure,
                            cutting-edge technology, and a collaborative ecosystem to nurture startups,
                            researchers, and
                            entrepreneurs.
                        </p>
                    </div>

                    <div>
                        {/* Tabs Navigation */}
                        <div className="flex flex-wrap justify-center mb-12 border-b dark:border-gray-700">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`px-6 py-3 text-sm md:text-base font-medium ${activeTab === tab.id
                                        ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                                        : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {activeTab === "coworking" && (
                            <div className="facility-content active" id="coworking">
                                <div className="flex flex-col lg:flex-row items-center gap-10">
                                    <div className="lg:w-1/2">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Co-Working
                                            Space</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            Our 8000 sq. ft. co-working space in Academic Block 2, VIT Bhopal is
                                            designed to foster
                                            creativity, collaboration, and productivity. Whether you're an early-stage
                                            startup, an individual
                                            innovator, or a research-driven entrepreneur, our co-working space offers
                                            everything you need.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.414 1.414 5 5 0 010-7.07 1 1 0 011.414 0zm4.242 0a1 1 0 011.414 0 5 5 0 010 7.07 1 1 0 01-1.414-1.414 3 3 0 000-4.242 1 1 0 010-1.414z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        High-Speed Internet</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Seamless
                                                        connectivity for research,
                                                        development, and business operations.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Ergonomic Workstations</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Fully furnished
                                                        office spaces equipped with
                                                        modern work desks and seating.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Discussion & Meeting Zones</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Dedicated spaces
                                                        for brainstorming, team
                                                        discussions, and client meetings.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v9a.5.5 0 01-.5.5z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Conference Rooms</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Equipped with smart
                                                        boards and video
                                                        conferencing facilities for seamless communication.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-8 inline-flex items-center p-2 px-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                                            <span className="text-yellow-500 text-xl mr-2">🌟</span>
                                            <p className="text-gray-700 dark:text-gray-200"><span className="font-medium">Who
                                                Can Access?</span>
                                                Startups incubated at TBI, research teams, and student innovators.</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                            <div
                                                className="bg-gradient-to-br from-blue-500 to-blue-700 aspect-video rounded-2xl flex flex-col items-center justify-center p-10 text-white">
                                                <div className="text-6xl mb-6">💼</div>
                                                <h4 className="text-2xl font-bold mb-3">8000 sq. ft.</h4>
                                                <p className="text-center text-blue-100">State-of-the-art co-working
                                                    facility equipped with modern
                                                    amenities</p>
                                                <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-md">
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">24/7</span>
                                                        <span className="text-xs text-blue-100">Access</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">100+</span>
                                                        <span className="text-xs text-blue-100">Workstations</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">10+</span>
                                                        <span className="text-xs text-blue-100">Meeting Rooms</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">5+</span>
                                                        <span className="text-xs text-blue-100">Lounge Areas</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "prototype" && (
                            <div className="facility-content active" id="prototype">
                                <div className="flex flex-col lg:flex-row items-center gap-10">
                                    <div className="lg:w-1/2 order-2 lg:order-1">
                                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                            <div
                                                className="bg-gradient-to-br from-purple-500 to-indigo-600 aspect-video rounded-2xl flex flex-col items-center justify-center p-10 text-white">
                                                <div className="text-6xl mb-6">🔬</div>
                                                <h4 className="text-2xl font-bold mb-3">Prototype Lab</h4>
                                                <p className="text-center text-purple-100">Advanced technology labs for
                                                    innovation and development
                                                </p>
                                                <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-md">
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">180</span>
                                                        <span className="text-xs text-purple-100">Workstations</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">5+</span>
                                                        <span className="text-xs text-purple-100">Specialized Labs</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">24/7</span>
                                                        <span className="text-xs text-purple-100">Technical Support</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">GPU</span>
                                                        <span className="text-xs text-purple-100">Powered Computing</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 order-1 lg:order-2">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Prototype Lab
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            Innovation requires the right tools and technology, and our Prototype Lab is
                                            designed to help
                                            startups develop, test, and refine their products before market launch. TBI
                                            provides access to
                                            advanced labs for cutting-edge development.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Cyber
                                                        Lab</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Equipped with 180
                                                        high-performance
                                                        workstations for cybersecurity research, ethical hacking, and
                                                        network security projects.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Network Labs</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Dedicated
                                                        facilities for testing, deploying,
                                                        and securing network infrastructures.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">IoT &
                                                        Gaming Lab</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Cutting-edge tools
                                                        for IoT prototyping,
                                                        embedded system development, and game design.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path
                                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">AI &
                                                        ML Lab</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Access to
                                                        GPU-powered computing for AI model
                                                        training, deep learning research, and advanced analytics.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-8 inline-flex items-center p-2 px-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                                            <span className="text-yellow-500 text-xl mr-2">🌟</span>
                                            <p className="text-gray-700 dark:text-gray-200"><span className="font-medium">Who
                                                Can Access?</span>
                                                Incubated startups, student entrepreneurs, researchers, and faculty
                                                innovators.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "networking" && (
                            <div className="facility-content active" id="networking">
                                <div className="flex flex-col lg:flex-row items-center gap-10">
                                    <div className="lg:w-1/2">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Networking &
                                            Events</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            At TBI VIT Bhopal, we believe that the right connections can accelerate
                                            startup success. We
                                            organize exclusive networking opportunities to bring together entrepreneurs,
                                            investors, industry
                                            experts, and policymakers.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path
                                                            d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Workshops & Seminars</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Regular sessions on
                                                        emerging technologies,
                                                        business strategies, and startup growth.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                                            clip-rule="evenodd" />
                                                        <path
                                                            d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Hackathons & Ideathons</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Competitive
                                                        innovation challenges to
                                                        encourage problem-solving and rapid prototyping.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Investor Meetups</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Pitching sessions
                                                        with angel investors,
                                                        venture capitalists, and funding agencies.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path
                                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Demo
                                                        Days & Startup Showcases
                                                    </h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">A platform for
                                                        startups to present their
                                                        ideas, gain feedback, and secure funding.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-8 inline-flex items-center p-2 px-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                                            <span className="text-yellow-500 text-xl mr-2">🌟</span>
                                            <p className="text-gray-700 dark:text-gray-200"><span className="font-medium">Who
                                                Can Participate?</span>
                                                Incubated startups, students, faculty, and external innovators looking
                                                for investment and
                                                collaboration.</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                            <div
                                                className="bg-gradient-to-br from-green-500 to-teal-600 aspect-video rounded-2xl flex flex-col items-center justify-center p-10 text-white">
                                                <div className="text-6xl mb-6">🤝</div>
                                                <h4 className="text-2xl font-bold mb-3">Networking & Events</h4>
                                                <p className="text-center text-green-100">Connect with industry leaders,
                                                    investors, and fellow
                                                    entrepreneurs</p>
                                                <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-md">
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">20+</span>
                                                        <span className="text-xs text-green-100">Events Per Year</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">50+</span>
                                                        <span className="text-xs text-green-100">Industry Partners</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">100+</span>
                                                        <span className="text-xs text-green-100">Investors Network</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">5+</span>
                                                        <span className="text-xs text-green-100">Demo Days Annually</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "legal" && (
                            <div className="facility-content active" id="legal">
                                <div className="flex flex-col lg:flex-row items-center gap-10">
                                    <div className="lg:w-1/2 order-2 lg:order-1">
                                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                            <div
                                                className="bg-gradient-to-br from-red-500 to-orange-600 aspect-video rounded-2xl flex flex-col items-center justify-center p-10 text-white">
                                                <div className="text-6xl mb-6">⚖️</div>
                                                <h4 className="text-2xl font-bold mb-3">Legal & IP Support</h4>
                                                <p className="text-center text-red-100">Comprehensive legal assistance for
                                                    startups and innovators
                                                </p>
                                                <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-md">
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">100+</span>
                                                        <span className="text-xs text-red-100">Patents Filed</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">50+</span>
                                                        <span className="text-xs text-red-100">Company Registrations</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">75+</span>
                                                        <span className="text-xs text-red-100">Legal Consultations</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">25+</span>
                                                        <span className="text-xs text-red-100">Legal Experts Network</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 order-1 lg:order-2">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Legal & IP
                                            Support</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            Navigating the legal landscape can be challenging for startups. TBI VIT
                                            Bhopal provides
                                            comprehensive legal and intellectual property (IP) support to ensure that
                                            startups can focus on
                                            growth without administrative hurdles.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Company Registration</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Guidance on entity
                                                        formation (Private
                                                        Limited, LLP, OPC, etc.), compliance, and GST registration.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1-.257-.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Patent
                                                        & IP Filing</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Assistance in
                                                        patent drafting, filing, and
                                                        trademark registration to protect innovations.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                                        <path fill-rule="evenodd"
                                                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Contracts & Agreements</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Support in
                                                        preparing founders' agreements,
                                                        term sheets, and investor contracts.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Regulatory Compliance</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Ensuring adherence
                                                        to industry regulations,
                                                        cybersecurity laws, and startup policies.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-8 inline-flex items-center p-2 px-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
                                            <span className="text-yellow-500 text-xl mr-2">🌟</span>
                                            <p className="text-gray-700 dark:text-gray-200"><span className="font-medium">Who
                                                Can Avail?</span>
                                                Startups, researchers, and innovators seeking IP protection and legal
                                                assistance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "mentorship" && (
                            <div className="facility-content active" id="mentorship">
                                <div className="flex flex-col lg:flex-row items-center gap-10">
                                    <div className="lg:w-1/2">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mentorship &
                                            Funding Assistance
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            One of the key pillars of a successful startup is expert guidance and
                                            financial support. At TBI
                                            VIT Bhopal, we connect startups with a network of seasoned mentors, industry
                                            leaders, and funding
                                            agencies to help them scale efficiently.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 dark:text-amber-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Expert
                                                        Mentorship</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">One-on-one guidance
                                                        from successful
                                                        entrepreneurs, investors, and domain experts.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 dark:text-amber-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Business Model Refinement</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Personalized
                                                        sessions to fine-tune revenue
                                                        models, pricing strategies, and go-to-market plans.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 dark:text-amber-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path
                                                            d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                                        <path fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Funding Support</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Access to
                                                        government grants, angel investors,
                                                        venture capitalists, and corporate sponsorships for funding your
                                                        startup journey.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center text-amber-600 dark:text-amber-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                        viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd"
                                                            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                                        Incubation & Acceleration</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-300">Structured support
                                                        for business growth,
                                                        scaling, and expansion through tailored programs.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-8 inline-flex items-center p-2 px-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                                            <span className="text-yellow-500 text-xl mr-2">🌟</span>
                                            <p className="text-gray-700 dark:text-gray-200"><span className="font-medium">Who
                                                Can Benefit?</span>
                                                Startups incubated at TBI, student entrepreneurs, and research-based
                                                ventures.</p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                            <div
                                                className="bg-gradient-to-br from-amber-500 to-yellow-600 aspect-video rounded-2xl flex flex-col items-center justify-center p-10 text-white">
                                                <div className="text-6xl mb-6">💰</div>
                                                <h4 className="text-2xl font-bold mb-3">Mentorship & Funding</h4>
                                                <p className="text-center text-amber-100">Expert guidance and financial
                                                    support to accelerate your
                                                    growth</p>
                                                <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-md">
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">50+</span>
                                                        <span className="text-xs text-amber-100">Industry Mentors</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">₹10Cr+</span>
                                                        <span className="text-xs text-amber-100">Funding Facilitated</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">30+</span>
                                                        <span className="text-xs text-amber-100">Angel Investors</span>
                                                    </div>
                                                    <div
                                                        className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                                                        <span className="block text-xl mb-1">15+</span>
                                                        <span className="text-xs text-amber-100">Govt. Grants
                                                            Available</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="mt-16 text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Join TBI,
                                VIT Bhopal &
                                Transform Your Idea into Reality!</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                                Our world-class incubation facilities are designed to empower innovators with the
                                tools, mentorship,
                                and funding required to build impactful businesses. Whether you're a student,
                                researcher, or aspiring
                                entrepreneur, TBI VIT Bhopal provides the perfect launchpad for your startup
                                journey.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="#apply"
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                                    Apply for Incubation
                                </a>
                                <a href="mailto:tbi.support@vitbhopal.ac.in"
                                    className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 shadow-sm text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Facilities