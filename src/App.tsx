 import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Code, Briefcase, User, Phone, ChevronDown, GraduationCap } from 'lucide-react';

function App() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const [showResumeOptions, setShowResumeOptions] = useState(false);

  // Define your two resume options
  const resumeOptions = [
    { 
      name: 'Software Engineering Resume', 
      filename: 'Joshuas_Software_Engineering_COOP_Resume(2).pdf',
      description: 'Full-stack development, web applications, and software architecture',
      icon: '💻',
      color: 'from-blue-500 to-purple-600'
    },
    { 
      name: 'Hardware Engineering Resume', 
      filename: 'Joshuas_Computer_Engineering_COOP_Resume.pdf',
      description: 'Embedded systems, microcontrollers, and hardware design',
      icon: '⚡',
      color: 'from-green-500 to-teal-600'
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.resume-dropdown')) {
        setShowResumeOptions(false);
      }
    };

    if (showResumeOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showResumeOptions]);

  const handleDownloadResume = async (filename: string, displayName: string) => {
    setIsDownloading(true);
    setDownloadError(null);
    setShowResumeOptions(false);
    
    try {
      const response = await fetch(`/${filename}`);
      
      if (!response.ok) {
        throw new Error('Resume not found');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setDownloadError(`Failed to download ${displayName}. Please try again.`);
      console.error('Download error:', err);
      
      // Fallback
      try {
        const link = document.createElement('a');
        link.href = `/${filename}`;
        link.download = filename;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadError(null);
      } catch (fallbackErr) {
        console.error('Fallback download failed:', fallbackErr);
      }
    } finally {
      setIsDownloading(false);
    }
  };

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
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="S-Stem Sat 415-515pm140 (2).jpg"
                    alt="Josh's Profile Picture"
                    className="w-full h-full object-cover"
                  />
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
              <p className="text-xl lg:text-2xl text-slate-600 mb-4">
                Computer Engineering Student & Software Developer
              </p>
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                <p className="text-lg text-blue-600 font-medium">
                  Pre-Junior at Drexel University
                </p> 
              </div>
              <p className="text-lg text-slate-500 mb-8 max-w-2xl">
                Passionate about bridging software and hardware development through hands-on engineering. 
                Currently pursuing computer engineering with aspirations to build innovative solutions that span from embedded systems to cloud applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Resume Download Dropdown */}
                <div className="resume-dropdown relative">
                  <button 
                    onClick={() => setShowResumeOptions(!showResumeOptions)}
                    disabled={isDownloading}
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isDownloading ? 'Downloading...' : 'Download Resume'}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showResumeOptions ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {showResumeOptions && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-10">
                      {resumeOptions.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleDownloadResume(option.filename, option.name)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center text-white text-lg`}>
                            {option.icon}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-slate-800">{option.name}</p>
                            <p className="text-sm text-slate-500">{option.description}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <a href="#contact" className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Get In Touch
                </a>
              </div>
              {downloadError && (
                <p className="text-red-500 text-sm mt-3 text-center lg:text-left">{downloadError}</p>
              )}
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
              Learn more about my academic journey, technical skills, and passion for engineering innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">About Me</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I’m a pre-junior studying Computer Engineering at Drexel University, fascinated by how software and hardware can work together. My interest kicked off in high school during my freshman year in robotics club, where I first got my hands on code and circuits. Building robots that could navigate and respond to their environment showed me the power of integrating the two, and it set me on this path.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I enjoy creating solutions that bridge the digital and physical—whether it’s coding clean web apps or designing embedded systems with microcontrollers. My coursework and co-op experiences are helping me build skills to solve tough problems, always aiming for tech that’s reliable and user-friendly.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              My goal is to work on projects where software and hardware blend seamlessly, from automation to real-time systems. I’m exploring roles in software engineering and hardware-software integration to make that happen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Outside of tech, you can usually find me out playing basketball or soccer—my go-to sports whenever I need a break. I’m also a big LEGO fan, especially the sets built as cars or anything Marvel-related. I’ve always been a huge fan of Spider-Man, the Flash, and both fictional and real-world mythology. Music’s another big part of my life—if you’ve got any hip hop, R&B, or blues vinyl, send them my way; I can never have too many.
            </p>

              {/* Education Info */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center mb-2">
                  <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="text-lg font-semibold text-slate-800">Education</h4>
                </div>
                <p className="text-slate-700 font-medium">Bachelor of Science in Computer Engineering</p>
                <p className="text-slate-700 font-medium">Minor in Software Engineering</p>
                <p className="text-slate-600">Drexel University • Pre-Junior Status</p>
                <p className="text-slate-600 text-sm mt-1">Philadelphia, PA • Expected Graduation: 2028</p>
              </div>
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
                    <span className="font-medium text-slate-700">Hardware Design & Embedded Systems</span>
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

              {/* Career Aspirations */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Career Aspirations</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <p className="text-slate-600">Full-stack software development with focus on scalable web applications</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <p className="text-slate-600">Embedded systems engineering and IoT device development</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <p className="text-slate-600">Hardware-software integration for innovative tech solutions</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <p className="text-slate-600">Product engineering roles that combine technical depth with user impact</p>
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
              My professional journey and key accomplishments in software and hardware integration
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
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of my recent work bridging software development and hardware engineering
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
                  <a href="https://github.com/joshuaanicette/class-task-scheduler" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <Github className="w-4 h-4 mr-1" />
                    <span>Code</span>
                    </a>
                  <a href="https://class-task-scheduler.vercel.app/" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
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
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Focus Assistant Tracker</h3>
                <p className="text-slate-600 mb-4">
                A hardware-software focus tracking system with real-time distraction alerts, session analytics, and web dashboard. 
                Demonstrates embedded systems integration with web technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">Python (Flask)</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Arduino</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Raspberry Pi</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/joshuaanicette/Focus_Assistant" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <Github className="w-4 h-4 mr-1" />
                    <span>Code</span>
                  </a>
                  <a href="https://github.com/joshuaanicette/Focus_Assistant/releases/tag/v1.0.0" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
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
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Invoicing System</h3>
                <p className="text-slate-600 mb-4">
                An invoicing platform where customers generate PDFs in real time, track sequential IDs, and find records fast. 
                Built for error reduction and seamless deployments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">HTML</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">CSS</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Python (Flask)</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/joshuaanicette/Ed-s-Invoicing-System-2" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <Github className="w-4 h-4 mr-1" />
                    <span>Code</span>
                  </a>
                  <a href="https://ed-s-invoicing-system-updated.vercel.app/" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
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
            Ready to contribute fresh perspectives in computer engineering and software development—building innovative solutions from hardware fundamentals to software applications
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
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                const message = formData.get('message') as string;
                
                const subject = `Portfolio Contact from ${name}`;
                const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
                const mailtoLink = `mailto:joshuaanicette34@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                window.location.href = mailtoLink;
              }}>
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    required
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
