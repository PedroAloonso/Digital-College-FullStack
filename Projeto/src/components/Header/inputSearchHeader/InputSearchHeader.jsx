import style from "./inputSearchHeader.module.css";
import Search from "/src/assets/img/header/Search.png";

export default function InputSearchHeader() {
  return (
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
  );
}
