import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  business: z.string().trim().max(100).optional(),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  email: z.string().trim().email("Invalid email").max(255),
  budget: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxCWlhCQH8uB-ALvKuJAZyAqiS9yFWCX-IMZJcgrwxF_rj7MdurkYPTuWQh09Kf6-31Jw/exec";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    business: "",
    phone: "",
    email: "",
    budget: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Create a fetch request to the Google Apps Script
      // App Script requires 'no-cors' if you don't handle preflight/CORS in script, 
      // but 'no-cors' won't let you read the response body. 
      // However, for a simple form submission, it works well.
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors";

  return (
    <main className="pt-20">
      <section className="section-padding text-center">
        <div className="container-custom">
          <motion.p {...fadeInUp} className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Contact Us
          </motion.p>
          <motion.h1 {...fadeInUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </motion.h1>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div {...fadeInUp} className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, label: "Phone", value: "+91 9790727825", href: "tel:+919790727825" },
              { icon: Mail, label: "Email", value: "lionyxtechnologies2426@gmail.com", href: "mailto:lionyxtechnologies2426@gmail.com" },
              { icon: MapPin, label: "Location", value: "Tamil Nadu, India" },
              { icon: Clock, label: "Business Hours", value: "Mon – Sat, 9 AM – 7 PM IST" },
            ].map((item) => (
              <div key={item.label} className="glass-card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="tel:+919790727825"
              className="glow-button w-full py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Click to Call Now
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8"
          >
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We've received your message and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} className={inputClass} />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input name="business" placeholder="Business Name" value={form.business} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} className={inputClass} />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <input name="email" placeholder="Email Address *" value={form.email} onChange={handleChange} className={inputClass} />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <select name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
                    <option value="">Budget Range</option>
                    <option value="under-10k">Under ₹10,000</option>
                    <option value="10k-25k">₹10,000 – ₹25,000</option>
                    <option value="25k-50k">₹25,000 – ₹50,000</option>
                    <option value="50k-plus">₹50,000+</option>
                  </select>
                  <select name="projectType" value={form.projectType} onChange={handleChange} className={inputClass}>
                    <option value="">Project Type</option>
                    <option value="business">Business Website</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="landing">Landing Page</option>
                    <option value="custom">Custom Application</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea name="message" placeholder="Tell us about your project *" rows={5} value={form.message} onChange={handleChange} className={inputClass} />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="glow-button w-full py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
