import Logo from "/src/assets/img/header/logo.png";
import Cart from "/src/assets/img/header/Buy.png";
import Search from "/src/assets/img/header/Search.png";
import Menu from "/src/components/Menu/Menu";
import style from "./Header.module.css";
import propTypes from "prop-types";

export default function Header({ setCurrentPage, currentPage }) {
  return (
    <>
      <header>
        <div className={style.headerTop}>
          {/* DIV HEADER LOGO */}
          <div className={style.logo}>
            <img src={Logo} alt="" />
          </div>
          {/* DIV HEADER SEARCH */}
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
          {/* DIV HEADER LINKS */}
          <div className={style.storeLinks}>
            <div className={style.signupLinks}>
              <a href="" className={style.signup}>
                Cadastre-se
              </a>
              <button href="" className={style.btnLogin}>
                Entrar
              </button>
            </div>
            <div href="" className={style.cart}>
              <img src={Cart} alt="" className={style.cartIcon} />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="headerBotton">
          <Menu
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          ></Menu>
        </div>
      </header>
    </>
  );
}

Header.propTypes = {
  setCurrentPage: propTypes.func.isRequired,
  currentPage: propTypes.string.isRequired,
};
