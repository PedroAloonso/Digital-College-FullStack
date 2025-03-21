import PrimaryButton from "../../Buttons/PrimaryButton";
import style from "./signInAndOutBtnHeader.module.css";
import Cart from "/src/assets/img/header/Buy.png";

export default function SignInAndOutBtnHeader() {
    return (
        <div className={style.storeLinks}>
            <div className={style.signupLinks}>
                <a href="register" className={style.signup}>
                    Cadastre-se
                </a>
                <a href="login">
                    <PrimaryButton className={style.btnLogin}>
                        Entrar
                    </PrimaryButton>
                </a>
            </div>
            <div href="" className={style.cart}>
                <img src={Cart} alt="" className={style.cartIcon} />
                <span>2</span>
            </div>
        </div>
    );
}
