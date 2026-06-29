import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="work" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            My <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto flex flex-col gap-8"
        >
          <div
            data-testid="card-project-ethnic-aura"
            className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500"
          >
            {/* Browser chrome mockup */}
            <div className="bg-muted/60 border-b border-border px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background/70 rounded-md px-3 py-1 text-xs text-muted-foreground font-mono truncate">
                  ethnic-aura-by-twinkle.lovable.app
                </div>
              </div>
            </div>

            {/* Preview area */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-pink-900/80 to-purple-900 flex items-center justify-center">
                {/* Decorative pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '28px 28px',
                  }}
                />
                <div className="relative text-center">
                  <div className="text-5xl md:text-7xl font-bold font-display text-white/20 select-none leading-none">
                    Ethnic Aura
                  </div>
                  <div className="text-lg md:text-2xl font-display text-white/50 mt-2 italic">
                    by Twinkle
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <div className="w-16 h-px bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-rose-400/60" />
                    <div className="w-16 h-px bg-white/20" />
                  </div>
                </div>
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-end gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Boutique Website
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                  Ethnic Aura by Twinkle
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A modern boutique website designed to showcase collections with an elegant user
                  experience.
                </p>
              </div>
              <div className="shrink-0">
                <Button
                  data-testid="button-live-website"
                  asChild
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold px-6 py-5 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <a
                    href="https://ethnic-aura-by-twinkle.lovable.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Website
                    <ExternalLink size={15} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Omyra Fancy Dress */}
          <div
            data-testid="card-project-omyra"
            className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500"
          >
            {/* Browser chrome mockup */}
            <div className="bg-muted/60 border-b border-border px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background/70 rounded-md px-3 py-1 text-xs text-muted-foreground font-mono truncate">
                  omyrafancydress.netlify.app
                </div>
              </div>
            </div>

            {/* Preview area */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-950 via-violet-900/80 to-indigo-900 flex items-center justify-center">
                {/* Decorative pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '28px 28px',
                  }}
                />
                <div className="relative text-center">
                  <div className="text-5xl md:text-7xl font-bold font-display text-white/20 select-none leading-none">
                    Omyra
                  </div>
                  <div className="text-lg md:text-2xl font-display text-white/50 mt-2 italic">
                    Fancy Dress
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <div className="w-16 h-px bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-fuchsia-400/60" />
                    <div className="w-16 h-px bg-white/20" />
                  </div>
                </div>
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-end gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Fancy Dress Website
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                  Omyra Fancy Dress
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A vibrant and engaging website for a fancy dress business, designed to attract customers with a fun, easy-to-browse experience.
                </p>
              </div>
              <div className="shrink-0">
                <Button
                  data-testid="button-live-website-omyra"
                  asChild
                  className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 hover:opacity-90 text-white font-semibold px-6 py-5 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <a
                    href="https://omyrafancydress.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Website
                    <ExternalLink size={15} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center text-muted-foreground text-sm italic mt-2"
          >
            Currently expanding my portfolio with more local business websites.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
