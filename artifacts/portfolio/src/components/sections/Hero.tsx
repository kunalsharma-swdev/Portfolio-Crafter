import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const FloatingBlob = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 8 + delay,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  />
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      <FloatingBlob className="w-[600px] h-[600px] bg-primary -top-40 -left-40" delay={0} />
      <FloatingBlob className="w-[500px] h-[500px] bg-purple-500 -bottom-32 -right-32" delay={2} />
      <FloatingBlob className="w-[300px] h-[300px] bg-indigo-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={4} />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full mb-8"
        >
          <Sparkles size={14} />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display tracking-tight leading-[1.05] mb-6"
        >
          Beautiful Websites
          <br />
          <span className="text-gradient">for Local Businesses</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
        >
          I help boutiques, salons, cafés, tattoo studios, photographers, bakeries and other local
          businesses establish a strong online presence with modern, fast and responsive websites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            data-testid="button-view-work"
            onClick={() => scrollTo('work')}
            className="group relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold px-8 py-6 text-base rounded-full shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
          >
            View My Work
            <ArrowRight
              size={18}
              className="ml-2 inline transition-transform duration-200 group-hover:translate-x-1"
            />
          </Button>
          <Button
            data-testid="button-get-in-touch"
            onClick={() => scrollTo('contact')}
            variant="outline"
            className="border-2 border-border hover:border-primary text-foreground font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105 hover:bg-primary/5"
          >
            Get in Touch
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
