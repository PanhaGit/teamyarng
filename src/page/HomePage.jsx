import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const containerRef = useRef(null);
  const heroImageRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state - card visible from the start
      gsap.set(cardRef.current, { x: "0%", opacity: 1, rotationY: 0 });
      gsap.set(titleRef.current, { y: 0, opacity: 1 });
      gsap.set(subtitleRef.current, { y: 0, opacity: 1 });
      gsap.set(ctaRef.current, { y: 0, opacity: 1, scale: 1 });

      // Pin the hero section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 1,
        pinSpacing: true,
      });

      // Parallax zoom and rotation on hero background
      gsap.to(heroImageRef.current, {
        scale: 1.2,
        rotation: 5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
        },
      });

      // Floating animation (starts immediately)
      gsap.to(cardRef.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Fade out card as user scrolls past
      gsap.to(cardRef.current, {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "+=2700",
          end: "+=300",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      >
        {/* Animated Background with Particles */}
        <div ref={heroImageRef} className="absolute inset-0 w-full h-full">
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* Floating text words about the team */}
          {[
            {
              word: "Innovation",
              size: "text-4xl",
              pos: { top: "15%", left: "10%" },
            },
            {
              word: "Creative",
              size: "text-3xl",
              pos: { top: "25%", right: "15%" },
            },
            {
              word: "Excellence",
              size: "text-5xl",
              pos: { top: "40%", left: "5%" },
            },
            {
              word: "Collaborative",
              size: "text-3xl",
              pos: { top: "60%", right: "10%" },
            },
            {
              word: "Agile",
              size: "text-2xl",
              pos: { bottom: "30%", left: "12%" },
            },
            {
              word: "Expert",
              size: "text-4xl",
              pos: { bottom: "20%", right: "20%" },
            },
            {
              word: "Passionate",
              size: "text-3xl",
              pos: { top: "70%", left: "20%" },
            },
            {
              word: "Innovative",
              size: "text-2xl",
              pos: { top: "35%", right: "25%" },
            },
          ].map((item, i) => (
            <div
              key={`word-${i}`}
              className={`absolute ${item.size} font-bold text-white/10 animate-float-slow pointer-events-none select-none`}
              style={{
                ...item.pos,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            >
              {item.word}
            </div>
          ))}

          {/* Floating code symbols */}
          {["{ }", "< />", "[ ]", "( )", "=>", "&&", "||", "==="].map(
            (symbol, i) => (
              <div
                key={`symbol-${i}`}
                className="absolute text-2xl font-mono text-cyan-400/20 animate-float-slow pointer-events-none select-none"
                style={{
                  left: `${10 + i * 11}%`,
                  top: `${20 + i * 8}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${10 + Math.random() * 5}s`,
                }}
              >
                {symbol}
              </div>
            )
          )}

          {/* Tech icons/symbols */}
          {["⚡", "🚀", "💡", "🔧", "⚙️", "🎯"].map((icon, i) => (
            <div
              key={`icon-${i}`}
              className="absolute text-4xl animate-float-slow pointer-events-none select-none opacity-20"
              style={{
                left: `${15 + i * 15}%`,
                bottom: `${10 + i * 10}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${12 + Math.random() * 6}s`,
              }}
            >
              {icon}
            </div>
          ))}

          {/* Animated connecting lines */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse"
              style={{
                width: `${200 + Math.random() * 300}px`,
                height: "2px",
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}

          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}

          {/* Binary numbers floating */}
          {["01", "10", "11", "00", "101", "010"].map((binary, i) => (
            <div
              key={`binary-${i}`}
              className="absolute text-xl font-mono text-blue-400/15 animate-float-slow pointer-events-none select-none"
              style={{
                right: `${5 + i * 10}%`,
                top: `${15 + i * 12}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${15 + Math.random() * 5}s`,
              }}
            >
              {binary}
            </div>
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) translateX(0px);
            }
            25% {
              transform: translateY(-20px) translateX(10px);
            }
            50% {
              transform: translateY(-40px) translateX(-10px);
            }
            75% {
              transform: translateY(-20px) translateX(5px);
            }
          }
          @keyframes float-slow {
            0%,
            100% {
              transform: translateY(0px) translateX(0px);
              opacity: 0.1;
            }
            25% {
              transform: translateY(-30px) translateX(15px);
              opacity: 0.15;
            }
            50% {
              transform: translateY(-60px) translateX(-20px);
              opacity: 0.08;
            }
            75% {
              transform: translateY(-30px) translateX(10px);
              opacity: 0.12;
            }
          }
          .animate-float {
            animation: float linear infinite;
          }
          .animate-float-slow {
            animation: float-slow ease-in-out infinite;
          }
        `}</style>

        {/* Animated Content Card */}
        <div
          ref={cardRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl"
          style={{ perspective: "1000px" }}
        >
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-12 lg:p-16 shadow-2xl border border-white/10">
            <h1
              ref={titleRef}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Building Digital
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Excellence Together
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed"
            >
              We craft innovative software solutions that transform ideas into
              powerful digital experiences.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                View Our Work
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact CTA Section */}
      <ContactSection />
    </div>
  );
};

// Services Section
const ServicesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, []);

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Custom web applications built with modern technologies and best practices",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      desc: "Native and cross-platform mobile solutions for iOS and Android",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure and deployment strategies",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interfaces that users love to interact with",
    },
    {
      icon: "🔧",
      title: "API Development",
      desc: "Robust RESTful and GraphQL APIs for seamless integration",
    },
    {
      icon: "🚀",
      title: "DevOps",
      desc: "CI/CD pipelines and automated deployment workflows",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Full-stack development expertise to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Portfolio Section
const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      projectsRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    },
    {
      title: "Healthcare Management System",
      category: "SaaS Solution",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    },
    {
      title: "Financial Dashboard",
      category: "Analytics Platform",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore our portfolio of successful digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => (projectsRef.current[i] = el)}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-cyan-400 text-sm font-semibold mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Tech Stack Section
const TechStackSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".tech-badge"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  const technologies = [
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "Next.js",
    "Vue.js",
    "Django",
    "FastAPI",
    "Redis",
  ];

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technologies for modern software development
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="tech-badge px-8 py-4 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <span className="text-lg font-semibold text-gray-800">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Team Section
const TeamSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".stat-card"),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Team Members" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A dedicated team committed to your success
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20"
            >
              <div className="text-5xl lg:text-6xl font-bold text-cyan-400 mb-4">
                {stat.number}
              </div>
              <div className="text-lg text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Section
const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 to-gray-900 py-20 lg:py-32 flex items-center">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-5xl lg:text-7xl font-bold text-black mb-8">
          Ready to Start Your
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Next Project?
          </span>
        </h2>
        <p className="text-xl text-black mb-12 max-w-2xl mx-auto">
          Let's discuss how we can help transform your ideas into reality
        </p>
        <button className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg rounded-xl font-semibold shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default HomePage;
