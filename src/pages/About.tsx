import { motion } from "framer-motion";
import { Target, Eye, Users, Shield } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => {
  return (
    <main className="pt-20">
      <section className="section-padding text-center">
        <div className="container-custom">
          <motion.p {...fadeInUp} className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            About Us
          </motion.p>
          <motion.h1 {...fadeInUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Building Digital <span className="gradient-text">Futures</span>
          </motion.h1>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding pt-0">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-3xl font-heading font-bold text-primary">I</span>
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold mb-1">Itsvarathan</h2>
                <p className="text-sm text-primary font-semibold mb-4">Founder, LIONYX TECHNOLOGIES</p>
                <p className="text-muted-foreground leading-relaxed">
                  With a passion for crafting meaningful digital experiences, I founded LIONYX TECHNOLOGIES to help businesses across India establish a strong online presence. Every project is personal to us — we treat your business goals as our own, delivering websites that are not only beautiful but built to perform.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding pt-0">
        <div className="container-custom max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To empower businesses of all sizes with affordable, high-quality websites that drive real growth. We believe every business deserves a professional digital presence.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To become a trusted partner for businesses across India, known for transparent practices, exceptional quality, and genuine commitment to client success.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-8"
            >
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding pt-0">
        <div className="container-custom max-w-5xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-3xl font-heading font-bold text-center mb-12">
            What We Stand For
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "Transparency", text: "No hidden costs, no vague promises. We communicate openly at every stage." },
              { icon: Users, title: "Client-First Approach", text: "Your satisfaction drives every decision. We listen, adapt, and deliver." },
              { icon: Target, title: "Quality Craftsmanship", text: "Every website is built with attention to detail, performance, and best practices." },
              { icon: Eye, title: "Honest Communication", text: "We set realistic expectations and always deliver on our commitments." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 items-start p-6 glass-card"
              >
                <value.icon className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold mb-1">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
