import { useEffect, useRef, useState } from 'react';

const educationData = [
  {
    id: 1,
    degree: 'B.Tech in Information Technology',
    institution: 'Lakshmi Narain College of Technology',
    location: 'Bhopal, MP',
    period: 'Nov 2021 – Jun 2025',
    grade: 'CGPA: 8.4',
    icon: '🎓',
  },
  {
    id: 2,
    degree: 'Higher Secondary (12th)',
    institution: 'Dashpur Vidhyalaya Mandsaur',
    location: 'Mandsaur, MP',
    period: 'Apr 2019 – Aug 2020',
    grade: '89.8%',
    icon: '📚',
  },
  {
    id: 3,
    degree: 'Secondary School (10th)',
    institution: 'Dashpur Vidhyalaya Mandsaur',
    location: 'Mandsaur, MP',
    period: 'Apr 2017 – Mar 2018',
    grade: '84.8%',
    icon: '📖',
  },
];

const certifications = [
  {
    id: 1,
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    year: '2023',
    description: 'Cloud Computing Certification',
  },
  {
    id: 2,
    title: 'DevOps Micro-Internship',
    issuer: 'Pravin Mishra',
    year: '2024',
    description: 'DevOps, CI/CD, Cloud Computing',
  },
  {
    id: 3,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    description: 'Cybersecurity Fundamentals, Network Security',
  },
];

const achievements = [
  'LeetCode Rating 1450 | HackerRank 3-Star (Java)',
  'Smart India Hackathon 2023 Participant',
  'Open Source Contributor, Hacktoberfest 2023',
  'Bronze Medalist, National GK Olympiad',
];

const Education = () => {
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
      id="education"
      ref={sectionRef}
      className="py-24 bg-[#0d1b2a] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#00d1d1]/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-[#00d1d1]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d1d1]/10 border border-[#00d1d1]/30 mb-6">
            <span className="text-[#00d1d1] text-sm font-medium">
              Education & Achievements
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div
            className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#00d1d1]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#00d1d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </span>
              Education
            </h3>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={edu.id}
                  className="relative pl-8 pb-6 border-l-2 border-[#00d1d1]/30 last:pb-0"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00d1d1] border-4 border-[#0d1b2a]" />

                  <div className="bg-[#1b263b] rounded-xl p-6 border border-[#00d1d1]/10 hover:border-[#00d1d1]/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-[#00d1d1] font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-[#00d1d1]/10 text-[#00d1d1] rounded-full text-sm font-semibold">
                        {edu.grade}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div
            className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            {/* Certifications */}
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#00d1d1]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#00d1d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </span>
              Certifications
            </h3>

            <div className="space-y-4 mb-10">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="bg-[#1b263b] rounded-xl p-5 border border-[#00d1d1]/10 hover:border-[#00d1d1]/30 transition-all duration-300 group"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-[#00d1d1] transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        {cert.description}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-[#0d1b2a] text-[#00d1d1] rounded-full text-xs font-medium">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#00d1d1]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#00d1d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
              Achievements
            </h3>

            <div className="bg-[#1b263b] rounded-xl p-6 border border-[#00d1d1]/10">
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00d1d1] mt-2 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
