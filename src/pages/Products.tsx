
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ProductCategory } from "@/types";
import { products } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const Products = () => {
  const { addItem } = useCart();
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000000]);
  const [sortOption, setSortOption] = useState<string>("featured");
  
  const maxPrice = Math.max(...products.map(product => product.price));
  
  const handleCategoryToggle = (category: ProductCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    
    // Search query filter
    const searchLower = searchQuery.toLowerCase();
    if (
      searchLower !== "" &&
      !product.name.toLowerCase().includes(searchLower) &&
      !product.brand.toLowerCase().includes(searchLower) &&
      !product.description.toLowerCase().includes(searchLower)
    ) {
      return false;
    }
    
    // Price range filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return b.rating - a.rating;
      default:
        return 0; // Featured - use default order
    }
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="text-3xl font-heading font-bold mb-8">All Vehicles</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="w-full lg:w-1/4">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-heading font-semibold mb-4">Filters</h2>
              
              {/* Search */}
              <div className="mb-6">
                <Label htmlFor="search" className="mb-2 block">Search</Label>
                <Input 
                  id="search"
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="superbike"
                      checked={selectedCategories.includes("superbike")}
                      onChange={() => handleCategoryToggle("superbike")}
                      className="mr-2"
                    />
                    <Label htmlFor="superbike">Superbikes</Label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="luxury-car"
                      checked={selectedCategories.includes("luxury-car")}
                      onChange={() => handleCategoryToggle("luxury-car")}
                      className="mr-2"
                    />
                    <Label htmlFor="luxury-car">Luxury Cars</Label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="sports-car"
                      checked={selectedCategories.includes("sports-car")}
                      onChange={() => handleCategoryToggle("sports-car")}
                      className="mr-2"
                    />
                    <Label htmlFor="sports-car">Sports Cars</Label>
                  </div>
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Price Range</h3>
                <div className="mb-4">
                  <Slider 
                    defaultValue={[0, maxPrice]} 
                    max={maxPrice}
                    step={100000}
                    value={[priceRange[0], priceRange[1]]}
                    onValueChange={(value) => setPriceRange([value[0], value[1]])}
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <div>₹{formatPrice(priceRange[0])}</div>
                  <div>₹{formatPrice(priceRange[1])}</div>
                </div>
              </div>
              
              {/* Sort By */}
              <div className="mb-6">
                <Label htmlFor="sort" className="mb-2 block">Sort By</Label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
              
              {/* Reset Filters */}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setSelectedCategories([]);
                  setSearchQuery("");
                  setPriceRange([0, maxPrice]);
                  setSortOption("featured");
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
          
          {/* Products */}
          <div className="w-full lg:w-3/4">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No vehicles found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={() => addItem(product)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Products;
