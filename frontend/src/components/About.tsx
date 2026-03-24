import { useEffect, useRef, useState } from 'react';
import aboutImg from '../assets/hero1.jpg';

const skills = [
  { name: 'Java', level: 90, color: '#00d1d1' },
  { name: 'React', level: 90, color: '#61dafb' },
  { name: 'Node.js', level: 85, color: '#68a063' },
  { name: 'MongoDB', level: 85, color: '#4db33d' },
  { name: 'TypeScript', level: 80, color: '#3178c6' },
  { name: 'Tailwind CSS', level: 90, color: '#38bdf8' },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-[#0d1b2a] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00d1d1]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
          >
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00d1d1]/20 to-transparent rounded-3xl transform -rotate-6" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#00d1d1]/10">
                <img
                  src={aboutImg}
                  alt="About Tanisha"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-transparent to-transparent" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#1b263b] rounded-2xl p-6 border border-[#00d1d1]/30 shadow-xl">
                <div className="text-4xl font-bold text-[#00d1d1]">9+</div>
                <div className="text-gray-400 text-sm">Months of<br />Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d1d1]/10 border border-[#00d1d1]/30 mb-6">
              <span className="text-[#00d1d1] text-sm font-medium">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Hi, I'm <span className="gradient-text">Tanisha Borana</span>
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              A passionate Full Stack Developer specializing in{' '}
              <span className="text-[#00d1d1]">Java</span> and{' '}
              <span className="text-[#00d1d1]">MERN stack</span> technologies.
              With hands-on experience building scalable web applications like
              Exploratrails and Platter Palooza, I thrive on transforming ideas
              into seamless digital experiences.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I'm committed to writing clean, efficient code and staying current
              with the latest industry trends. Let's build something amazing
              together!
            </p>

            {/* Skills */}
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-white mb-4">
                My Skills
              </h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium group-hover:text-[#00d1d1] transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[#00d1d1] font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#1b263b] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        backgroundColor: skill.color,
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 bg-[#00d1d1] text-[#0d1b2a] rounded-full font-semibold"
              >
                Let's Talk
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-full font-semibold hover:border-[#00d1d1] hover:text-[#00d1d1] transition-all duration-300"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
