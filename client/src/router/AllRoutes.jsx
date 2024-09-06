import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Product from "../pages/product/Product";
import Layout from "../pages/Layout";
import Error from "../pages/error/Error";

export const allRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            }, 
            {
                path: "products/:id",
                element: <Products />
            },
            {
                path: "product/:id",
                element: <Product />
            },
        ]
    },
]);