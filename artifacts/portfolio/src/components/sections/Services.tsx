import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Building2,
  FolderOpen,
  Layers,
  RefreshCw,
  Wrench,
  MapPin,
  MessageCircle,
  Monitor,
} from 'lucide-react';

const services = [
  { icon: Building2, title: 'Business Websites', color: 'from-indigo-500 to-purple-500' },
  { icon: FolderOpen, title: 'Portfolio Websites', color: 'from-purple-500 to-pink-500' },
  { icon: Layers, title: 'Landing Pages', color: 'from-pink-500 to-rose-500' },
  { icon: RefreshCw, title: 'Website Redesign', color: 'from-violet-500 to-indigo-500' },
  { icon: Wrench, title: 'Maintenance & Updates', color: 'from-blue-500 to-indigo-500' },
  { icon: MapPin, title: 'Google Maps Integration', color: 'from-green-500 to-emerald-500' },
  { icon: MessageCircle, title: 'WhatsApp Integration', color: 'from-emerald-500 to-teal-500' },
  { icon: Monitor, title: 'Responsive Design', color: 'from-cyan-500 to-blue-500' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            What I <span className="text-gradient">Build</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Every service tailored to make your business shine online.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={cardVariants}
                data-testid={`card-service-${s.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group flex flex-col items-center text-center bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 cursor-default"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-sm md:text-base leading-snug">
                  {s.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
