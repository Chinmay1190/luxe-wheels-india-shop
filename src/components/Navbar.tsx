
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useCart } from "@/hooks/use-cart";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
          <Link to="/" className="flex items-center">
            <span className="text-xl font-heading font-bold tracking-tight">LuxeWheels</span>
            <span className="ml-1 text-gold">India</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/categories/superbike" className="text-sm font-medium transition-colors hover:text-primary">
            Superbikes
          </Link>
          <Link to="/categories/luxury-car" className="text-sm font-medium transition-colors hover:text-primary">
            Luxury Cars
          </Link>
          <Link to="/categories/sports-car" className="text-sm font-medium transition-colors hover:text-primary">
            Sports Cars
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background border-b md:hidden animate-fade-in">
            <div className="container py-4 flex flex-col space-y-3">
              <Link to="/" className="text-sm font-medium px-2 py-1.5 hover:bg-muted rounded-md" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/categories/superbike" className="text-sm font-medium px-2 py-1.5 hover:bg-muted rounded-md" onClick={toggleMenu}>
                Superbikes
              </Link>
              <Link to="/categories/luxury-car" className="text-sm font-medium px-2 py-1.5 hover:bg-muted rounded-md" onClick={toggleMenu}>
                Luxury Cars
              </Link>
              <Link to="/categories/sports-car" className="text-sm font-medium px-2 py-1.5 hover:bg-muted rounded-md" onClick={toggleMenu}>
                Sports Cars
              </Link>
              <Link to="/about" className="text-sm font-medium px-2 py-1.5 hover:bg-muted rounded-md" onClick={toggleMenu}>
                About Us
              </Link>
            </div>
          </div>
        )}
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs bg-gold text-white rounded-full">
                  {items.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
