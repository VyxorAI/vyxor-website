import React from 'react';
const logo = '/logo.png';
import { 
  PhoneCall, 
  Calendar, 
  MessageSquare, 
  Clock, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Star,
  Scissors,
  Sparkles,
  Stethoscope,
  Store,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  ShieldCheck,
  Zap,
  BellRing,
  Smartphone,
  Plus,
  Minus
} from 'lucide-react';
import { motion } from 'motion/react';

import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

// --- Helpers ---

const Waveform = () => (
  <div className="flex items-center gap-1 h-4">
    {[1, 2, 3, 4, 5].map((i) => (
      <motion.div
        key={i}
        animate={{ 
          height: [4, 12, 8, 16, 4],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: i * 0.15,
          ease: "easeInOut",
        }}
        className="w-1 bg-brand-blue rounded-full"
      />
    ))}
  </div>
);

const useCurrency = () => {
  const [currency, setCurrency] = React.useState({ symbol: 'R', code: 'ZAR', locale: 'en-ZA' });

  const format = (value: number) => {
    return new Intl.NumberFormat(currency.locale, {
      style: 'currency',
      currency: currency.code,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return { ...currency, format };
};

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass py-4">
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center gap-0">
        <img 
          src={logo} 
          alt="Vyxor AI Logo" 
          className="h-20 w-auto object-cover" 
          referrerPolicy="no-referrer" 
        />
        <span className="text-2xl font-display font-bold text-brand-navy">Vyxor AI</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#problem" className="hover:text-brand-blue transition-colors">The Problem</a>
        <a href="#solution" className="hover:text-brand-blue transition-colors">Our Solution</a>
        <a href="#features" className="hover:text-brand-blue transition-colors">Features</a>
        <a href="#industries" className="hover:text-brand-blue transition-colors">Industries</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-white">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10" />
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
          </span>
          The Future of Front Desk Automation
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
          The AI Receptionist That <span className="text-gradient">Scales Your Business</span> While You Sleep.
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
          Stop losing revenue to missed calls. Vyxor AI answers instantly, books appointments, and captures leads 24/7—so you can focus on what you do best.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <motion.a 
            href="https://calendly.com/aivyxor-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">Book Your Free Demo</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            
            {/* Animated Shine Effect */}
            <motion.div 
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          </motion.a>
          <motion.a 
            href="#how-it-works"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-bold text-lg border-2 border-slate-200 text-slate-700 hover:border-brand-blue hover:text-brand-blue transition-all flex items-center justify-center"
          >
            See How It Works
          </motion.a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 bg-brand-navy rounded-[2.5rem] p-8 shadow-2xl glow-blue border border-white/10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20"
              >
                <PhoneCall className="text-white w-5 h-5" />
              </motion.div>
              <div>
                <p className="text-white font-bold text-sm">Live Call</p>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">AI Active</p>
                </div>
              </div>
            </div>
            <div className="text-green-500 text-xs font-mono bg-green-500/10 px-2 py-1 rounded border border-green-500/20">00:12</div>
          </div>

          {/* Chat Flow */}
          <div className="space-y-6 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 border border-white/10" />
              <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 text-sm text-white/90 max-w-[80%] shadow-lg border border-white/5">
                "Hi! I'd like to book a haircut with Sarah for tomorrow afternoon."
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              className="flex gap-3 flex-row-reverse"
            >
              <div className="w-8 h-8 rounded-full bg-brand-blue flex-shrink-0 flex items-center justify-center shadow-lg shadow-brand-blue/40">
                <Sparkles size={14} className="text-white" />
              </div>
              <div className="space-y-2 max-w-[80%]">
                <div className="bg-brand-blue/20 border border-brand-blue/30 rounded-2xl rounded-tr-none p-4 text-sm text-white shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Waveform />
                    <span className="text-[10px] font-bold text-brand-blue uppercase">AI Speaking</span>
                  </div>
                  "Of course! Sarah has an opening at 2:30 PM or 4:00 PM tomorrow. Which works best for you?"
                </div>
                
                {/* Calendar Pop-in */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
                  className="bg-white rounded-xl p-3 shadow-2xl border border-slate-100 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-brand-blue" />
                    <span className="text-[10px] font-bold text-slate-600">Tomorrow, Mar 18</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="px-2 py-1 rounded bg-blue-50 text-[10px] font-bold text-brand-blue border border-blue-100">2:30 PM</div>
                    <div className="px-2 py-1 rounded bg-blue-50 text-[10px] font-bold text-brand-blue border border-blue-100">4:00 PM</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Footer Status */}
          <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 text-[10px] text-white/40 font-bold uppercase tracking-widest"
            >
              <div className="w-1 h-1 rounded-full bg-brand-blue" />
              Syncing Calendar
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.2, type: "spring" }}
              className="px-3 py-1 rounded-full bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-green-500/20"
            >
              <CheckCircle2 size={10} />
              Appointment Booked
            </motion.div>
          </div>
        </motion.div>
        
        {/* Floating elements for "animated illustration" feel */}
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Zap size={16} className="text-brand-blue" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Response Time</p>
              <p className="text-sm font-bold text-brand-navy">&lt; 1 Second</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-10 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp size={16} className="text-green-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Revenue Growth</p>
              <p className="text-sm font-bold text-brand-navy">+32% Average</p>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-blue/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-[120px] -z-10" />
      </motion.div>
    </div>
  </section>
);

const Problem = () => (
  <section id="problem" className="py-24 bg-brand-light">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl mb-6">The Cost of Silence</h2>
        <p className="text-lg text-slate-600">
          Every missed call is a missed opportunity. In the service industry, customers rarely leave voicemails—they just call your competitor.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Clock className="text-red-500" />,
            title: "After-Hours Loss",
            desc: "60% of potential clients call outside of business hours. If you're not answering, you're not booking."
          },
          {
            icon: <Users className="text-red-500" />,
            title: "Busy Hour Bottleneck",
            desc: "When your staff is busy serving clients, the phone goes unanswered. You shouldn't have to choose between service and sales."
          },
          {
            icon: <TrendingUp className="text-red-500" />,
            title: "Leaking Revenue",
            desc: "The average salon loses R10 000+ per month simply because they couldn't pick up the phone in time."
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-2 lg:order-1"
      >
        <img 
          src="https://picsum.photos/seed/ai-tech/800/600" 
          className="rounded-3xl shadow-2xl" 
          referrerPolicy="no-referrer"
          alt="AI Receptionist Interface"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-1 lg:order-2"
      >
        <h2 className="text-4xl md:text-5xl mb-8">Meet Your New <br /><span className="text-brand-blue">24/7 AI Receptionist</span></h2>
        <p className="text-lg text-slate-600 mb-8">
          Vyxor AI isn't just a chatbot. It's a sophisticated voice intelligence system that handles your business calls exactly like a human receptionist would—only faster, cheaper, and more reliably.
        </p>
        <ul className="space-y-4">
          {[
            "Answers calls on the first ring, every time.",
            "Integrates directly with your booking software.",
            "Answers FAQs about services, pricing, and location.",
            "Captures lead info and sends it to your CRM.",
            "Never gets tired, never takes a day off."
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="text-brand-blue flex-shrink-0 mt-1" size={20} />
              <span className="font-medium text-slate-700">{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-24 bg-brand-navy text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl mb-4">Powerful Features for <br />Modern Businesses</h2>
          <p className="text-white/60 text-lg">Everything you need to automate your front desk and scale your revenue.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Call Answering",
            desc: "Capture every lead, even at 3 AM. Our AI handles late-night inquiries and early-morning bookings seamlessly."
          },
          {
            icon: <Calendar className="w-6 h-6" />,
            title: "Smart Booking",
            desc: "Direct integration with Fresha, Mindbody, and more. The AI checks your real-time availability and books slots."
          },
          {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Natural Conversations",
            desc: "No 'Press 1 for Sales'. Our AI understands context, tone, and intent for a truly human-like experience."
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Lead Capture",
            desc: "Automatically gathers names, phone numbers, and service interests, pushing them directly to your database."
          },
          {
            icon: <CheckCircle2 className="w-6 h-6" />,
            title: "Instant FAQ",
            desc: "Train the AI on your specific business details. It answers questions about parking, pricing, and policies instantly."
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "ROI Analytics",
            desc: "Track every call, every booking, and every dollar saved. See exactly how much revenue Vyxor AI is generating."
          }
        ].map((feature, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
          >
            <div className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl mb-4">{feature.title}</h3>
            <p className="text-white/50 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">How Vyxor AI <span className="text-brand-blue">Transforms</span> Your Front Desk</h2>
        <p className="text-xl text-slate-600">A seamless, high-converting experience for every caller, from the first ring to the final confirmation.</p>
      </div>
      
      <div className="grid lg:grid-cols-4 gap-8">
        {[
          {
            icon: <PhoneCall className="text-white" />,
            color: "bg-blue-500",
            title: "Instant Response",
            desc: "AI answers every call on the first ring, 24/7. No more busy signals or voicemails that go unreturned."
          },
          {
            icon: <Calendar className="text-white" />,
            color: "bg-indigo-500",
            title: "Smart Scheduling",
            desc: "Automatically checks your real-time availability and books appointments directly into your calendar."
          },
          {
            icon: <BellRing className="text-white" />,
            color: "bg-purple-500",
            title: "Auto Reminders",
            desc: "Sends instant SMS confirmations and follow-up reminders to drastically reduce no-shows."
          },
          {
            icon: <ShieldCheck className="text-white" />,
            color: "bg-emerald-500",
            title: "Lead Capture",
            desc: "Gathers customer info and syncs with your CRM, ensuring you never lose a potential client again."
          }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group"
          >
            <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
              {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-navy">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            
            {i < 3 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                <ChevronRight className="text-slate-200" size={32} />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-20 bg-brand-navy rounded-[3rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
            <Zap className="text-white" size={32} />
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-1">Ready to automate?</h4>
            <p className="text-white/60">Get your AI receptionist live in less than 48 hours.</p>
          </div>
        </div>
        <a 
          href="https://calendly.com/aivyxor-info/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-blue hover:text-white transition-all whitespace-nowrap"
        >
          Book Setup Call
        </a>
      </div>
    </div>
  </section>
);

const Industries = () => (
  <section id="industries" className="py-24 bg-brand-light">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl mb-4 md:mb-0">Built for Service <br />Leaders</h2>
        <p className="max-w-md text-slate-600">
          We specialize in high-volume appointment-based businesses where every call matters.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {[
          { icon: <Scissors />, name: "Hair Salons" },
          { icon: <Sparkles />, name: "Beauty Spas" },
          { icon: <Stethoscope />, name: "Med Clinics" },
          { icon: <Store />, name: "Barbershops" },
          { icon: <Users />, name: "Real Estate Agents" },
          { icon: <Sparkles />, name: "And many more..." }
        ].map((industry, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-3xl text-center hover:bg-brand-blue hover:text-white transition-all group cursor-default shadow-sm flex flex-col items-center justify-center"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
              {React.cloneElement(industry.icon as React.ReactElement, { className: "w-6 h-6 text-brand-blue group-hover:text-white" })}
            </div>
            <h3 className="font-bold text-sm">{industry.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ROICalculator = () => {
  const { format, symbol } = useCurrency();
  const [calls, setCalls] = React.useState(500);
  const [missedRate, setMissedRate] = React.useState(25);
  const [avgRevenue, setAvgRevenue] = React.useState(1530);

  const monthlyMissed = Math.round(calls * (missedRate / 100));
  const monthlyRevenueLost = monthlyMissed * avgRevenue;
  const annualRevenueSaved = monthlyRevenueLost * 12;

  return (
    <section id="roi" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-blue rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-20 text-white relative overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 font-display font-bold">Calculate Your <br />Missed Revenue</h2>
              <p className="text-white/80 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                Most businesses underestimate the true cost of a missed call. Use our calculator to see how much Vyxor AI could be adding to your bottom line every year.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10">
                  <p className="text-2xl md:text-3xl font-display font-bold mb-1 text-green-400">
                    {format(annualRevenueSaved)}
                  </p>
                  <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider font-bold">Est. Annual Growth</p>
                </div>
                <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10">
                  <p className="text-2xl md:text-3xl font-display font-bold mb-1">
                    {monthlyMissed}
                  </p>
                  <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider font-bold">Missed Calls Saved / Mo</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 text-brand-navy shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2">
                <TrendingUp className="text-brand-blue" />
                ROI Estimator
              </h3>
              
              <div className="space-y-6 md:space-y-8">
                {/* Monthly Calls */}
                <div>
                  <div className="flex justify-between mb-3 md:mb-4">
                    <label className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide">Avg. Monthly Calls</label>
                    <span className="text-brand-blue font-bold text-sm md:text-base">{calls}</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="2000" 
                    step="50"
                    value={calls}
                    onChange={(e) => setCalls(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                  />
                </div>

                {/* Missed Rate */}
                <div>
                  <div className="flex justify-between mb-3 md:mb-4">
                    <label className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide">% of Calls Missed</label>
                    <span className="text-brand-blue font-bold text-sm md:text-base">{missedRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="60" 
                    step="1"
                    value={missedRate}
                    onChange={(e) => setMissedRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                  />
                </div>

                {/* Avg Revenue */}
                <div>
                  <div className="flex justify-between mb-3 md:mb-4">
                    <label className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide">Avg. Revenue / Booking</label>
                    <span className="text-brand-blue font-bold text-sm md:text-base">{symbol}{avgRevenue}</span>
                  </div>
                  <input 
                    type="range" 
                    min="200" 
                    max="10000" 
                    step="50"
                    value={avgRevenue}
                    onChange={(e) => setAvgRevenue(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                  />
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl">
                    <div className="min-w-0">
                      <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase mb-1 truncate">Monthly Revenue Increase</p>
                      <p className="text-2xl md:text-3xl font-display font-bold text-brand-blue">
                        {format(monthlyRevenueLost)}
                      </p>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg shadow-brand-blue/20 flex-shrink-0 ml-2">
                      <Sparkles className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl mb-8">Ready to Scale Your <br />Business?</h2>
        <p className="text-xl text-slate-600 mb-12">
          Join the hundreds of service businesses that have eliminated missed calls and maximized their revenue with Vyxor AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://calendly.com/aivyxor-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-800 transition-all shadow-2xl shadow-brand-blue/30 text-center"
          >
            Book Your Free Demo
          </a>
          <div className="flex flex-col items-center gap-2">
            <a 
              href="tel:+270718682812"
              className="bg-brand-navy text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-800 transition-all text-center w-full"
            >
              Contact Sales: +27 (071) 868-2812
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      q: "Does Vyxor AI sound like a robot?",
      a: "Not at all. We use state-of-the-art voice synthesis that captures human-like tone, pacing, and inflection. Most callers won't even realize they're speaking to an AI, they'll just be impressed by how quickly their call was answered."
    },
    {
      q: "Can it actually book appointments into my specific calendar?",
      a: "Yes. Vyxor AI integrates directly with popular booking platforms like Fresha, Mindbody, and Google Calendar. It checks your real-time availability and places the booking directly into your system, just like a human would."
    },
    {
      q: "What happens if the AI doesn't know the answer to a question?",
      a: "If a query is too complex, Vyxor AI gracefully captures the caller's details and the nature of their request, then instantly notifies you or your team via SMS or email. You never lose a lead, and you can step in exactly when needed."
    },
    {
      q: "Is it really available 24/7, even on holidays?",
      a: "Absolutely. Vyxor AI never sleeps, never takes sick leave, and doesn't celebrate holidays. Whether a client calls at 3 AM on New Year's Day or during your busiest lunch rush, they'll get a professional response every single time."
    },
    {
      q: "How does the cost compare to hiring a full-time receptionist?",
      a: "Vyxor AI typically costs less than 10% of a full-time employee's salary. You get 24/7 coverage, zero overhead, no training requirements, and a system that scales with your business, saving you thousands in monthly operational costs."
    },
    {
      q: "Is it difficult to set up for my specific business?",
      a: "We handle the heavy lifting. Our team works with you to 'train' the AI on your business hours, pricing, services, and FAQs. Most businesses are fully automated and live within 48-72 hours."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 font-display font-bold text-brand-navy">Common Questions</h2>
          <p className="text-lg text-slate-600">Everything you need to know about your new AI team member.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-semibold text-brand-navy">{faq.q}</span>
                {openIndex === i ? (
                  <Minus className="text-brand-blue flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0" size={20} />
                )}
              </button>
              
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-8 pb-6 text-slate-600 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-navy text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-0 mb-6">
            <img 
              src={logo} 
              alt="Vyxor AI Logo" 
              className="h-16 w-auto object-cover" 
              referrerPolicy="no-referrer" 
            />
            <span className="text-xl font-display font-bold">Vyxor AI</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            The world's most advanced AI receptionist for service businesses. Never miss another client, 24/7.
          </p>
          <div className="flex gap-4">
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><a href="#about" className="hover:text-white transition-colors">AI Receptionist</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">Integrations</a></li>
            <li><a href="#roi" className="hover:text-white transition-colors">ROI Calculator</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li className="flex items-center gap-3"><Mail size={16} /> info@aivyxor.com</li>
            <li className="flex items-center gap-3"><PhoneCall size={16} /> +27 (071) 868-2812</li>
            <li className="text-xs mt-6">
              Vyxor AI Automation Agency<br />
              South Africa
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30">
        <p>© 2026 Vyxor AI Automation Agency. All rights reserved.</p>
        <div className="flex gap-8">
          <button onClick={() => window.dispatchEvent(new CustomEvent('nav', { detail: 'privacy' }))} className="hover:text-white">Privacy Policy</button>
          <button onClick={() => window.dispatchEvent(new CustomEvent('nav', { detail: 'terms' }))} className="hover:text-white">Terms of Service</button>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = React.useState<'home' | 'privacy' | 'terms'>('home');

  React.useEffect(() => {
    const handleNav = (e: any) => {
      setView(e.detail);
      window.scrollTo(0, 0);
    };
    window.addEventListener('nav', handleNav);
    return () => window.removeEventListener('nav', handleNav);
  }, []);

  if (view === 'privacy') return <PrivacyPolicy onBack={() => setView('home')} />;
  if (view === 'terms') return <TermsOfService onBack={() => setView('home')} />;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <FAQ />
      <Industries />
      <ROICalculator />
      <CTA />
      <Footer />
    </div>
  );
}
