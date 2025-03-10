import { Routes, Route, Outlet } from "react-router-dom";

import MainLayout from "../components/layouts/MainLayout";
import RegisterLoginLayout from "../components/layouts/RegisterLoginLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RegisterForm from "../components/registerLogin/RegisterForm/RegisterForm.jsx";

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
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="product" element={<Outlet />}>
                        <Route index element={<Products />} />
                        <Route path=":title" element={<Outlet />}>
                            <Route index element={<ProductPage />} />
                        </Route>
                    </Route>

                    <Route path="categories" element={<Categories />} />
                    <Route path="my-orders" element={<MyOrders />} />

                    <Route path="*" element={<Home />} />
                </Route>

                <Route path="/register" element={<RegisterLoginLayout />}>
                    <Route index element={<Register />} />
                    <Route path="form" element={<RegisterForm />} />

                    <Route path="*" element={<Register />} />
                </Route>

                <Route path="/login" element={<RegisterLoginLayout />}>
                    <Route index element={<Login />} />
                </Route>

                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<ProductDashboard />} />
                    <Route path="client" element={<Dashboard />} />
                    <Route path="*" element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    );
}
