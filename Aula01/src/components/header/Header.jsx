import Logo from "/src/assets/img/logo/logo.png";
import Cart from "/src/assets/img/logo/Buy.png";
import Search from "/src/assets/img/logo/Search.png";
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
          <input
            className={style.searchInput}
            type="text"
            name="search"
            id="search"
            placeholder="Pesquisar produto"
          />

          <i className={style.searchIcon}>
            <img src={Search} alt="" srcset="" />
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
      </header>
      <nav>
        <a href="#" className={style.selected}>Home</a>
        <a href="#">Produtos</a>
        <a href="#">Categorias</a>
        <a href="#">Meus Pedidos</a>
      </nav>
    </>
  );
}
