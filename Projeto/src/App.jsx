import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import Categories from "./containers/Categories/Categories";
import MyOrders from "./containers/MyOrders/MyOrders";
import "./App.css";
import "./assets/styles/ColorsVariables.css";
import { Route, Routes, Outlet } from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";

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
                    {/* 1: Criar uma rota index dentro da rota products que vai para o componente
                        Products, depois criar uma rota que recebe um valor de identificação 
                        do produto na propriedade path :valor, que leva para um componente ProductPage,
                        que recebe esse valor numa variavel por meio da função useParams() do react-route.
                        2: testar usar o path="*" dentro da rota products para ver oque acontece
                    */}
                    <Route path="products" element={<Products />}>
                        <Route path="products/:categorie/:mark/:name" element={<ProductPage />} />
                        <Route path="products/*" element={<ProductPage />} />

                    </Route>
                    <Route path="categories" element={<Categories />} />
                    <Route path="my-orders" element={<MyOrders />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}
