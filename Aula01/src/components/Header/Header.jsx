import style from "./header.module.css";
import Logo from "/src/assets/img/header/logo.png";
import InputSearchHeader from "./inputSearchHeader/InputSearchHeader";
import SignInAndOutBtnHeader from "./SignInAndOutBtnHeader/SignInAndOutBtnHeader"
import Menu from "/src/components/Menu/Menu";
import propTypes from "prop-types";

export default function Header({ setCurrentPage, currentPage }) {
  return (
    <>
      <header>
        <div className={style.headerTop}>
          <div className={style.logo}>
            <img src={Logo} alt="" />
          </div>
          <InputSearchHeader></InputSearchHeader>
          <SignInAndOutBtnHeader></SignInAndOutBtnHeader>
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
  setCurrentPage: propTypes.func,
  currentPage: propTypes.number,
};
