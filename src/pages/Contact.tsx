const Contact = () => {
    return (
        <div>
            <section id="contact" className="py-20 bg-white dark:bg-neutral-900 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" id="el-5rtqt0yf">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
                        id="el-c7btahwv"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"
                        id="el-k188fggl"></div>
                    <div className="text-center mb-16 relative z-10" id="el-zl4uwfcs">
                        <span
                            className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold mb-4"
                            data-aos="fade-down" id="el-wm3x5745">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                            data-aos="fade-up" id="el-u9xur9s3">
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
                                id="el-z1lr1z9m">Contact Us</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300" data-aos="fade-up"
                            data-aos-delay="100" id="el-e8ml38q7">
                            Have questions about our incubation program or interested in partnership
                            opportunities? Reach out to
                            our team and we'll get back to you shortly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" id="el-5rfzd8my">
                        <div className="relative z-10" data-aos="fade-right" id="el-kw6p27gb">
                            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl"
                                id="el-j27pazks">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
                                    id="el-r41w37lv">Send Us a Message
                                </h3>

                                <form className="space-y-6" id="el-0o5v67fw">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="el-m71c1mtd">
                                        <div id="el-1t6xlzvl">
                                            <label htmlFor="full_name"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                                id="el-a8tjvwkk">Full Name *</label>
                                            <input type="text" id="full_name" name="full_name"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
                                                required />
                                        </div>
                                        <div id="el-ltwbqrp1">
                                            <label htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                                id="el-pw0wg9kr">Email Address *</label>
                                            <input type="email" id="email" name="email"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
                                                required />
                                        </div>
                                    </div>

                                    <div id="el-2qzlxlid">
                                        <label htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                            id="el-74hunaj1">Phone Number</label>
                                        <input type="tel" id="phone" name="phone"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent bg-white dark:bg-neutral-700 text-gray-900 dark:text-white" />
                                    </div>

                                    <div id="el-eiqc5a0i">
                                        <label htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                            id="el-6qczk76h">Subject *</label>
                                        <select id="subject" name="subject"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
                                            required>
                                            <option value="" disabled selected id="el-fmos4mod">Select a
                                                subject</option>
                                            <option value="incubation" id="el-znuvss3s">Incubation Inquiry
                                            </option>
                                            <option value="partnership" id="el-8cg8pl3v">Partnership Opportunity
                                            </option>
                                            <option value="mentorship" id="el-6t9gp7sk">Mentorship Program
                                            </option>
                                            <option value="events" id="el-g42x7s9g">Events &amp; Workshops
                                            </option>
                                            <option value="facilities" id="el-6js2xiq0">Facilities &amp;
                                                Resources</option>
                                            <option value="other" id="el-vzriikzd">Other</option>
                                        </select>
                                    </div>

                                    <div id="el-izpb8v1b">
                                        <label htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                            id="el-jnpth6i3">Message *</label>
                                        <textarea id="message" name="message" rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent bg-white dark:bg-neutral-700 text-gray-900 dark:text-white"
                                            required placeholder="How can we help you?"></textarea>
                                    </div>

                                    <div className="flex items-start" id="el-d8jm8s9y">
                                        <input type="checkbox" id="privacy" name="privacy"
                                            className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-neutral-600 dark:bg-neutral-700"
                                            required />
                                        <label htmlFor="privacy"
                                            className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                            id="el-tcxvrjel">
                                            I agree to the <a href="#"
                                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                                id="el-qsl6lqyn">privacy policy</a> and consent to being
                                            contacted about my inquiry.
                                        </label>
                                    </div>

                                    <button type="submit"
                                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800"
                                        id="el-yeuikvjn">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div data-aos="fade-left" id="el-iez0n57r">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-2xl shadow-xl p-8 mb-8 text-white relative overflow-hidden"
                                id="el-tg6z1nf3">
                                <div className="absolute inset-0 opacity-10" id="el-jrw2kcnc">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"
                                        id="el-gs7u19vk">
                                        <defs id="el-czpp79cf">
                                            <pattern id="grid" width="8" height="8"
                                                patternUnits="userSpaceOnUse">
                                                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white"
                                                    strokeWidth="0.5" id="el-6shlliqi">
                                                </path>
                                            </pattern>
                                        </defs>
                                        <rect width="100" height="100" fill="url(#grid)" id="el-pl0tusxp">
                                        </rect>
                                    </svg>
                                </div>

                                <div className="relative" id="el-epydu2zk">
                                    <h3 className="text-2xl font-bold mb-6" id="el-j8ywllwy">Get in Touch</h3>

                                    <div className="space-y-6" id="el-v33duxr3">
                                        <div className="flex items-start" id="el-6v5uypa5">
                                            <div className="flex-shrink-0 bg-white/20 rounded-full p-2"
                                                id="el-gu3jvefx">
                                                <svg className="w-6 h-6 text-white" fill="none"
                                                    stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg" id="el-bk50hz1y">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        id="el-2w2zkuvu"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        id="el-friasaan"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-4" id="el-dzg9ps5c">
                                                <h4 className="text-lg font-semibold mb-1" id="el-q0hy8nyt">Address
                                                </h4>
                                                <p className="text-blue-100" id="el-j5mobesm">
                                                    TBI, VIT Bhopal University Campus,<br id="el-ks1xz8yb" />
                                                    Kothri Kalan, Sehore,<br id="el-8b3t1c23" />
                                                    Madhya Pradesh - 466114
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start" id="el-gt8h9irh">
                                            <div className="flex-shrink-0 bg-white/20 rounded-full p-2"
                                                id="el-rmms6ua4">
                                                <svg className="w-6 h-6 text-white" fill="none"
                                                    stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg" id="el-cmkynpvk">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                        id="el-jsce9mcz"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-4" id="el-am36fkvh">
                                                <h4 className="text-lg font-semibold mb-1" id="el-nujvgf52">Phone
                                                </h4>
                                                <p className="text-blue-100" id="el-z4uyi3uv">
                                                    +91 7589 123456
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start" id="el-0ncf6ur6">
                                            <div className="flex-shrink-0 bg-white/20 rounded-full p-2"
                                                id="el-5dwczya7">
                                                <svg className="w-6 h-6 text-white" fill="none"
                                                    stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg" id="el-tszzmesq">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        id="el-5nesi5wr"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-4" id="el-6cbpimea">
                                                <h4 className="text-lg font-semibold mb-1" id="el-u0dw6yx9">Email
                                                </h4>
                                                <p className="text-blue-100" id="el-vjjzaid1">
                                                    tbi@vitbhopal.ac.in
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start" id="el-higtmnvc">
                                            <div className="flex-shrink-0 bg-white/20 rounded-full p-2"
                                                id="el-yph8ytv2">
                                                <svg className="w-6 h-6 text-white" fill="none"
                                                    stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg" id="el-gnclylf7">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        id="el-ibn9tqse"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-4" id="el-qz1e95hc">
                                                <h4 className="text-lg font-semibold mb-1" id="el-fkqzj17b">Hours
                                                </h4>
                                                <p className="text-blue-100" id="el-m0eaqa3m">
                                                    Monday - Friday: 9:00 AM - 6:00 PM<br id="el-vz7acwum" />
                                                    Saturday: 9:00 AM - 1:00 PM<br id="el-4wj8bfzp" />
                                                    Sunday: Closed
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white connect-card"
                                data-aos="flip-up" data-aos-delay="500">
                                <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
                                <p className="mb-6">Follow us on social media for updates, events, and success
                                    stories</p>
                                <div className="flex space-x-4">
                                    <a href="#"
                                        className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110 social-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                        </svg>
                                    </a>
                                    <a href="#"
                                        className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110 social-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.614 14.127c-.233 2.87-2.144 5.31-4.446 6.549-1.448.779-3.097 1.324-4.78 1.324-1.683 0-3.332-.545-4.78-1.324-2.302-1.239-4.213-3.679-4.446-6.549-.123-1.516.013-2.905.402-4.133.278-.88.712-1.692 1.296-2.414.988-1.222 2.072-2.054 3.227-2.054 1.153 0 2.238.832 3.227 2.054.584.722 1.018 1.534 1.296 2.414.389 1.228.525 2.617.402 4.133z" />
                                        </svg>
                                    </a>
                                    <a href="#"
                                        className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110 social-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                                        </svg>
                                    </a>
                                    <a href="#"
                                        className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110 social-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="#"
                                        className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110 social-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418c.861-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM9.955 15.156V8.844l5.227 3.156-5.227 3.156z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mt-16 rounded-xl overflow-hidden shadow-lg" data-aos="zoom-in">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5365603216944!2d76.84996851541364!3d23.0774776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39639912367205cd%3A0x5cb40295814d2a!2sVIT%20Bhopal%20University!5e0!3m2!1sen!2sin!4v1656503641100!5m2!1sen!2sin"
                                width="100%" height="450" className="border-0 w-full h-full" allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="VIT Bhopal University Location">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
