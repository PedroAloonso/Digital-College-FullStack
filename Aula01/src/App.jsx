import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./assets/styles/variables.css";

export default function App() {
    return (
        <>
            <main>
                <Header></Header>
                <Body></Body>
                <Footer></Footer>
            </main>
        </>
    );
}
