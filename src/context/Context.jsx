import { createContext, useContext, useReducer } from "react";

import { cartReducer, productReducer } from "./Reducer";
const Cart = createContext();

const Context = ({ children }) => {
  const newProducts = [
    {
      id: "1",
      name: "Men's Black & White Stripped Tshirt",
      image:
        "https://images.bewakoof.com/t640/men-s-black-stripe-minion-relaxed-fit-t-shirt-452883-1655751697-1.jpg",
      inStock: true,
      price: "799",
      ratings: "4",
    },
    {
      id: "2",
      name: "Men's Red Color The Batman Tshirt",
      image:
        "https://images.bewakoof.com/t640/men-s-red-the-batman-relaxed-fit-t-shirt-480316-1656143579-1.jpg",
      inStock: true,
      price: "899",
      ratings: "3",
    },

    {
      id: "3",
      name: "Men's Red Color Avenger Logo's Tshirt",
      image:
        "https://images.bewakoof.com/t640/savvy-redmen-aop-t-shirt-464968-1656045539-1.jpg",
      inStock: true,
      price: "599",
      ratings: "2",
    },

    {
      id: "4",
      name: "Men's White Oversized White Color Tshirt",
      image:
        "https://images.bewakoof.com/t640/men-s-white-karma-circles-typography-oversized-t-shirt-489752-1656144467-1.jpg",
      inStock: true,
      price: "1099",
      ratings: "4",
    },

    {
      id: "5",
      name: "Men's Navy Blue Troublemakers Tshirt",
      image:
        "https://images.bewakoof.com/t640/troublemakers-trio-oversized-fit-t-shirt-546035-1664476877-1.jpg",
      inStock: true,
      price: "1299",
      ratings: "3",
    },

    {
      id: "6",
      name: "Men's Navy Blue Conquer Oversized Tshirt",
      image:
        "https://images.bewakoof.com/t640/men-navy-blue-conquer-strip-printed-t-shirt-519223-1661765445-1.jpg",
      inStock: false,
      price: "499",
      ratings: "2",
    },

    {
      id: "7",
      name: "Men's Navy Blue Peace Oversized Tshirt",
      image:
        "https://images.bewakoof.com/t640/men-s-blue-peace-not-war-oversized-t-shirt-479634-1656191303-1.jpg",
      inStock: true,
      price: "599",
      ratings: "4",
    },

    {
      id: "8",
      name: "Men's Black Batman Oversized Tshirt",
      image:
        "https://images.bewakoof.com/t640/men-s-black-batman-riddle-bml-oversized-t-shirt-479765-1656169195-1.jpg",
      inStock: true,
      price: "999",
      ratings: "1",
    },

    {
      id: "9",
      name: "Men's Red Mickey Mouse Oversized Tshirt",
      image:
        "https://images.bewakoof.com/t640/men-s-red-mickey-mouse-half-half-dl-oversized-t-shirt-440233-1655751659-1.jpg",
      inStock: true,
      price: "1599",
      ratings: "5",
    },

    {
      id: "10",
      name: "Men's Navy Blue Peace Oversized Tshirt",
      image:
        "https://images.bewakoof.com/t640/men-s-blue-peace-not-war-oversized-t-shirt-479634-1656191303-1.jpg",
      inStock: false,
      price: "999",
      ratings: "5",
    },
    {
      id: "11",
      name: "Men's Navy Blue Conquer Oversized Tshirt",
      image:
        "https://images.bewakoof.com/t640/men-navy-blue-conquer-strip-printed-t-shirt-519223-1661765445-1.jpg",
      inStock: true,
      price: "599",
      ratings: "4",
    },
    {
      id: "12",
      name: "Men's Red Color The Batman Tshirt",
      image:
        "https://images.bewakoof.com/t640/men-s-red-the-batman-relaxed-fit-t-shirt-480316-1656143579-1.jpg",
      inStock: false,
      price: "899",
      ratings: "3",
    },
  ];
  const products = newProducts.map((e) => ({
    id: e.id,
    name: e.name,
    image: e.image,
    price: e.price,
    inStock: e.inStock,
    ratings: e.ratings,
  }));
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
