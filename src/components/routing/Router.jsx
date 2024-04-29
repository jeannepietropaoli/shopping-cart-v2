import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import Home from "../layout/Home/Home"
import Shop from "../layout/Shop/Shop"
import GeneralErrorPage from "./errorPages/GeneralErrorPage"
import Cart from "../layout/Cart/Cart"

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            errorElement: <GeneralErrorPage/>,
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path: 'shop',
                    element: <Shop/>,
                },
                {
                    path: 'cart',
                    element: <Cart/>,
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