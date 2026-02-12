import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹8999",
    period: "starting from",
    desc: "Perfect for small businesses getting started online.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form",
      "1 round of revisions",
      "Delivery in 7–10 days",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "₹14999",
    period: "starting from",
    desc: "Ideal for growing businesses that need more features.",
    features: [
      "Up to 15 pages",
      "Mobile responsive design",
      "Advanced SEO setup",
      "Contact & enquiry forms",
      "Blog integration",
      "Social media integration",
      "3 rounds of revisions",
      "Delivery in 14–21 days",
      "1 month free support",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹24999",
    period: "starting from",
    desc: "For enterprises needing a comprehensive web solution.",
    features: [
      "Unlimited pages",
      "Custom UI/UX design",
      "Full SEO optimization",
      "E-commerce / booking integration",
      "Admin panel / CMS",
      "Performance optimization",
      "Unlimited revisions",
      "Priority delivery",
      "3 months free support",
      "Google Ads landing page",
    ],
    highlight: false,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

import { Helmet } from "react-helmet-async";

const Pricing = () => {
  return (
    <main className="pt-20">
      <Helmet>
        <title>Pricing Plans | Affordable Web Design Services</title>
        <meta name="description" content="Transparent pricing for web design and development. Choose from Starter, Business, or Premium plans. No hidden fees." />
      </Helmet>
      <section className="section-padding text-center">
        <div className="container-custom">
          <motion.p {...fadeInUp} className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Pricing
          </motion.p>
          <motion.h1 {...fadeInUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Transparent <span className="gradient-text">Pricing Plans</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear, honest pricing with no hidden fees. Every project is unique — custom quotes are always available.
          </motion.p>
        </div>
      </section>

      <section className="section-padding pt-0 pb-10">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`glass-card p-8 flex flex-col relative ${plan.highlight
                ? "border-primary/50 shadow-[0_0_40px_hsl(var(--glow-primary))]"
                : ""
                }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-heading font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-3xl font-heading font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-secondary-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`text-center py-3 rounded-lg font-semibold text-sm transition-all ${plan.highlight
                  ? "glow-button"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Maintenance <span className="text-primary">Packages</span></h2>
            <p className="text-muted-foreground">Keep your website secure, updated, and running smoothly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monthly */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border-l-4 border-l-primary"
            >
              <h3 className="text-2xl font-bold mb-2">Monthly (optional)</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">₹1499</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">Perfect for regular updates and peace of mind.</p>
              <ul className="space-y-3 mb-8">
                {["Security Updates & Patches", "Content Updates (Text/Images)", "Weekly Backups", "Technical Support", "Performance Monitoring"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block w-full text-center py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all">
                Subscribe Monthly
              </Link>
            </motion.div>

            {/* Yearly */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 border-2 border-primary relative overflow-hidden transform md:scale-105 shadow-2xl shadow-primary/10 z-10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-b-lg shadow-md">
                MOST POPULAR
              </div>

              <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl font-bold mb-2">Yearly (optional)</h3>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-5xl font-bold gradient-text">₹14999</span>
                  <span className="text-muted-foreground self-end mb-2">/yr</span>
                </div>
                <div className="inline-block bg-green-500/10 text-green-500 text-xs font-bold px-3 py-1 rounded-full border border-green-500/20">
                  Save ₹3000 vs Monthly
                </div>
              </div>

              <p className="text-sm text-center text-muted-foreground mb-8">Best value for long-term stability and growth.</p>

              <ul className="space-y-4 mb-8">
                {["Everything in Monthly", "Priority Support", "1 Major Design Refresh/Year", "SEO Performance Report", "Free Domain Renewal Assist"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="block w-full text-center py-4 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5">
                Subscribe Yearly
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.p {...fadeInUp} className="text-center text-muted-foreground mt-10 text-sm pb-10">
        Need something specific?{" "}
        <Link to="/contact" className="text-primary hover:text-accent transition-colors font-semibold">
          Request a Custom Quote →
        </Link>
      </motion.p>
    </main>
  );
};

export default Pricing;
