import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, CheckCircle, AlertCircle } from "lucide-react";

const Warranty = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-gold" />
            </div>
            <h1 className="text-4xl font-heading font-bold mb-4">Warranty Policy</h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive warranty coverage for your peace of mind
            </p>
          </div>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">Manufacturer Warranty</h2>
              <p className="text-muted-foreground mb-4">
                All vehicles sold by LuxeWheels India come with the manufacturer's standard warranty. The warranty is directly provided and honored by the respective vehicle manufacturers through their authorized service centers across India.
              </p>
              
              <div className="bg-card border rounded-lg p-6 my-6">
                <h3 className="text-xl font-heading font-semibold mb-4">Standard Warranty Coverage</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Luxury Cars</p>
                      <p className="text-sm text-muted-foreground">2-3 years or 100,000 km (whichever comes first)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Sports Cars</p>
                      <p className="text-sm text-muted-foreground">2-3 years or 60,000 km (whichever comes first)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Superbikes</p>
                      <p className="text-sm text-muted-foreground">2 years unlimited mileage</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">What's Covered</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Manufacturing defects in materials and workmanship</li>
                <li>Engine and transmission components</li>
                <li>Electrical and electronic systems</li>
                <li>Suspension and steering systems</li>
                <li>Brake system components</li>
                <li>Fuel system components</li>
                <li>Original factory-fitted accessories</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">What's Not Covered</h2>
              <div className="bg-muted border rounded-lg p-6 my-6">
                <div className="flex gap-3 mb-4">
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="font-medium">The following are typically excluded from warranty coverage:</p>
                </div>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Normal wear and tear (brake pads, tires, batteries, filters)</li>
                  <li>Damage from accidents, misuse, or negligence</li>
                  <li>Modifications or alterations not approved by manufacturer</li>
                  <li>Damage from improper maintenance or use of non-genuine parts</li>
                  <li>Cosmetic issues like scratches, dents, or paint chips</li>
                  <li>Damage from natural disasters or environmental factors</li>
                  <li>Racing, off-road use, or use in extreme conditions</li>
                  <li>Consumables like lubricants, coolants, and fluids</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">Extended Warranty Options</h2>
              <p className="text-muted-foreground mb-4">
                For additional protection beyond the manufacturer warranty, we offer extended warranty plans:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-heading font-semibold mb-3">Premium Extended Warranty</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Additional 2-3 years coverage</li>
                    <li>• Comprehensive parts coverage</li>
                    <li>• 24/7 roadside assistance</li>
                    <li>• Priority service scheduling</li>
                  </ul>
                </div>
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-heading font-semibold mb-3">Elite Care Package</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Up to 5 years total coverage</li>
                    <li>• Includes wear items</li>
                    <li>• Free scheduled maintenance</li>
                    <li>• Concierge service support</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">Warranty Claims Process</h2>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-3">
                <li>
                  <strong>Identify the Issue:</strong> Notice a potential defect or malfunction covered under warranty
                </li>
                <li>
                  <strong>Contact Service Center:</strong> Schedule an appointment at the nearest authorized service center
                </li>
                <li>
                  <strong>Bring Documentation:</strong> Carry warranty card, purchase invoice, service history, and vehicle registration
                </li>
                <li>
                  <strong>Inspection:</strong> Service center will inspect and diagnose the issue
                </li>
                <li>
                  <strong>Claim Approval:</strong> If covered under warranty, repairs will be authorized at no cost
                </li>
                <li>
                  <strong>Repair Completion:</strong> Vehicle will be repaired using genuine parts
                </li>
              </ol>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">Maintaining Your Warranty</h2>
              <p className="text-muted-foreground mb-4">
                To keep your warranty valid, you must:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Follow the manufacturer's recommended service schedule</li>
                <li>Service your vehicle only at authorized service centers</li>
                <li>Use genuine parts and recommended fluids</li>
                <li>Keep all service records and receipts</li>
                <li>Report any issues promptly</li>
                <li>Not make unauthorized modifications</li>
                <li>Use the vehicle as intended per manufacturer guidelines</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">Service Centers</h2>
              <p className="text-muted-foreground mb-4">
                All warranty services must be performed at authorized service centers. We provide a comprehensive list of authorized service centers in your area at the time of delivery. Most major cities have multiple authorized centers for your convenience.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">Transferable Warranty</h2>
              <p className="text-muted-foreground">
                Most manufacturer warranties are transferable to subsequent owners, which can enhance resale value. Transfer procedures and any associated fees vary by manufacturer. Contact us for specific details about warranty transfer for your vehicle.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">Additional Support</h2>
              <p className="text-muted-foreground mb-4">
                LuxeWheels India is committed to ensuring a smooth warranty experience:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We'll help coordinate warranty claims with manufacturers</li>
                <li>Provide guidance on service center locations</li>
                <li>Assist with documentation and paperwork</li>
                <li>Escalate unresolved warranty issues</li>
                <li>Offer extended warranty purchase assistance</li>
              </ul>
            </section>
          </div>
          
          <div className="mt-12 bg-gold/10 border border-gold/20 rounded-lg p-8">
            <h3 className="text-xl font-heading font-semibold mb-3">Warranty Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Need clarification on warranty coverage or have questions about a claim? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact">
                <button className="px-6 py-3 bg-gold hover:bg-gold/90 text-black font-medium rounded-md transition-colors">
                  Contact Support
                </button>
              </a>
              <a href="tel:+911800123456">
                <button className="px-6 py-3 border border-border hover:bg-muted text-foreground font-medium rounded-md transition-colors">
                  Call: 1800 123 4567
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Warranty;