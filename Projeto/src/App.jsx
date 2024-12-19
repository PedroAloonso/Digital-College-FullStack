import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import Categories from "./containers/Categories/Categories";
import MyOrders from "./containers/MyOrders/MyOrders";
import ProductPage from "./components/ProductPage/ProductPage";

import "./App.css";
import "./assets/styles/ColorsVariables.css";

import { Route, Routes, Outlet } from "react-router-dom";

export default function App() {
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
                        <Route path=":category" element={<Outlet />}>
                            <Route index element={<ProductPage />} />
                            <Route path=":brand" element={<Outlet />}>
                                <Route index element={<ProductPage />} />
                                <Route
                                    path=":title"
                                    element={<ProductPage />}
                                />
                            </Route>
                        </Route>
                        <Route path="*" element={<Products />} />
                    </Route>
                    
                    <Route path="categories" element={<Categories />} />
                    <Route path="my-orders" element={<MyOrders />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}
