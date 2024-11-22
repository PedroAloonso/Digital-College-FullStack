import PrimaryButton from "../../Buttons/PrimaryButton";
import style from "./signInAndOutBtnHeader.module.css"
import Cart from "/src/assets/img/header/Buy.png";


export default function SignInAndOutBtnHeader() {
  return (
      <div className={style.storeLinks}>
          <div className={style.signupLinks}>
              <a href="" className={style.signup}>
                  Cadastre-se
              </a>
              <PrimaryButton className={style.btnLogin}>Entrar</PrimaryButton>
          </div>
          <div href="" className={style.cart}>
              <img src={Cart} alt="" className={style.cartIcon} />
              <span>2</span>
          </div>
      </div>
  );
}
