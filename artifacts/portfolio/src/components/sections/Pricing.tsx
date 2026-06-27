import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const features = [
  'Modern responsive design',
  'WhatsApp integration',
  'Google Maps integration',
  'Contact form',
  'Basic SEO',
  'Maintenance included',
  'Custom branding',
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            One clear price. Everything included. No hidden fees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div
            data-testid="card-pricing"
            className="relative bg-card border-2 border-primary/40 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20"
          >
            {/* Glow top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            {/* Popular badge */}
            <div className="absolute top-5 right-5">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Most Popular
              </span>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="font-display font-bold text-2xl mb-1">Business Website</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Everything you need to launch online.
              </p>

              {/* Price */}
              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl md:text-6xl font-bold font-display text-gradient">
                  ₹2,500
                </span>
                <span className="text-muted-foreground mb-2 text-sm">/ project</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-primary" />
                    </span>
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                data-testid="button-lets-build"
                onClick={() => scrollTo('contact')}
                className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold py-6 text-base rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300 group"
              >
                Let's Build Your Website
                <ArrowRight
                  size={18}
                  className="ml-2 inline transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
