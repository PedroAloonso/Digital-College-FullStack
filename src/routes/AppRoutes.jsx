import { Routes, Route, Outlet } from "react-router-dom";

import PublicLayout from "../components/layouts/PublicLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Categories from "../pages/Categories/Categories";
import MyOrders from "../pages/MyOrders/MyOrders";
import ProductPage from "../components/ProductPage/ProductPage";

import Dashboard from "../pages/Dashboard/Dashboard";
import ProductDashboard from "../components/dashboard/ProductDashboard/ProductDashboard";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
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
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="product" element={<ProductDashboard />} />
                    <Route path="client" element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    );
}
