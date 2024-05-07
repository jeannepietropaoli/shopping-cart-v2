import "../styles/App.css";
import Header from "./layout/Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "../styles/App.css";
import { ProductsContext } from "./contexts/ProductsContext";
import { CartContext } from "./contexts/CartContext";
import useProducts from "../customHooks/useProducts";
import { CartActionsContext } from "./contexts/CartActionsContext";

export default function App() {
  const [cart, setCart] = useState([])
  const { products, error, loading } = useProducts()

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
        <ProductsContext.Provider value={{products, error, loading}}>
          <CartContext.Provider value={{cart}}>
            <CartActionsContext.Provider value={{addProductToCart, removeProductFromCart, incrementProductInCart, decrementProductInCart}}>
            <Outlet/>
            </CartActionsContext.Provider>
          </CartContext.Provider>
        </ProductsContext.Provider>
      </main>
    </div>
  );
}
