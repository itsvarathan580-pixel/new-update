const Privacy = () => {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-sm leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Information We Collect</h2>
            <p>When you contact us or use our services, we may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and business name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Project requirements and messages</li>
              <li>Usage data through cookies and analytics tools</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your enquiries and provide our services</li>
              <li>To improve our website and user experience</li>
              <li>To send relevant updates about your project</li>
              <li>To analyze website traffic through Google Analytics</li>
              <li>To optimize our Google Ads campaigns</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal information. Your data is stored securely and is only accessible to authorized personnel. We do not sell or rent your personal information to third parties.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience. These include essential cookies for site functionality and analytics cookies (Google Analytics) to understand how visitors interact with our site. You can control cookie preferences through your browser settings.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Google Ads</strong> – For advertising and remarketing purposes</li>
              <li><strong className="text-foreground">Google Analytics</strong> – For website traffic analysis</li>
            </ul>
            <p>These services may collect data according to their own privacy policies.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Contact</h2>
            <p>For privacy-related queries, contact us at:</p>
            <p>Email: <a href="mailto:lionyxtechnologies2426@gmail.com" className="text-primary hover:text-accent transition-colors">lionyxtechnologies2426@gmail.com</a></p>
            <p>Phone: <a href="tel:+919790727825" className="text-primary hover:text-accent transition-colors">+91 9790727825</a></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
