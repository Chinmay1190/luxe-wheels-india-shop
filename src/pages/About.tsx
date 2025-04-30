
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="container relative z-20 py-24 md:py-32 lg:py-40 text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
            About <span className="text-gold">LuxeWheels</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-xl">
            India's premier destination for luxury vehicles and superbikes.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2015, LuxeWheels India was born from a passion for automotive excellence and a vision to bring the world's most prestigious vehicles to discerning Indian enthusiasts.
            </p>
            <p className="text-lg mb-6">
              What began as a small showroom in Mumbai has grown into India's most exclusive marketplace for luxury vehicles, with a reputation built on authenticity, exceptional service, and unparalleled expertise.
            </p>
            <p className="text-lg">
              Our team comprises automotive experts, former racers, and luxury specialists who share an unwavering commitment to quality. We personally source each vehicle in our collection, ensuring that every product meets our exacting standards.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Authenticity</h3>
              <p className="text-muted-foreground">
                We guarantee the provenance and condition of every vehicle in our collection. Each purchase comes with complete documentation and history.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to excellence in every aspect of our business, from vehicle selection and preparation to customer service and after-sales support.
              </p>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Value</h3>
              <p className="text-muted-foreground">
                While we deal in premium vehicles, we are committed to providing exceptional value through competitive pricing, comprehensive warranties, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto w-48 h-48">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-1">Rajiv Mehta</h3>
              <p className="text-gold mb-2">Founder & CEO</p>
              <p className="text-muted-foreground">
                Former racing driver with 15 years of experience in luxury automobile imports.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto w-48 h-48">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" 
                  alt="COO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-1">Priya Sharma</h3>
              <p className="text-gold mb-2">Chief Operating Officer</p>
              <p className="text-muted-foreground">
                Automotive industry veteran with expertise in luxury brand management.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto w-48 h-48">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" 
                  alt="CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-1">Vikram Singh</h3>
              <p className="text-gold mb-2">Head of Technical Operations</p>
              <p className="text-muted-foreground">
                Master technician with specialized training from leading European manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
