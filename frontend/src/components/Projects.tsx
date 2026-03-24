import { useState, useEffect, useRef, useCallback } from 'react';
import travelImg from '../assets/travel.png';
import eventImg from '../assets/time.png';
import hospitalImg from '../assets/hospital.png';
import codeImg from '../assets/code.jpg';

const projects = [
  {
    id: 1,
    title: 'Exploratrails',
    description: 'AI-powered travel planning app using Gemini API, serving 10,000+ monthly users.',
    image: travelImg,
    category: 'MERN',
    tech: ['React', 'Firebase', 'Gemini AI'],
    link: 'https://travelappproject.vercel.app',
    github: 'https://github.com/tanisha-b3/Travel_app',
    date: 'Jan 2024',
  },
  {
    id: 2,
    title: 'QRCRAVE',
    description: 'QR-based restaurant menu and ordering system that reduced manual ordering overhead by 40%.',
    image: eventImg,
    category: 'MERN',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://qrbites-ui.azurewebsites.net/',
    github: 'https://github.com/tanisha-b3',
    date: 'Feb 2024',
  },
  {
    id: 3,
    title: 'EPICBOOK',
    description: 'Azure production deployment with Infrastructure as Code using Terraform workspaces.',
    image: codeImg,
    category: 'Cloud',
    tech: ['Azure', 'Terraform', 'Node.js', 'React'],
    link: '#',
    github: 'https://github.com/tanisha-b3/Terraform_Epicbook',
    date: 'Oct 2025',
  },
  {
    id: 4,
    title: 'EventPro',
    description: 'Event Management application for users to discover and manage events.',
    image: eventImg,
    category: 'MERN',
    tech: ['React', 'Express', 'MongoDB', 'Node.js'],
    link: 'https://event-pro-ohf3.vercel.app',
    github: 'https://github.com/tanisha-b3/EventPro',
    date: 'July 2025',
  },
  {
    id: 5,
    title: 'MetaMorph OMDB App',
    description: 'Movie database application for searching and exploring films using OMDB API.',
    image: codeImg,
    category: 'Frontend',
    tech: ['HTML', 'CSS', 'JavaScript', 'OMDB API'],
    link: '#',
    github: 'https://github.com/tanisha-b3/MetaMorph_OMDB_APP',
    date: 'Dec 2025',
  },
  {
    id: 6,
    title: 'Attendance App',
    description: 'Modern attendance tracking application built with TypeScript and React.',
    image: hospitalImg,
    category: 'MERN',
    tech: ['TypeScript', 'React', 'Node.js'],
    link: 'https://attendance-app-yeeq.vercel.app/',
    github: 'https://github.com/tanisha-b3/Attendance-App',
    date: 'Mar 2026',
  },
  {
    id: 7,
    title: 'Weather App',
    description: 'Real-time weather forecasting application with location-based services.',
    image: travelImg,
    category: 'Frontend',
    tech: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
    link: '#',
    github: 'https://github.com/tanisha-b3/Weather_App',
    date: 'Sep 2025',
  },
  {
    id: 8,
    title: 'Hospital Management System',
    description: 'A comprehensive Java-based project for hospital management.',
    image: hospitalImg,
    category: 'JAVA',
    tech: ['Java', 'MySQL', 'Swing'],
    link: '#',
    github: '#',
    date: 'Aug 2022',
  },
  {
    id: 9,
    title: 'CodeStreak',
    description: 'Tracking platform for LeetCode and Codeforces users.',
    image: codeImg,
    category: 'Frontend',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://competitive-tracking.vercel.app/',
    github: '#',
    date: 'Aug 2022',
  },
];

const categories = ['All', 'MERN', 'Cloud', 'Frontend', 'JAVA'];

interface TiltState {
  [key: number]: { x: number; y: number };
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [tiltState, setTiltState] = useState<TiltState>({});
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

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTiltState(prev => ({ ...prev, [id]: { x: rotateX, y: rotateY } }));
  }, []);

  const handleMouseLeave = useCallback((id: number) => {
    setTiltState(prev => ({ ...prev, [id]: { x: 0, y: 0 } }));
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="portfolio"
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
              My Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My Recent <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my design projects across different categories
          </p>
        </div>

        {/* Controls */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-center gap-6 mb-12 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#00d1d1] text-[#0d1b2a]'
                    : 'bg-[#1b263b] text-gray-300 border border-[#00d1d1]/30 hover:border-[#00d1d1] hover:text-[#00d1d1]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-2.5 pl-12 bg-[#1b263b] border border-[#00d1d1]/30 rounded-full text-white placeholder-gray-500 focus:border-[#00d1d1] focus:outline-none transition-colors"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const cardLink = project.link !== '#' ? project.link : project.github !== '#' ? project.github : null;
            const tilt = tiltState[project.id] || { x: 0, y: 0 };
            return (
            <div
              key={project.id}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
              onClick={(e) => {
                if (cardLink && !(e.target as HTMLElement).closest('a')) {
                  window.open(cardLink, '_blank', 'noopener,noreferrer');
                }
              }}
              className={`project-card group relative bg-[#1b263b] rounded-2xl overflow-hidden border border-[#00d1d1]/10 hover:border-[#00d1d1]/50 ${cardLink ? 'cursor-pointer' : ''} ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.1s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
            >
              {/* Shine overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 - tilt.x * 3}%, rgba(0, 209, 209, 0.15), transparent 60%)`,
                }}
              />
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#00d1d1] text-[#0d1b2a] rounded-full text-xs font-bold">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00d1d1] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#0d1b2a] text-[#00d1d1] rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-[#00d1d1]/10">
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {project.date}
                  </span>
                  <div className="flex items-center gap-3">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#00d1d1] transition-colors"
                        title="View on GitHub"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#00d1d1] font-medium text-sm hover:text-[#6bffff] transition-colors"
                      >
                        View
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
          })}
        </div>

        {/* No results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
