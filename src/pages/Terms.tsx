import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using LuxeWheels India's website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">2. Vehicle Purchases</h2>
              <p className="text-muted-foreground mb-4">
                All vehicle purchases through LuxeWheels India are subject to availability and confirmation of the order. We reserve the right to refuse any order for any reason. All prices are listed in Indian Rupees (INR) and are subject to change without notice.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>A valid government-issued ID and driver's license are required for all vehicle purchases</li>
                <li>All sales require proper documentation as per Indian Motor Vehicle Act</li>
                <li>Registration and insurance must be completed before delivery</li>
                <li>EMI options are subject to approval by our financial partners</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">3. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                We accept various payment methods including bank transfers, credit/debit cards, and EMI through approved financial institutions. A non-refundable deposit may be required to secure your order.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">4. Delivery & Ownership Transfer</h2>
              <p className="text-muted-foreground">
                Delivery timelines are estimates and may vary based on location and availability. Ownership is transferred only upon full payment and completion of all necessary documentation. LuxeWheels India will assist with registration formalities but the customer is ultimately responsible for ensuring proper registration.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">5. Warranties</h2>
              <p className="text-muted-foreground">
                All vehicles come with manufacturer warranties. The warranty terms and conditions are as specified by the respective manufacturers. LuxeWheels India acts as an authorized dealer and facilitates warranty claims but does not provide independent warranties unless explicitly stated.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">6. Returns & Cancellations</h2>
              <p className="text-muted-foreground">
                Due to the nature of luxury vehicle sales, returns are generally not accepted. Cancellation policies vary by product and are communicated at the time of purchase. Please refer to our Return Policy page for detailed information.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                LuxeWheels India shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or products. Our liability is limited to the purchase price of the vehicle.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in Mumbai, India.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions regarding these terms, please contact us through our Contact page or email us at legal@luxewheelsindia.com
              </p>
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

export default Terms;