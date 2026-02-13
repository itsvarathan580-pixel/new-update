import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import {
  Globe, ShoppingCart, Briefcase, UtensilsCrossed, Scissors, GraduationCap,
  Building2, Layout, Building, Rocket, User, BookOpen, Newspaper, CalendarCheck,
  HeartPulse, Dumbbell, Plane, Heart, Code, RefreshCw, Search, Target
} from "lucide-react";

const services = [
  { icon: Globe, title: "Business Website", desc: "Establish your online presence with a professional site that builds credibility and attracts customers." },
  { icon: ShoppingCart, title: "E-commerce Website", desc: "Sell products online with a secure, user-friendly store that drives conversions." },
  { icon: Briefcase, title: "Portfolio Website", desc: "Showcase your work beautifully to attract clients and career opportunities." },
  { icon: UtensilsCrossed, title: "Restaurant Website", desc: "Display menus, take reservations, and bring more diners through your doors." },
  { icon: Scissors, title: "Salon & Spa Website", desc: "Let clients discover your services and book appointments with ease." },
  { icon: GraduationCap, title: "School / College Website", desc: "Keep students and parents informed with a structured, modern education portal." },
  { icon: Building2, title: "Real Estate Website", desc: "List properties with rich visuals and search features to close deals faster." },
  { icon: Layout, title: "Landing Page Design", desc: "High-converting single pages optimized for ad campaigns and lead generation." },
  { icon: Building, title: "Corporate Website", desc: "Present your brand with authority through a polished corporate web presence." },
  { icon: Rocket, title: "Startup Website", desc: "Launch your vision with a dynamic site that captures investor and user attention." },
  { icon: User, title: "Personal Website", desc: "Build your personal brand and stand out in your industry." },
  { icon: BookOpen, title: "Blog Website", desc: "Share insights and grow your audience with a content-optimized blog platform." },
  { icon: Newspaper, title: "News Website", desc: "Deliver timely content with a structured, fast-loading news platform." },
  { icon: CalendarCheck, title: "Booking Website", desc: "Enable customers to schedule appointments or services directly online." },
  { icon: HeartPulse, title: "Healthcare Website", desc: "Connect patients with care through an accessible, HIPAA-aware medical site." },
  { icon: Dumbbell, title: "Gym Website", desc: "Attract members with class schedules, pricing, and online sign-ups." },
  { icon: Plane, title: "Travel Website", desc: "Inspire travellers with stunning visuals and easy trip planning tools." },
  { icon: Heart, title: "NGO Website", desc: "Tell your story, accept donations, and mobilize support for your cause." },
  { icon: Code, title: "Custom Web Applications", desc: "Tailored web apps built to solve your unique business challenges." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Modernize your outdated site to improve performance and user experience." },
  { icon: Search, title: "SEO Setup", desc: "Optimize your site structure and content for better search engine visibility." },
  { icon: Target, title: "Google Ads Landing Page", desc: "Purpose-built landing pages designed to maximize your ad spend ROI." },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Services = () => {
  return (
    <main className="pt-20">
      <SEO
        title="Our Services | Web Design & Development"
        description="Comprehensive web solutions: Business websites, E-commerce, Portfolio, SEO, and more. Custom web design tailored to your industry."
        keywords="web design services, ecommerce website development, portfolio website builder, seo services, corporate website design, startup website maker"
      />
      {/* Hero */}
      <section className="section-padding text-center">
        <div className="container-custom">
          <motion.p {...fadeInUp} className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Our Services
          </motion.p>
          <motion.h1 {...fadeInUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Complete Website Solutions<br />
            <span className="gradient-text">for Every Business</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprises, we craft tailored web solutions that help your business grow online.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="glass-card-hover p-6 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{service.desc}</p>
              <Link
                to="/contact"
                className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                Enquire Now →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <div className="glass-card p-10 md:p-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get a free consultation and let us recommend the best solution for your business.
            </p>
            <Link to="/contact" className="glow-button px-8 py-3 rounded-lg text-base inline-block">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
