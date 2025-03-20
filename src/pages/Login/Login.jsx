import style from "./login.module.scss";

import GmailIcon from "../../assets/img/links/gmailIcon.png";
import FacebookIcon from "../../assets/img/links/facebookIcon.png";

import PrimaryButton from "../../components/Buttons/PrimaryButton";

import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/sequelize-users/login",
                formData,
            );
            const { token } = response.data;
            localStorage.setItem("token", token);
            setFormData({ email: "", password: "" });
        } catch (error) {
            alert(error);
            localStorage.setItem("token", "");
        }
    };

    return (
        <section className={style.container}>
            <div className={style.loginContainer}>
                <h1>Acesse a conta</h1>
                <h4>
                    Novo cliente? Então registre-se <a href="register">aqui</a>.
                </h4>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="email">Login *</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Insira seu email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Senha *</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Insira sua senha"
                                value={formData.password}
                                onChange={handleChange}
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
