
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { getProductCategoryLabel } from "@/lib/utils";

const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  // Validate the category ID
  const isValidCategory = ['superbike', 'luxury-car', 'sports-car'].includes(categoryId || '');
  
  if (!isValidCategory) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container py-16 flex-grow">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-heading font-bold mb-4">Category Not Found</h1>
            <p className="mb-8 text-muted-foreground">The category you are looking for does not exist.</p>
            <Button onClick={() => navigate('/products')}>Browse All Products</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const categoryProducts = products.filter(product => product.category === categoryId);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container py-8">
        <h1 className="text-3xl font-heading font-bold mb-2">
          {getProductCategoryLabel(categoryId || '')}
        </h1>
        <p className="text-muted-foreground mb-8">
          {categoryId === 'superbike'
            ? 'Experience unmatched power and agility with our premium superbike collection.'
            : categoryId === 'luxury-car'
              ? 'Indulge in the pinnacle of automotive luxury and comfort.'
              : 'Feel the adrenaline with our high-performance sports cars.'}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={() => addItem(product)}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Category;
