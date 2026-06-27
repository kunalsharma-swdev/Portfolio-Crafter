import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BadgeIndianRupee, Clock, Smartphone, Palette, Headphones, Puzzle } from 'lucide-react';

const features = [
  {
    icon: BadgeIndianRupee,
    title: 'Affordable Pricing',
    desc: 'Premium quality at a price that makes sense for local businesses.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    desc: 'Most websites are ready in just 3–5 days, so you can go live quickly.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    desc: 'Pixel-perfect on every device — phone, tablet, or desktop.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Palette,
    title: 'Modern UI Design',
    desc: 'Designs that look like they came from an agency — clean, premium, striking.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Headphones,
    title: 'Personal Support',
    desc: 'Direct communication with me — no middlemen, no waiting queues.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Puzzle,
    title: 'Customized for You',
    desc: 'Every website is built from scratch to match your brand and vision.',
    color: 'from-violet-500 to-indigo-500',
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

export default function WhyChooseMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-me" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            The Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Why Choose <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            What sets my work apart from a generic freelancer or a template builder.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={cardVariants}
                data-testid={`card-feature-${f.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
