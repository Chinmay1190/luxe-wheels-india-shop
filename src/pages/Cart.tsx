
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { IndianRupee, Trash2, Plus, Minus } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8 flex-grow">
        <h1 className="text-3xl font-heading font-bold mb-8">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Explore our collection and add vehicles to your cart.</p>
            <Button 
              className="bg-gold hover:bg-gold/90 text-black font-medium"
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3">
              <div className="border rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-muted">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">
                        Total
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {items.map((item) => (
                      <tr key={item.product.id}>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img 
                              src={item.product.images[0]} 
                              alt={item.product.name} 
                              className="w-16 h-16 object-cover rounded mr-4"
                            />
                            <div>
                              <h3 className="font-medium">
                                <Link to={`/products/${item.product.id}`} className="hover:text-gold">
                                  {item.product.name}
                                </Link>
                              </h3>
                              <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <IndianRupee className="h-3 w-3 mr-1" />
                            <span>{formatPrice(item.product.price)}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center border rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1.5 hover:bg-muted"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1.5 hover:bg-muted"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center font-medium">
                            <IndianRupee className="h-3 w-3 mr-1" />
                            <span>{formatPrice(item.product.price * item.quantity)}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={() => removeItem(item.product.id)}
                            className="text-red-500 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-between mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/products')}
                >
                  Continue Shopping
                </Button>
                <Button 
                  variant="destructive"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="border rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-heading font-semibold mb-4">Order Summary</h2>
                
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
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
