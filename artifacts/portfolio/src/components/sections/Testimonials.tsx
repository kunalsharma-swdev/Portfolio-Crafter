import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "I had an excellent experience working with him on my website. He understood my requirements clearly and built a professional, fast, and user-friendly website that exceeded my expectations. The quality of his work, attention to detail, and technical skills were outstanding. He was responsive, communicated well throughout the project, and made all the requested changes promptly. I truly appreciate his dedication and professionalism. I highly recommend him to anyone looking for a reliable and talented website developer. I would definitely work with him again on future projects.",
    name: "Twinkle",
    project: "Ethnic Aura by Twinkle",
    initials: "T",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="relative bg-card border border-border rounded-3xl p-8 md:p-10 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              {/* Large decorative quote */}
              <div className="absolute top-6 right-8 opacity-10">
                <Quote size={64} className="text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground/85 leading-relaxed text-base md:text-lg mb-8 relative z-10">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold font-display text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
