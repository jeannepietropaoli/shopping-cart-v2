import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../layout/Layout"
import Home from "../layout/Home/Home"
import Shop from "../layout/Shop/Shop"
import GeneralErrorPage from "./errorPages/GeneralErrorPage"

export default function Router({products, error, loading}) {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            errorElement: <GeneralErrorPage/>,
            children: [
                {
                    path: 'home',
                    element: <Home products={products} error={error} loading={loading}/>,
                },
                {
                    path: 'shop',
                    element: <Shop products={products} error={error} loading={loading}/>,
                },
                {
                    path: '*',
                    element: <GeneralErrorPage/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}