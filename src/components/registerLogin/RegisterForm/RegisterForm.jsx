import style from "./registerForm.module.scss";

import { useState } from "react";
import axios from "axios";

import PrimaryButton from "../../Buttons/PrimaryButton";

export default function RegisterForm() {
    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            ["createdAt"]: new Date().toISOString(),
            ["updatedAt"]: new Date().toISOString(),
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/sequelize-products", formData);
    };

    return (
        <section className={style.container}>
            <h1>Criar Conta</h1>
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className={style.formGroupContainer}>
                    <div className={style.formGroup}>
                        <h3>Informações Pessoais</h3>
                        <div className={style.formGroupInputContainer}>
                            <div className={style.formGroupInput}>
                                <label htmlFor="name">Nome Completo * </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Insira seu nome"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={style.formGroupInput}>
                                <label htmlFor="cpf">CPF *</label>
                                <input
                                    type="text"
                                    name="cpf"
                                    placeholder="Insira seu CPF"
                                    required
                                    onChange={() => handleChange}
                                />
                            </div>
                            <div className={style.formGroupInput}>
                                <label htmlFor="email">E-mail *</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Insira seu email"
                                    required
                                    onChange={() => handleChange}
                                />
                            </div>
                            <div className={style.formGroupInput}>
                                <label htmlFor="phone">Celular *</label>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Insira seu celular"
                                    onChange={() => handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={style.formGroup}>
                        <h3>Informações de Entrega</h3>
                        <div>
                            <div className={style.formGroupInput}>
                                <label htmlFor="address">Endereço *</label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Insira seu endereço"
                                    required
                                    onChange={() => handleChange}
                                />
                            </div>
                            <div className={style.formGroupInput}>
                                <label htmlFor="neighborhood">Bairro *</label>
                                <input
                                    type="text"
                                    name="neighborhood"
                                    placeholder="Insira seu Bairro"
                                    required
                                    onChange={() => handleChange}
                                />
                            </div>
                            <div className={style.formGroupInput}>
                                <label htmlFor="city">Cidade *</label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Insira sua cidade"
                                    required
                                    onChange={() => handleChange}
                                />
                            </div>
                            <div className={style.formGroupInput}>
                                <label htmlFor="cep">CEP *</label>
                                <input
                                    type="text"
                                    name="cep"
                                    placeholder="Insira seu CEP"
                                    required
                                    onChange={() => handleChange}
                                />
                            </div>
                            <div className={style.formGroupInput}>
                                <label htmlFor="complement">
                                    Complemento *
                                </label>
                                <input
                                    type="text"
                                    name="complement"
                                    placeholder="Insira complemento"
                                    onChange={() => handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.getNews}>
                    <input type="checkbox" name="getnews" />
                    <label htmlFor="getnews">
                        Quero receber por email ofertas e novidades das lojas da
                        Digital Store. A frequência de envios pode variar de
                        acordo com a interação do cliente.
                    </label>
                </div>
                <PrimaryButton className={style.submitBtn}>
                    Criar Conta
                </PrimaryButton>
            </form>
        </section>
    );
}
