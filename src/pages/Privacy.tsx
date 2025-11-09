import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                At LuxeWheels India, we collect information to provide better services to our customers. The types of information we collect include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, postal address</li>
                <li><strong>Identification Documents:</strong> Driver's license, Aadhaar card, PAN card for verification purposes</li>
                <li><strong>Financial Information:</strong> Payment details, banking information for transaction processing</li>
                <li><strong>Usage Data:</strong> Browsing behavior, preferences, and interaction with our website</li>
                <li><strong>Device Information:</strong> IP address, browser type, device identifiers</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Process and fulfill your vehicle orders</li>
                <li>Facilitate vehicle registration and documentation</li>
                <li>Communicate with you about orders, deliveries, and services</li>
                <li>Process payments and prevent fraudulent transactions</li>
                <li>Improve our website and customer experience</li>
                <li>Send promotional offers and updates (with your consent)</li>
                <li>Comply with legal obligations and regulations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. Information Sharing & Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in operations (payment processors, delivery partners)</li>
                <li><strong>Financial Institutions:</strong> Banks and lending partners for EMI and financing options</li>
                <li><strong>Government Authorities:</strong> When required by law or to comply with legal proceedings</li>
                <li><strong>Manufacturers:</strong> For warranty registration and service purposes</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information. This includes encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Cookies & Tracking Technologies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings, though this may affect website functionality.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access and review your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
                <li>Data portability rights</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. After this period, we will securely delete or anonymize your data.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it immediately.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">10. Changes to Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services constitutes acceptance of the updated policy.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions or concerns about this privacy policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: privacy@luxewheelsindia.com</p>
                <p>Phone: +91 1800 123 4567</p>
                <p>Address: LuxeWheels India, Mumbai, Maharashtra</p>
              </div>
            </section>
          </div>
          
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;