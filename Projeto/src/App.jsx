import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import Categories from "./containers/Categories/Categories";
import MyOrders from "./containers/MyOrders/MyOrders";
import "./App.css";
import "./assets/styles/variables.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
                    #TODO Estudar o react route para usar e criar um produto
                    <Route path="products" element={<Products />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="my-orders" element={<MyOrders />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}
