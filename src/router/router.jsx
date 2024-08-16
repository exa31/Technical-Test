import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts";
import Products from "../pages/products/Products";
import { getProduct, getProducts } from "../api/products";
import EditProduct from "../pages/products/EditProducts";
import { getCategories, getCategory } from "../api/categories";
import AddProduct from "../pages/products/AddProduct";
import Categories from "../pages/categories/categories";
import EditCategory from "../pages/categories/EditCategory";
import AddCategory from "../pages/categories/AddCategory";
import Login from "../layouts/Login";
import Users from "../pages/users/Users";
import { getAllUsers, getUser } from "../api/auth";
import EditUser from "../pages/users/EditUser";
import Register from "../pages/users/Register";
import Orders from "../pages/orders/Orders";
import { getOrder, getOrders } from "../api/orders";
import EditOrder from "../pages/orders/EditOrder";
import AddOrder from "../pages/orders/AddOrder";
import ErrorLoader from "../pages/ErrorLoader";
import NotFound from "../pages/NotFound";

const loaderEditProduct = async ({ params }) => {
    const product = await getProduct(params.id);
    const categories = await getCategories();
    return { product, categories };
}

const loaderEditOrder = async ({ params }) => {
    const order = await getOrder(params.id);
    const products = await getProducts();
    const users = await getAllUsers();
    return { order, products, users };
};

const loaderOrders = async () => {
    const products = await getProducts();
    const users = await getAllUsers();
    return { products, users };
}

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorLoader />,
        element: <Layouts />,
        children: [
            {
                path: "/",
                element: <Products />,
                loader: getProducts
            },
            {
                path: "/edit-product/:id",
                element: <EditProduct />,
                loader: loaderEditProduct
            },
            {
                path: "/add-product",
                element: <AddProduct />,
                loader: getCategories
            },
            {
                path: "/categories",
                element: <Categories />,
                loader: getCategories
            },
            {
                path: "/edit-category/:id",
                element: <EditCategory />,
                loader: getCategory
            },
            {
                path: "/add-category",
                element: <AddCategory />,
            },
            {
                path: "/users",
                element: <Users />,
                loader: getAllUsers
            },
            {
                path: "/edit-user/:id",
                element: <EditUser />,
                loader: getUser
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/orders",
                element: <Orders />,
                loader: getOrders
            },
            {
                path: "/edit-order/:id",
                element: <EditOrder />,
                loader: loaderEditOrder
            },
            {
                path: "/add-order",
                element: <AddOrder />,
                loader: loaderOrders
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router;