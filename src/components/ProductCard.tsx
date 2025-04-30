
import { Link } from "react-router-dom";
import { IndianRupee } from "lucide-react";
import { Product } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="product-card overflow-hidden h-full flex flex-col">
      <Link to={`/products/${product.id}`} className="flex-grow">
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform hover:scale-105 duration-500" 
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <p className="font-bold text-white text-lg">Out of Stock</p>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-heading font-semibold truncate">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.brand}</p>
            </div>
            <div className="flex items-center text-sm font-medium bg-secondary rounded-full px-2 py-0.5">
              ★ {product.rating.toFixed(1)}
            </div>
          </div>
          <div className="mt-4 flex items-center font-heading font-bold">
            <IndianRupee className="h-4 w-4 mr-1" />
            <span>{formatPrice(product.price)}</span>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button 
          variant="default" 
          className="w-full btn-luxury" 
          onClick={onAddToCart}
          disabled={!product.inStock}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
}
