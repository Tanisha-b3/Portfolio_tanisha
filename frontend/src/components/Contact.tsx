import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xzzvreyk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-[#1b263b] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00d1d1]/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00d1d1]/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <div
            className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d1d1]/10 border border-[#00d1d1]/30 mb-6">
              <span className="text-[#00d1d1] text-sm font-medium">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Got a project in <span className="gradient-text">mind?</span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Let's create something amazing together. Reach out and I'll get
              back to you within 24 hours.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <a
                href="mailto:tanishaborana05@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-[#0d1b2a] rounded-xl flex items-center justify-center group-hover:bg-[#00d1d1]/10 transition-colors border border-[#00d1d1]/20">
                  <svg
                    className="w-6 h-6 text-[#00d1d1]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium group-hover:text-[#00d1d1] transition-colors">
                    tanishaborana05@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#0d1b2a] rounded-xl flex items-center justify-center border border-[#00d1d1]/20">
                  <svg
                    className="w-6 h-6 text-[#00d1d1]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">India</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10">
              <p className="text-gray-400 text-sm mb-4">Follow me on</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Tanisha-b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0d1b2a] rounded-xl flex items-center justify-center border border-[#00d1d1]/20 hover:border-[#00d1d1] hover:bg-[#00d1d1]/10 transition-all group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-[#00d1d1] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/tanisha-borana-552797233/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0d1b2a] rounded-xl flex items-center justify-center border border-[#00d1d1]/20 hover:border-[#00d1d1] hover:bg-[#00d1d1]/10 transition-all group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-[#00d1d1] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61558510859937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0d1b2a] rounded-xl flex items-center justify-center border border-[#00d1d1]/20 hover:border-[#00d1d1] hover:bg-[#00d1d1]/10 transition-all group"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-[#00d1d1] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div
            className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0d1b2a] rounded-2xl p-8 border border-[#00d1d1]/20"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 bg-[#1b263b] border border-[#00d1d1]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#00d1d1] focus:outline-none transition-colors"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 bg-[#1b263b] border border-[#00d1d1]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#00d1d1] focus:outline-none transition-colors"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  placeholder="Tell me about your project"
                  className="w-full px-5 py-4 bg-[#1b263b] border border-[#00d1d1]/20 rounded-xl text-white placeholder-gray-500 focus:border-[#00d1d1] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary py-4 bg-[#00d1d1] text-[#0d1b2a] rounded-xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
