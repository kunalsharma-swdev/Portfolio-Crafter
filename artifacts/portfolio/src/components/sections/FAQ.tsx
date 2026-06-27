import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How long does it take to build my website?',
    a: 'Usually 3–5 days, depending on the complexity and how quickly you provide your content (logo, photos, text). Simple pages can be ready even faster.',
  },
  {
    q: 'Will my website work on mobile?',
    a: 'Absolutely. Every website I build is fully responsive and tested on all screen sizes — phones, tablets, and desktops.',
  },
  {
    q: 'Can you customize it for my business?',
    a: 'Yes, every website is custom-built to match your brand and business needs. I don\'t use one-size-fits-all templates.',
  },
  {
    q: 'Can we meet in person?',
    a: 'Yes! If you\'re located around Zirakpur, Chandigarh, Panchkula or Mohali, we can meet in person to discuss your project.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Everything you need to know before we get started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="bg-card border border-border rounded-2xl px-6 overflow-hidden data-[state=open]:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="font-display font-semibold text-base py-5 hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
