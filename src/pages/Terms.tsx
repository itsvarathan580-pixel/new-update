const Terms = () => {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold mb-8">Terms & Conditions</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-sm leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Service Agreement</h2>
            <p>By engaging LIONYX TECHNOLOGIES for web design and development services, you agree to the following terms. These terms constitute a binding agreement between you (the "Client") and LIONYX TECHNOLOGIES (the "Agency").</p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>A 50% advance payment is required before project commencement</li>
              <li>Remaining 50% is due upon project completion, before final handover</li>
              <li>Payments can be made via bank transfer, UPI, or other agreed methods</li>
              <li>All prices are in Indian Rupees (INR) unless otherwise stated</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Project Timeline</h2>
            <p>Timelines are estimated based on project scope and are communicated at the start of each engagement. Delays caused by late content submission or requirement changes from the client may extend the delivery timeline. We strive to meet all agreed deadlines.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Revision Policy</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Number of revision rounds depends on the chosen plan</li>
              <li>Additional revisions beyond the agreed scope may incur extra charges</li>
              <li>Major scope changes after development begins will be treated as new requirements</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Refund & Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>If cancelled before work begins, a full refund of the advance payment will be provided</li>
              <li>If cancelled after design approval, the advance payment is non-refundable</li>
              <li>Partial refunds may be considered based on work completed</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Limitation of Liability</h2>
            <p>LIONYX TECHNOLOGIES shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service in question.</p>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Upon full payment, the client receives ownership of the final website deliverables</li>
              <li>We retain the right to showcase the project in our portfolio unless otherwise agreed</li>
              <li>Third-party assets (fonts, images, plugins) remain subject to their respective licenses</li>
            </ul>

            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Contact</h2>
            <p>For any questions regarding these terms, please contact us:</p>
            <p>Email: <a href="mailto:lionyxtechnologies2426@gmail.com" className="text-primary hover:text-accent transition-colors">lionyxtechnologies2426@gmail.com</a></p>
            <p>Phone: <a href="tel:+919790727825" className="text-primary hover:text-accent transition-colors">+91 9790727825</a></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;
