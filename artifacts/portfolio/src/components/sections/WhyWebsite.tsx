import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, ShieldCheck, Search, Star, Phone, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: Star,
    title: 'Showcase Your Work',
    desc: 'Display your products, services, and portfolio to attract more customers.',
  },
  {
    icon: ShieldCheck,
    title: 'Build Trust',
    desc: 'A professional website immediately signals credibility to potential customers.',
  },
  {
    icon: Search,
    title: 'Get Discovered on Google',
    desc: 'SEO-optimized websites help local customers find you when they search.',
  },
  {
    icon: Globe,
    title: 'Professional Online Presence',
    desc: 'Stand out from competitors who still rely only on social media.',
  },
  {
    icon: Phone,
    title: 'Easy Contact for Customers',
    desc: 'WhatsApp buttons, contact forms, and maps make it effortless to reach you.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly Experience',
    desc: 'Over 80% of customers browse on their phone — your site will look perfect.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function WhyWebsite() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            The Advantage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Why Does Your Business{' '}
            <span className="text-gradient">Need a Website?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Your competitors are already online. A website isn't optional — it's your most powerful
            sales tool.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                variants={cardVariants}
                data-testid={`card-benefit-${b.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
