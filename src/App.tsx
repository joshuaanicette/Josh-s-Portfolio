import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Code, Briefcase, User, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-slate-800">Joshua's Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center shadow-xl">
                  <User className="w-24 h-24 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">HIRE</span>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-4">
                Hi, I'm <span className="text-blue-600">Joshua Anicette</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 mb-6">
                Computer Engineer & Software Developer
              </p>
              <p className="text-lg text-slate-500 mb-8 max-w-2xl">
                Software engineer by craft, computer engineer by toolkit—bridging cloud services with embedded systems. 
                Ready to bring clean code, thoughtful design, and real-world reliability to your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                  Download Resume
                </button>
                <a href="#contact" className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Learn more about my background, skills, and what drives my passion for technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">My Story</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
              I’m a builder at heart, working across software and hardware design to turn messy, real-world problems into clear, usable tools. 
              On the software side, I deliver responsive UIs and dependable back ends; on the hardware side, I prototype with microcontrollers and sensors and design systems that bridge devices to the web.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
              I like owning features end-to-end—scoping requirements, prototyping, measuring impact, and iterating for reliability and great UX. 
              My interests span full-stack development, embedded systems, and the places they meet (automation, data, and real-time feedback).
              </p>
              <p className="text-slate-600 leading-relaxed">
              I’m exploring roles across software engineering and hardware-software integration. 
              When I’m not coding or designing, I’m playing basketball and soccer, reading mythology books, and building LEGO.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-700">Frontend Development</span>
                    <span className="text-sm text-slate-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-700">Backend Development</span>
                    <span className="text-sm text-slate-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-700">Hardware Design</span>
                    <span className="text-sm text-slate-500">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[75%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-700">Computer Networking</span>
                    <span className="text-sm text-slate-500">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[45%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Experience</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Logistics Software Intern</h3>
                  <p className="text-blue-600 font-medium">Weber Display and Packaging</p>
                </div>
                <div className="flex items-center text-slate-500 mt-2 lg:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>March 2025 - September 2025</span>
                </div>
              </div>
              <div className="flex items-center text-slate-500 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>In-Person / Philadelphia, PA</span>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Used KiwiPlan ERP system to enter and validate 50+ bills of lading daily, improving packaging distribution accuracy by 15% and reducing shipment cycle time by 10% in a high-throughput logistics environment
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Executed backend trailer load transfers for 20+ trailers per shift within KiwiPlan, streamlining dispatch coordination and achieving a 98% on-time delivery rate while reducing routing errors by 20%
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Analyzed and modified workflow processes in KiwiPlan, leading a 12% reduction in processing time and improved cross-departmental coordination for box delivery operations
                </li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Full Stack Developer</h3>
                  <p className="text-blue-600 font-medium">Previous Company</p>
                </div>
                <div className="flex items-center text-slate-500 mt-2 lg:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jun 2021 - Dec 2022</span>
                </div>
              </div>
              <div className="flex items-center text-slate-500 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>San Francisco, CA</span>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Built and maintained multiple client-facing applications
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Collaborated with cross-functional teams to deliver projects on time
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Implemented automated testing reducing bugs by 60%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Class Task Scheduler</h3>
                <p className="text-slate-600 mb-4">
                A student planner with automated course/assignment syncing, dynamic filtering, and one-click calendar exports. Built for speed and simplicity across devices.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">HTML5</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">CSS3</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Javascript</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <Github className="w-4 h-4 mr-1" />
                    <span>Code</span>
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <Briefcase className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Another Project</h3>
                <p className="text-slate-600 mb-4">
                  An e-commerce platform with payment integration, inventory management, 
                  and admin dashboard. Built for scalability and performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Express</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">PostgreSQL</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <Github className="w-4 h-4 mr-1" />
                    <span>Code</span>
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Mobile App</h3>
                <p className="text-slate-600 mb-4">
                  Cross-platform mobile application built with React Native. 
                  Includes push notifications and offline functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">React Native</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Firebase</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">TypeScript</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <Github className="w-4 h-4 mr-1" />
                    <span>Code</span>
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Email</p>
                    <p className="text-white font-medium">joshuaanicette34@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Phone</p>
                    <p className="text-white font-medium">+1 (908)-887-4380</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">Location</p>
                    <p className="text-white font-medium">Philadelphia, PA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/joshuaanicette" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/joshua-anicette-1620a7338/" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a href="mailto:joshuaanicette34@gmail.com"
                     className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-slate-400">
              © 2025 Joshua Anicette. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;