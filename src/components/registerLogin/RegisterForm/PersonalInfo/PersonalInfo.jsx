import PropTypes from "prop-types";
import style from "./personalInfo.module.scss";

export default function PersonalInfo({ formData, handleChange }) {
    return (
        <div className={style.formGroup}>
            <h3>Informações Pessoais</h3>
            <div className={style.formGroupInputContainer}>
                <div className={style.formGroupInput}>
                    <label htmlFor="name">Nome Completo *</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Insira seu nome"
                        required
                        onChange={handleChange}
                        value={formData.name}
                    />
                </div>
                <div className={style.formGroupInput}>
                    <label htmlFor="cpf">CPF *</label>
                    <input
                        type="text"
                        name="cpf"
                        placeholder="Insira seu CPF"
                        required
                        onChange={handleChange}
                        value={formData.cpf}
                    />
                </div>
                <div className={style.formGroupInput}>
                    <label htmlFor="email">E-mail *</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Insira seu email"
                        required
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div className={style.formGroupInput}>
                    <label htmlFor="phone">Celular *</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Insira seu celular"
                        onChange={handleChange}
                        value={formData.phone}
                    />
                </div>
            </div>
        </div>
    );
}

PersonalInfo.propTypes = {
    formData: PropTypes.shape({
        cpf: PropTypes.any,
        email: PropTypes.any,
        name: PropTypes.any,
        phone: PropTypes.any,
    }),
    handleChange: PropTypes.func,
};
