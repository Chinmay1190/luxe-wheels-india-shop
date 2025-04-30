
export type ProductCategory = 'superbike' | 'luxury-car' | 'sports-car';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  description: string;
  price: number; // in INR
  rating: number;
  images: string[];
  specs: {
    [key: string]: string | number;
  };
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}
