import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Code2, Rocket } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProjects } from "@/context/ProjectContext";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  const { projects } = useProjects();

  return (
    <main className="pt-20">
      <Helmet>
        <title>Our Work | Lionyx Technologies Portfolio</title>
        <meta name="description" content="Explore our portfolio of stunning websites and web applications. See how we've helped businesses across various industries succeed online." />
      </Helmet>
      <section className="section-padding text-center">
        <div className="container-custom">
          <motion.p {...fadeInUp} className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Portfolio
          </motion.p>
          <motion.h1 {...fadeInUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Projects That Speak <span className="gradient-text">Results</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of websites we've built for businesses across different industries.
          </motion.p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {projects.map((project, i) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="glass-card-hover overflow-hidden group cursor-pointer"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ExternalLink className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-lg font-heading font-semibold mt-1 mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-primary/20">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-heading font-bold gradient-text">{project.title}</DialogTitle>
                    <DialogDescription className="text-primary font-semibold uppercase tracking-wider text-xs">
                      {project.category}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-foreground font-semibold mb-2">
                          <Rocket className="w-4 h-4 text-primary" />
                          Project Overview
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.longDesc || project.desc}
                        </p>
                      </div>
                      {(project.features && project.features.length > 0) && (
                        <div>
                          <h4 className="flex items-center gap-2 text-foreground font-semibold mb-2">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            Key Features
                          </h4>
                          <ul className="grid grid-cols-1 gap-2">
                            {project.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="space-y-6">
                      <div className="rounded-xl overflow-hidden border border-primary/10 shadow-2xl">
                        <img src={project.image} alt={project.title} className="w-full h-auto" />
                      </div>
                      <div>
                        {(project.tech && project.tech.length > 0) && (
                          <>
                            <h4 className="flex items-center gap-2 text-foreground font-semibold mb-2">
                              <Code2 className="w-4 h-4 text-primary" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors w-full justify-center"
                        >
                          Visit Live Website
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
