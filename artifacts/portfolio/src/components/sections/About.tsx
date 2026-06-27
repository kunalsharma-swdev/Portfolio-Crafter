import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Zap, Heart } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Modern Tech Stack' },
  { icon: Zap, label: 'Fast & Optimized' },
  { icon: Heart, label: 'Passion for Design' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center"
        >
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-25" />
              {/* Card */}
              <div className="relative h-full bg-card border border-border rounded-3xl flex flex-col items-center justify-center gap-6 p-10">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold font-display shadow-xl">
                  K
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-xl">Kunal Sharma</p>
                  <p className="text-muted-foreground text-sm mt-1">Freelance Web Developer</p>
                  <p className="text-muted-foreground text-xs mt-1">Zirakpur, Punjab</p>
                </div>
                {/* Highlights */}
                <div className="flex flex-col gap-3 w-full mt-2">
                  {highlights.map((h) => {
                    const Icon = h.icon;
                    return (
                      <div
                        key={h.label}
                        className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-2.5"
                      >
                        <Icon size={16} className="text-primary shrink-0" />
                        <span className="text-sm font-medium">{h.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight">
              The person behind
              <br />
              <span className="text-gradient">the websites</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Hi, I'm <span className="text-foreground font-semibold">Kunal Sharma</span>, a
                freelance web developer based in Zirakpur. I specialize in creating modern websites
                for local businesses that want to stand out online.
              </p>
              <p>
                My goal is simple: build websites that{' '}
                <span className="text-foreground font-medium">look premium</span>,{' '}
                <span className="text-foreground font-medium">load quickly</span>, and{' '}
                <span className="text-foreground font-medium">help businesses attract more customers</span>.
              </p>
              <p>
                Every project I take on is built from scratch — no templates, no shortcuts — because
                your business deserves a website as unique as it is.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
