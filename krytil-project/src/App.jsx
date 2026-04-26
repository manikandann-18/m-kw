import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Cpu, 
  Globe, 
  Layers, 
  Users, 
  Mail, 
  ArrowRight, 
  ChevronRight, 
  Menu, 
  X, 
  Activity, 
  Box, 
  MapPin, 
  MessageSquare, 
  FileText, 
  Shield, 
  BarChart3, 
  Code2, 
  Zap, 
  Search, 
  Phone, 
  MessageCircle, 
  Briefcase, 
  Lightbulb,
  Compass,
  Database,
  Target,
  TrendingUp,
  Award,
  Clock,
  ExternalLink,
  ChevronLeft,
  Link as LinkIcon,
  Building2,
  GraduationCap,
  Layers as DomainIcon,
  UserCheck
} from 'lucide-react';

// --- Decorative Components ---

const SideDecorations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
      <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-200 to-transparent opacity-30 hidden lg:block">
        <div className="absolute top-1/4 left-[-1.5px] w-1.5 h-16 bg-blue-500 rounded-full animate-[moveDown_10s_linear_infinite] shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
        <div className="absolute top-1/2 left-[-1.5px] w-1.5 h-8 bg-red-500 rounded-full animate-[moveDown_15s_linear_infinite_2s]"></div>
      </div>
      <div className="absolute right-2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-200 to-transparent opacity-30 hidden lg:block">
        <div className="absolute bottom-1/4 left-[-1.5px] w-1.5 h-20 bg-green-500 rounded-full animate-[moveUp_12s_linear_infinite] shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
        <div className="absolute bottom-1/2 left-[-1.5px] w-1.5 h-10 bg-yellow-500 rounded-full animate-[moveUp_18s_linear_infinite_1s]"></div>
      </div>
    </div>
  );
};

const BlueprintGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frame;

    const resize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      canvas.width = container.clientWidth * window.devicePixelRatio;
      canvas.height = container.clientHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener('resize', resize);
    resize();

    const particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * (canvas.width / window.devicePixelRatio),
        y: Math.random() * (canvas.height / window.devicePixelRatio),
        v: Math.random() * 0.5 + 0.2,
        size: Math.random() * 2 + 1
      });
    }

    const draw = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, w, h);
      
      ctx.strokeStyle = 'rgba(161, 161, 170, 0.08)';
      ctx.lineWidth = 0.5;
      const step = 60;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
      particles.forEach(p => {
        p.y -= p.v;
        if (p.y < 0) p.y = h;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      frame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-40" />;
};

const NeuralMesh = ({ opacity = 0.8 }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const colors = ['#3b82f6', '#ef4444', '#f59e0b', '#22c55e'];
    const nodes = [];
    const nodeCount = 100;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * (canvas.width / window.devicePixelRatio),
        y: Math.random() * (canvas.height / window.devicePixelRatio),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        const dxMouse = n1.x - mouseRef.current.x;
        const dyMouse = n1.y - mouseRef.current.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distMouse < 200) {
          const force = (200 - distMouse) / 200;
          const angle = Math.atan2(dyMouse, dxMouse);
          n1.x += Math.cos(angle) * force * 5;
          n1.y += Math.sin(angle) * force * 5;
        } else {
          n1.x += n1.vx;
          n1.y += n1.vy;
        }

        if (n1.x < 0) n1.x = width; if (n1.x > width) n1.x = 0;
        if (n1.y < 0) n1.y = height; if (n1.y > height) n1.y = 0;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(161, 161, 170, ${0.1 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = n1.color;
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => { mouseRef.current = { x: -1000, y: -1000 }; };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full z-0 pointer-events-none`} 
      style={{ opacity, touchAction: 'none' }} 
    />
  );
};

// --- Modal Component ---

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 w-full">
      <div 
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-md transition-opacity duration-500 animate-in fade-in" 
        onClick={onClose}
      />
      <div className="bg-white w-full max-w-4xl mx-auto rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row animate-in slide-in-from-bottom-8 duration-500 max-h-[95vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors z-20 shadow-sm"
        >
          <X size={20} />
        </button>

        <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden shrink-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
        </div>

        <div className="w-full md:w-3/5 p-6 md:p-10 lg:p-14 flex flex-col overflow-y-auto no-scrollbar">
          <div className={`w-12 h-12 md:w-14 md:h-14 ${service.color} bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm shrink-0`}>
            {service.icon}
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-zinc-900 uppercase tracking-tighter mb-4 shrink-0">{service.title}</h3>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-light mb-6 shrink-0">
            {service.detailedContent || service.content}
          </p>
          
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 shrink-0">
            <div>
              <h4 className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-2">{service.col1Title}</h4>
              <ul className="text-xs md:text-sm font-bold text-zinc-800 space-y-1">
                {service.col1?.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-2">{service.col2Title}</h4>
              <ul className="text-xs md:text-sm font-bold text-zinc-800 space-y-1">
                {service.col2?.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          </div>

          <button className="bg-zinc-900 text-white font-black px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl active:scale-95 self-start mt-auto">
            Request Implementation
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Navbar Component ---

const Navbar = ({ onScroll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false); }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Careers', id: 'careers' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-zinc-200/60 py-2 shadow-md' 
        : 'bg-white/70 backdrop-blur-lg border-zinc-200/40 py-4' 
    }`}>
      <div className="w-full max-w-[1920px] 2xl:px-20 mx-auto px-6 md:px-10 lg:px-12 flex justify-between items-center relative">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onScroll('home')}>
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center shadow-lg group-hover:bg-black transition-all duration-500 transform group-hover:-rotate-12">
            <span className="text-white font-bold text-xs underline decoration-blue-500 decoration-2">K</span>
          </div>
          <span className="text-zinc-900 font-bold tracking-[0.4em] text-lg uppercase hidden sm:block">KRYTIL</span>
        </div>

        <div className="relative" ref={menuRef}>
          <button 
            className={`flex items-center space-x-3 px-5 py-2 rounded-full border transition-all duration-500 ${
              isOpen ? 'bg-zinc-900 border-zinc-900 text-white shadow-xl' : 'bg-white/80 border-zinc-200 text-zinc-900 hover:border-zinc-400'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] hidden sm:block">Explore</span>
            {isOpen ? <X size={16} strokeWidth={2.5} /> : <Menu size={16} strokeWidth={2.5} />}
          </button>

          <div className={`absolute top-full right-0 mt-4 w-64 bg-white/95 backdrop-blur-2xl border border-zinc-200 rounded-[2rem] shadow-[0_30px_70_rgba(0,0,0,0.1)] transition-all duration-500 origin-top-right z-[110] overflow-hidden ${
            isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
          }`}>
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => { onScroll(link.id); setIsOpen(false); }}
                  className="flex items-center justify-between px-8 py-4 text-left group hover:bg-zinc-50 transition-all border-b border-zinc-50 last:border-0"
                >
                  <span className="text-[12px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-900 transition-colors">{link.name}</span>
                  <div className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-125 bg-zinc-900"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const TiltContactCard = ({ href, icon: Icon, colorClass, label, value, delay, visible }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rX = (y - 0.5) * 12;
    const rY = (x - 0.5) * -12;
    setRotate({ x: rX, y: rY });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <a 
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bg-white w-full p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-zinc-200 shadow-sm hover:shadow-2xl transition-all duration-700 group block relative overflow-hidden ${visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      style={{ 
        transitionDelay: `${delay}s`,
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      <div className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent -translate-y-full group-hover:animate-[scanline_1.5s_ease-in-out_infinite] pointer-events-none"></div>
      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-8 relative transition-transform duration-500 group-hover:scale-110 ${colorClass.bg} ${colorClass.text}`}>
          <div className={`absolute inset-0 ${colorClass.pulse} rounded-2xl animate-ping opacity-20 scale-125 group-hover:animate-none`}></div>
          <Icon size={28} className="relative z-10 transition-transform duration-500 group-hover:translate-x-[2px] group-hover:translate-y-[-2px]" />
      </div>
      <h4 className="text-zinc-400 text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-2 md:mb-3 transition-colors duration-500 group-hover:text-zinc-600">{label}</h4>
      <p className="text-zinc-500 font-bold text-base md:text-lg break-all transition-all duration-500 group-hover:text-black group-hover:tracking-tight leading-snug">{value}</p>
      <div className="absolute bottom-6 right-6 w-4 h-4 border-r-2 border-b-2 border-zinc-100 group-hover:border-zinc-300 transition-colors"></div>
    </a>
  );
};

// --- Main App ---

export default function App() {
  const carouselRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [activeForm, setActiveForm] = useState('project');
  const [contactVisible, setContactVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset matches navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.05 };
    const contactObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setContactVisible(true);
    }, observerOptions);

    const aboutObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setAboutVisible(true);
    }, observerOptions);

    if (contactRef.current) contactObserver.observe(contactRef.current);
    if (aboutRef.current) aboutObserver.observe(aboutRef.current);

    return () => {
      if (contactRef.current) contactObserver.unobserve(contactRef.current);
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current);
    };
  }, []);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const services = [
    { 
      title: "IT Solutions", 
      icon: <Cpu size={26} />, 
      color: "text-blue-500", 
      border: "border-blue-100", 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", 
      content: "Empowering enterprises with innovative AI-driven solutions, intelligent automation, and scalable IT strategies.",
      detailedContent: "Empowering enterprises with innovative AI-driven solutions, intelligent automation, and scalable IT strategies that accelerate digital transformation and business growth.",
      col1Title: "AI & Analytics",
      col1: ["• Custom AI Development", "• Predictive Analytics"],
      col2Title: "Processing",
      col2: ["• Natural Language Processing", "• Computer Vision"]
    },
    { 
      title: "Resume AI", 
      icon: <FileText size={26} />, 
      color: "text-purple-500", 
      border: "border-purple-100", 
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", 
      content: "An intelligent platform that helps professionals craft stunning, personalized resumes in minutes powered by AI.",
      detailedContent: "An intelligent platform that helps professionals craft stunning, personalized resumes in minutes powered by AI that highlights your unique skills and achievements.",
      col1Title: "Features",
      col1: ["• Smart Resume Templates", "• Real-Time Editing"],
      col2Title: "Enhancements",
      col2: ["• Content Suggestions", "• Cloud Storage Sync"]
    },
    { 
      title: "School Tech", 
      icon: <GraduationCap size={26} />, 
      color: "text-yellow-600", 
      border: "border-yellow-100", 
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", 
      content: "Redefining learning with interactive AI-powered courses, smart progress tracking, and real-world projects.",
      detailedContent: "Redefining learning with interactive AI-powered courses, smart progress tracking, and real-world projects that prepare students for the future of technology.",
      col1Title: "Learning",
      col1: ["• Adaptive Learning Paths", "• Project-Based Curriculum"],
      col2Title: "Tracking",
      col2: ["• Interactive Dashboards", "• Collaborative Tools"]
    },
    { 
      title: "LinkedIn Growth", 
      icon: <TrendingUp size={26} />, 
      color: "text-green-600", 
      border: "border-green-100", 
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=800", 
      content: "Your AI-powered career growth companion - track engagement, analyze network trends, and optimize performance.",
      detailedContent: "Your AI-powered career growth companion - track engagement, analyze network trends, and optimize your LinkedIn performance with real-time analytics.",
      col1Title: "Analytics",
      col1: ["• Profile Insights", "• Smart Analytics Tracking"],
      col2Title: "Growth",
      col2: ["• Career Trend Analysis", "• Performance Dashboard"]
    },
    { 
      title: "Campus Training", 
      icon: <Users size={26} />, 
      color: "text-red-500", 
      border: "border-red-100", 
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800", 
      content: "Bridging the gap between academic learning and industry readiness through AI-based career training and guidance.",
      detailedContent: "Bridging the gap between academic learning and industry readiness through AI-based career training, soft skills enhancement, and hands-on corporate exposure.",
      col1Title: "Development",
      col1: ["• Career Readiness Program", "• Soft Skills Training"],
      col2Title: "Placement",
      col2: ["• Mock Interviews", "• Internship Guidance"]
    },
    { 
      title: "AI Consulting", 
      icon: <Lightbulb size={26} />, 
      color: "text-indigo-500", 
      border: "border-indigo-100", 
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", 
      content: "Expert guidance on AI strategy, implementation, and optimization to harness the power of artificial intelligence.",
      detailedContent: "Expert guidance on AI strategy, implementation, and optimization to help businesses harness the power of artificial intelligence for competitive advantage.",
      col1Title: "Strategy",
      col1: ["• AI Strategy Planning", "• Technology Assessment"],
      col2Title: "Execution",
      col2: ["• Implementation Support", "• Performance Optimization"]
    }
  ];

  return (
    <div className="bg-[#f3f4f6] text-zinc-600 font-sans selection:bg-blue-100 selection:text-blue-900 min-h-screen w-full antialiased flex flex-col">
      {/* GLOBAL DOT GRID BACKGROUND */}
      <div className="fixed inset-0 w-full pointer-events-none z-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#cfd5dd 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <Navbar onScroll={scrollToSection} />

      <main className="flex-grow pt-[80px] w-full">
        
        {/* HERO SECTION */}
        <section id="home" className="scroll-mt-32 relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center border-b border-zinc-200/50 overflow-hidden">
          
          <div className="absolute inset-0 w-full z-0">
             <NeuralMesh opacity={0.6} />
             <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#f3f4f6]/40 pointer-events-none"></div>
          </div>

          <SideDecorations />

          <div className="relative z-10 w-full max-w-[1920px] 2xl:px-20 mx-auto px-6 md:px-10 lg:px-12 flex flex-col items-center animate-in fade-in duration-1000">
            <div className="flex space-x-1.5 mb-8 lg:mb-10 justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            </div>

            <div className="w-full max-w-4xl text-center mx-auto">
              <h1 className="text-4xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] font-black text-zinc-900 mb-6 leading-[0.95] tracking-tighter uppercase">
                Build the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600">Intelligent</span> <br />
                Digital Hub.
              </h1>
              <p className="text-zinc-600 text-base md:text-xl lg:text-2xl mb-10 md:mb-14 max-w-xl mx-auto leading-relaxed font-light">
                High-fidelity design meets industrial engineering. We architect the future with titanium-grade precision and neural speed.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 md:gap-5 relative z-20">
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="bg-zinc-900 text-white font-black px-10 py-5 md:px-12 md:py-6 rounded-full flex items-center space-x-4 hover:bg-black transition-all uppercase text-[10px] md:text-[11px] tracking-[0.2em] shadow-2xl active:scale-95 cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight size={18} />
                </button>

                <button 
                  onClick={() => scrollToSection('careers')} 
                  className="bg-zinc-100 border border-zinc-200 text-zinc-600 font-black px-10 py-5 md:px-12 md:py-6 rounded-full hover:bg-zinc-200 transition-all uppercase text-[10px] md:text-[11px] tracking-[0.2em] shadow-sm active:scale-95 cursor-pointer"
                >
                  <span>Join us</span>
                </button>
              </div>
            </div>

            <div className="absolute top-1/2 right-12 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none hidden xl:block">
              <span className="text-[30rem] font-black leading-none">K</span>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="scroll-mt-20 relative w-full py-8 md:py-12 px-6 md:px-10 lg:px-12 border-t border-zinc-200/70">
          <div className="w-full max-w-[1920px] 2xl:px-20 mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-zinc-900 uppercase tracking-tighter mb-6 md:mb-10 text-center">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <div className="relative w-full group">
              <button onClick={() => scrollCarousel('left')} className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-zinc-200 text-zinc-400 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-zinc-900 hover:text-white shadow-lg"><ChevronLeft size={20} /></button>
              <button onClick={() => scrollCarousel('right')} className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-zinc-200 text-zinc-400 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-zinc-900 hover:text-white shadow-lg"><ChevronRight size={20} /></button>
              
              <div ref={carouselRef} className="flex overflow-x-auto gap-6 md:gap-10 pb-6 snap-x snap-mandatory no-scrollbar scroll-smooth w-full">
                {services.map((service, idx) => (
                  <div key={idx} className={`flex-shrink-0 w-[280px] md:w-[480px] snap-center bg-white border ${service.border} rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden hover:shadow-2xl transition-all duration-700 group/card flex flex-col shadow-sm cursor-pointer`}>
                    <div className="h-64 md:h-80 relative overflow-hidden w-full" onClick={() => setSelectedService(service)}>
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-1000" />
                      <div className="absolute inset-0 w-full bg-gradient-to-t from-white via-white/5 to-transparent"></div>
                      <div className={`absolute top-6 left-6 md:top-8 md:left-8 ${service.color} p-4 md:p-6 rounded-2xl bg-white/95 shadow-xl transform group-hover/card:-rotate-6 transition-transform duration-500`}>{service.icon}</div>
                    </div>
                    <div className="w-full p-8 md:p-14 flex flex-col flex-grow">
                      <h3 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4 md:mb-6 uppercase tracking-tighter">{service.title}</h3>
                      <p className="text-zinc-500 text-base md:text-lg mb-8 md:mb-12 flex-grow font-light leading-relaxed">{service.content.length > 110 ? service.content.substring(0, 110) + '...' : service.content}</p>
                      <button onClick={() => setSelectedService(service)} className={`flex items-center font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] ${service.color} group-hover/card:translate-x-4 transition-transform duration-500`}>
                        <span>Launch Briefing</span>
                        <ArrowRight size={14} className="ml-2" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" ref={aboutRef} className="scroll-mt-20 relative w-full py-8 md:py-12 px-6 md:px-10 lg:px-12 border-t border-zinc-200/70 bg-white/30 overflow-hidden">
          <BlueprintGrid />
          <div className="w-full max-w-[1920px] 2xl:px-20 mx-auto relative z-10 flex flex-col items-center text-center">
            <div className={`w-full max-w-5xl flex flex-col items-center transition-all duration-1000 transform ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-zinc-900 uppercase tracking-tighter mb-6 md:mb-10 text-center">
                About <span className="text-red-500">Us</span>
              </h2>
              <div className="w-full text-center">
                <h3 className="text-2xl md:text-4xl lg:text-6xl font-black text-zinc-900 uppercase tracking-tighter mb-6 lg:mb-8 leading-[1.1] mx-auto">
                  Technology with Purpose.
                </h3>
                <p className="text-zinc-500 text-lg md:text-3xl leading-relaxed font-normal mb-6 md:mb-8 max-w-4xl mx-auto">
                  KRYTIL PRIVATE LIMITED is a technology-driven company focused on building intelligent software solutions that solve real-world problems.
                </p>
                <p className="text-zinc-500 text-lg md:text-3xl leading-relaxed font-normal mb-8 lg:mb-12 max-w-4xl opacity-80 mx-auto">
                  We empower businesses, students, and professionals with AI-driven software solutions, scalable platforms, and future-ready digital systems. We help our partners leverage automation and scalable systems to accelerate growth and innovation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 border-t border-zinc-200 pt-8 md:pt-16 mt-8 w-full">
                  {[
                    { value: "5+", label: "Industry Experience", icon: <Award className="text-indigo-600 mb-4" size={44} />, delay: '0.2s' },
                    { value: "50+", label: "Expert Team", icon: <Users className="text-red-600 mb-4" size={44} />, delay: '0.4s' },
                    { value: "24/7", label: "Support", icon: <Clock className="text-green-600 mb-4" size={44} />, delay: '0.6s' }
                  ].map((stat, i) => (
                    <div key={i} className={`group transition-all duration-1000 transform flex flex-col items-center ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: stat.delay }}>
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                      <div className="text-6xl md:text-8xl font-black text-zinc-900 mb-2 tracking-tighter uppercase whitespace-nowrap text-center">{stat.value}</div>
                      <h4 className="text-zinc-400 font-black uppercase tracking-[0.2em] text-xs md:text-lg leading-tight text-center">
                        {stat.label.split(' ').map((word, idx) => <span key={idx} className="block">{word}</span>)}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAREERS & PROJECTS SECTION */}
        <section id="careers" className="scroll-mt-20 relative w-full py-8 md:py-12 px-6 md:px-10 lg:px-12 border-t border-zinc-200/70">
          <div className="w-full max-w-[1920px] 2xl:px-20 mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-zinc-900 uppercase tracking-tighter mb-6 md:mb-10 text-center">
              {activeForm === 'project' ? "Build Your " : "Start Your "}
              <span className={`${activeForm === 'project' ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600'} font-black transition-colors duration-500`}>
                {activeForm === 'project' ? "Digital Core." : "Career Hub."}
              </span>
            </h2>
            
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12 w-full text-center">
                 <div 
                  onClick={() => setActiveForm('project')} 
                  className={`flex flex-col items-center w-full p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border cursor-pointer transition-all duration-500 shadow-sm hover:-translate-y-1 ${activeForm === 'project' ? 'bg-zinc-900 border-zinc-900 text-white shadow-2xl' : 'bg-white border-zinc-200/80 group hover:shadow-xl'}`}
                 >
                   <Lightbulb className={`mb-6 w-8 h-8 md:w-10 md:h-10 ${activeForm === 'project' ? 'text-yellow-400' : 'text-zinc-900'}`} />
                   <h4 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 uppercase tracking-tighter text-center">Start Your Project</h4>
                   <p className={`leading-relaxed font-light text-sm md:text-lg text-center ${activeForm === 'project' ? 'text-zinc-400' : 'text-zinc-500'}`}>Scale your product from ideation to launch with precision engineering.</p>
                 </div>
                 <div 
                  onClick={() => setActiveForm('internship')} 
                  className={`flex flex-col items-center w-full p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border cursor-pointer transition-all duration-500 shadow-sm hover:-translate-y-1 ${activeForm === 'internship' ? 'bg-zinc-900 border-zinc-900 text-white shadow-2xl' : 'bg-white border-zinc-200/80 group hover:shadow-xl'}`}
                 >
                   <Users className={`mb-6 w-8 h-8 md:w-10 md:h-10 ${activeForm === 'internship' ? 'text-blue-400' : 'text-blue-500'}`} />
                   <h4 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 uppercase tracking-tighter text-center">Apply for Internship</h4>
                   <p className={`leading-relaxed font-light text-sm md:text-lg text-center ${activeForm === 'internship' ? 'text-zinc-400' : 'text-zinc-500'}`}>Join our team to work on real-world projects and build the future.</p>
                 </div>
              </div>

              <div className="w-full space-y-6 md:space-y-8 animate-in fade-in duration-700 bg-white/50 backdrop-blur-sm p-6 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-zinc-200/60 shadow-inner">
                 <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {activeForm === 'project' ? (
                      <>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Full Name</label>
                          <input className="w-full bg-white border border-zinc-200 p-5 md:p-6 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" placeholder="Deepak" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Active Email</label>
                          <input className="w-full bg-white border border-zinc-200 p-5 md:p-6 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" placeholder="deepak@example.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Organization</label>
                          <div className="relative">
                            <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300" size={20} />
                            <input className="w-full bg-white border border-zinc-200 p-5 md:p-6 pl-16 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" placeholder="Company Name" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Active Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300" size={20} />
                            <input className="w-full bg-white border border-zinc-200 p-5 md:p-6 pl-16 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" placeholder="+91 XXXXX XXXXX" />
                          </div>
                        </div>
                        <div className="md:col-span-2 space-y-2 pt-2">
                          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Project Brief</label>
                          <textarea rows="4" className="w-full bg-white border border-zinc-200 p-5 md:p-6 rounded-[2rem] text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold resize-none text-left" placeholder="Describe your vision and requirements..."></textarea>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Full Name</label>
                          <input className="w-full bg-white border border-zinc-200 p-5 md:p-6 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" placeholder="Deepak" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Active Email</label>
                          <input className="w-full bg-white border border-zinc-200 p-5 md:p-6 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" placeholder="deepak@example.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Target Role</label>
                          <div className="relative">
                            <UserCheck className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 pointer-events-none z-10" size={20} />
                            <select className="w-full bg-white border border-zinc-200 p-5 md:p-6 pl-16 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all font-bold appearance-none relative text-left">
                              <option value="">Select Desired Role</option>
                              <option>Frontend Developer</option>
                              <option>Backend Developer</option>
                              <option>Full-Stack Developer</option>
                              <option>AI/ML Engineer</option>
                              <option>UI/UX Designer</option>
                              <option>Business Development Associate</option>
                            </select>
                            <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-zinc-300 pointer-events-none" size={18} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Academic Institution</label>
                          <div className="relative">
                            <GraduationCap className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300" size={20} />
                            <input className="w-full bg-white border border-zinc-200 p-5 md:p-6 pl-16 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" placeholder="University Name" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Portfolio/Resume Link</label>
                          <div className="relative">
                            <LinkIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300" size={20} />
                            <input className="w-full bg-white border border-zinc-200 p-5 md:p-6 pl-16 rounded-2xl text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold text-left" placeholder="github.com/profile or Drive Link" />
                          </div>
                        </div>
                        <div className="md:col-span-2 space-y-2 pt-2">
                          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4 block text-left">Statement of Purpose</label>
                          <textarea rows="4" className="w-full bg-white border border-zinc-200 p-5 md:p-6 rounded-[2rem] text-zinc-900 text-base focus:ring-4 ring-zinc-900/10 outline-none transition-all placeholder:text-zinc-300 font-bold resize-none text-left" placeholder="Tell us about your skillsets, goals and why you want to join Krytil..."></textarea>
                        </div>
                      </>
                    )}
                 </div>
                 <button className="bg-zinc-900 text-white font-black px-10 py-5 md:px-14 md:py-6 rounded-full text-[10px] md:text-[12px] uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl active:scale-95 flex items-center justify-center group mt-8 mx-auto w-fit">
                   <span>{activeForm === 'project' ? 'Initiate Briefing' : 'Submit Candidacy'}</span>
                   <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" ref={contactRef} className="scroll-mt-20 relative w-full py-12 lg:py-24 px-6 md:px-10 lg:px-12 border-t border-zinc-200/70 bg-zinc-50/40 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-500/5 blur-[180px] rounded-full animate-[spin_40s_linear_infinite] pointer-events-none"></div>
          <div className="w-full max-w-[1920px] 2xl:px-20 mx-auto relative z-10 flex flex-col items-center">
            <h2 className={`text-5xl md:text-8xl lg:text-[10rem] font-black text-zinc-900 uppercase tracking-tighter mb-10 md:mb-16 transition-all duration-1000 transform text-center ${contactVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>Get In Touch</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
               <TiltContactCard href="mailto:info@krytil.com" icon={Mail} colorClass={{ bg: "bg-blue-50", text: "text-blue-500", pulse: "bg-blue-500/20" }} label="Email Us" value="info@krytil.com" delay={0.1} visible={contactVisible} />
               <TiltContactCard href="tel:+919535333301" icon={Phone} colorClass={{ bg: "bg-red-50", text: "text-red-500", pulse: "bg-red-500/20" }} label="Call Us" value="+91 95353 33301" delay={0.2} visible={contactVisible} />
               <TiltContactCard href="https://wa.me/919535333301" icon={MessageCircle} colorClass={{ bg: "bg-green-50", text: "text-green-600", pulse: "bg-green-500/20" }} label="WhatsApp" value="Connect Now" delay={0.3} visible={contactVisible} />
               <TiltContactCard href="https://linkedin.com/company/krytil" icon={LinkIcon} colorClass={{ bg: "bg-blue-50", text: "text-blue-700", pulse: "bg-blue-700/20" }} label="LinkedIn" value="Connect Now" delay={0.4} visible={contactVisible} />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative w-full py-12 md:py-16 px-6 md:px-10 lg:px-12 bg-white border-t border-zinc-200 text-center">
        <div className="w-full max-w-[1920px] 2xl:px-20 mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center shadow-lg transform rotate-3"><span className="text-white font-bold text-xl underline decoration-blue-500 decoration-2">K</span></div>
            <span className="text-zinc-900 font-black tracking-[0.4em] text-2xl uppercase">KRYTIL</span>
          </div>
          <div className="max-w-2xl text-zinc-400 text-xs md:text-sm mb-8 font-light leading-relaxed">
            © 2026 KRYTIL PRIVATE LIMITED. All intellectual property rights reserved. <br className="hidden md:block" />
            Engineering intelligent ecosystems for the next decade of digital growth.
          </div>
          <p className="text-zinc-300 text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-black font-mono bg-zinc-50 px-6 py-2 rounded-full border border-zinc-100">NODE_STABLE_SYNC // SYNC_COMPLETED</p>
        </div>
      </footer>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />

      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-tap-highlight-color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -webkit-overflow-scrolling: touch; -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fade-in { 
          from { opacity: 0; transform: translateY(30px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-in { animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        @keyframes moveDown { 
          0% { transform: translateY(-100%); opacity: 0; } 
          15% { opacity: 1; } 
          85% { opacity: 1; } 
          100% { transform: translateY(600%); opacity: 0; } 
        }
        @keyframes moveUp { 
          0% { transform: translateY(100%); opacity: 0; } 
          15% { opacity: 1; } 
          85% { opacity: 1; } 
          100% { transform: translateY(-600%); opacity: 0; } 
        }
        @keyframes spin { 
          from { transform: translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(-50%, -50%) rotate(360deg); } 
        }
        @keyframes scanline { 
          0% { transform: translateY(-100%); opacity: 0; } 
          50% { opacity: 0.5; } 
          100% { transform: translateY(500%); opacity: 0; } 
        }

        /* Ensure smooth interactions on mobile */
        @media (max-width: 768px) {
          h1 { font-size: 2.8rem !important; line-height: 1 !important; }
        }
      `}</style>
    </div>
  );
}
