import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Phone, Globe, Zap, Shield, Clock, CheckCircle,
  MessageSquare, FileText, Code, Rocket, ChevronDown
} from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const faqs = [
  { q: "How long does it take to build a website?", a: "Depending on the complexity, most projects are delivered within 7–21 days. We'll provide a clear timeline during our initial consultation." },
  { q: "Do you provide hosting and domain?", a: "We can guide you through setting up hosting and domain registration, or manage it for you as part of our premium packages." },
  { q: "Will my website be mobile-friendly?", a: "Absolutely. Every website we build is fully responsive and optimized for all devices — mobile, tablet, and desktop." },
  { q: "Do you offer ongoing support after launch?", a: "Yes. All our plans include a support period post-launch, and we offer affordable maintenance packages for long-term assistance." },
  { q: "Can I see a preview before the site goes live?", a: "Yes, we share a staging preview at each milestone so you can review and provide feedback before the final launch." },
  { q: "What if I need changes after the website is live?", a: "We offer revision rounds based on your plan. Additional changes can be handled through our support packages at transparent rates." },
];

import { useProjects } from "@/context/ProjectContext";

import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import { trackConversion } from "@/components/GoogleAds";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { projects } = useProjects();

  return (
    <main className="pt-16 md:pt-20">
      <SEO
        title="#1 Web Developer & Website Builder"
        description="Looking for the best web developer? We build stunning, high-ranking websites. Top #1 website creator for business, ecommerce, and custom web design."
        keywords="web developer, build website, create website, website maker, best web design company, website creator, hire web developer, top rated web agency, chennai web design, online business website, ecommerce website builder, make my website"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "LIONYX TECHNOLOGIES",
              "image": "https://itsvarathan.in/winfly-taxi.png",
              "@id": "https://itsvarathan.in",
              "url": "https://itsvarathan.in",
              "telephone": "+919790727825",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Road",
                "addressLocality": "Chennai",
                "addressRegion": "TN",
                "postalCode": "600001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 13.0827,
                "longitude": 80.2707
              },
              "priceRange": "₹8999 - ₹24999",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://www.instagram.com/lionyx_tech",
                "https://www.linkedin.com/company/lionyx-technologies"
              ]
            }
          `}
        </script>
      </Helmet>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-6 glass-card px-4 py-2">
              Professional Web Design Agency
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              <span className="gradient-text">LIONYX TECHNOLOGIES</span>
              <br />
              <span className="text-foreground">Professional Websites That Help Your Business Grow</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Affordable, Modern & SEO-Ready Websites for Businesses Across India.
              Let us build a website that works as hard as you do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="glow-button px-8 py-4 rounded-lg text-base font-semibold flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919790727825"
                onClick={() => trackConversion("AbCdEfGhIjKlMnOpQr")}
                className="px-8 py-4 rounded-lg text-base font-semibold border border-white/10 bg-card/40 backdrop-blur-sm text-foreground hover:border-primary/30 hover:bg-card/60 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why You Need a Website */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Why It Matters</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Why Your Business Needs a <span className="gradient-text">Professional Website</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "24/7 Online Presence", desc: "Your website works around the clock, reaching customers even when your doors are closed." },
              { icon: Zap, title: "Build Credibility", desc: "A professional site establishes trust and makes your business look established and reliable." },
              { icon: Shield, title: "Reach More Customers", desc: "Expand beyond your local area and connect with potential clients across India and beyond." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-hover p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Our <span className="gradient-text">Services</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "Business Websites", "E-commerce Stores", "Landing Pages", "Portfolio Sites",
              "Custom Web Apps", "Website Redesign", "SEO Setup", "Google Ads Pages",
            ].map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass-card p-5 text-center hover:border-primary/30 transition-colors"
              >
                <p className="text-sm font-medium">{service}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="text-center mt-10">
            <Link to="/services" className="text-primary font-semibold text-sm hover:text-accent transition-colors inline-flex items-center gap-1">
              View All 22+ Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Why Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Why Choose <span className="gradient-text">LIONYX</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Transparent Pricing", desc: "No hidden fees. You know exactly what you're paying for before we begin." },
              { icon: MessageSquare, title: "Dedicated Support", desc: "Direct communication with your project team throughout the entire process." },
              { icon: Globe, title: "SEO-Ready Structure", desc: "Every site is built with search engine optimization best practices in mind." },
              { icon: Clock, title: "On-Time Delivery", desc: "We respect your timeline and deliver on or before the agreed schedule." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card-hover p-6"
              >
                <item.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">How We Work</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Our <span className="gradient-text">4-Step Process</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: MessageSquare, step: "01", title: "Consultation", desc: "We discuss your goals, target audience, and project requirements." },
              { icon: FileText, step: "02", title: "Planning", desc: "We create a detailed plan including sitemap, wireframes, and content strategy." },
              { icon: Code, step: "03", title: "Development", desc: "Our team brings your vision to life with clean code and stunning design." },
              { icon: Rocket, step: "04", title: "Launch & Support", desc: "We deploy your site and provide ongoing support to ensure success." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-bold text-accent tracking-widest">{item.step}</span>
                <h3 className="text-lg font-heading font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">Our Work</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Recent <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-1 max-w-xl w-full gap-6">
              {projects.slice(0, 3).map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card-hover overflow-hidden group cursor-pointer"
                >
                  <Link to="/portfolio">
                    <div className="aspect-video relative overflow-hidden bg-secondary/30">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-primary font-bold uppercase tracking-widest">{project.category}</span>
                      <h3 className="text-xl font-heading font-bold mt-2 mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div {...fadeInUp} className="text-center mt-10">
            <Link to="/portfolio" className="text-primary font-semibold text-sm hover:text-accent transition-colors inline-flex items-center gap-1">
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card/30">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                >
                  <span className="font-medium text-sm">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 md:p-20 max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Ready to Take Your Business <span className="gradient-text">Online?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                Get a free consultation and discover how a professional website can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="glow-button px-8 py-4 rounded-lg text-base font-semibold flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+919790727825"
                  className="px-8 py-4 rounded-lg text-base font-semibold border border-white/10 bg-card/40 text-foreground hover:border-primary/30 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  +91 9790727825
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
