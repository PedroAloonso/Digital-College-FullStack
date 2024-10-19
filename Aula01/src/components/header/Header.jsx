import Logo from "/src/assets/img/logo/logo.png";
import Cart from "/src/assets/img/logo/Buy.png";
import style from "./header.module.css";

export default function Header() {
    return (
        <>
            <header>
                {/* DIV LOGO */}
                <div className={style.logo}>
                    <img src={Logo} alt="" srcset="" />
                </div>
                {/* DIV SEARCH */}
                <div className={style.search}>
                    <div className={style.input}>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Pesquisar produto"
                        />
                    </div>
                </div>
                {/* DIV LINKS */}
                <div className={style.storeLinks}>
                    <a href="" className="sign-up">
                        Cadastre-se
                    </a>
                    <a href="" className={style.btnLogin}>
                        Entrar
                    </a>
                    <a href="" className="cart">
                        <img src={Cart} alt="" srcset="" />
                    </a>
                </div>
            </header>
        </>
    );
}
