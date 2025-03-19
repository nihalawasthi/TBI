import '../background.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Industry = () => {
    return (
        <div>
            <Header />
            <section id="industry-academia" className="py-20 bg-gray-50 dark:bg-neutral-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span
                            className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Bridging
                            the Gap</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Industry-Academia
                            Collaboration</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            At TBI, VIT Bhopal, we believe that strong industry-academia collaboration is the key to fostering
                            innovation, driving research, and developing industry-ready talent. Our strategic partnerships enable
                            a dynamic ecosystem where entrepreneurship, research, and technology commercialization thrive.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div
                            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                            <div className="h-2 bg-blue-600 dark:bg-blue-700"></div>
                            <div className="p-6">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">MoUs & Partnerships</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    We have signed strategic MoUs with industry leaders, research labs, and government agencies to
                                    create a vibrant innovation ecosystem.
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="ml-2 text-gray-700 dark:text-gray-300">Industry Leaders</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="ml-2 text-gray-700 dark:text-gray-300">Research Labs</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="ml-2 text-gray-700 dark:text-gray-300">Government Agencies</p>
                                    </div>
                                </div>

                                <a href="mailto:tbi.support@vitbhopal.ac.in"
                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                                    Partner with us
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                            <div className="h-2 bg-purple-600 dark:bg-purple-700"></div>
                            <div className="p-6">
                                <div
                                    className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Technology Transfer & Consultancy
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    We facilitate technology transfer and consultancy services to support industry-driven innovations
                                    and help startups bring their ideas to market.
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="ml-2 text-gray-700 dark:text-gray-300">R&D Consultancy</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="ml-2 text-gray-700 dark:text-gray-300">IP & Patent Services</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="ml-2 text-gray-700 dark:text-gray-300">Prototyping & Product Development</p>
                                    </div>
                                </div>

                                <a href="mailto:tbi.support@vitbhopal.ac.in"
                                    className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline">
                                    Get consultancy
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div
                            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                            <div className="h-2 bg-green-600 dark:bg-green-700"></div>
                            <div className="p-6">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Internship & Employment</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    We provide internship and job opportunities with startups, corporate partners, and research
                                    organizations to enhance student employability.
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="ml-2 text-gray-700 dark:text-gray-300">Internships with Startups</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="ml-2 text-gray-700 dark:text-gray-300">Live Industry Projects</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="ml-2 text-gray-700 dark:text-gray-300">Mentorship from Industry Experts</p>
                                    </div>
                                </div>

                                <a href="mailto:tbi.support@vitbhopal.ac.in"
                                    className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline">
                                    Explore opportunities
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Our Key Partners</h3>
                            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                We collaborate with leading organizations across multiple sectors to create a robust innovation
                                ecosystem.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                        </svg>
                                    </div>
                                    <h4 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
                                        Technology Companies & Corporate Innovators
                                    </h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 pl-16">
                                    Collaborating for tech development, joint research, and mentorship programs.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <h4 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
                                        Research Institutes & Universities
                                    </h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 pl-16">
                                    Facilitating knowledge exchange, skill development, and collaborative research projects.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                        </svg>
                                    </div>
                                    <h4 className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">
                                        Government Agencies & Funding Bodies
                                    </h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 pl-16">
                                    Working on startup policies, grant funding, and business incubation programs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-16">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Research Collaborations</h3>
                            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                We work with prestigious research institutions to drive innovation and technology development.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-blue-600 dark:text-blue-400 font-bold">ISRO</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Space Research</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-green-600 dark:text-green-400 font-bold">DST</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Science & Tech</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-purple-600 dark:text-purple-400 font-bold">MOCIT</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">IT & Comm</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-amber-600 dark:text-amber-400 font-bold">MPCOST</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">MP Tech Council</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-red-600 dark:text-red-400 font-bold">IGCAR</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Atomic Research</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">DRDO</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Defense R&D</p>
                            </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            International collaborative joint research programmes of common interest are undertaken through
                            Indo-US, Indo-German, Indo-Australian and Indo-European research initiatives.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            <span
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm">Indo-US</span>
                            <span
                                className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded-full text-sm">Indo-German</span>
                            <span
                                className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-sm">Indo-Australian</span>
                            <span
                                className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 rounded-full text-sm">Indo-European</span>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div
                            className="bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-900 dark:to-indigo-900 rounded-xl shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 p-8 md:p-10">
                                    <h3 className="text-2xl font-bold text-white mb-4">Technology Transfer & Consultancy Services</h3>
                                    <p className="text-blue-100 mb-6">
                                        Our faculty, researchers, and industry mentors provide expert guidance in product development,
                                        intellectual property management, and commercialization strategies.
                                    </p>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="text-white">R&D Consultancy for AI, blockchain, IoT, cybersecurity, and fintech
                                                solutions</p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="text-white">IP & Patent assistance for commercializing university-driven research
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="text-white">Prototyping & Product Development with high-tech labs and expert mentors
                                            </p>
                                        </div>
                                    </div>

                                    <a href="mailto:tbi.support@vitbhopal.ac.in"
                                        className="inline-block px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition duration-300">
                                        Get Expert Consultancy
                                    </a>
                                </div>
                                <div className="md:w-1/2 bg-blue-800 dark:bg-blue-900 p-8 md:p-10 flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-md">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                            <h4 className="ml-4 text-xl font-semibold text-white">ICSR Partnership</h4>
                                        </div>
                                        <p className="text-blue-100 mb-4">
                                            The Centre for Industrial Consultancy and Sponsored Research (ICSR) promotes interaction
                                            between the Institute and industry through:
                                        </p>
                                        <ul className="space-y-2 text-blue-100 mb-6">
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></span>
                                                <span>Institutional Consultancy</span>
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></span>
                                                <span>Retainer Consultancy</span>
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2"></span>
                                                <span>Research Based Industrial Consultancy</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Benefits for Students</h3>
                            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Our Industry-Academia Collaboration Program connects students with opportunities to gain real-world
                                experience and develop entrepreneurial skills.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div
                                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Internships with Startups</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 pl-12">
                                    Gain hands-on experience in AI, blockchain, cybersecurity, IoT, and emerging technologies.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                                clip-rule="evenodd" />
                                            <path
                                                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Live Industry Projects</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 pl-12">
                                    Work on real-world challenges in FinTech, LegalTech, AI-driven solutions, and more.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Mentorship from Industry Experts</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 pl-12">
                                    Learn from successful entrepreneurs, investors, and technology leaders.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                                clip-rule="evenodd" />
                                            <path
                                                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Placement Assistance</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 pl-12">
                                    Connect with hiring partners for job placements, startup funding, and corporate roles.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Entrepreneurial Training</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 pl-12">
                                    Build business acumen, technical expertise, and leadership skills.
                                </p>
                            </div>

                            <div
                                className="bg-blue-600 dark:bg-blue-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-white">Looking for Internship or Career Opportunities?</h4>
                                </div>
                                <p className="text-blue-100 pl-12">
                                    Students at VIT Bhopal can apply for exclusive internships and startup hiring programs at TBI.
                                </p>
                                <a href="mailto:tbi.support@vitbhopal.ac.in"
                                    className="mt-3 inline-block ml-12 px-4 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition duration-300">
                                    Get in touch
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <div className="bg-gray-100 dark:bg-neutral-800 rounded-xl p-8 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Industry Collaboration at TBI?
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-5 shadow-sm">
                                        <div className="flex items-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span className="text-gray-900 dark:text-white font-medium">Industry Expertise</span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Access to cutting-edge technology and
                                            industry knowledge</p>
                                    </div>

                                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-5 shadow-sm">
                                        <div className="flex items-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span className="text-gray-900 dark:text-white font-medium">Funding Support</span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Funding & support for research
                                            commercialization</p>
                                    </div>

                                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-5 shadow-sm">
                                        <div className="flex items-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span className="text-gray-900 dark:text-white font-medium">Real-World Exposure</span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Hands-on training for students in real
                                            business environments</p>
                                    </div>

                                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-5 shadow-sm">
                                        <div className="flex items-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span className="text-gray-900 dark:text-white font-medium">Job Opportunities</span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">Internships and roles with high-growth
                                            startups</p>
                                    </div>

                                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-5 shadow-sm">
                                        <div className="flex items-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span className="text-gray-900 dark:text-white font-medium">Corporate Partnerships</span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">R&D, product development, and technology
                                            transfer</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-200 dark:bg-blue-900/30 rounded-full opacity-50">
                            </div>
                            <div
                                className="absolute bottom-0 left-0 -mb-4 -ml-4 w-36 h-36 bg-green-200 dark:bg-green-900/30 rounded-full opacity-50">
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-700 dark:bg-blue-800 rounded-xl shadow-lg overflow-hidden">
                        <div className="md:flex items-center">
                            <div className="md:w-2/3 p-8 md:p-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Us in Shaping the Future of
                                    Innovation!</h3>
                                <p className="text-blue-100 mb-6">
                                    At TBI VIT Bhopal, we empower startups, students, and researchers to create transformative
                                    solutions that drive economic and societal progress. If you are an industry leader, research
                                    organization, or aspiring entrepreneur, connect with us today and become a part of our growing
                                    innovation ecosystem.
                                </p>
                                <a href="mailto:tbi.support@vitbhopal.ac.in"
                                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Contact Us for Collaboration
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <div className="md:w-1/3 bg-blue-800 dark:bg-blue-900 p-8 md:p-10">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                    <h4 className="text-xl font-semibold text-white mb-4">Contact us for:</h4>
                                    <ul className="space-y-3 text-blue-100">
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span>Collaborations</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span>Internships</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                            <span>Consultancy inquiries</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6 flex items-center text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        <a href="mailto:tbi.support@vitbhopal.ac.in" className="hover:underline">tbi.support@vitbhopal.ac.in</a>
                                    </div>
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

export default Industry;