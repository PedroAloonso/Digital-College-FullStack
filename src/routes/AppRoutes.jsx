import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";       
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Categories from "../pages/Categories/Categories";
import MyOrders from "../pages/MyOrders/MyOrders";
import ProductPage from "../components/ProductPage/ProductPage";
import Dashboard from "../pages/Dashboard/Dashboard";


export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Outlet />
                            <Footer />
                        </>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="product" element={<Outlet />}>
                        <Route index element={<Products />} />
                        <Route path=":title" element={<Outlet />}>
                            <Route index element={<ProductPage />} />
                        </Route>
                        <Route path="*" element={<Products />} />
                    </Route>

                    <Route path="categories" element={<Categories />} />
                    <Route path="my-orders" element={<MyOrders />} />

                    <Route path="*" element={<Home />} />
                </Route>
                <Route path="/dashboard">
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Dashboard />} />
                    <Route path="client" element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    );
}