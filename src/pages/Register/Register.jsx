import style from "./register.module.scss";

import GmailIcon from "../../assets/img/links/gmailIcon.png";
import FacebookIcon from "../../assets/img/links/facebookIcon.png";

import PrimaryButton from "../../components/Buttons/PrimaryButton";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [registerInfo, setRegisterInfo] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRegisterInfo((prevLogin) => ({ ...prevLogin, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("./form", { state: registerInfo });
        window.location.reload();
    };

    return (
        <section className={style.container}>
            <div className={style.registerContainer}>
                <h1>Crie a sua conta</h1>
                <h4>
                    Já possui uma conta? Entre <a href="login">aqui</a>.
                </h4>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="email">Login *</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Insira seu login ou email"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <a href="">Esqueci minha senha</a>
                    <PrimaryButton>Criar conta</PrimaryButton>
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
