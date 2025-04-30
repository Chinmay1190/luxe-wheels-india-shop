
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";
import { IndianRupee } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container py-16 flex-grow">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-heading font-bold mb-4">Product Not Found</h1>
            <p className="mb-8 text-muted-foreground">The product you are looking for does not exist or has been removed.</p>
            <Button onClick={() => navigate('/products')}>Browse All Products</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="w-full lg:w-3/5">
            <div className="relative aspect-square mb-4 rounded-lg overflow-hidden border">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <p className="font-bold text-white text-2xl">Out of Stock</p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  className={`aspect-square rounded border overflow-hidden ${
                    idx === activeImage ? "ring-2 ring-gold" : ""
                  }`}
                  onClick={() => setActiveImage(idx)}
                >
                  <img src={image} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="w-full lg:w-2/5">
            <span className="inline-block bg-muted text-muted-foreground px-2 py-1 text-sm rounded mb-2">
              {product.category === 'superbike' ? 'Superbike' : 
               product.category === 'luxury-car' ? 'Luxury Car' : 'Sports Car'}
            </span>
            <h1 className="text-3xl font-heading font-bold mb-2">{product.name}</h1>
            <h2 className="text-xl text-muted-foreground mb-4">{product.brand}</h2>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center mr-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-5 h-5 ${
                      star <= product.rating ? "text-gold" : "text-muted"
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating.toFixed(1)} rating
              </span>
            </div>
            
            <div className="flex items-center text-2xl font-heading font-bold mb-6">
              <IndianRupee className="h-6 w-6 mr-1" />
              <span>{formatPrice(product.price)}</span>
            </div>
            
            <p className="text-muted-foreground mb-8">{product.description}</p>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Specifications</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col border rounded-lg p-3">
                    <span className="text-xs text-muted-foreground uppercase">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                onClick={handleAddToCart}
                disabled={!product.inStock} 
                className="w-full bg-gold hover:bg-gold/90 text-black font-medium py-6"
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-gold text-gold hover:bg-gold/10 font-medium py-6"
                onClick={() => navigate('/products')}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
