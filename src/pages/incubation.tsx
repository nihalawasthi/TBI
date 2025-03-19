import Footer from "../components/Footer";
import Header from "../components/Header"

const Incubation = () => {
    return (
        <div>
            <Header />
            <section id="programs" className="py-20 bg-neutral-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 reveal-element" data-animation="fade-up">
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            Our Incubation Programs</h2>
                        <div
                            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6">
                        </div>
                        <p className="max-w-2xl mx-auto text-neutral-300 text-lg">Structured pathways to
                            transform your innovative
                            ideas into successful businesses</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-neutral-800 rounded-xl p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group reveal-element"
                            data-animation="fade-right">
                            <div
                                className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Pre-Incubation</h3>
                            <p className="text-neutral-300 mb-6">Validation and refinement of early-stage ideas
                                through mentorship,
                                workshops, and market research support.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>Idea validation</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>Mentor matching</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>Basic resources</span>
                                </li>
                            </ul>
                            <a href="#apply"
                                className="inline-block py-3 px-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50 hover:transform hover:scale-105">
                                Apply Now
                            </a>
                        </div>

                        <div className="bg-neutral-800 rounded-xl p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group reveal-element"
                            data-animation="fade-up">
                            <div
                                className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Incubation</h3>
                            <p className="text-neutral-300 mb-6">Comprehensive support for startups with
                                validated ideas, including
                                workspace, funding access, and technical expertise.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-purple-500 mr-2" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>Co-working space</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-purple-500 mr-2" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>Funding assistance</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-purple-500 mr-2" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>Technical resources</span>
                                </li>
                            </ul>
                            <a href="#apply"
                                className="inline-block py-3 px-6 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50 hover:transform hover:scale-105">
                                Apply Now
                            </a>
                        </div>

                        <div className="bg-neutral-800 rounded-xl p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20 group reveal-element"
                            data-animation="fade-left">
                            <div
                                className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Acceleration</h3>
                            <p className="text-neutral-300 mb-6">Scaling support for established startups,
                                focusing on market
                                expansion, investment readiness, and strategic partnerships.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-pink-500 mr-2" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>Investment readiness</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-pink-500 mr-2" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>Industry connections</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-pink-500 mr-2" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>Scale-up mentoring</span>
                                </li>
                            </ul>
                            <a href="#apply"
                                className="inline-block py-3 px-6 rounded-full bg-gradient-to-r from-pink-600 to-pink-800 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/50 hover:transform hover:scale-105">
                                Apply Now
                            </a>
                        </div>
                    </div>

                    <div className="mt-20 text-center reveal-element" data-animation="fade-up">
                        <h3 className="text-3xl font-bold mb-6">Ready to Join Our Incubation Community?</h3>
                        <p className="max-w-2xl mx-auto text-neutral-300 mb-8">
                            Our structured programs are designed to meet you at your current stage and
                            provide exactly what you
                            need to succeed.
                        </p>
                        <a href="#contact"
                            className="inline-block py-4 px-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50 hover:transform hover:scale-105 animate-pulse">
                            Start Your Journey Today
                        </a>
                    </div>
                </div>

                <div
                    className="absolute -top-20 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob">
                </div>
                <div
                    className="absolute top-96 -left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000">
                </div>
                <div
                    className="absolute bottom-10 right-1/4 w-56 h-56 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000">
                </div>
            </section>
            <section id="application-process"
                className="py-24 bg-neutral-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none overflow-hidden" id="el-yhfpmqum">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
                        id="el-5dxde5r3"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"
                        id="el-ivbi1p8m"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"
                        id="el-5agh3o83"></div>

                    <div className="absolute inset-0 bg-grid opacity-10" id="el-ibqckpny"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10" id="el-fk40hkqy">
                    <div className="text-center mb-16 fade-in-up" id="el-oyksk1lb">
                        <span
                            className="inline-block py-1 px-4 rounded-full bg-gradient-to-r from-blue-900 to-purple-900 text-sm font-semibold text-blue-200 tracking-wide mb-4"
                            id="el-9pllmrx6">GET STARTED</span>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                            id="el-qk4m2141">Application Process</h2>
                        <p className="max-w-3xl mx-auto text-neutral-300 text-lg" id="el-mlyhusoe">Our
                            streamlined application
                            process is designed to identify and support the most promising startups with
                            innovative solutions
                            and strong growth potential</p>
                    </div>

                    <div className="max-w-5xl mx-auto mb-20" id="el-viy6zh2a">
                        <div className="relative" id="el-yrzs0nxy">
                            <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:translate-x-[-0.5px]"
                                id="el-tld6moi7"></div>

                            <div className="relative mb-16 fade-in-element animated visible"
                                data-animation="fade-right"
                                style={{ opacity: "1;", transition: "opacity 1s ease-out, transform 1s ease-out;", transform: "translateY(0px);" }}
                                id="el-wj6h3jyo">
                                <div className="flex flex-col md:flex-row items-center" id="el-0i12li5j">
                                    <div className="flex-1 order-2 md:order-1 mt-8 md:mt-0 md:pr-10 text-right"
                                        id="el-baw6ic7p">
                                        <div className="bg-neutral-800 p-6 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 hover:bg-neutral-800/80 border border-neutral-700 hover:border-blue-500/20"
                                            id="el-elx3zqf5">
                                            <h3 className="text-2xl font-bold mb-3 text-blue-400"
                                                id="el-5sgmjduf">1. Submit Application
                                            </h3>
                                            <p className="text-neutral-300" id="el-cpq8w3oh">Fill out our
                                                comprehensive online application
                                                form detailing your startup, team, and innovation. Be
                                                prepared to share your business
                                                model, market opportunity, and current traction.</p>
                                            <div className="mt-4 flex justify-end" id="el-3f8wu68n">
                                                <span
                                                    className="text-blue-400 font-medium text-sm tracking-wider flex items-center"
                                                    id="el-drud0l3s">
                                                    ESTIMATED TIME: 30-45 MIN
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" id="el-q3rpmz4d">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            id="el-z6bv21ic"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-1 md:order-2 z-10 flex-shrink-0 relative"
                                        id="el-4z5qyi7l">
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 rounded-full animate-ping-slow opacity-20"
                                            id="el-e5914uoa"></div>
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full border-4 border-neutral-900 flex items-center justify-center shadow-lg shadow-blue-500/20"
                                            id="el-dr49k3yn">
                                            <span className="text-xl font-bold" id="el-mck9rvlg">01</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 order-3 hidden md:block" id="el-addlpx01"></div>
                                </div>
                            </div>

                            <div className="relative mb-16 fade-in-element animated visible"
                                data-animation="fade-left"
                                style={{ opacity: "1;", transition: "opacity 1s ease-out, transform 1s ease-out;", transform: "translateY(0px);" }}
                                id="el-iun5ut0c">
                                <div className="flex flex-col md:flex-row items-center" id="el-mbp897a8">
                                    <div className="flex-1 order-2 md:order-1 hidden md:block" id="el-jiw9k2m3">
                                    </div>
                                    <div className="order-1 md:order-2 z-10 flex-shrink-0 relative"
                                        id="el-1vo44ul6">
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-purple-500 rounded-full animate-ping-slow opacity-20 animation-delay-200"
                                            id="el-alnv1pkg"></div>
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full border-4 border-neutral-900 flex items-center justify-center shadow-lg shadow-purple-500/20"
                                            id="el-lboyq142">
                                            <span className="text-xl font-bold" id="el-1wlj19lq">02</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 order-3 mt-8 md:mt-0 md:pl-10" id="el-46jv66nw">
                                        <div className="bg-neutral-800 p-6 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20 hover:bg-neutral-800/80 border border-neutral-700 hover:border-purple-500/20"
                                            id="el-lyqocvy4">
                                            <h3 className="text-2xl font-bold mb-3 text-purple-400"
                                                id="el-0dladal5">2. Initial Screening
                                            </h3>
                                            <p className="text-neutral-300" id="el-izmoi1sx">Our evaluation team
                                                reviews all applications
                                                based on innovation, market potential, team capability, and
                                                alignment with our focus
                                                areas. Shortlisted startups proceed to the next stage.</p>
                                            <div className="mt-4" id="el-2k4idp89">
                                                <span
                                                    className="text-purple-400 font-medium text-sm tracking-wider flex items-center"
                                                    id="el-ehssx3a5">
                                                    RESPONSE TIME: 2-3 WEEKS
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" id="el-36smodrf">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                            id="el-iz7x9wzc"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative mb-16 fade-in-element animated visible"
                                data-animation="fade-right"
                                style={{ opacity: "1;", transition: "opacity 1s ease-out, transform 1s ease-out;", transform: "translateY(0px);" }}
                                id="el-s5bq9xzx">
                                <div className="flex flex-col md:flex-row items-center" id="el-w5x83o3o">
                                    <div className="flex-1 order-2 md:order-1 mt-8 md:mt-0 md:pr-10 text-right"
                                        id="el-kv3afp17">
                                        <div className="bg-neutral-800 p-6 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-pink-500/20 hover:bg-neutral-800/80 border border-neutral-700 hover:border-pink-500/20"
                                            id="el-0yeerxyy">
                                            <h3 className="text-2xl font-bold mb-3 text-pink-400"
                                                id="el-ww5xtnzn">3. Pitch Presentation
                                            </h3>
                                            <p className="text-neutral-300" id="el-j5ypmcws">Shortlisted
                                                startups are invited to present
                                                their business to our selection panel of mentors, industry
                                                experts, and investors. Be
                                                prepared to demonstrate your product and answer in-depth
                                                questions.</p>
                                            <div className="mt-4 flex justify-end" id="el-en5qyzdc">
                                                <span
                                                    className="text-pink-400 font-medium text-sm tracking-wider flex items-center"
                                                    id="el-rbsrh1uv">
                                                    SESSION LENGTH: 45-60 MIN
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" id="el-xv2g7tlp">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                                            id="el-068zdiks"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-1 md:order-2 z-10 flex-shrink-0 relative"
                                        id="el-uc1qb2mt">
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-pink-500 rounded-full animate-ping-slow opacity-20 animation-delay-400"
                                            id="el-kz6cik3p"></div>
                                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full border-4 border-neutral-900 flex items-center justify-center shadow-lg shadow-pink-500/20"
                                            id="el-nf63gnpj">
                                            <span className="text-xl font-bold" id="el-ufim4ruz">03</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 order-3 hidden md:block" id="el-39wrfnrq"></div>
                                </div>
                            </div>

                            <div className="relative mb-16 fade-in-element animated visible"
                                data-animation="fade-left"
                                style={{ opacity: "1;", transition: "opacity 1s ease-out, transform 1s ease-out;", transform: "translateY(0px);" }}
                                id="el-9jwpesda">
                                <div className="flex flex-col md:flex-row items-center" id="el-5mumlys7">
                                    <div className="flex-1 order-2 md:order-1 hidden md:block" id="el-hwrn3anf">
                                    </div>
                                    <div className="order-1 md:order-2 z-10 flex-shrink-0 relative"
                                        id="el-ja8ykrxq">
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500 rounded-full animate-ping-slow opacity-20 animation-delay-600"
                                            id="el-ift3lkjv"></div>
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-700 rounded-full border-4 border-neutral-900 flex items-center justify-center shadow-lg shadow-blue-500/20"
                                            id="el-6dmoor9m">
                                            <span className="text-xl font-bold" id="el-a8p0b7uw">04</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 order-3 mt-8 md:mt-0 md:pl-10" id="el-wew7dwao">
                                        <div className="bg-neutral-800 p-6 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 hover:bg-neutral-800/80 border border-neutral-700 hover:border-blue-500/20"
                                            id="el-8ik4tjgn">
                                            <h3 className="text-2xl font-bold mb-3 text-blue-400"
                                                id="el-f0atpkxt">4. Due Diligence</h3>
                                            <p className="text-neutral-300" id="el-wrakr849">For promising
                                                startups, we conduct a thorough
                                                verification of business credentials, technology validation,
                                                legal compliance, and market
                                                claims to ensure a strong foundation for incubation.</p>
                                            <div className="mt-4" id="el-s9krvoms">
                                                <span
                                                    className="text-blue-400 font-medium text-sm tracking-wider flex items-center"
                                                    id="el-cg2c17e7">
                                                    COMPLETION TIME: 2-4 WEEKS
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" id="el-uxflqqni">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                            id="el-ld4h2elr"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative fade-in-element animated visible"
                                data-animation="fade-right"
                                style={{ opacity: "1;", transition: "opacity 1s ease-out, transform 1s ease-out;", transform: "translateY(0px);" }}
                                id="el-mas0t3sr">
                                <div className="flex flex-col md:flex-row items-center" id="el-gwmfxi2h">
                                    <div className="flex-1 order-2 md:order-1 mt-8 md:mt-0 md:pr-10 text-right"
                                        id="el-pc4s5ksv">
                                        <div className="bg-neutral-800 p-6 rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20 hover:bg-neutral-800/80 border border-neutral-700 hover:border-purple-500/20"
                                            id="el-16lvfmrk">
                                            <h3 className="text-2xl font-bold mb-3 text-purple-400"
                                                id="el-835ti4vn">5. Acceptance &amp;
                                                Onboarding</h3>
                                            <p className="text-neutral-300" id="el-7o450e3d">Selected startups
                                                receive formal offer letters,
                                                sign incubation agreements, and begin the onboarding
                                                process. We'll work with you to
                                                create a customized incubation plan aligned with your needs.
                                            </p>
                                            <div className="mt-4 flex justify-end" id="el-2lhjvjw7">
                                                <span
                                                    className="text-purple-400 font-medium text-sm tracking-wider flex items-center"
                                                    id="el-5x677m5r">
                                                    WELCOME TO TBI-VIT BHOPAL!
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" id="el-zij5f4ok">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            id="el-jxoq4uen"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-1 md:order-2 z-10 flex-shrink-0 relative"
                                        id="el-kf8ghlxu">
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-purple-500 rounded-full animate-ping-slow opacity-20 animation-delay-800"
                                            id="el-sfx426a0"></div>
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-700 rounded-full border-4 border-neutral-900 flex items-center justify-center shadow-lg shadow-purple-500/20"
                                            id="el-1ppthcmt">
                                            <span className="text-xl font-bold" id="el-pgye12f7">05</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 order-3 hidden md:block" id="el-n4ixqzvy"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 fade-in-up" id="el-6hlahvvc">
                        <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg border border-neutral-700 hover:border-blue-500/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 h-full"
                            id="el-eijz0o7m">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6" id="el-3s4bu41c">
                                <h3 className="text-2xl font-bold mb-2 flex items-center" id="el-x60znssx">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" id="el-5f23agi1">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            id="el-jds4f4h8"></path>
                                    </svg>
                                    Eligibility Criteria
                                </h3>
                                <p className="text-blue-100" id="el-25cz7dt7">What we look for in applicants</p>
                            </div>
                            <div className="p-6" id="el-90jz5zgr">
                                <ul className="space-y-4" id="el-ebfauep2">
                                    <li className="flex items-start" id="el-u90n8kly">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-6pruxhul">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-mdq6mvyi"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-ltoz3s85">Innovative solution
                                            addressing a significant
                                            market need</span>
                                    </li>
                                    <li className="flex items-start" id="el-84afwaai">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-u0dnbbke">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-bzywd7ii"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-9uzgn9xn">Dedicated founding
                                            team with complementary
                                            skills</span>
                                    </li>
                                    <li className="flex items-start" id="el-ylfn2dmc">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-evtmzxry">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-jz56luub"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-i7loe4ct">Scalable business
                                            model with growth
                                            potential</span>
                                    </li>
                                    <li className="flex items-start" id="el-wmo083a0">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-yh4wxd7h">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-zsurj72p"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-c1icchcd">Minimum Viable
                                            Product (MVP) or prototype
                                            stage</span>
                                    </li>
                                    <li className="flex items-start" id="el-ua2povy6">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-wtciw6hp">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-vz2dpvsv"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-k0scar1m">Commitment to
                                            building a sustainable
                                            business</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg border border-neutral-700 hover:border-purple-500/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 h-full"
                            id="el-gyrp71wl">
                            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6"
                                id="el-ru8qg2po">
                                <h3 className="text-2xl font-bold mb-2 flex items-center" id="el-hpwulv9b">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" id="el-7aguyp1m">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                            id="el-4a4od0ey"></path>
                                    </svg>
                                    Required Documents
                                </h3>
                                <p className="text-purple-100" id="el-n0s5d55x">Materials to prepare in advance
                                </p>
                            </div>
                            <div className="p-6" id="el-est7sio1">
                                <ul className="space-y-4" id="el-of70fa72">
                                    <li className="flex items-start" id="el-x09djsx7">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-bung2a6o">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-77yzx3i0"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-n5riaf99">Executive summary or
                                            business plan (PDF
                                            format)</span>
                                    </li>
                                    <li className="flex items-start" id="el-jwicyov9">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-jbxpsmwd">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-4am3mgzw"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-67p7xp9i">Pitch deck (10-15
                                            slides recommended)</span>
                                    </li>
                                    <li className="flex items-start" id="el-zdxuwu5i">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-lhxg3d6s">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-rwhusgvz"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-oqqn0awe">Founder &amp; team
                                            CVs/resumes</span>
                                    </li>
                                    <li className="flex items-start" id="el-nx35ffsy">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-s0qjnh6e">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-5w7ouoom"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-47fpqyvh">Product demo (video
                                            or link to live
                                            demo)</span>
                                    </li>
                                    <li className="flex items-start" id="el-bsaevk9o">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-5o47n67i">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-p7uf6gyt"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-ox3tk3tb">Financial
                                            projections (if available)</span>
                                    </li>
                                    <li className="flex items-start" id="el-7jpsti68">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-opekp9xi">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-amsxpvr0"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-tnh7ltbb">Proof of
                                            incorporation (if already
                                            registered)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg border border-neutral-700 hover:border-pink-500/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/10 h-full"
                            id="el-ynny8g4z">
                            <div className="bg-gradient-to-r from-pink-600 to-pink-800 p-6" id="el-gf2gn70g">
                                <h3 className="text-2xl font-bold mb-2 flex items-center" id="el-tlg4gi9h">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" id="el-fur3gak7">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            id="el-pnwmikk7"></path>
                                    </svg>
                                    Selection Criteria
                                </h3>
                                <p className="text-pink-100" id="el-6ibjht3o">How we evaluate applications</p>
                            </div>
                            <div className="p-6" id="el-qc1qf017">
                                <ul className="space-y-4" id="el-a7i5d47q">
                                    <li className="flex items-start" id="el-7i1eh8dt">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-pink-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-62rafkwf">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-kxlagct8"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-su1u1dnc">Innovation level and
                                            technological
                                            differentiation</span>
                                    </li>
                                    <li className="flex items-start" id="el-wief5ncs">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-pink-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-v3gpjn3g">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-rd4h6f8i"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-cvfuh665">Market opportunity
                                            and growth potential</span>
                                    </li>
                                    <li className="flex items-start" id="el-xixypt0z">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-pink-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-shp46vjn">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-r7hbij0k"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-wwhzskmc">Team capability,
                                            experience, and
                                            commitment</span>
                                    </li>
                                    <li className="flex items-start" id="el-ezhwg7b6">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-pink-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-5luvsfwr">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-d71w0dtg"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-t55mx8w0">Business model
                                            viability and revenue
                                            potential</span>
                                    </li>
                                    <li className="flex items-start" id="el-99gfsda7">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-pink-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-jrsz9moh">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-wq05jvci"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-dofvf35r">Traction and
                                            validation achieved to
                                            date</span>
                                    </li>
                                    <li className="flex items-start" id="el-h1vspvdy">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-pink-500 mt-1 mr-3 flex-shrink-0"
                                            viewBox="0 0 20 20" fill="currentColor" id="el-4sn2lkya">
                                            <path fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd" id="el-g0jwzwx9"></path>
                                        </svg>
                                        <span className="text-neutral-300" id="el-2e5fkxpp">Alignment with VIT
                                            Bhopal TBI focus
                                            areas</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "11.908%", top: "69.5287%;" }} id="el-91epnvt8"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "33.2419%", top: "38.4325%;" }} id="el-592dk2vr"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "6.18599%", top: "23.0673%;" }} id="el-7v024wqf"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "59.0074%", top: "72.707%;" }} id="el-6256pnb0"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "98.6768%", top: "5.37635%;" }} id="el-fjcj3rdh"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "50.528%", top: "73.5892%;" }} id="el-pjdxhczg"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "25.8113%", top: "48.8314%;" }} id="el-c3zgswhh"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "67.3221%", top: "1.3056%;" }} id="el-elz6c7h3"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "40.146%", top: "44.1707%;" }} id="el-n9eyznvq"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "12.3203%", top: "13.7881%;" }} id="el-neahohgn"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "62.1637%", top: "78.3805%;" }} id="el-0arrquj9"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "55.3977%", top: "7.71812%;" }} id="el-c0ji1ot1"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "88.3392%", top: "35.0834%;" }} id="el-x2zm8zx7"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "47.3366%", top: "60.7306%;" }} id="el-4w5ttn97"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "49.6721%", top: "95.1978%;" }} id="el-lx8wbuvs"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "26.2229%", top: "11.523%;" }} id="el-ipr0hjav"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "34.216%", top: "72.9957%;" }} id="el-krd8yjgr"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "94.1261%", top: "11.9855%;" }} id="el-0oev3ksi"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "5.83058%", top: "24.8227%;" }} id="el-fm3ffado"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "9.83905%", top: "75.72%;" }} id="el-wtek6zzs"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "72.0564%", top: "18.9798%;" }} id="el-bbe024t3"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "70.8879%", top: "52.3183%;" }} id="el-6xuepmdj"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "72.1295%", top: "26.5398%;" }} id="el-1mg3x19z"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "93.0849%", top: "28.0154%;" }} id="el-gi1ezi8y"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "36.0638%", top: "87.0483%;" }} id="el-j0er7sqw"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "5.64909%", top: "69.2478%;" }} id="el-sp25p9kl"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "66.9465%", top: "80.9284%;" }} id="el-kjzxg1nh"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "32.8413%", top: "0.0973257%;" }} id="el-ro8lr2f9"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "39.5513%", top: "35.2584%;" }} id="el-f5isni6s"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "93.7431%", top: "54.4197%;" }} id="el-byv6sz8n"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "68.7809%", top: "94.5424%;" }} id="el-ods4zrwu"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "43.3438%", top: "2.7935%;" }} id="el-6dzkcguo"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "30.2944%", top: "80.9456%;" }} id="el-t8183j2h"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "28.1321%", top: "34.0752%;" }} id="el-gt1y73v8"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "28.0683%", top: "66.049%;" }} id="el-atx5y804"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "14.5668%", top: "82.9541%;" }} id="el-1w6qij5w"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "33.9835%", top: "11.2631%;" }} id="el-rxenqjzi"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "16.4705%", top: "49.0388%;" }} id="el-9wcyetuv"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "69.7459%", top: "30.3182%;" }} id="el-yf3gb90e"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "65.8303%", top: "2.83396%;" }} id="el-es06f27s"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "20.5138%", top: "38.6896%;" }} id="el-i5h383lq"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "56.8548%", top: "2.17005%;" }} id="el-3m689lcb"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "52.0769%", top: "45.6456%;" }} id="el-8nefpno6"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "61.8939%", top: "50.406%;" }} id="el-w4b9ys6d"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "17.7067%", top: "25.0052%;" }} id="el-ojsccm1k"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "79.3824%", top: "91.3237%;" }} id="el-zjmceepo"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "62.5549%", top: "5.71209%;" }} id="el-sm1p62vp"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "51.1779%", top: "33.3678%;" }} id="el-gi1jdq9z"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "38.2566%", top: "19.2359%;" }} id="el-47r7r58c"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "86.9757%", top: "32.4686%;" }} id="el-7yy6i62e"></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "48.0309%", top: "15.7329%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "87.4317%", top: "88.409%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "4.53703%", top: "9.63499%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "78.8392%", top: "62.2708%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "8.74904%", top: "30.7316%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "24.2287%", top: "93.742%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "47.3608%", top: "36.6616%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "99.1703%", top: "37.2663%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "23.4199%", top: "9.10503%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "48.3352%", top: "30.2259%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "37.2458%", top: "58.8144%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "32.2872%", top: "38.8782%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "71.9677%", top: "66.8536%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "33.3729%", top: "38.2951%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "73.2805%", top: "24.0448%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "86.8112%", top: "43.5554%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "87.5847%", top: "20.2305%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "87.4953%", top: "6.20639%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "80.6003%", top: "30.5378%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "60.7978%", top: "70.0618%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "5.05621%", top: "69.3274%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "49.9006%", top: "36.6912%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "24.7921%", top: "43.4841%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "67.2802%", top: "81.4343%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "32.731%", top: "11.3581%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "6.93202%", top: "11.3127%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "54.8663%", top: "98.1533%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "73.0812%", top: "25.5257%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "80.5359%", top: "84.5486%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "84.5697%", top: "91.3637%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "37.8784%", top: "49.0347%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "33.1418%", top: "70.6153%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "80.6329%", top: "5.47685%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "7.78568%", top: "45.6539%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "66.5915%", top: "61.4556%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "8.76336%", top: "21.2089%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "81.0879%", top: "62.1327%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "55.3247%", top: "89.4927%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "32.2882%", top: "52.2918%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "92.5381%", top: "31.5344%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "25.6737%", top: "3.83355%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "92.1053%", top: "59.2161%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "97.9656%", top: "84.8377%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "66.9893%", top: "16.7809%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "40.6183%", top: "91.8327%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "45.566%", top: "93.2923%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "57.2068%", top: "75.5214%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "75.9857%", top: "85.221%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "53.3283%", top: "8.4011%;" }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white pointer-events-none opacity-0"
                    style={{ left: "73.468%", top: "14.9164%;" }}></div>
            </section>
            <section id="pre-incubation" className="py-16 bg-gray-50 dark:bg-neutral-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a237e] dark:text-white">
                            Pre-Incubation Program
                        </h2>
                        <div className="w-20 h-1 bg-[#ff6f00] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                            Turning your innovative ideas into viable business models with guidance, mentorship,
                            and resources.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-6 text-[#1a237e] dark:text-white">Program Overview
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                The Pre-Incubation program is specifically designed for early-stage
                                entrepreneurs and students who
                                have an idea but need guidance in shaping it into a viable business model. This
                                foundational phase
                                is crucial for validating your concept before moving to full incubation.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-8">
                                Through personalized mentorship, workshops, and access to our network, we help
                                you refine your idea,
                                develop a prototype, and prepare for the challenges of building a successful
                                startup.
                            </p>

                            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff6f00]"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span><strong>Duration:</strong> 3–6 months</span>
                            </div>

                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff6f00]"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span><strong>Who Can Apply?</strong> Students, researchers, aspiring
                                    entrepreneurs with an
                                    innovative idea in any domain.</span>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden">
                            <div className="h-3 bg-blue-500"></div>
                            <div className="p-8">
                                <div className="flex justify-center mb-6">
                                    <div
                                        className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-center mb-6 text-[#1a237e] dark:text-white">
                                    What You Get</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <span
                                                className="flex items-center justify-center w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full">
                                                <svg className="w-4 h-4 text-green-600 dark:text-green-300"
                                                    fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="ml-3 text-gray-700 dark:text-gray-300"><span
                                            className="font-semibold">Idea
                                            Validation:</span> Comprehensive assessment of your idea's
                                            feasibility, scalability, and
                                            market potential through structured frameworks and analysis tools.
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <span
                                                className="flex items-center justify-center w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full">
                                                <svg className="w-4 h-4 text-green-600 dark:text-green-300"
                                                    fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="ml-3 text-gray-700 dark:text-gray-300"><span
                                            className="font-semibold">Mentorship &
                                            Guidance:</span> Regular interaction with industry experts,
                                            professors, and startup mentors
                                            to refine your business concept and strategy.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <span
                                                className="flex items-center justify-center w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full">
                                                <svg className="w-4 h-4 text-green-600 dark:text-green-300"
                                                    fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="ml-3 text-gray-700 dark:text-gray-300"><span
                                            className="font-semibold">Prototype
                                            Development:</span> Technical assistance and resources to
                                            develop a proof of concept (PoC)
                                            or minimum viable product (MVP).</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <span
                                                className="flex items-center justify-center w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full">
                                                <svg className="w-4 h-4 text-green-600 dark:text-green-300"
                                                    fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="ml-3 text-gray-700 dark:text-gray-300"><span
                                            className="font-semibold">Workshops &
                                            Training:</span> Hands-on sessions on business model
                                            development, pitching, market research,
                                            and intellectual property (IP) protection.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <span
                                                className="flex items-center justify-center w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full">
                                                <svg className="w-4 h-4 text-green-600 dark:text-green-300"
                                                    fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="ml-3 text-gray-700 dark:text-gray-300"><span
                                            className="font-semibold">Networking
                                            Opportunities:</span> Connecting with investors, incubators, and
                                            fellow entrepreneurs for
                                            collaboration and knowledge sharing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden p-8 mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-[#1a237e] dark:text-white text-center">Program
                            Structure</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                                        <span className="text-white font-bold">1</span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-[#1a237e] dark:text-white">Ideation &
                                        Validation</h4>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    The first month focuses on refining your idea and validating its market
                                    potential through:
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-[#ff6f00] mr-2">•</span>
                                        <span>Idea assessment workshops</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#ff6f00] mr-2">•</span>
                                        <span>Market research methodology</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#ff6f00] mr-2">•</span>
                                        <span>Competitive analysis sessions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#ff6f00] mr-2">•</span>
                                        <span>Value proposition design</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-10 h-10 rounded-full bg-[#1a237e] flex items-center justify-center mr-3">
                                        <span className="text-white font-bold">2</span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-[#1a237e] dark:text-white">Business
                                        Modeling</h4>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    The next 1-2 months help you develop a solid business model through:
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-[#ff6f00] mr-2">•</span>
                                        <span>Business model canvas training</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#ff6f00] mr-2">•</span>
                                        <span>Revenue model development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#ff6f00] mr-2">•</span>
                                        <span>Customer acquisition strategies</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#ff6f00] mr-2">•</span>
                                        <span>Financial modeling basics</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-10 h-10 rounded-full bg-[#ff6f00] flex items-center justify-center mr-3">
                                        <span className="text-white font-bold">3</span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-[#1a237e] dark:text-white">MVP &
                                        Pitching</h4>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                                    The final 1-3 months focus on developing your prototype and preparing to
                                    pitch:
                                </p>
                                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-[#ff6f00] mr-2">•</span>
                                        <span>MVP development support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#ff6f00] mr-2">•</span>
                                        <span>User testing methodology</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#ff6f00] mr-2">•</span>
                                        <span>Pitch deck creation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#ff6f00] mr-2">•</span>
                                        <span>Presentation & pitching skills</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="incubation" className="py-16 bg-white dark:bg-neutral-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a237e] dark:text-white">
                            Incubation Program</h2>
                        <div className="w-20 h-1 bg-[#ff6f00] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                            Building and scaling your startup with dedicated resources, expert mentorship, and
                            strategic support.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 mb-16">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div
                                className="bg-[#1a237e] dark:bg-[#1a237e] rounded-xl shadow-lg p-8 text-white h-full">
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-[#ff6f00]"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    Program Overview
                                </h3>
                                <div className="space-y-6 text-gray-100">
                                    <p>
                                        Once you've validated your idea and developed a prototype through our
                                        Pre-Incubation program or
                                        independently, the Incubation phase provides a structured environment to
                                        build and scale your
                                        business.
                                    </p>
                                    <p>
                                        Our comprehensive 6-12 month program offers dedicated workspace,
                                        in-depth mentorship, funding
                                        access, and strategic guidance to transform your prototype into a
                                        market-ready product with
                                        sustainable business growth.
                                    </p>
                                    <p>
                                        This phase focuses on refining your business model, building a strong
                                        team, developing
                                        go-to-market strategies, and preparing for investment to achieve
                                        significant market traction.
                                    </p>

                                    <div className="flex items-center text-gray-200 mt-8">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2 text-[#ff6f00]" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span><strong>Duration:</strong> 6–12 months</span>
                                    </div>

                                    <div className="flex items-center text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2 text-[#ff6f00]" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span><strong>Who Can Apply?</strong> Startups with a working prototype
                                            or MVP, looking for
                                            market validation and early traction.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h3 className="text-2xl font-bold mb-6 text-[#1a237e] dark:text-white">Key Benefits</h3>
                            <div className="space-y-6">
                                <div
                                    className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 text-3xl">
                                            <span className="inline-block">🏢</span>
                                        </div>
                                        <div className="ml-4">
                                            <h4
                                                className="text-lg font-semibold text-[#1a237e] dark:text-white mb-2">
                                                Dedicated Workspace</h4>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Access to state-of-the-art co-working spaces, meeting rooms,
                                                high-speed internet, and
                                                specialized labs tailored to your startup's needs. Our modern
                                                facilities are designed to
                                                foster creativity and productivity.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 text-3xl">
                                            <span className="inline-block">🎓</span>
                                        </div>
                                        <div className="ml-4">
                                            <h4
                                                className="text-lg font-semibold text-[#1a237e] dark:text-white mb-2">
                                                Mentorship & Expert
                                                Guidance</h4>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                One-on-one mentoring from industry leaders, investors, and
                                                domain experts who provide
                                                personalized guidance on strategy, technology, market fit, and
                                                scaling operations to
                                                accelerate your startup's growth.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 text-3xl">
                                            <span className="inline-block">💰</span>
                                        </div>
                                        <div className="ml-4">
                                            <h4
                                                className="text-lg font-semibold text-[#1a237e] dark:text-white mb-2">
                                                Funding & Investment
                                                Access</h4>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Support in securing seed funding, grants, and investor
                                                connections through our extensive
                                                network of angel investors, venture capitalists, and funding
                                                agencies to fuel your startup's
                                                growth trajectory.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div
                            className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 text-3xl">
                                    <span className="inline-block">⚙️</span>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-[#1a237e] dark:text-white mb-2">
                                        Product Development &
                                        Testing</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Technical assistance in refining your product, integrating advanced
                                        technologies, and conducting
                                        market testing with real users to improve your offering based on
                                        feedback and analytics.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 text-3xl">
                                    <span className="inline-block">📢</span>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-[#1a237e] dark:text-white mb-2">
                                        Go-to-Market Strategy</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Comprehensive support in developing effective branding, marketing
                                        campaigns, distribution
                                        channels, and business registration to help your startup gain visibility
                                        and market share.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 text-3xl">
                                    <span className="inline-block">🤝</span>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-[#1a237e] dark:text-white mb-2">
                                        Partnership & Collaboration
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Access to valuable partnerships with industry players, research labs,
                                        and technology partners
                                        that can accelerate product development, provide market access, and
                                        create growth opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-[#1a237e] dark:text-white text-center">Program
                            Structure</h3>

                        <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl p-8 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xl font-semibold mb-6 text-[#1a237e] dark:text-white">
                                        Program Phases</h4>

                                    <div className="mb-8">
                                        <div className="flex items-center mb-3">
                                            <div
                                                className="w-10 h-10 rounded-full bg-[#1a237e] flex items-center justify-center mr-3">
                                                <span className="text-white font-bold">1</span>
                                            </div>
                                            <h5 className="text-lg font-medium text-[#1a237e] dark:text-white">
                                                Onboarding & Strategy (Month
                                                1-2)</h5>
                                        </div>
                                        <ul className="ml-12 space-y-2 text-gray-700 dark:text-gray-300">
                                            <li className="flex items-start">
                                                <span className="text-[#ff6f00] mr-2">•</span>
                                                <span>Workspace setup and resource allocation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#ff6f00] mr-2">•</span>
                                                <span>Business model refinement</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#ff6f00] mr-2">•</span>
                                                <span>Mentor matching and roadmap creation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#ff6f00] mr-2">•</span>
                                                <span>IP strategy and legal structuring</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex items-center mb-3">
                                            <div
                                                className="w-10 h-10 rounded-full bg-[#4a148c] flex items-center justify-center mr-3">
                                                <span className="text-white font-bold">2</span>
                                            </div>
                                            <h5 className="text-lg font-medium text-[#1a237e] dark:text-white">
                                                Product & Market (Month 3-6)
                                            </h5>
                                        </div>
                                        <ul className="ml-12 space-y-2 text-gray-700 dark:text-gray-300">
                                            <li className="flex items-start">
                                                <span className="text-[#ff6f00] mr-2">•</span>
                                                <span>Product development and refinement</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#ff6f00] mr-2">•</span>
                                                <span>User testing and feedback integration</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#ff6f00] mr-2">•</span>
                                                <span>Marketing strategy and branding</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#ff6f00] mr-2">•</span>
                                                <span>Initial customer acquisition</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="flex items-center mb-3">
                                            <div
                                                className="w-10 h-10 rounded-full bg-[#ff6f00] flex items-center justify-center mr-3">
                                                <span className="text-white font-bold">3</span>
                                            </div>
                                            <h5 className="text-lg font-medium text-[#1a237e] dark:text-white">
                                                Growth & Investment (Month
                                                7-12)</h5>
                                        </div>
                                        <ul className="ml-12 space-y-2 text-gray-700 dark:text-gray-300">
                                            <li className="flex items-start">
                                                <span className="text-[#ff6f00] mr-2">•</span>
                                                <span>Business scaling strategies</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#ff6f00] mr-2">•</span>
                                                <span>Investment preparation and pitching</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#ff6f00] mr-2">•</span>
                                                <span>Strategic partnerships development</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#ff6f00] mr-2">•</span>
                                                <span>Preparation for acceleration or Series A</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-6 text-[#1a237e] dark:text-white">
                                        Program Deliverables</h4>

                                    <div className="space-y-6">
                                        <div className="bg-white dark:bg-neutral-900 p-5 rounded-lg shadow-md">
                                            <h5 className="text-lg font-medium mb-3 text-[#1a237e] dark:text-white">
                                                Regular Mentorship
                                                Sessions</h5>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Bi-weekly one-on-one sessions with domain experts and monthly
                                                progress reviews with our
                                                expert panel to ensure your startup is on the right track.
                                            </p>
                                        </div>

                                        <div className="bg-white dark:bg-neutral-900 p-5 rounded-lg shadow-md">
                                            <h5 className="text-lg font-medium mb-3 text-[#1a237e] dark:text-white">
                                                Specialized Workshops</h5>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Access to workshops covering technical skills, business
                                                development, financial management,
                                                legal compliance, and investor pitching.
                                            </p>
                                        </div>

                                        <div className="bg-white dark:bg-neutral-900 p-5 rounded-lg shadow-md">
                                            <h5 className="text-lg font-medium mb-3 text-[#1a237e] dark:text-white">
                                                Networking Events</h5>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Exclusive access to industry meetups, investor showcases, demo
                                                days, and networking events
                                                to expand your connections and market reach.
                                            </p>
                                        </div>

                                        <div className="bg-white dark:bg-neutral-900 p-5 rounded-lg shadow-md">
                                            <h5 className="text-lg font-medium mb-3 text-[#1a237e] dark:text-white">
                                                Investment Preparation
                                            </h5>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Assistance in developing investment materials, financial
                                                projections, and pitch decks, plus
                                                connections to potential investors matching your startup
                                                profile.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-[#1a237e] dark:text-white text-center">Program
                            Outcomes</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div
                                className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div
                                    className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold mb-2 text-[#1a237e] dark:text-white">
                                    Market-Ready Product</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Transform your prototype into a fully developed, market-validated product
                                    that addresses real
                                    customer needs.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div
                                    className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold mb-2 text-[#1a237e] dark:text-white">Strong
                                    Team Formation</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Build and develop a cohesive, talented team with the skills needed to drive
                                    your startup forward.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div
                                    className="mx-auto w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold mb-2 text-[#1a237e] dark:text-white">Revenue
                                    Traction</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Develop sustainable revenue models and gain initial paying customers to
                                    demonstrate market
                                    validation.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div
                                    className="mx-auto w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold mb-2 text-[#1a237e] dark:text-white">Investment
                                    Readiness</h4>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Position your startup to attract seed or Series A funding with a compelling
                                    pitch and strong
                                    business metrics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="acceleration" className="py-16 bg-gray-50 dark:bg-neutral-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a237e] dark:text-white">
                            Acceleration Program</h2>
                        <div className="w-20 h-1 bg-[#ff6f00] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                            Scaling your startup to new heights with strategic growth initiatives, advanced
                            mentorship, and global
                            market exposure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold mb-6 text-[#1a237e] dark:text-white">Program
                                    Overview</h3>
                                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                                    <p>
                                        The Acceleration Program is specifically tailored for startups that have
                                        already gained initial
                                        traction and are ready to expand their market presence. This intensive
                                        program helps promising
                                        ventures scale rapidly, refine their business models, and prepare for
                                        significant funding
                                        rounds.
                                    </p>
                                    <p>
                                        Unlike our Pre-Incubation and Incubation programs which focus on idea
                                        validation and early-stage
                                        growth, the Acceleration program is designed for established startups
                                        looking to achieve
                                        exponential growth and market expansion.
                                    </p>
                                    <p>
                                        Our 3-6 month program provides specialized resources, advanced
                                        mentorship from successful
                                        entrepreneurs and investors, and strategic connections to help your
                                        startup reach its full
                                        potential in the global marketplace.
                                    </p>
                                </div>

                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div
                                        className="flex items-center bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 mr-3 text-[#ff6f00]" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <span
                                                className="text-sm text-gray-600 dark:text-gray-400">Duration</span>
                                            <p className="font-semibold text-[#1a237e] dark:text-white">3-6 months
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 mr-3 text-[#ff6f00]" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <div>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">Who Can
                                                Apply?</span>
                                            <p className="font-semibold text-[#1a237e] dark:text-white">Startups
                                                with revenue & traction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-[#1a237e] text-white rounded-xl shadow-lg p-8 h-full">
                                <h3 className="text-xl font-bold mb-6 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#ff6f00]"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    Acceleration Highlights
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <div
                                            className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center mr-4">
                                            <span className="text-[#ff6f00] text-2xl font-bold">3x</span>
                                        </div>
                                        <div>
                                            <p className="font-medium">Average Growth</p>
                                            <p className="text-sm text-gray-300">For startups during acceleration
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div
                                            className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center mr-4">
                                            <span className="text-[#ff6f00] text-2xl font-bold">85%</span>
                                        </div>
                                        <div>
                                            <p className="font-medium">Success Rate</p>
                                            <p className="text-sm text-gray-300">For securing next round funding</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div
                                            className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center mr-4">
                                            <span className="text-[#ff6f00] text-2xl font-bold">50+</span>
                                        </div>
                                        <div>
                                            <p className="font-medium">Investor Network</p>
                                            <p className="text-sm text-gray-300">Connected VCs and angel investors
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div
                                            className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center mr-4">
                                            <span className="text-[#ff6f00] text-2xl font-bold">20+</span>
                                        </div>
                                        <div>
                                            <p className="font-medium">Global Partners</p>
                                            <p className="text-sm text-gray-300">International market access</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-center text-[#1a237e] dark:text-white">Key Focus
                            Areas</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden">
                                <div className="h-2 bg-[#ff6f00]"></div>
                                <div className="p-6">
                                    <div className="flex items-start mb-4">
                                        <div className="flex-shrink-0 text-3xl">
                                            <span className="inline-block">📈</span>
                                        </div>
                                        <h4 className="ml-3 text-lg font-semibold text-[#1a237e] dark:text-white">
                                            Market Expansion & Scaling
                                        </h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Customer acquisition strategies</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Revenue growth models</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Geographic expansion planning</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Scalable operations framework</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden">
                                <div className="h-2 bg-[#1a237e]"></div>
                                <div className="p-6">
                                    <div className="flex items-start mb-4">
                                        <div className="flex-shrink-0 text-3xl">
                                            <span className="inline-block">🚀</span>
                                        </div>
                                        <h4 className="ml-3 text-lg font-semibold text-[#1a237e] dark:text-white">
                                            Advanced Mentorship</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Industry-specific expert guidance</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Founder-to-founder mentoring</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Leadership development</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Strategic business consulting</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden">
                                <div className="h-2 bg-[#4a148c]"></div>
                                <div className="p-6">
                                    <div className="flex items-start mb-4">
                                        <div className="flex-shrink-0 text-3xl">
                                            <span className="inline-block">💲</span>
                                        </div>
                                        <h4 className="ml-3 text-lg font-semibold text-[#1a237e] dark:text-white">
                                            Investor Readiness</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Pitch deck refinement</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Financial modeling for growth</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Investor connect sessions</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Due diligence preparation</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden">
                                <div className="h-2 bg-blue-600"></div>
                                <div className="p-6">
                                    <div className="flex items-start mb-4">
                                        <div className="flex-shrink-0 text-3xl">
                                            <span className="inline-block">🌎</span>
                                        </div>
                                        <h4 className="ml-3 text-lg font-semibold text-[#1a237e] dark:text-white">
                                            Global Exposure</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>International market access</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Demo days & startup events</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Industry conference participation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Global partnership opportunities</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden">
                                <div className="h-2 bg-green-600"></div>
                                <div className="p-6">
                                    <div className="flex items-start mb-4">
                                        <div className="flex-shrink-0 text-3xl">
                                            <span className="inline-block">💡</span>
                                        </div>
                                        <h4 className="ml-3 text-lg font-semibold text-[#1a237e] dark:text-white">
                                            Legal & Compliance</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Corporate structuring</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Regulatory compliance</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>IP protection strategy</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">•</span>
                                            <span>Contract & partnership legalities</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-center text-[#1a237e] dark:text-white">Program
                            Schedule</h3>

                        <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                <div
                                    className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="w-10 h-10 rounded-full bg-[#ff6f00] flex items-center justify-center mr-3">
                                            <span className="text-white font-bold">1</span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-[#1a237e] dark:text-white">Month
                                            1: Assessment & Strategy
                                        </h4>
                                    </div>
                                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Comprehensive business assessment</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Growth bottleneck identification</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Strategic plan development</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Mentor matching & goal setting</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Expert roundtable sessions</span>
                                        </li>
                                    </ul>
                                </div>

                                <div
                                    className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="w-10 h-10 rounded-full bg-[#1a237e] flex items-center justify-center mr-3">
                                            <span className="text-white font-bold">2</span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-[#1a237e] dark:text-white">Month
                                            2-3: Execution & Growth
                                        </h4>
                                    </div>
                                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Implementation of growth strategies</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Market expansion initiatives</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Sales & marketing acceleration</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Weekly progress tracking</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Investor preparation workshops</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="w-10 h-10 rounded-full bg-[#4a148c] flex items-center justify-center mr-3">
                                            <span className="text-white font-bold">3</span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-[#1a237e] dark:text-white">Month
                                            4-6: Funding & Scale</h4>
                                    </div>
                                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Investor roadshow preparation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Demo day presentation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>One-on-one investor meetings</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>International exposure events</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#ff6f00] mr-2">➤</span>
                                            <span>Long-term growth planning</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-center text-[#1a237e] dark:text-white">Expected
                            Outcomes</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div
                                className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <div
                                    className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold mb-2 text-[#1a237e] dark:text-white">2-5x
                                    Revenue Growth</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Significant increase in revenue through optimized acquisition strategies and
                                    market expansion.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <div
                                    className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold mb-2 text-[#1a237e] dark:text-white">Successful
                                    Fundraising</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Secure Series A or strategic growth funding to fuel the next phase of your
                                    startup's expansion.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <div
                                    className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold mb-2 text-[#1a237e] dark:text-white">Market
                                    Expansion</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Establish presence in new markets and customer segments, both nationally and
                                    internationally.
                                </p>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <div
                                    className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold mb-2 text-[#1a237e] dark:text-white">Strategic
                                    Partnerships</h4>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    Develop valuable industry alliances and partnerships that accelerate growth
                                    and market access.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-r from-[#ff6f00] to-orange-600 rounded-xl p-8 text-white text-center shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Business?</h3>
                        <p className="mb-8 max-w-3xl mx-auto">
                            If your startup is already generating revenue and you're looking to scale rapidly,
                            our Acceleration
                            program provides the expertise, connections, and resources you need to reach the
                            next level.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#application-process"
                                className="px-8 py-3 bg-[#1a237e] text-white rounded-md font-medium hover:bg-[#4a148c] transition-all duration-300">
                                Apply
                            </a>
                            <a href="#"
                                className="px-8 py-3 bg-transparent border-2 border-white rounded-md font-medium hover:bg-white hover:text-[#ff6f00] transition-all duration-300">
                                Explore All Program
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Incubation;