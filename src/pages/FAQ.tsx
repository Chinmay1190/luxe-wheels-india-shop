import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What types of vehicles do you sell?",
          a: "LuxeWheels India specializes in premium superbikes, luxury cars, and high-performance sports cars. Our collection includes top brands like Ducati, BMW, Kawasaki, Mercedes-Benz, BMW, Porsche, and more."
        },
        {
          q: "Are all vehicles brand new?",
          a: "Yes, we exclusively deal in brand new vehicles sourced directly from authorized manufacturers and importers. All vehicles come with full manufacturer warranties and official documentation."
        },
        {
          q: "Do you ship across India?",
          a: "Yes, we offer complimentary nationwide delivery with white-glove service. Delivery timelines vary by location, typically ranging from 7-21 business days depending on your city."
        }
      ]
    },
    {
      category: "Purchasing",
      questions: [
        {
          q: "What documents do I need to purchase a vehicle?",
          a: "You'll need a valid government-issued photo ID (Aadhaar/Passport/Voter ID), PAN card, valid driver's license, address proof, and passport-sized photographs. For corporate purchases, additional company documents may be required."
        },
        {
          q: "Do you offer financing or EMI options?",
          a: "Yes, we partner with leading banks and financial institutions to offer competitive financing options. EMI plans are available with flexible tenures ranging from 12 to 60 months, subject to approval."
        },
        {
          q: "Can I trade in my existing vehicle?",
          a: "Yes, we accept trade-ins for both bikes and cars. Our team will evaluate your vehicle and offer a competitive exchange value that can be adjusted against your purchase."
        },
        {
          q: "What is your cancellation policy?",
          a: "Cancellations are accepted up to 24 hours after booking confirmation. After this period, cancellation fees may apply based on the stage of order processing. Please refer to our Terms & Conditions for detailed information."
        }
      ]
    },
    {
      category: "Delivery & Registration",
      questions: [
        {
          q: "How long does delivery take?",
          a: "Standard delivery within major metros takes 7-14 business days. For tier-2 and tier-3 cities, it may take 14-21 business days. Exact timelines are provided at the time of purchase."
        },
        {
          q: "Do you help with vehicle registration?",
          a: "Yes, we provide complete registration assistance. Our team will help prepare all necessary documentation and coordinate with the RTO. Registration typically takes 2-4 weeks depending on your location."
        },
        {
          q: "Is insurance included?",
          a: "Insurance is mandatory for registration but not included in the vehicle price. We partner with leading insurers and can help you get competitive quotes and process insurance paperwork."
        }
      ]
    },
    {
      category: "Warranty & Service",
      questions: [
        {
          q: "What warranty do vehicles come with?",
          a: "All vehicles come with manufacturer's standard warranty. Warranty terms vary by brand - typically 2-3 years for cars and 2 years for bikes. Extended warranty options are also available."
        },
        {
          q: "Where can I get my vehicle serviced?",
          a: "All vehicles can be serviced at authorized service centers of the respective brands across India. We provide a list of nearest service centers at the time of delivery."
        },
        {
          q: "What if there's an issue with my vehicle?",
          a: "Any manufacturing defects are covered under warranty. Contact our customer support immediately and we'll coordinate with the manufacturer for repairs or replacement as per warranty terms."
        }
      ]
    },
    {
      category: "Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept bank transfers (NEFT/RTGS), cheques, demand drafts, credit/debit cards, and UPI payments. For high-value transactions, we recommend bank transfers for better processing."
        },
        {
          q: "Is a deposit required to book a vehicle?",
          a: "Yes, a booking amount is required to reserve your vehicle. The amount varies by vehicle category and is communicated during the booking process. This is adjustable against the final payment."
        },
        {
          q: "When do I need to make the full payment?",
          a: "Full payment or financing approval must be completed before delivery. For cash purchases, payment is due at least 3 business days before scheduled delivery. EMI customers need loan approval before delivery."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about purchasing luxury vehicles from LuxeWheels India.
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((section, idx) => (
              <div key={idx} className="bg-card border rounded-lg p-6">
                <h2 className="text-2xl font-heading font-semibold mb-6">{section.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((faq, qIdx) => (
                    <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gold/10 border border-gold/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-heading font-semibold mb-3">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default FAQ;