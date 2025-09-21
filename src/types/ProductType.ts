export type ProductItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  rating: number;
  image: string;
};

export type CartItem = {
  name: string;
  totalPrice: number;
  amount: number;
};

export type CartState = Record<string, CartItem>;
