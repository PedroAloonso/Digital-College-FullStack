import "./App.css";
import HelloWorld from "./components/HelloWorld";
import {useState} from "react";
import Frase from "./components/Frase";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Button from "react-bootstrap/Button";

function App() {
    const [imagemTamanho, setImagemTamanho] = useState(50);

    const increaseSize = () => setImagemTamanho((prevSize) => prevSize + 1);
    const decreaseSize = () => setImagemTamanho((prevSize) => Math.max(prevSize - 1, 0)); // Prevent negative sizes

    const imagem = "https://i.pinimg.com/originals/92/77/1d/92771df7a0383a3a2e3c3a53f329a420.png";
    return (
        <div className="App">
            <header className="App-header">
                <Nav></Nav>
            </header>

            <main>
                <HelloWorld></HelloWorld>
                <p>Oi estranho(a) 0_o</p>
                <Frase></Frase>

                <div>
                    <Button></Button>
                    <button onClick={increaseSize}>+</button>
                    <button onClick={decreaseSize}>-</button>
                </div>
                <p>Tamanho: {imagemTamanho}px</p>
                <img src={imagem} style={{width: imagemTamanho}} alt="logo da twitch"></img>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
}

export default App;
