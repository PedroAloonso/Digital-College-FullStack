import style from "./registerForm.module.scss";

import PrimaryButton from "../../Buttons/PrimaryButton";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";

export default function RegisterForm() {
    const location = useLocation();
    const email = location.state?.email || "";
    const [formData, setFormData] = useState({
        email: email,
        name: "",
        cpf: "",
        phone: "",
        address: "",
        neighborhood: "",
        city: "",
        cep: "",
        complement: "",
        getnews: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
            ["createdAt"]: new Date().toISOString(),
            ["lastAccess"]: new Date().toISOString(),
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/sequelize-users", formData);
    };

    return (
        <section className={style.container}>
            <h1>Criar Conta</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={style.formGroupContainer}>
                    <PersonalInfo
                        formData={formData}
                        handleChange={handleChange}
                    />
                    <DeliveryInfo
                        formData={formData}
                        handleChange={handleChange}
                    />
                </div>
                <div className={style.getNews}>
                    <input
                        type="checkbox"
                        name="getnews"
                        onChange={handleChange}
                    />
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
