import '../background.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Apply = () => {
    return (
        <div>
            <Header />
            <section id="apply" className="py-20 bg-white dark:bg-neutral-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span
                            className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Join
                            Our Ecosystem</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Apply for Incubation</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            The TBI at VIT Bhopal provides a nurturing environment for early-stage startups to grow and scale. If
                            you have an innovative idea and are looking for mentorship, funding, and infrastructure support, apply
                            to our incubation program today.
                        </p>
                    </div>

                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">How to Apply</h3>

                        <div className="max-w-5xl mx-auto">
                            <div className="relative">
                                <div
                                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/50 z-0">
                                </div>

                                <div className="relative z-10 mb-12">
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Application Submission</h4>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Fill out the online application form with details about your startup, team, business model,
                                                and current stage. Be comprehensive and clear about your innovation and market opportunity.
                                            </p>
                                        </div>
                                        <div className="md:mx-auto md:relative">
                                            <div
                                                className="h-14 w-14 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white text-xl font-bold">
                                                1</div>
                                        </div>
                                        <div className="flex-1 md:pl-12 mt-4 md:mt-0">
                                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                                                <span className="font-medium text-blue-800 dark:text-blue-300">Time Estimate:</span>
                                                <p className="text-gray-600 dark:text-gray-300">30-45 minutes to complete the application</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 mb-12">
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="order-1 flex-1 md:text-right md:pr-12 mt-4 md:mt-0">
                                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                                                <span className="font-medium text-blue-800 dark:text-blue-300">Time Estimate:</span>
                                                <p className="text-gray-600 dark:text-gray-300">2-3 weeks for evaluation</p>
                                            </div>
                                        </div>
                                        <div className="order-2 md:order-2 flex-1 md:pl-12 mb-4 md:mb-0">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Screening & Shortlisting</h4>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Our expert panel evaluates applications based on innovation, feasibility, market potential,
                                                and scalability. Shortlisted startups will be notified for the next round.
                                            </p>
                                        </div>
                                        <div className="order-3 md:order-1 md:mx-auto md:relative">
                                            <div
                                                className="h-14 w-14 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white text-xl font-bold">
                                                2</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 mb-12">
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Pitching Session</h4>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Shortlisted startups present their ideas to a panel of industry mentors and investors.
                                                Prepare a compelling pitch deck highlighting your value proposition, market opportunity, and
                                                business model.
                                            </p>
                                        </div>
                                        <div className="md:mx-auto md:relative">
                                            <div
                                                className="h-14 w-14 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white text-xl font-bold">
                                                3</div>
                                        </div>
                                        <div className="flex-1 md:pl-12 mt-4 md:mt-0">
                                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                                                <span className="font-medium text-blue-800 dark:text-blue-300">Time Estimate:</span>
                                                <p className="text-gray-600 dark:text-gray-300">15-20 minute presentation with 10 minute Q&A</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="order-1 flex-1 md:text-right md:pr-12 mt-4 md:mt-0">
                                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                                                <span className="font-medium text-blue-800 dark:text-blue-300">Time Estimate:</span>
                                                <p className="text-gray-600 dark:text-gray-300">1-2 weeks for onboarding</p>
                                            </div>
                                        </div>
                                        <div className="order-2 md:order-2 flex-1 md:pl-12 mb-4 md:mb-0">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Final Selection & Onboarding
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Selected startups join our structured incubation program. We'll assist with paperwork,
                                                resource allocation, and introducing you to our mentor network to kickstart your journey.
                                            </p>
                                        </div>
                                        <div className="order-3 md:order-1 md:mx-auto md:relative">
                                            <div
                                                className="h-14 w-14 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center text-white text-xl font-bold">
                                                4</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20 bg-gray-50 dark:bg-neutral-800 rounded-xl p-8 md:p-12">
                        <div className="md:flex md:items-start">
                            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Eligibility Criteria</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Our incubation program is designed to support various types of entrepreneurs and innovators. Check
                                    if you qualify for our program.
                                </p>
                            </div>
                            <div className="md:w-2/3">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-sm">
                                        <div className="flex items-center mb-4">
                                            <div
                                                className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Individuals or Teams</h4>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 pl-13">
                                            Individuals or teams with a technology-driven business idea. We recommend having a team with
                                            complementary skills.
                                        </p>
                                    </div>

                                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-sm">
                                        <div className="flex items-center mb-4">
                                            <div
                                                className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path
                                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                </svg>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Academic Affiliation</h4>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 pl-13">
                                            Students, faculty members, or external entrepreneurs with scalable startup concepts. VIT
                                            Bhopal students get priority consideration.
                                        </p>
                                    </div>

                                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-sm">
                                        <div className="flex items-center mb-4">
                                            <div
                                                className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Early-Stage Startups</h4>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 pl-13">
                                            Early-stage startups looking for incubation, mentorship, and funding opportunities. Ideally at
                                            concept, prototype, or early revenue stage.
                                        </p>
                                    </div>

                                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-sm">
                                        <div className="flex items-center mb-4">
                                            <div
                                                className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400 mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Innovation Focus</h4>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 pl-13">
                                            Your startup should be innovative and technology-driven, with potential for scalability and
                                            significant market impact.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg">
                            <div className="md:flex">
                                <div className="md:w-1/2 p-8 md:p-12">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Online Application Form</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                                        Interested in joining our incubation program? Fill out the application form below. Make sure to
                                        provide accurate and detailed information to improve your chances of selection.
                                    </p>

                                    <form className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h4>
                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                <div>
                                                    <label htmlFor="first_name"
                                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name
                                                        *</label>
                                                    <input type="text" id="first_name" name="first_name" required
                                                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500" />
                                                </div>
                                                <div>
                                                    <label htmlFor="last_name"
                                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name
                                                        *</label>
                                                    <input type="text" id="last_name" name="last_name" required
                                                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500" />
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <label htmlFor="email"
                                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address
                                                    *</label>
                                                <input type="email" id="email" name="email" required
                                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500" />
                                            </div>
                                            <div className="mt-4">
                                                <label htmlFor="phone"
                                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number
                                                    *</label>
                                                <input type="tel" id="phone" name="phone" required
                                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500" />
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Startup Information</h4>
                                            <div>
                                                <label htmlFor="startup_name"
                                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Startup/Project
                                                    Name *</label>
                                                <input type="text" id="startup_name" name="startup_name" required
                                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500" />
                                            </div>
                                            <div className="mt-4">
                                                <label htmlFor="stage"
                                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Stage
                                                    *</label>
                                                <select id="stage" name="stage" required
                                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500">
                                                    <option value="">Select stage</option>
                                                    <option value="idea">Idea Stage</option>
                                                    <option value="concept">Concept/Prototype</option>
                                                    <option value="mvp">MVP Ready</option>
                                                    <option value="early_revenue">Early Revenue</option>
                                                    <option value="growth">Growth Stage</option>
                                                </select>
                                            </div>
                                            <div className="mt-4">
                                                <label htmlFor="category"
                                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Technology
                                                    Category *</label>
                                                <select id="category" name="category" required
                                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500">
                                                    <option value="">Select category</option>
                                                    <option value="ai_ml">AI & Machine Learning</option>
                                                    <option value="blockchain">Blockchain</option>
                                                    <option value="iot">IoT</option>
                                                    <option value="cybersecurity">Cybersecurity</option>
                                                    <option value="fintech">FinTech</option>
                                                    <option value="edtech">EdTech</option>
                                                    <option value="healthtech">HealthTech</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <div className="mt-4">
                                                <label htmlFor="description"
                                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Brief Description
                                                    (100-150 words) *</label>
                                                <textarea id="description" name="description" rows={4} required
                                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"></textarea>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Team Information</h4>
                                            <div>
                                                <label htmlFor="team_size"
                                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Team Size
                                                    *</label>
                                                <select id="team_size" name="team_size" required
                                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500">
                                                    <option value="">Select team size</option>
                                                    <option value="solo">Solo Founder</option>
                                                    <option value="2-3">2-3 Members</option>
                                                    <option value="4-5">4-5 Members</option>
                                                    <option value="6+">6+ Members</option>
                                                </select>
                                            </div>
                                            <div className="mt-4">
                                                <label htmlFor="team_background"
                                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Team Background &
                                                    Expertise *</label>
                                                <textarea id="team_background" name="team_background" rows={3} required
                                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"></textarea>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Briefly describe your team's
                                                    educational background, technical skills, and relevant experience.</p>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="pitch_deck"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pitch Deck
                                                (Optional)</label>
                                            <input type="file" id="pitch_deck" name="pitch_deck"
                                                className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-900/20 dark:file:text-blue-300 hover:file:bg-blue-100 dark:hover:file:bg-blue-900/30" />
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Upload your pitch deck (PDF format,
                                                max 10MB)</p>
                                        </div>

                                        <div className="pt-4">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="terms" name="terms" type="checkbox" required
                                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="terms" className="font-medium text-gray-700 dark:text-gray-300">I agree to the
                                                        terms and conditions</label>
                                                    <p className="text-gray-500 dark:text-gray-400">By submitting this application, I authorize
                                                        TBI VIT Bhopal to evaluate my startup for incubation.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <button type="submit"
                                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300">
                                                Submit Application
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div
                                    className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 md:w-1/2 p-8 md:p-12 flex items-center">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>

                                        <div className="space-y-6">
                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-10 w-10 rounded-md bg-white/10 flex items-center justify-center text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-white">Co-Working Space</h4>
                                                    <p className="mt-1 text-blue-100">Access to our 8000 sq. ft. co-working space with high-speed
                                                        internet, meeting rooms, and collaboration zones.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-10 w-10 rounded-md bg-white/10 flex items-center justify-center text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-white">Technical Labs</h4>
                                                    <p className="mt-1 text-blue-100">Use of specialized labs for AI/ML, IoT, cybersecurity
                                                        research, and product development.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-10 w-10 rounded-md bg-white/10 flex items-center justify-center text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-white">Mentorship</h4>
                                                    <p className="mt-1 text-blue-100">One-on-one guidance from industry experts, successful
                                                        entrepreneurs, and subject matter specialists.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-10 w-10 rounded-md bg-white/10 flex items-center justify-center text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-white">Funding Access</h4>
                                                    <p className="mt-1 text-blue-100">Opportunities to connect with investors, apply for grants,
                                                        and secure seed funding.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div
                                                    className="flex-shrink-0 h-10 w-10 rounded-md bg-white/10 flex items-center justify-center text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium text-white">Legal & IP Support</h4>
                                                    <p className="mt-1 text-blue-100">Assistance with company registration, patent filing,
                                                        contract preparation, and regulatory compliance.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                            <h4 className="text-lg font-medium text-white mb-2">Have Questions?</h4>
                                            <p className="text-blue-100 mb-4">If you have any questions about the incubation process, please
                                                contact us:</p>
                                            <div className="flex items-center text-white mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg>
                                                <a href="mailto:tbi.support@vitbhopal.ac.in"
                                                    className="hover:underline">tbi.support@vitbhopal.ac.in</a>
                                            </div>
                                            <div className="flex items-center text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path
                                                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                </svg>
                                                <span>+91-7387114521</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Success Stories from Our
                            Incubator</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div
                                className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-3 bg-blue-600"></div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                                            P
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900 dark:text-white">Payme</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Blockchain-Based Payment System</p>
                                        </div>
                                    </div>
                                    <blockquote className="italic text-gray-600 dark:text-gray-300 mb-4">
                                        "Joining TBI was the best decision for our startup. The infrastructure, legal support, and
                                        direct access to investors made a huge impact on our growth."
                                    </blockquote>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Sumon Nath, CEO</span>
                                        <span
                                            className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 py-1 px-2 rounded-full">₹1.2Cr
                                            Funding</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-3 bg-purple-600"></div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xl">
                                            P
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900 dark:text-white">PRXIS</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">AI-Powered Legal Assistance</p>
                                        </div>
                                    </div>
                                    <blockquote className="italic text-gray-600 dark:text-gray-300 mb-4">
                                        "From an idea to a fully functional AI-powered legal platform, our startup journey was shaped by
                                        the guidance and support of TBI mentors."
                                    </blockquote>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Nilesh Pandey,
                                            Founder</span>
                                        <span
                                            className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 py-1 px-2 rounded-full">Seed
                                            Stage</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-3 bg-indigo-600"></div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl">
                                            I
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900 dark:text-white">INFLYNX</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">AI-Driven Jurisdiction System</p>
                                        </div>
                                    </div>
                                    <blockquote className="italic text-gray-600 dark:text-gray-300 mb-4">
                                        "TBI helped us secure funding, refine our business model, and scale our AI-driven jurisdiction
                                        system. Highly recommended for aspiring entrepreneurs!"
                                    </blockquote>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Matrupriya & Ravi,
                                            Co-founders</span>
                                        <span
                                            className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 py-1 px-2 rounded-full">Partner
                                            Onboarded</span>
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

export default Apply;