
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { ProductCategory } from "@/types";

const Index = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  
  const featuredProducts = products.filter(product => {
    if (selectedCategory === 'all') return true;
    return product.category === selectedCategory;
  }).slice(0, 8); // Show only 8 products at a time
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="container relative z-20 py-24 md:py-32 lg:py-48 text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
            Experience Luxury <span className="text-gold">Performance</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-xl mb-8">
            Discover India's premier collection of superbikes, luxury cars, and sports cars.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button className="bg-gold hover:bg-gold/90 text-black font-medium px-8 py-6 text-lg">
                Explore Collection
              </Button>
            </Link>
            <Link to="/categories/superbike">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 font-medium px-8 py-6 text-lg">
                Superbikes
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Category Tabs */}
      <section className="py-12 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Featured Vehicles</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant={selectedCategory === 'all' ? "default" : "outline"} 
              className={selectedCategory === 'all' ? "bg-gold text-black" : ""}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </Button>
            <Button 
              variant={selectedCategory === 'superbike' ? "default" : "outline"} 
              className={selectedCategory === 'superbike' ? "bg-gold text-black" : ""}
              onClick={() => setSelectedCategory('superbike')}
            >
              Superbikes
            </Button>
            <Button 
              variant={selectedCategory === 'luxury-car' ? "default" : "outline"} 
              className={selectedCategory === 'luxury-car' ? "bg-gold text-black" : ""}
              onClick={() => setSelectedCategory('luxury-car')}
            >
              Luxury Cars
            </Button>
            <Button 
              variant={selectedCategory === 'sports-car' ? "default" : "outline"} 
              className={selectedCategory === 'sports-car' ? "bg-gold text-black" : ""}
              onClick={() => setSelectedCategory('sports-car')}
            >
              Sports Cars
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={() => addItem(product)}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/products">
              <Button className="bg-gold hover:bg-gold/90 text-black font-medium px-8 py-6 text-lg">
                View All Vehicles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gold/10 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Authentic Guarantee</h3>
              <p className="text-muted-foreground">All vehicles are sourced directly from official manufacturers with full warranties.</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gold/10 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Secure Payment</h3>
              <p className="text-muted-foreground">Multiple secure payment options including EMI available for your convenience.</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gold/10 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Expedited Delivery</h3>
              <p className="text-muted-foreground">Complimentary nationwide delivery with white-glove service experience.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gold py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
              Experience Unmatched Luxury
            </h2>
            <p className="text-black/80 text-lg mb-8">
              Join our exclusive membership for priority access to new arrivals, private events, and personalized concierge service.
            </p>
            <Button className="bg-black hover:bg-black/80 text-white font-medium px-8 py-6 text-lg">
              Join Membership
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
