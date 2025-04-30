
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const orderNumber = `LW${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-16 flex-grow">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Order Successful!
          </h1>
          
          <p className="text-lg mb-4">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
          
          <div className="border rounded-lg mb-8 py-6 px-8 inline-block">
            <h2 className="text-xl font-semibold mb-2">Order #{orderNumber}</h2>
            <p className="text-muted-foreground">
              A confirmation email has been sent to your registered email address.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              className="bg-gold hover:bg-gold/90 text-black font-medium py-6 px-8"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </Button>
            
            <p className="text-sm text-muted-foreground">
              If you have any questions about your order, please contact our customer support.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderSuccess;
