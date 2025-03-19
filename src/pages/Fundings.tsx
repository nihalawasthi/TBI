import Header from '../components/Header';
import Footer from '../components/Footer';

const Fundings = () => {
    return (
        <div>
            <Header />
          <section id="funding" className="py-20 bg-white dark:bg-neutral-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span
                  className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Financial
                  Support</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Funding & Investment</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  At the Technology Business Incubation Centre (TBI), VIT Bhopal, we are committed to empowering
                  entrepreneurs from diverse backgrounds by providing comprehensive funding and investment support.
                </p>
              </div>

              <div className="mb-20">
                <div
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-xl overflow-hidden shadow-xl">
                  <div className="p-8 md:p-12">
                    <div className="md:flex md:items-center">
                      <div className="md:w-2/3 md:pr-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Seed Funding Opportunities</h3>
                        <p className="text-blue-100 mb-6">
                          To transform innovative ideas into viable businesses, securing initial capital is crucial. We
                          offer seed funding opportunities through various channels designed to support entrepreneurs at
                          different stages.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                            <div className="flex items-center mb-3">
                              <span
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-blue-600 font-bold text-lg mr-3">1</span>
                              <h4 className="text-xl font-semibold text-white">Startup India Seed Fund</h4>
                            </div>
                            <p className="text-blue-100 pl-14">
                              SISFS provides financial assistance for proof of concept, prototype development, product
                              trials, market entry, and commercialization.
                            </p>
                            <div className="mt-4 pl-14">
                              <p className="text-sm text-blue-200 mb-2">
                                <span className="font-medium">Total outlay:</span> ₹945 crore
                              </p>
                              <p className="text-sm text-blue-200">
                                <span className="font-medium">Approved funding:</span> ₹227.12 crore for 1,278 women-led
                                startups
                              </p>
                            </div>
                          </div>

                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                            <div className="flex items-center mb-3">
                              <span
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-blue-600 font-bold text-lg mr-3">2</span>
                              <h4 className="text-xl font-semibold text-white">100X.VC</h4>
                            </div>
                            <p className="text-blue-100 pl-14">
                              A SEBI-registered AIF investing in early-stage startups using founder-friendly iSAFE
                              notes, focusing on pre-seed and seed-stage funding.
                            </p>
                            <div className="mt-4 pl-14">
                              <p className="text-sm text-blue-200 mb-1">
                                <span className="font-medium">Benefits include:</span>
                              </p>
                              <ul className="text-sm text-blue-200 space-y-1">
                                <li>• Mentorship</li>
                                <li>• Networking Opportunities</li>
                                <li>• Access to Investor Network</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <a href="#apply"
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                          Apply for Funding
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd" />
                          </svg>
                        </a>
                      </div>

                      <div className="mt-8 md:mt-0 md:w-1/3">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                          <h4 className="text-lg font-semibold text-white mb-4">Areas of Financial Support</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <div
                                className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-300 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"
                                  fill="currentColor">
                                  <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                                </svg>
                              </div>
                              <span className="ml-3 text-blue-100">Proof of Concept</span>
                            </li>
                            <li className="flex items-start">
                              <div
                                className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-300 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"
                                  fill="currentColor">
                                  <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                                </svg>
                              </div>
                              <span className="ml-3 text-blue-100">Prototype Development</span>
                            </li>
                            <li className="flex items-start">
                              <div
                                className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-300 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"
                                  fill="currentColor">
                                  <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                                </svg>
                              </div>
                              <span className="ml-3 text-blue-100">Product Trials</span>
                            </li>
                            <li className="flex items-start">
                              <div
                                className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-300 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"
                                  fill="currentColor">
                                  <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                                </svg>
                              </div>
                              <span className="ml-3 text-blue-100">Market Entry</span>
                            </li>
                            <li className="flex items-start">
                              <div
                                className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-500/20 text-green-300 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20"
                                  fill="currentColor">
                                  <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                                </svg>
                              </div>
                              <span className="ml-3 text-blue-100">Commercialization</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-20">
                <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Research & Industry Collaboration
                  </h3>

                  <div className="mb-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      The Centre for Industrial Consultancy and Sponsored Research (ICSR) promotes interaction between
                      the Institute and industry. It is responsible for the promotion, facilitation, coordination and
                      administration of all sponsored and consultancy projects handled by the Institute's faculty.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-neutral-700 rounded-lg p-5 shadow-sm">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Institutional Consultancy</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive consultancy services for
                          corporate and government entities.</p>
                      </div>
                      <div className="bg-white dark:bg-neutral-700 rounded-lg p-5 shadow-sm">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Retainer Consultancy</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Long-term consultancy arrangements with
                          industry partners.</p>
                      </div>
                      <div className="bg-white dark:bg-neutral-700 rounded-lg p-5 shadow-sm">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Based Industrial
                          Consultancy</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Specialized research services for industrial
                          applications and innovations.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Research Partnerships</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Research institutions like ISRO, DST, MOCIT, MPCOST, IGCAR, and DRDO have cells established at VIT
                      Bhopal for carrying out joint research projects.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
                          <span className="text-blue-600 dark:text-blue-400 font-bold">ISRO</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Space Research</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div
                          className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
                          <span className="text-green-600 dark:text-green-400 font-bold">DST</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Science & Tech</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div
                          className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2">
                          <span className="text-purple-600 dark:text-purple-400 font-bold">MOCIT</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">IT & Comm</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div
                          className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-2">
                          <span className="text-amber-600 dark:text-amber-400 font-bold">MPCOST</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">MP Tech Council</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div
                          className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-2">
                          <span className="text-red-600 dark:text-red-400 font-bold">IGCAR</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Atomic Research</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div
                          className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-2">
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold">DRDO</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Defense R&D</p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      International collaborative joint research programmes of common interest are undertaken through:
                    </p>

                    <div className="flex flex-wrap gap-3">
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
                </div>
              </div>

              <div className="mb-20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Investor Network & Pitch
                  Events</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="h-2 bg-blue-600"></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">INSEAD Angels India and T-Hub
                          Partnership</h4>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        This collaboration curates startups in need of pre-seed and seed funding, offering funding
                        opportunities ranging from $50,000 to $250,000.
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-2 text-gray-700 dark:text-gray-300">Mentorship Support from Industry Experts and
                            Alumni</p>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-2 text-gray-700 dark:text-gray-300">Access to Networking Opportunities like Pitch
                            Days and Demo Days</p>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-2 text-gray-700 dark:text-gray-300">Visibility and exposure within the global
                            startup ecosystem</p>
                        </div>
                      </div>

                      <div className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400">
                        <span className="font-medium">Funding range:</span>
                        <span
                          className="ml-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-2 py-1 rounded-full">$50,000
                          - $250,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="h-2 bg-purple-600"></div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Active Angel Networks in India
                        </h4>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        India boasts over 125 angel networks and syndicates, with projections to rise to over 200 by
                        2030. These networks provide crucial early-stage support.
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-2 text-gray-700 dark:text-gray-300">Early-Stage Investment</p>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-2 text-gray-700 dark:text-gray-300">Mentorship and Strategic Guidance</p>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p className="ml-2 text-gray-700 dark:text-gray-300">Networking Opportunities with Industry
                            Leaders</p>
                        </div>
                      </div>

                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                          "Engaging with these networks can significantly enhance a startup's growth trajectory,
                          providing not just capital but crucial connections and expertise."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Grants & Government
                  Schemes for Startups</h3>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/4 bg-amber-500 dark:bg-amber-600 p-6 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-white text-4xl block mb-2">1</span>
                          <h4 className="text-white font-semibold">Stand-Up India Scheme</h4>
                        </div>
                      </div>
                      <div className="md:w-3/4 p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Launched on April 5, 2016, this scheme facilitates bank loans between ₹10 lakh and ₹1 crore to
                          at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman per
                          bank branch for setting up a greenfield enterprise.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">SC/ST
                            Entrepreneurs</span>
                          <span
                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Women
                            Entrepreneurs</span>
                          <span
                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Greenfield
                            Enterprises</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/4 bg-blue-500 dark:bg-blue-600 p-6 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-white text-4xl block mb-2">2</span>
                          <h4 className="text-white font-semibold">Credit Guarantee Scheme for Startups</h4>
                        </div>
                      </div>
                      <div className="md:w-3/4 p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Operational since April 2023, CGSS provides credit guarantees for loans extended to startups,
                          enhancing their creditworthiness. Notably, it has guaranteed ₹24.6 crore in loans for
                          women-led ventures.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Credit
                            Guarantees</span>
                          <span
                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Women-led
                            Ventures</span>
                          <span
                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Enhanced
                            Creditworthiness</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/4 bg-purple-500 dark:bg-purple-600 p-6 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-white text-4xl block mb-2">3</span>
                          <h4 className="text-white font-semibold">Women Entrepreneurship Platform</h4>
                        </div>
                      </div>
                      <div className="md:w-3/4 p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          An initiative by NITI Aayog, WEP aims to promote and support women entrepreneurs and provide
                          information on funding, incubation, and mentorship. This platform serves as a one-stop
                          resource center for women entrepreneurs.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Women
                            Entrepreneurs</span>
                          <span
                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">NITI
                            Aayog</span>
                          <span
                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Resource
                            Center</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/4 bg-green-500 dark:bg-green-600 p-6 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-white text-4xl block mb-2">4</span>
                          <h4 className="text-white font-semibold">Technology Adoption Fund by IN-SPACe</h4>
                        </div>
                      </div>
                      <div className="md:w-3/4 p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          The Indian National Space Promotion and Authorisation Centre (IN-SPACe) announced a ₹5 billion
                          fund to boost early-stage space technologies and reduce dependency on imports. This fund
                          provides financial support for startups, small to medium businesses, and larger industries,
                          with funding caps at ₹250 million per project.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">Space
                            Technologies</span>
                          <span
                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">₹5
                            Billion Fund</span>
                          <span
                            className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">₹250M
                            Per Project</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-20">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Inclusive Funding
                    Support</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
                    At TBI, VIT Bhopal, we are committed to empowering entrepreneurs from diverse backgrounds. Our
                    initiatives are designed to cater to the unique needs of various communities.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                      className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div
                        className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Women Entrepreneurs</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Dedicated funding and mentorship programs to support women-led ventures and address gender gaps
                        in entrepreneurship.
                      </p>
                      <span className="text-xs text-pink-600 dark:text-pink-400 font-medium">1,278+ women-led startups
                        funded</span>
                    </div>

                    <div
                      className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div
                        className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Student Entrepreneurs</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Specialized programs for students with innovative ideas, including academic credit for
                        entrepreneurial activities.
                      </p>
                      <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">Special grants for student
                        ventures</span>
                    </div>

                    <div
                      className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div
                        className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Rural & Urban Innovators</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Tailored programs to support entrepreneurs addressing the unique challenges of both rural and
                        urban environments.
                      </p>
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium">Focused on grassroots
                        innovation</span>
                    </div>

                    <div
                      className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div
                        className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">SC/ST & PWD Entrepreneurs
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Dedicated schemes for Scheduled Caste, Scheduled Tribe, and Persons with Disabilities
                        entrepreneurs, promoting inclusive innovation.
                      </p>
                      <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">Special incubation
                        support</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 rounded-2xl shadow-xl overflow-hidden">
                  <div className="md:flex p-6 md:p-10">
                    <div className="md:w-2/3 md:pr-10">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Idea into
                        Reality?</h3>
                      <p className="text-blue-100 mb-8">
                        At TBI, VIT Bhopal, we strive to provide our incubated startups with the necessary resources,
                        mentorship, and networking opportunities to navigate these funding avenues successfully. Our
                        goal is to foster an inclusive and thriving entrepreneurial ecosystem that contributes to
                        economic and societal progress.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a href="#apply"
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                          Apply for Incubation
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd" />
                          </svg>
                        </a>
                        <a href="mailto:tbi.support@vitbhopal.ac.in"
                          className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300">
                          Contact Us
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/3 mt-8 md:mt-0">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h4 className="text-xl font-semibold text-white mb-4">Quick Stats</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-blue-100">Startups Incubated</span>
                              <span className="text-sm font-medium text-white">100+</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <div className="bg-white h-2 rounded-full w-[85%]"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-blue-100">Funding Secured</span>
                              <span className="text-sm font-medium text-white">₹10+ Crore</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <div className="bg-white h-2 rounded-full w-[70%]"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-blue-100">Success Rate</span>
                              <span className="text-sm font-medium text-white">75%</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <div className="bg-white h-2 rounded-full w-[75%]"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-blue-100">Women-led Startups</span>
                              <span className="text-sm font-medium text-white">30%</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <div className="bg-white h-2 rounded-full w-[30%]"></div>
                            </div>
                          </div>
                        </div>
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

export default Fundings;