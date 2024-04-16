import Layout from "./layout/Layout";
import useFetch from "../customHooks/useFetch"
import { FetchDataContext } from "../contexts/FetchDataContext";
import '../styles/App.css'
import Router from '../components/routing/Router'

const apiKey = import.meta.env.VITE_API_KEY;

export default function App() {
    const {
        fetchedData: products,
        error,
        loading,
      } = useFetch("https://api.api-ninjas.com/v1/emoji?subgroup=food_fruit", {
        "X-Api-Key": apiKey,
      });

    const getFakePrice = () => {
        const minPrice = 1
        const maxPrice = 8
        return Math.floor(Math.random() * maxPrice) + minPrice
    }
      const addFakeDetailsToProducts = (products) => {
        return products 
            ? products.map(product => {
                return ({...product, id: product.code, price: getFakePrice()})
            })
            : []
      }

      const detailedProducts = addFakeDetailsToProducts(products)
    
    return (
        <div className="app">
            <Router products={detailedProducts} error={error} loading={loading} />
        </div>
    )
}

