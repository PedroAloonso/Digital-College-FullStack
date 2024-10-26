import Logo from "/src/assets/img/header/logo.png";
import Cart from "/src/assets/img/header/Buy.png";
import Search from "/src/assets/img/header/Search.png";
import style from "./header.module.css";

export default function Header() {
  return (
    <>
      <header>
        <div className= {style.headerTop}>
            {/* DIV LOGO */}
            <div className={style.logo}>
              <img src={Logo} alt="" />
            </div>
            {/* DIV SEARCH */}
            <div className={style.search}>
              <input
                className={style.searchInput}
                type="text"
                name="search"
                id="search"
                placeholder="Pesquisar produto"
              />
              <i className={style.searchIcon}>
                <img src={Search} alt="" />
              </i>
            </div>
            {/* DIV LINKS */}
            <div className={style.storeLinks}>
              <div className={style.signupLinks}>
                <a href="" className={style.signup}>
                  Cadastre-se
                </a>
                <a href="" className={style.btnLogin}>
                  Entrar
                </a>
              </div>
              <div href="" className={style.cart}>
                <img src={Cart} alt="" className={style.cartIcon} />
                <span>2</span>
              </div>
            </div>
        </div>
      <div className="headerBotton">
          <nav>
            <a href="#" className={style.selected}>Home</a>
            <a href="#">Produtos</a>
            <a href="#">Categorias</a>
            <a href="#">Meus Pedidos</a>
          </nav>
      </div>
      </header>
    </>
  );
}
