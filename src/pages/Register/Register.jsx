import style from "./register.module.scss";

import GmailIcon from "../../assets/img/links/gmailIcon.png";
import FacebookIcon from "../../assets/img/links/facebookIcon.png";

import PrimaryButton from "../../components/Buttons/PrimaryButton";

export default function Register() {
    return (
        <section className={style.container}>
            <div className={style.registerContainer}>
                <h1>Acesse a conta</h1>
                <h4>
                    Novo cliente? Então registre-se <a href="">aqui</a>.
                </h4>
                <form action="" method="post">
                    <div>
                        <div>
                            <label htmlFor="email">Login *</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Insira seu login ou email"
                            />
                        </div>
                    </div>
                    <a href="">Esqueci minha senha</a>
                    <PrimaryButton>Acessar Conta</PrimaryButton>
                </form>
                <div className={style.loginWithLinks}>
                    <p>
                        Ou faça login com
                        <span>
                            <img src={GmailIcon} alt="Google" />
                        </span>
                        <span>
                            <img src={FacebookIcon} alt="Facebook" />
                        </span>
                    </p>
                </div>
            </div>
            <div>{/* Para as imagens dos tênis */}</div>
        </section>
    );
}
