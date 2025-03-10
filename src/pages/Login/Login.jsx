import style from "./login.module.scss";

import GmailIcon from "../../assets/img/links/gmailIcon.png";
import FacebookIcon from "../../assets/img/links/facebookIcon.png";

import PrimaryButton from "../../components/Buttons/PrimaryButton";

export default function Login() {
    // TODO: Fazer uma rota nova com um novo Layout
    return (
        <section className={style.container}>
            <div className={style.loginContainer}>
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
                        <div>
                            <label htmlFor="password">Senha *</label>
                            <input
                                type="text"
                                name="password"
                                placeholder="Insira sua senha"
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
