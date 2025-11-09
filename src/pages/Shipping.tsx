import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Truck, Shield, Clock, Package } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-heading font-bold mb-8">Shipping & Returns</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Free Delivery</h3>
              <p className="text-muted-foreground">
                Complimentary nationwide delivery with white-glove service for all vehicles.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Insured Transit</h3>
              <p className="text-muted-foreground">
                All vehicles are fully insured during transportation for your peace of mind.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Timely Delivery</h3>
              <p className="text-muted-foreground">
                Track your order in real-time and receive timely updates on delivery status.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Perfect Condition</h3>
              <p className="text-muted-foreground">
                Vehicles delivered in showroom condition with professional handover.
              </p>
            </div>
          </div>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-semibold mb-4">Shipping Policy</h2>
              
              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Delivery Timeline</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Metro Cities:</strong> 7-14 business days from order confirmation</li>
                <li><strong>Tier 2 Cities:</strong> 14-21 business days from order confirmation</li>
                <li><strong>Remote Areas:</strong> 21-30 business days, subject to logistics availability</li>
                <li>Timelines may vary based on vehicle availability and customization requirements</li>
              </ul>
              
              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Delivery Process</h3>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li><strong>Order Confirmation:</strong> You'll receive a detailed confirmation email with estimated delivery date</li>
                <li><strong>Pre-Delivery Inspection:</strong> Vehicle undergoes comprehensive quality check at our facility</li>
                <li><strong>Dispatch Notification:</strong> You'll be notified 48 hours before dispatch with tracking details</li>
                <li><strong>Transit Updates:</strong> Real-time tracking and updates throughout the journey</li>
                <li><strong>Delivery Scheduling:</strong> Our team will coordinate a convenient delivery time with you</li>
                <li><strong>Handover:</strong> Professional delivery with complete documentation and vehicle walkthrough</li>
              </ol>
              
              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Delivery Coverage</h3>
              <p className="text-muted-foreground mb-4">
                We deliver to all major cities and towns across India. For remote or difficult-to-access locations, our team will discuss the best delivery options with you.
              </p>
              
              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">What's Included</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Free doorstep delivery across India</li>
                <li>Full transit insurance coverage</li>
                <li>Professional handling by trained specialists</li>
                <li>Vehicle inspection report</li>
                <li>Complete documentation handover</li>
                <li>Product demonstration and orientation</li>
              </ul>
            </section>
            
            <section className="pt-6 border-t">
              <h2 className="text-2xl font-heading font-semibold mb-4">Return & Cancellation Policy</h2>
              
              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Cancellation Policy</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Within 24 hours of booking:</strong> Full refund of booking amount (minus processing fees)</li>
                <li><strong>24-72 hours after booking:</strong> 10% cancellation fee applies</li>
                <li><strong>After dispatch:</strong> 25% cancellation fee applies</li>
                <li><strong>After delivery:</strong> Returns subject to inspection and 30% restocking fee</li>
              </ul>
              
              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Return Eligibility</h3>
              <p className="text-muted-foreground mb-4">
                Due to the nature of luxury vehicle sales, returns are only accepted under the following conditions:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Manufacturing defects discovered within 7 days of delivery</li>
                <li>Vehicle significantly different from specifications mentioned</li>
                <li>Damage during transit (must be reported within 24 hours)</li>
                <li>Vehicle must be unused with original documentation</li>
                <li>All accessories and complimentary items must be returned</li>
              </ul>
              
              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Return Process</h3>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li>Contact our customer service within 7 days of delivery</li>
                <li>Provide order details and reason for return</li>
                <li>Schedule inspection by our authorized representative</li>
                <li>Upon approval, arrange pickup at no additional cost</li>
                <li>Refund processed within 7-14 business days after inspection</li>
              </ol>
              
              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Non-Returnable Scenarios</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Vehicle has been registered in customer's name</li>
                <li>Any modifications or customizations have been made</li>
                <li>Vehicle shows signs of use or damage</li>
                <li>More than 7 days have passed since delivery</li>
                <li>Customer changed their mind after taking delivery</li>
              </ul>
              
              <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Refund Policy</h3>
              <p className="text-muted-foreground mb-4">
                Refunds are processed to the original payment method:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Bank transfer refunds: 5-7 business days</li>
                <li>Card refunds: 7-14 business days (depends on bank)</li>
                <li>EMI cancellations: Coordinated with financing partner</li>
                <li>Booking amount refunds: 3-5 business days</li>
              </ul>
            </section>
            
            <section className="pt-6 border-t">
              <h2 className="text-2xl font-heading font-semibold mb-4">Warranty Coverage</h2>
              <p className="text-muted-foreground mb-4">
                All vehicles come with manufacturer warranty. Warranty-related issues should be addressed directly with authorized service centers. We will assist in coordinating warranty claims and provide necessary documentation.
              </p>
              <p className="text-muted-foreground">
                For more details, please refer to our <a href="/warranty" className="text-gold hover:underline">Warranty Policy</a> page.
              </p>
            </section>
          </div>
          
          <div className="mt-12 bg-gold/10 border border-gold/20 rounded-lg p-8">
            <h3 className="text-xl font-heading font-semibold mb-3">Need Assistance?</h3>
            <p className="text-muted-foreground mb-4">
              Our customer support team is here to help with any questions about shipping or returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact">
                <button className="px-6 py-3 bg-gold hover:bg-gold/90 text-black font-medium rounded-md transition-colors">
                  Contact Support
                </button>
              </a>
              <a href="mailto:support@luxewheelsindia.com">
                <button className="px-6 py-3 border border-border hover:bg-muted text-foreground font-medium rounded-md transition-colors">
                  Email: support@luxewheelsindia.com
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

export default Shipping;