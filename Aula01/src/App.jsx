import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import "./App.css";
import "./assets/styles/variables.css";
import { useState } from "react";

export default function App() {
    const [currentPage, setCurrentPage] = useState(0);

    const renderPage = () => {
        switch (currentPage) {
            case 0:
                return <Home />;
            // case "produtos":
            //     return <Produtos />;
            // case "categorias":
            //     return <Categorias />;
            // case "meusPedidos":
            //     return <MeusPedidos />;
            default:
                return <Home />;
        }
    };

    return (
        <>
            <Header
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            ></Header>
            <main>{renderPage()}</main>
            <Footer></Footer>
        </>
    );
}
