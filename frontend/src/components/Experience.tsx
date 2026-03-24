import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'Curvv International (Indore)',
    type: 'Remote',
    period: 'Feb 2026 - Present',
    current: true,
    responsibilities: [
      'Working on full-stack web applications using modern technologies, contributing to scalable and efficient solutions.',
      'Collaborating with cross-functional teams to develop and enhance product features.',
      'Improving performance and user experience through optimized frontend and backend implementations.',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Software Developer',
    company: 'Apaxion Technology (Noida)',
    type: 'Remote',
    period: 'Nov 2025 - Feb 2026',
    current: false,
    responsibilities: [
      'Designed and Created QR Cave, a QR-based restaurant menu and ordering application in a collaborative team of 4 engineers.',
      'Implemented QR code scanning functionality enabling customers to instantly access digital menus and place orders contactlessly.',
      'Built responsive user interfaces for seamless menu browsing and order interaction using React.js and Node.js.',
      'Reduced manual ordering overhead by 40% by enabling full contactless menu access through QR technology.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
];

const projects = [
  {
    id: 1,
    title: 'QRCRAVE',
    tech: 'React.js, Node.js, Express.js, MongoDB',
    period: 'Nov 2025 – Present',
    link: '#',
    highlights: [
      'Collaborated in a team of 4 to develop QRCrave, a QR-based digital menu and ordering system for restaurants.',
      'Implemented QR scanning to dynamically generate menus, reducing manual ordering time by 40%.',
      'Developed a responsive frontend and integrated 5+ RESTful APIs for menu display, cart, and order management.',
      'Contributed to database design and testing, ensuring 99% successful order flow across all user interactions.',
    ],
  },
  {
    id: 2,
    title: 'EXPLORATRAILS',
    tech: 'React.js, Firebase, Gemini API',
    period: 'Feb 2024 – May 2024',
    link: 'https://travelappproject.vercel.app',
    highlights: [
      'Developed a full-stack travel planning web application serving 10,000+ monthly users, reducing trip-planning time by 40% through AI-driven recommendations.',
      'Integrated the Gemini API for personalized travel suggestions, increasing user engagement by 35%.',
      'Implemented Firebase Authentication for secure user access, supporting 5,000+ registered users.',
    ],
  },
];

const skills = {
  'Languages & Frontend': ['C++', 'Java', 'JavaScript', 'CSS3', 'HTML5', 'React.js'],
  'Backend & Databases': ['Express.js', 'Firebase', 'MongoDB', 'MySQL', 'Node.js'],
  'Tools & Platforms': ['AWS', 'Azure', 'GitHub', 'Postman', 'Terraform', 'Vercel'],
  'Concepts': ['DBMS', 'DSA', 'OOP', 'Operating Systems', 'Computer Networks'],
};

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-[#1e2d44] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,209,209,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,209,209,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d1d1]/10 border border-[#00d1d1]/30 mb-6">
            <span className="text-[#00d1d1] text-sm font-medium">
              Professional Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional experience and key projects
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3
            className={`text-2xl font-bold text-white mb-10 flex items-center gap-3 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
          >
            <span className="w-10 h-10 rounded-full bg-[#00d1d1]/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#00d1d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="bg-[#1b263b] rounded-2xl p-8 border border-[#00d1d1]/10 hover:border-[#00d1d1]/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-bold text-white">
                          {exp.title}
                        </h4>
                        {exp.current && (
                          <span className="px-3 py-1 bg-[#00d1d1] text-[#0d1b2a] rounded-full text-xs font-bold">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#00d1d1] font-medium text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-[#0d1b2a] text-gray-300 rounded-full text-sm">
                        {exp.type}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00d1d1] mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#0d1b2a] text-[#00d1d1] rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Projects */}
        <div className="mb-20">
          <h3
            className={`text-2xl font-bold text-white mb-10 flex items-center gap-3 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <span className="w-10 h-10 rounded-full bg-[#00d1d1]/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#00d1d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </span>
            Key Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-[#1b263b] rounded-2xl p-6 border border-[#00d1d1]/10 hover:border-[#00d1d1]/30 transition-all duration-300 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#00d1d1] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-[#00d1d1] text-sm mt-1">
                      {project.tech}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm">
                    {project.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d1d1] mt-1.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00d1d1] font-medium text-sm mt-4 hover:text-[#6bffff] transition-colors"
                  >
                    View Live
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3
            className={`text-2xl font-bold text-white mb-10 flex items-center gap-3 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >
            <span className="w-10 h-10 rounded-full bg-[#00d1d1]/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#00d1d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            Technical Skills
          </h3>

          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.7s' }}
          >
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-[#1b263b] rounded-xl p-6 border border-[#00d1d1]/10 hover:border-[#00d1d1]/30 transition-all duration-300"
              >
                <h4 className="text-[#00d1d1] font-semibold text-sm mb-4 uppercase tracking-wider">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-[#0d1b2a] text-white rounded-lg text-sm hover:text-[#00d1d1] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
