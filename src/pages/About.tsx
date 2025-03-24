import { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";

const About = () => {
  const [activeTab, setActiveTab] = useState("vit");
  const [counters, setCounters] = useState({
    startups: 0,
    entrepreneurs: 0,
    partners: 0,
    mentors: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const statsElement = document.querySelector(".stats-container");
      if (statsElement && statsElement.getBoundingClientRect().top < window.innerHeight * 0.75) {
        setCounters({
          startups: 50,
          entrepreneurs: 200,
          partners: 25,
          mentors: 15,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='min-w-[100vw]'>
      <Header />
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -mt-20 -mr-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full opacity-30 -mb-20 -ml-20"></div>

        <div className="container mx-auto mt-10 px-4 relative z-10">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">About <span className="text-blue-600">Our
              Innovation Hub</span></h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Discover the vibrant ecosystem where
              groundbreaking ideas transform into successful ventures</p>
          </div>

          <div className="tab-container mb-16">
            <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
              <button
                className={`tab-button px-6 py-3 font-medium text-lg focus:outline-none ${activeTab === "vit" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
                  }`}
                onClick={() => setActiveTab("vit")}
              >
                About VIT Bhopal
              </button>
              <button
                className={`tab-button px-6 py-3 font-medium text-lg focus:outline-none ${activeTab === "tbi" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
                  }`}
                onClick={() => setActiveTab("tbi")}
              >
                About TBI Bhopal
              </button>
            </div>

            <div className="tab-content-container">

              {activeTab === "vit" && (
                <div className="tab-content active animate__animated animate__fadeIn" id="vit-content">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate__animated animate__fadeInLeft">
                      <h3 className="text-2xl font-bold text-neutral-800 mb-4">VIT Bhopal University</h3>
                      <p className="text-neutral-700 mb-4">VIT Bhopal University, envisioned with a new global outlook
                        will empower its aspirants to attain excellence through learning. The comprehensive teaching
                        methodology designed by the University, redeﬁnes the approach to learning, educating and
                        building knowledge-based societies in the country.</p>
                      <p className="text-neutral-700 mb-6">Collaboration with reputed national and international
                        organisations and strategic partnerships with universities around the world are being
                        established, to prepare a globally competent generation of professionals.</p>

                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center bg-blue-50 px-4 py-3 rounded-lg">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600"
                              viewBox="0 0 20 20" fill="currentColor">
                              <path
                                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                          </div>
                          <span className="text-neutral-700">Global Educational Approach</span>
                        </div>
                        <div className="flex items-center bg-purple-50 px-4 py-3 rounded-lg">
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600"
                              viewBox="0 0 20 20" fill="currentColor">
                              <path
                                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                          </div>
                          <span className="text-neutral-700">Strategic Partnerships</span>
                        </div>
                        <div className="flex items-center bg-green-50 px-4 py-3 rounded-lg">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600"
                              viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd"
                                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-neutral-700">Innovative Curriculum</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative animate__animated animate__fadeInRight">
                      <div
                        className="rounded-2xl overflow-hidden border-4 border-blue-100 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div
                          className="aspect-video bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center p-6">
                          <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-4">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="1" strokeLinecap="round"
                                strokeLinejoin="round" className="text-blue-500">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                              </svg>
                            </div>
                            <h4 className="text-xl font-bold text-neutral-700 mb-2">VIT Bhopal Campus</h4>
                            <p className="text-neutral-600">A center of excellence for innovation and education</p>
                          </div>
                        </div>
                      </div>

                      <div
                        className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-200 rounded-full opacity-70 animate-pulse">
                      </div>
                      <div
                        className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-lg opacity-70 animate-ping">
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "tbi" && (
                <div className="tab-content active animate__animated animate__fadeIn" id="tbi-content">

                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative">
                      <div
                        className="rounded-2xl overflow-hidden border-4 border-purple-100 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div
                          className="aspect-video bg-gradient-to-r from-purple-50 to-blue-50 flex items-center justify-center p-6">
                          <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-4">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="1" strokeLinecap="round"
                                strokeLinejoin="round" className="text-purple-500">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                              </svg>
                            </div>
                            <h4 className="text-xl font-bold text-neutral-700 mb-2">TBI Innovation Center</h4>
                            <p className="text-neutral-600">Where ideas transform into impactful ventures</p>
                          </div>
                        </div>
                      </div>

                      <div
                        className="absolute -top-6 -left-6 w-20 h-20 bg-green-200 rounded-full opacity-70 animate-pulse">
                      </div>
                      <div
                        className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-200 rounded-lg opacity-70 animate-ping">
                      </div>
                    </div>

                    <div className="order-1 md:order-2">
                      <h3 className="text-2xl font-bold text-neutral-800 mb-4">Technology Business Incubation Centre
                      </h3>
                      <p className="text-neutral-700 mb-4">The Innovation, Incubation & Entrepreneurship Centre at VIT
                        Bhopal serves as a catalyst for innovation, incubation, and entrepreneurship. Through its
                        comprehensive support programs/activities, empowers students and faculty members to unleash
                        their creative potential, transform ideas into reality, and contribute to the growth of the
                        start-up ecosystem.</p>
                      <p className="text-neutral-700 mb-6">With its focus on interdisciplinary collaboration, industry
                        partnerships, and nurturing entrepreneurial talent, we continue to be a driving force behind
                        the entrepreneurial success stories emerging from VIT Bhopal.</p>

                      <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div
                          className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 hover:shadow-md transition-shadow">
                          <div className="text-purple-600 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-lg text-neutral-800 mb-1">Innovation Support</h4>
                          <p className="text-sm text-neutral-600">Nurturing creative ideas from concept to prototype</p>
                        </div>

                        <div
                          className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 hover:shadow-md transition-shadow">
                          <div className="text-blue-600 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-lg text-neutral-800 mb-1">Incubation Facilities</h4>
                          <p className="text-sm text-neutral-600">State-of-the-art workspace and resources</p>
                        </div>

                        <div
                          className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 hover:shadow-md transition-shadow">
                          <div className="text-green-600 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-lg text-neutral-800 mb-1">Mentorship</h4>
                          <p className="text-sm text-neutral-600">Guidance from industry experts and entrepreneurs</p>
                        </div>

                        <div
                          className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 hover:shadow-md transition-shadow">
                          <div className="text-yellow-600 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-lg text-neutral-800 mb-1">Funding Access</h4>
                          <p className="text-sm text-neutral-600">Connections to investors and funding opportunities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className="stats-container py-12 px-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl animate__animated animate__fadeInUp">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="stat-counter text-4xl md:text-5xl font-bold text-white mb-2" data-target="50">{counters.startups}</div>
                <div className="uppercase text-xs md:text-sm font-medium text-blue-100">Startups Incubated</div>
              </div>
              <div className="text-center">
                <div className="stat-counter text-4xl md:text-5xl font-bold text-white mb-2" data-target="200">{counters.entrepreneurs}</div>
                <div className="uppercase text-xs md:text-sm font-medium text-blue-100">Entrepreneurs Supported</div>
              </div>
              <div className="text-center">
                <div className="stat-counter text-4xl md:text-5xl font-bold text-white mb-2" data-target="25">{counters.partners}</div>
                <div className="uppercase text-xs md:text-sm font-medium text-blue-100">Industry Partners</div>
              </div>
              <div className="text-center">
                <div className="stat-counter text-4xl md:text-5xl font-bold text-white mb-2" data-target="15">{counters.mentors}</div>
                <div className="uppercase text-xs md:text-sm font-medium text-blue-100">Mentors Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="vision-mission" className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob">
          </div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-blob animation-delay-2000">
          </div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-blob animation-delay-4000">
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Vision & Mission</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Guiding principles that drive our innovation
              ecosystem forward</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              className="vision-card bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 md:p-12 rounded-2xl shadow-xl border border-neutral-700 hover:border-blue-500 transition-all duration-500 transform hover:-translate-y-2 animate__animated animate__fadeInLeft">
              <div className="flex justify-center mb-8">
                <div
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-center mb-6 text-gradient-blue">Our Vision</h3>

              <div className="space-y-6">
                <div className="vision-item flex hover:bg-neutral-800/50 p-4 rounded-xl transition-all duration-300">
                  <div className="vision-icon mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300">To be the premier hub of innovation and entrepreneurship in Central
                      India, recognized for nurturing groundbreaking ideas that address societal challenges.</p>
                  </div>
                </div>

                <div className="vision-item flex hover:bg-neutral-800/50 p-4 rounded-xl transition-all duration-300">
                  <div className="vision-icon mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300">To foster a vibrant ecosystem where innovation thrives and
                      entrepreneurial talent evolves into industry leaders.</p>
                  </div>
                </div>

                <div className="vision-item flex hover:bg-neutral-800/50 p-4 rounded-xl transition-all duration-300">
                  <div className="vision-icon mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300">To be a catalyst in transforming India's innovation landscape by
                      creating globally competitive startups.</p>
                  </div>
                </div>
                <div className="vision-item flex hover:bg-neutral-800/50 p-2 rounded-xl transition-all duration-300">
                  <div className="vision-icon mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300"></p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mission-card bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 md:p-12 rounded-2xl shadow-xl border border-neutral-700 hover:border-purple-500 transition-all duration-500 transform hover:-translate-y-2 animate__animated animate__fadeInRight">
              <div className="flex justify-center mb-8">
                <div
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-center mb-6 text-gradient-purple">Our Mission</h3>

              <div className="space-y-6">
                <div className="mission-item flex hover:bg-neutral-800/50 p-4 rounded-xl transition-all duration-300">
                  <div className="mission-icon mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300">To provide a comprehensive support system that nurtures innovative
                      ideas from conception to successful commercialization.</p>
                  </div>
                </div>

                <div className="mission-item flex hover:bg-neutral-800/50 p-4 rounded-xl transition-all duration-300">
                  <div className="mission-icon mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300">To foster an interdisciplinary approach to problem-solving and
                      innovation through collaboration across academic departments and industry sectors.</p>
                  </div>
                </div>

                <div className="mission-item flex hover:bg-neutral-800/50 p-4 rounded-xl transition-all duration-300">
                  <div className="mission-icon mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300">To develop a robust network of mentors, investors, and industry
                      partners that provides startups with the resources needed for sustainable growth.</p>
                  </div>
                </div>

                <div className="mission-item flex hover:bg-neutral-800/50 p-4 rounded-xl transition-all duration-300">
                  <div className="mission-icon mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300">To create an entrepreneurial mindset among students and faculty
                      through education, training, and hands-on experiences in innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 animate__animated animate__fadeIn">Our Core Values
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div
                className="core-value p-6 bg-neutral-800/50 rounded-xl hover:bg-neutral-800 transition-all duration-300 hover:transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform -rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 innovation-text">Innovation</h4>
                <p className="text-gray-400 text-sm">Embracing creative thinking and novel approaches to solve complex
                  problems</p>
              </div>

              <div
                className="core-value p-6 bg-neutral-800/50 rounded-xl hover:bg-neutral-800 transition-all duration-300 hover:transform hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 collaboration-text">Collaboration</h4>
                <p className="text-gray-400 text-sm">Building strong partnerships across disciplines and industries
                </p>
              </div>

              <div
                className="core-value p-6 bg-neutral-800/50 rounded-xl hover:bg-neutral-800 transition-all duration-300 hover:transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform -rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 integrity-text">Integrity</h4>
                <p className="text-gray-400 text-sm">Maintaining the highest ethical standards in all our endeavors
                </p>
              </div>

              <div
                className="core-value p-6 bg-neutral-800/50 rounded-xl hover:bg-neutral-800 transition-all duration-300 hover:transform hover:scale-105 animate__animated animate__fadeIn animate__delay-4s">
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center transform rotate-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 sustainability-text">Sustainability</h4>
                <p className="text-gray-400 text-sm">Creating solutions with long-term positive impact on society</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

            <div
              className="bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="p-6">
                <div className="w-20 h-20 rounded-full bg-[#1a237e] mb-4 flex items-center justify-center mx-auto">
                  <img src="/images/Ms. Kadhambari S. Viswanathan.jpg" alt="" className="h-full w-full rounded-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-[#1a237e] dark:text-white">Message from Assistant Vice President</h3>
                <div className="h-1 w-12 bg-[#ff6f00] mx-auto mb-4"></div>
                <div className="text-gray-700 dark:text-gray-300 text-sm space-y-3">
                  <p>At VIT Bhopal University, we are dedicated to cultivating an ecosystem where innovation, research, and entrepreneurship converge to create transformative impact. The establishment of the Technology Business Incubation Centre (TBI) is a significant step towards empowering young minds to bring their visionary ideas to life and shape the future of technology-driven enterprises.</p>
                  <p>TBI VIT Bhopal is not just an incubation center; it is a hub of opportunities where aspiring entrepreneurs, researchers, and industry leaders can collaborate, innovate, and scale their ventures with access to world-class mentorship, funding opportunities, and state-of-the-art infrastructure. By bridging the gap between academia and industry, we aim to nurture talent that drives sustainable progress and technological advancements with global relevance.</p>
                  <p>I encourage students, faculty, and innovators to take full advantage of this initiative, leveraging the resources and support available to turn their ideas into impactful solutions. Together, we can foster an entrepreneurial culture that propels VIT Bhopal to the forefront of innovation and business excellence.</p>
                  <p>Best wishes to the entire TBI VIT Bhopal team in their journey to shape the next generation of trailblazing entrepreneurs!</p>
                </div>
              </div>
            </div>
            <div
              className="bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="p-6">
                <div className="w-20 h-20 rounded-full bg-[#1a237e] mb-4 flex items-center justify-center mx-auto">
                  <img src="/images/Dr. T. B. Sridharan.jpeg" alt="Dr. T. B. Sridharan" className="h-full w-full rounded-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-[#1a237e] dark:text-white">Message From
                  Pro-Chancellor</h3>
                <div className="h-1 w-12 bg-[#ff6f00] mx-auto mb-4"></div>
                <div className="text-gray-700 dark:text-gray-300 text-sm space-y-3">
                  <p>At VIT Bhopal University, we are committed to fostering a culture of innovation and
                    entrepreneurship that empowers aspiring founders, researchers, and technologists to transform
                    ground-breaking ideas into impactful ventures.</p>
                  <p>As a globally oriented institution, we believe in nurturing talent that not only contributes to
                    economic growth but also develops solutions addressing global challenges with sustainability and
                    technological excellence.</p>
                  <p>I invite students, Faculty, researchers, and industry leaders to collaborate with us in shaping
                    the future of entrepreneurship.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-12">
            <div
              className="bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="p-6">
                <div className="w-20 h-20 rounded-full bg-[#1a237e] mb-4 flex items-center justify-center mx-auto">
                  <img src="/images/Dr. K. K. Nair.jpg" alt="Dr. K. K. Nair" className="h-full w-full rounded-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-[#1a237e] dark:text-white">Message From the
                  Registrar</h3>
                <div className="h-1 w-12 bg-[#ff6f00] mx-auto mb-4"></div>
                <div className="text-gray-700 dark:text-gray-300 text-sm space-y-3">
                  <p>It is with great enthusiasm that I extend my best wishes to the Technology Business Incubation
                    Centre (TBI), VIT Bhopal, as it embarks on its journey to foster innovation and
                    entrepreneurship.</p>
                  <p>TBI will serve as a catalyst for breakthrough innovations, enabling students, researchers, and
                    startups to develop cutting-edge solutions that address real-world challenges.</p>
                  <p>Wishing the entire team at TBI VIT Bhopal great success in building a thriving ecosystem of
                    innovation and entrepreneurship!</p>
                </div>
              </div>
            </div>

            <div
              className="bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="p-6">
                <div className="w-20 h-20 rounded-full bg-[#1a237e] mb-4 flex items-center justify-center mx-auto">
                  <img src="/images/Dr. Hemraj Shobharam Lamkuche.jpg" alt="" className="h-full w-full rounded-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-[#1a237e] dark:text-white">Message From the
                  Director</h3>
                <div className="h-1 w-12 bg-[#ff6f00] mx-auto mb-4"></div>
                <div className="text-gray-700 dark:text-gray-300 text-sm space-y-3">
                  <p>Innovation and entrepreneurship are the driving forces behind technological and economic
                    transformation. At TBI VIT Bhopal, our mission is to empower visionary entrepreneurs,
                    researchers, and students to turn ground-breaking ideas into scalable ventures.</p>
                  <p>As the Director of TBI, I am committed to fostering an environment that encourages disruptive
                    innovation, problem-solving, and sustainable business growth.</p>
                  <p>Join us in shaping the future of technology, entrepreneurship, and societal impact. Together,
                    let's build a thriving startup ecosystem that makes a difference!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center animate__animated animate__fadeIn">
            <div className="inline-block mb-8">
              <div className="px-6 py-3 bg-blue-600 rounded-full text-white font-medium animate-pulse">
                Join our innovation community
              </div>
            </div>

            <h3 className="text-2xl md:text-4xl font-bold mb-6">Ready to Transform Your Ideas into Reality?</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">Be part of our vibrant ecosystem dedicated to
              nurturing innovation and entrepreneurship</p>

            <a href="#apply"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Start Your Journey Now
            </a>
          </div>
        </div>
      </section>
      <section id="objectives" className="py-20 bg-neutral-900 text-white overflow-hidden relative">
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob">
        </div>
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000">
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Strategic Objectives</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Driving innovation and entrepreneurship through
              focused strategic initiatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up" data-aos-delay="100">
              <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Foster Innovation</h3>
              <p className="text-gray-300 mb-4">Cultivate a culture of innovation by providing resources, mentorship,
                and infrastructure to transform creative ideas into viable solutions.</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Innovation challenges
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Design thinking workshops
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Prototyping support
                </li>
              </ul>
            </div>

            <div
              className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up" data-aos-delay="200">
              <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Nurture Entrepreneurship</h3>
              <p className="text-gray-300 mb-4">Empower aspiring entrepreneurs with the knowledge, skills, and support
                network needed to build successful startups.</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Mentorship programs
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Entrepreneurship courses
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Networking events
                </li>
              </ul>
            </div>

            <div
              className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-green-500/20 hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up" data-aos-delay="300">
              <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Drive Industry Integration</h3>
              <p className="text-gray-300 mb-4">Bridge the gap between academia and industry by facilitating
                collaborations that lead to market-oriented innovations.</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Industry partnerships
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Joint R&D initiatives
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Technology transfer
                </li>
              </ul>
            </div>

            <div
              className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-red-500/20 hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up" data-aos-delay="400">
              <div className="bg-red-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">Enable Research Commercialization</h3>
              <p className="text-gray-300 mb-4">Convert academic research into commercial products and services that
                address real-world challenges.</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  IP protection guidance
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Market validation
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Commercialization pathways
                </li>
              </ul>
            </div>

            <div
              className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up" data-aos-delay="500">
              <div className="bg-amber-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Develop Sustainable Solutions</h3>
              <p className="text-gray-300 mb-4">Encourage innovations that address sustainability challenges and
                contribute to a greener, more equitable future.</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Sustainability challenges
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Green technology focus
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Social impact assessment
                </li>
              </ul>
            </div>

            <div
              className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-teal-500/20 hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up" data-aos-delay="600">
              <div className="bg-teal-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-teal-400">Expand Global Reach</h3>
              <p className="text-gray-300 mb-4">Connect local innovation with global opportunities through strategic
                international partnerships and collaborations.</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  International partnerships
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Cross-border programs
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Global market access
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="700">
            <a href="#"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
              <span>Explore Our Programs</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="particles-container absolute inset-0 pointer-events-none">
          <div className="particle bg-blue-400 opacity-20"></div>
          <div className="particle bg-purple-400 opacity-20"></div>
          <div className="particle bg-green-400 opacity-20"></div>
          <div className="particle bg-red-400 opacity-20"></div>
          <div className="particle bg-amber-400 opacity-20"></div>
          <div className="particle bg-teal-400 opacity-20"></div>
        </div>
      </section>
      <section id="services" className="py-20 bg-neutral-900 text-white overflow-hidden relative">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-neutral-900">
        </div>

        <div
          className="absolute top-0 right-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob">
        </div>
        <div
          className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000">
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Services</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive support for entrepreneurs at every
              stage of their journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative" data-aos="fade-up" data-aos-delay="100">
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 -z-10 transform group-hover:scale-[1.02] group-hover:rotate-1">
              </div>
              <div
                className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 z-10 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                      className="bg-neutral-800 rounded-full w-16 h-16 flex items-center justify-center relative ring-1 ring-neutral-700 group-hover:ring-blue-400 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold mb-4 text-center text-blue-400 group-hover:text-white transition-colors duration-300">
                  Incubation Programs</h3>
                <p className="text-gray-300 mb-6 text-center group-hover:text-white transition-colors duration-300">
                  Structured programs to transform promising ideas into viable businesses with comprehensive
                  support systems.</p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Physical workspace with 24/7 access</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized business mentorship</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to seed funding opportunities</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Legal and IP protection support</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <button
                    className="px-6 py-2 bg-neutral-700 text-white rounded-full group-hover:bg-blue-500 transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative" data-aos="fade-up" data-aos-delay="200">
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 -z-10 transform group-hover:scale-[1.02] group-hover:rotate-1">
              </div>
              <div
                className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 z-10 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                      className="bg-neutral-800 rounded-full w-16 h-16 flex items-center justify-center relative ring-1 ring-neutral-700 group-hover:ring-purple-400 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold mb-4 text-center text-purple-400 group-hover:text-white transition-colors duration-300">
                  Acceleration Programs</h3>
                <p className="text-gray-300 mb-6 text-center group-hover:text-white transition-colors duration-300">
                  Specialized programs for high-potential startups ready to scale their operations and enter new
                  markets.</p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-purple-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Intensive growth-focused mentorship</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-purple-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Market access and customer connections</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-purple-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Investor networking opportunities</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-purple-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Scale-up strategy development</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <button
                    className="px-6 py-2 bg-neutral-700 text-white rounded-full group-hover:bg-purple-500 transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative" data-aos="fade-up" data-aos-delay="300">
              <div
                className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 -z-10 transform group-hover:scale-[1.02] group-hover:rotate-1">
              </div>
              <div
                className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-green-500/20 transition-all duration-300 z-10 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                      className="bg-neutral-800 rounded-full w-16 h-16 flex items-center justify-center relative ring-1 ring-neutral-700 group-hover:ring-green-400 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold mb-4 text-center text-green-400 group-hover:text-white transition-colors duration-300">
                  Mentorship Programs</h3>
                <p className="text-gray-300 mb-6 text-center group-hover:text-white transition-colors duration-300">
                  Connect with experienced industry experts who provide guidance, insights, and strategic
                  direction for your venture.</p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>One-on-one mentoring sessions</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Industry-specific expert matching</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Business plan refinement</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Growth strategy development</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <button
                    className="px-6 py-2 bg-neutral-700 text-white rounded-full group-hover:bg-green-500 transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative" data-aos="fade-up" data-aos-delay="400">
              <div
                className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 -z-10 transform group-hover:scale-[1.02] group-hover:rotate-1">
              </div>
              <div
                className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-amber-500/20 transition-all duration-300 z-10 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                      className="bg-neutral-800 rounded-full w-16 h-16 flex items-center justify-center relative ring-1 ring-neutral-700 group-hover:ring-amber-400 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold mb-4 text-center text-amber-400 group-hover:text-white transition-colors duration-300">
                  Funding Support</h3>
                <p className="text-gray-300 mb-6 text-center group-hover:text-white transition-colors duration-300">
                  Access to financial resources, investor networks, and guidance on securing appropriate funding
                  for your stage of growth.</p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Seed funding opportunities</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Investor pitch preparation</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Grant application assistance</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Financial modeling and planning</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <button
                    className="px-6 py-2 bg-neutral-700 text-white rounded-full group-hover:bg-amber-500 transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative" data-aos="fade-up" data-aos-delay="500">
              <div
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 -z-10 transform group-hover:scale-[1.02] group-hover:rotate-1">
              </div>
              <div
                className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-red-500/20 transition-all duration-300 z-10 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                      className="bg-neutral-800 rounded-full w-16 h-16 flex items-center justify-center relative ring-1 ring-neutral-700 group-hover:ring-red-400 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold mb-4 text-center text-red-400 group-hover:text-white transition-colors duration-300">
                  Research Commercialization</h3>
                <p className="text-gray-300 mb-6 text-center group-hover:text-white transition-colors duration-300">
                  Convert academic research into viable commercial products and services through structured
                  pathways and expert guidance.</p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>IP protection strategies</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Market validation support</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Product development assistance</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Technology transfer facilitation</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <button
                    className="px-6 py-2 bg-neutral-700 text-white rounded-full group-hover:bg-red-500 transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative" data-aos="fade-up" data-aos-delay="600">
              <div
                className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-400 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 -z-10 transform group-hover:scale-[1.02] group-hover:rotate-1">
              </div>
              <div
                className="bg-neutral-800 rounded-xl p-8 shadow-lg hover:shadow-teal-500/20 transition-all duration-300 z-10 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div
                      className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                      className="bg-neutral-800 rounded-full w-16 h-16 flex items-center justify-center relative ring-1 ring-neutral-700 group-hover:ring-teal-400 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold mb-4 text-center text-teal-400 group-hover:text-white transition-colors duration-300">
                  Co-working Space</h3>
                <p className="text-gray-300 mb-6 text-center group-hover:text-white transition-colors duration-300">
                  Access modern, well-equipped workspaces designed to foster collaboration, creativity, and
                  productivity.</p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Flexible desk arrangements</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>High-speed internet & tech support</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Meeting and conference facilities</span>
                  </li>
                  <li className="flex items-start group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-400 mt-1 flex-shrink-0"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Networking opportunities</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <button
                    className="px-6 py-2 bg-neutral-700 text-white rounded-full group-hover:bg-teal-500 transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="700">
            <a href="#"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
              <span>View All Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="particles-container absolute inset-0 pointer-events-none">
          <div className="particle bg-blue-400 opacity-20"></div>
          <div className="particle bg-purple-400 opacity-20"></div>
          <div className="particle bg-green-400 opacity-20"></div>
          <div className="particle bg-amber-400 opacity-20"></div>
          <div className="particle bg-red-400 opacity-20"></div>
          <div className="particle bg-teal-400 opacity-20"></div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About;