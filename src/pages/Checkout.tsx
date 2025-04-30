
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IndianRupee } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode ||
      !formData.cardName ||
      !formData.cardNumber ||
      !formData.cardExpiry ||
      !formData.cardCvv
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
      setIsSubmitting(false);
    }, 2000);
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8 flex-grow">
        <h1 className="text-3xl font-heading font-bold mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <div className="border rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-heading font-semibold mb-4">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="block mb-2">Full Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block mb-2">Email Address</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="block mb-2">Phone Number</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="address" className="block mb-2">Address</Label>
                    <Input 
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your full address"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="city" className="block mb-2">City</Label>
                    <Input 
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="state" className="block mb-2">State</Label>
                    <Input 
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter your state"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="pincode" className="block mb-2">PIN Code</Label>
                    <Input 
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter your PIN code"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Payment Information */}
              <div className="border rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-heading font-semibold mb-4">Payment Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="cardName" className="block mb-2">Name on Card</Label>
                    <Input 
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      placeholder="Enter the name on your card"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="cardNumber" className="block mb-2">Card Number</Label>
                    <Input 
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="XXXX XXXX XXXX XXXX"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cardExpiry" className="block mb-2">Expiry Date</Label>
                    <Input 
                      id="cardExpiry"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cardCvv" className="block mb-2">CVV</Label>
                    <Input 
                      id="cardCvv"
                      name="cardCvv"
                      value={formData.cardCvv}
                      onChange={handleChange}
                      placeholder="XXX"
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="border rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-heading font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-12 h-12 object-cover rounded mr-3" 
                      />
                      <div>
                        <h4 className="font-medium">{item.product.name}</h4>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <IndianRupee className="h-3 w-3 mr-1" />
                      <span>{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Subtotal</span>
                  <div className="flex items-center">
                    <IndianRupee className="h-3 w-3 mr-1" />
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Tax</span>
                  <div className="flex items-center">
                    <IndianRupee className="h-3 w-3 mr-1" />
                    <span>{formatPrice(subtotal * 0.18)}</span>
                  </div>
                </div>
                <div className="border-t pt-3 flex justify-between items-center font-bold">
                  <span>Total</span>
                  <div className="flex items-center">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    <span>{formatPrice(subtotal + (subtotal * 0.18))}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-gold hover:bg-gold/90 text-black font-medium py-6"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Processing..." : "Place Order"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
