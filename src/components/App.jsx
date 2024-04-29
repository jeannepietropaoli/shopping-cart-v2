import useFetch from "../customHooks/useFetch";
import "../styles/App.css";
import Header from "./layout/Header/Header";
import { Outlet } from "react-router-dom";
import "../styles/App.css";
import { useMemo, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

export default function App() {
  const [cart, setCart] = useState([])

  const { fetchedData, error, loading } = useFetch("https://api.api-ninjas.com/v1/emoji?subgroup=food_fruit", {"X-Api-Key": apiKey});

  // products manipulation

  const getFakePrice = () => {
    const minPrice = 1;
    const maxPrice = 8;
    return Math.floor(Math.random() * maxPrice) + minPrice;
  };

  const addFakeDetailsToProducts = (products) => {
    return products
      ? products.map((product) => {
          return { ...product, id: product.code, price: getFakePrice() };
        })
      : [];
  };

  const products = useMemo(() => addFakeDetailsToProducts(fetchedData), [fetchedData]);

  // cart manipulation

  const isProductAlreadyInCart = (newProduct) => {
    return cart.some(product => product.id === newProduct.id)
  }

  const incrementProductInCart = (selectedProduct) => {
    setCart(prevCart => {
      return prevCart.map(product => {
        return product.id === selectedProduct.id
          ? {...product, quantity: product.quantity + 1}
          : product
      })
    })
  }

  const decrementProductInCart = (selectedProduct) => {
    if (selectedProduct.quantity === 1) {
      removeProductFromCart(selectedProduct)
    }
    else {
      setCart(prevCart => {
        return prevCart.map(product => {
          return product.id === selectedProduct.id
            ? {...product, quantity: product.quantity - 1}
            : product
        })
      })
    }
  }

  const addNewProductToCart = (selectedProduct) => {
    setCart(prevCart => {
      return [...prevCart, {...selectedProduct, quantity: 1}]
    })
  }

  const removeProductFromCart = (selectedProduct) => {
    setCart(prevCart => {
      return (
        prevCart.filter(product => product.id !== selectedProduct.id)
      )
    })
  }

  const addProductToCart = (selectedProduct) => {
    if(isProductAlreadyInCart(selectedProduct)) {
      incrementProductInCart(selectedProduct)
    }
    else {
      addNewProductToCart(selectedProduct)
      }
  }

  const getCartNumberOfProducts = () => {
    return cart.reduce((total, currentProduct) => total + currentProduct.quantity, 0)
  }

  return (
    <div className="app">
      <Header numberOfProductsInCart={getCartNumberOfProducts()} />
      <main>
        <Outlet 
          context={{
            products,
            error,
            loading,
            cart,
            addProductToCart,
            removeProductFromCart,
            incrementProductInCart,
            decrementProductInCart
          }} />
      </main>
    </div>
  );
}
