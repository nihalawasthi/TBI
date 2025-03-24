import Header from "../components/Header"
import Footer from "../components/Footer";

const AdvisoryBoard = () => {
  return (
    <div>
      <Header />
      <section id="advisory-board" className="py-16 bg-gray-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a237e] dark:text-white">TBI
              Advisory Board</h2>
            <div className="w-20 h-1 bg-[#ff6f00] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the distinguished leaders guiding our Technology Business Incubation Centre to
              foster innovation
              and entrepreneurship at VIT Bhopal.
            </p>
          </div>

          <div className="mb-16">
            <h3
              className="text-2xl font-bold mb-8 text-center text-[#1a237e] dark:text-white inline-flex items-center mx-auto">
              <span className="bg-[#ff6f00] h-1 w-8 mr-3"></span>
              Chief Patron
              <span className="bg-[#ff6f00] h-1 w-8 ml-3"></span>
            </h3>

            <div
              className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 p-6 flex justify-center md:justify-start items-center">
                  <div
                    className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#1a237e] dark:border-[#ff6f00] bg-gray-100 dark:bg-neutral-700 flex items-center justify-center">
                      <img src="/images/Dr. G. Viswanathan.jpg" alt="" className="h-full w-full rounded-full text-white" />
                  </div>
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="mb-2 flex items-center">
                    <h4 className="text-2xl font-bold text-[#1a237e] dark:text-white">Hon'ble
                      Dr. G. Viswanathan</h4>
                  </div>
                  <p className="text-[#ff6f00] font-semibold mb-4">Founder & Chancellor, VIT
                    University</p>
                  <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mb-4"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Dr. G. Viswanathan's visionary leadership has established VIT as one of
                    India's premier
                    educational institutions. His dedication to nurturing innovation and
                    entrepreneurship continues
                    to inspire the next generation of change-makers and industry leaders.
                  </p>
                  <div className="mt-6 flex space-x-4">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Visionary Leader
                    </span>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      Education Pioneer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3
              className="text-2xl font-bold mb-8 text-center text-[#1a237e] dark:text-white inline-flex items-center mx-auto">
              <span className="bg-[#ff6f00] h-1 w-8 mr-3"></span>
              Patrons
              <span className="bg-[#ff6f00] h-1 w-8 ml-3"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="mb-4 sm:mb-0 sm:mr-6">
                      <div
                        className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#1a237e] dark:border-[#ff6f00] bg-gray-100 dark:bg-neutral-700 flex items-center justify-center">
                      <img src="/images/Mr. Sankar Viswanathan.jpg" alt="Mr. Sankar Viswanathan" className="h-full w-full rounded-full text-white" />
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-xl font-bold text-[#1a237e] dark:text-white">Mr.
                        Sankar Viswanathan</h4>
                      <p className="text-[#ff6f00] font-medium mb-2">Vice President, VIT
                        Bhopal University</p>
                      <div
                        className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mb-3 hidden sm:block">
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Driving the strategic vision and growth of VIT Bhopal University
                        with a focus on innovation,
                        academic excellence, and entrepreneurship development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="mb-4 sm:mb-0 sm:mr-6">
                      <div
                        className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#1a237e] dark:border-[#ff6f00] bg-gray-100 dark:bg-neutral-700 flex items-center justify-center">
                      <img src="/images/Ms. Kadhambari S. Viswanathan.jpg" alt="Ms. Kadhambari S. Viswanathan" className="h-full w-full rounded-full text-white" />
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-xl font-bold text-[#1a237e] dark:text-white">Ms.
                        Kadhambari S. Viswanathan
                      </h4>
                      <p className="text-[#ff6f00] font-medium mb-2">Assistant Vice President,
                        VIT Bhopal University</p>
                      <div
                        className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mb-3 hidden sm:block">
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Championing educational excellence and innovation at VIT Bhopal
                        to create meaningful
                        opportunities for aspiring entrepreneurs and innovators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3
              className="text-2xl font-bold mb-8 text-center text-[#1a237e] dark:text-white inline-flex items-center mx-auto">
              <span className="bg-[#ff6f00] h-1 w-8 mr-3"></span>
              Advisory Board
              <span className="bg-[#ff6f00] h-1 w-8 ml-3"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="p-6">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#1a237e] dark:border-[#ff6f00] bg-gray-100 dark:bg-neutral-700 flex items-center justify-center mb-4">
                      <img src="/images/Dr. T. B. Sridharan.jpeg" alt="Dr. T. B. Sridharan" className="h-full w-full rounded-full text-white" />

                    </div>
                    <h4 className="text-lg font-bold text-[#1a237e] dark:text-white">Dr. T. B.
                      Sridharan</h4>
                    <p className="text-[#ff6f00] font-medium mb-2">Pro-Chancellor, VIT Bhopal
                      University</p>
                    <div className="w-10 h-0.5 bg-gray-300 dark:bg-gray-600 mb-3"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
                      Leading academic initiatives and institutional development at VIT
                      Bhopal University, with a
                      focus on fostering innovation and research excellence.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="p-6">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#1a237e] dark:border-[#ff6f00] bg-gray-100 dark:bg-neutral-700 flex items-center justify-center mb-4">
                      <img src="/images/Dr. K. K. Nair.jpg" alt="Dr. K. K. Nair" className="h-full w-full rounded-full text-white" />

                    </div>
                    <h4 className="text-lg font-bold text-[#1a237e] dark:text-white">Dr. K. K.
                      Nair</h4>
                    <p className="text-[#ff6f00] font-medium mb-2">Registrar, VIT Bhopal
                      University</p>
                    <div className="w-10 h-0.5 bg-gray-300 dark:bg-gray-600 mb-3"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
                      Overseeing administrative functions and strategic initiatives for
                      entrepreneurship development
                      and institutional advancement.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="p-6">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#1a237e] dark:border-[#ff6f00] bg-gray-100 dark:bg-neutral-700 flex items-center justify-center mb-4">
                      <img src="/images/Dr. Hemraj Shobharam Lamkuche.jpg" alt="Dr. Hemraj Shobharam Lamkuche" className="h-full w-full rounded-full text-white" />

                    </div>
                    <h4 className="text-lg font-bold text-[#1a237e] dark:text-white">Dr. Hemraj
                      Shobharam Lamkuche</h4>
                    <p className="text-[#ff6f00] font-medium mb-2">Director TBI, VIT Bhopal
                      University</p>
                    <div className="w-10 h-0.5 bg-gray-300 dark:bg-gray-600 mb-3"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
                      Leading the incubation center's vision and operations to nurture
                      startup growth, innovation,
                      and entrepreneurial talent development.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="p-6">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#1a237e] dark:border-[#ff6f00] bg-gray-100 dark:bg-neutral-700 flex items-center justify-center mb-4">
                      <img src="/images/Dr. Abdul Rashid.jpg" alt="Dr. Abdul Rashid" className="h-full w-full rounded-full text-white" />

                    </div>
                    <h4 className="text-lg font-bold text-[#1a237e] dark:text-white">Dr. Abdul
                      Rashid</h4>
                    <p className="text-[#ff6f00] font-medium mb-2">Dy Director TBI, VIT Bhopal
                      University</p>
                    <div className="w-10 h-0.5 bg-gray-300 dark:bg-gray-600 mb-3"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
                      Supporting TBI operations and strategic initiatives for startup
                      development, mentorship, and
                      ecosystem building.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none">
                <div className="p-6">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#1a237e] dark:border-[#ff6f00] bg-gray-100 dark:bg-neutral-700 flex items-center justify-center mb-4">
                      <img src="/images/Dr. Prasad Begde.jpg" alt="Dr. Prasad Bedge" className="h-full w-full rounded-full text-white" />

                    </div>
                    <h4 className="text-lg font-bold text-[#1a237e] dark:text-white">Dr. Prasad
                      Bedge</h4>
                    <p className="text-[#ff6f00] font-medium mb-2">Chief Mentor TBI, VIT Bhopal
                      University</p>
                    <div className="w-10 h-0.5 bg-gray-300 dark:bg-gray-600 mb-3"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
                      Providing strategic mentorship and guidance to startups in their
                      entrepreneurial journey, with
                      expertise in business development and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-[#1a237e] dark:text-white">
              Organizational Structure
            </h3>

            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 md:p-8">
              <div className="md:hidden space-y-6">
                <div className="bg-[#1a237e] text-white p-4 rounded-lg text-center">
                  <h4 className="font-bold">Chief Patron</h4>
                  <p className="text-sm mt-1">Dr. G. Viswanathan</p>
                  <p className="text-xs text-gray-300 mt-1">Founder & Chancellor</p>
                </div>

                <div className="bg-[#4a148c] text-white p-4 rounded-lg text-center">
                  <h4 className="font-bold">Patrons</h4>
                  <div className="space-y-3 mt-2">
                    <div>
                      <p className="text-sm">Mr. Sankar Viswanathan</p>
                      <p className="text-xs text-gray-300">Vice President</p>
                    </div>
                    <div className="border-t border-gray-600 pt-2">
                      <p className="text-sm">Ms. Kadhambari S. Viswanathan</p>
                      <p className="text-xs text-gray-300">Assistant Vice President</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#ff6f00] text-white p-4 rounded-lg text-center">
                  <h4 className="font-bold">Pro-Chancellor</h4>
                  <p className="text-sm mt-1">Dr. T. B. Sridharan</p>
                </div>

                <div className="bg-[#ff6f00] text-white p-4 rounded-lg text-center">
                  <h4 className="font-bold">Registrar</h4>
                  <p className="text-sm mt-1">Dr. K. K. Nair</p>
                </div>

                <div className="bg-blue-700 text-white p-4 rounded-lg text-center">
                  <h4 className="font-bold">Director TBI</h4>
                  <p className="text-sm mt-1">Dr. Hemraj Shobharam Lamkuche</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg text-center">
                    <h4 className="font-bold text-sm">Dy Director TBI</h4>
                    <p className="text-sm mt-1">Dr. Abdul Rashid</p>
                  </div>
                  <div className="bg-blue-600 text-white p-3 rounded-lg text-center">
                    <h4 className="font-bold text-sm">Chief Mentor TBI</h4>
                    <p className="text-sm mt-1">Dr. Prasad Bedge</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block overflow-x-auto">
                <div className="min-w-[768px] py-6">
                  <div className="flex justify-center mb-8">
                    <div
                      className="w-60 bg-[#1a237e] text-white p-4 rounded-lg text-center shadow-md">
                      <h4 className="font-bold">Chief Patron</h4>
                      <p className="text-sm mt-1">Dr. G. Viswanathan</p>
                      <p className="text-xs text-gray-300 mt-1">Founder & Chancellor</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-1 h-10 bg-gray-400 dark:bg-gray-600"></div>
                  </div>

                  <div className="flex justify-center mb-8">
                    <div
                      className="w-64 bg-[#4a148c] text-white p-4 rounded-lg text-center shadow-md">
                      <h4 className="font-bold">Patrons</h4>
                      <div className="mt-2">
                        <p className="text-sm">Mr. Sankar Viswanathan</p>
                        <p className="text-xs text-gray-300 mt-1">Vice President</p>
                      </div>
                      <div className="border-t border-gray-600 mt-2 pt-2">
                        <p className="text-sm">Ms. Kadhambari S. Viswanathan</p>
                        <p className="text-xs text-gray-300 mt-1">Assistant Vice President
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-1 h-10 bg-gray-400 dark:bg-gray-600"></div>
                  </div>

                  <div className="flex justify-center mb-8">
                    <div
                      className="w-60 bg-[#ff6f00] text-white p-4 rounded-lg text-center shadow-md">
                      <h4 className="font-bold">Pro-Chancellor</h4>
                      <p className="text-sm mt-1">Dr. T. B. Sridharan</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-1 h-10 bg-gray-400 dark:bg-gray-600"></div>
                  </div>

                  <div className="flex justify-center mb-8">
                    <div
                      className="w-60 bg-[#ff6f00] text-white p-4 rounded-lg text-center shadow-md">
                      <h4 className="font-bold">Registrar</h4>
                      <p className="text-sm mt-1">Dr. K. K. Nair</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-1 h-10 bg-gray-400 dark:bg-gray-600"></div>
                  </div>

                  <div className="flex justify-center mb-8">
                    <div
                      className="w-64 bg-blue-700 text-white p-4 rounded-lg text-center shadow-md">
                      <h4 className="font-bold">Director TBI</h4>
                      <p className="text-sm mt-1">Dr. Hemraj Shobharam Lamkuche</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-1 h-10 bg-gray-400 dark:bg-gray-600"></div>
                  </div>

                  <div className="flex justify-center gap-32">
                    <div
                      className="w-56 bg-blue-600 text-white p-4 rounded-lg text-center shadow-md">
                      <h4 className="font-bold">Dy Director TBI</h4>
                      <p className="text-sm mt-1">Dr. Abdul Rashid</p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-32">
                    <div
                      className="w-56 bg-blue-600 text-white p-4 rounded-lg text-center shadow-md">
                      <h4 className="font-bold">Chief Mentor TBI</h4>
                      <p className="text-sm mt-1">Dr. Prasad Bedge</p>
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
  );
};

export default AdvisoryBoard;