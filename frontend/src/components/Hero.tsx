import { useState, useEffect } from 'react';
import heroImg from '../assets/hero2.jpg';
import AnimatedCounter from './AnimatedCounter';

const roles = ['Full Stack', 'MERN Stack', 'Java', 'React'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentRole.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1b263b] via-[#0d1b2a] to-[#1b263b] overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00d1d1]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#6bffff]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#00d1d1]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,209,209,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,209,209,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d1d1]/10 border border-[#00d1d1]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00d1d1] animate-pulse" />
              <span className="text-[#00d1d1] text-sm font-medium">
                Available for work
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Creative
              <br />
              <span className="gradient-text">{displayText}</span>
              <span className="typing-cursor" />
              <br />
              Developer
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Crafting beautiful digital experiences with attention to detail.
              Specializing in Java, MERN Stack, and modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00d1d1] text-[#0d1b2a] rounded-full font-semibold text-lg hover:bg-[#00d1d1]/90 transition-all duration-300 cursor-pointer"
              >
                <span>Hire Me</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="/Tanisha.pdf"
                download="Tanisha_Borana_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#00d1d1] text-[#00d1d1] rounded-full font-semibold text-lg hover:bg-[#00d1d1]/10 transition-all duration-300 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Download CV</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:text-[#00d1d1] transition-colors">
                  <AnimatedCounter end={9} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm">Months Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:text-[#00d1d1] transition-colors">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm">Projects Done</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white group-hover:text-[#00d1d1] transition-colors">
                  <AnimatedCounter end={6} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-right flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 border-2 border-[#00d1d1]/20 rounded-full animate-pulse" />
              <div className="absolute -inset-8 border border-[#00d1d1]/10 rounded-full" />

              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden animate-float animate-pulse-glow">
                <img
                  src={heroImg}
                  alt="Tanisha Borana"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/50 to-transparent" />
              </div>

              {/* Floating badges */}
              <div className="absolute top-4 -right-4 px-4 py-2 bg-[#1b263b] rounded-lg border border-[#00d1d1]/30 shadow-lg animate-float">
                <span className="text-[#00d1d1] font-medium">React</span>
              </div>
              <div className="absolute bottom-8 -left-4 px-4 py-2 bg-[#1b263b] rounded-lg border border-[#00d1d1]/30 shadow-lg animate-float animation-delay-2000">
                <span className="text-[#00d1d1] font-medium">Node.js</span>
              </div>
              <div className="absolute top-1/2 -right-8 px-4 py-2 bg-[#1b263b] rounded-lg border border-[#00d1d1]/30 shadow-lg animate-float animation-delay-4000">
                <span className="text-[#00d1d1] font-medium">Java</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-gray-400 text-sm">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#00d1d1] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;