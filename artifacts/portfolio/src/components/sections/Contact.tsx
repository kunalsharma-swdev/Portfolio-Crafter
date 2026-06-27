import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Ready to take your business online? Get in touch — I'll get back to you quickly.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-5">
              <h3 className="font-display font-bold text-xl">Get in Touch</h3>

              {/* WhatsApp */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-whatsapp"
                className="group flex items-center gap-4 bg-green-500/10 border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/15 rounded-xl px-5 py-4 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <SiWhatsapp size={20} className="text-green-500" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-green-500">Chat on WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Quickest way to reach me</p>
                </div>
              </a>

              {/* Info items */}
              {[
                { icon: Phone, label: 'Phone', value: '+91 77176 58532, +91 99155 41571' },

                { icon: Mail, label: 'Email', value: 'kunalsharma.official.26207@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Zirakpur, Punjab, India' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="font-medium text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability note */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Available for in-person meetings around{' '}
                <span className="text-foreground font-medium">
                  Zirakpur, Chandigarh, Panchkula & Mohali
                </span>
                .
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              data-testid="form-contact"
              className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-4"
            >
              <h3 className="font-display font-bold text-xl mb-1">Send an Inquiry</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    data-testid="input-name"
                    type="text"
                    placeholder="Rahul Sharma"
                    required
                    className="bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Business Name
                  </label>
                  <input
                    data-testid="input-business"
                    type="text"
                    placeholder="My Boutique"
                    className="bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Phone / Email
                </label>
                <input
                  data-testid="input-contact"
                  type="text"
                  placeholder="+91 XXXXX XXXXX or email@example.com"
                  required
                  className="bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  data-testid="textarea-message"
                  placeholder="Tell me about your business and what kind of website you need..."
                  rows={4}
                  className="bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/50"
                />
              </div>

              <Button
                data-testid="button-send"
                type="submit"
                className="mt-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold py-6 text-base rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 group"
              >
                Send Message
                <Send size={16} className="ml-2 inline transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
