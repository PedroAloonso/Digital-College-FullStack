import PropTypes from "prop-types";
import style from "./deliveryInfo.module.scss";

export default function DeliveryInfo({ formData, handleChange }) {
    return (
        <div className={style.formGroup}>
            <h3>Informações de Entrega</h3>
            <div className={style.formGroupInputContainer}>
                <div className={style.formGroupInput}>
                    <label htmlFor="address">Endereço *</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Insira seu endereço"
                        required
                        onChange={handleChange}
                        value={formData.address}
                    />
                </div>
                <div className={style.formGroupInput}>
                    <label htmlFor="neighborhood">Bairro *</label>
                    <input
                        type="text"
                        name="neighborhood"
                        placeholder="Insira seu Bairro"
                        required
                        onChange={handleChange}
                        value={formData.neighborhood}
                    />
                </div>
                <div className={style.formGroupInput}>
                    <label htmlFor="city">Cidade *</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="Insira sua cidade"
                        required
                        onChange={handleChange}
                        value={formData.city}
                    />
                </div>
                <div className={style.formGroupInput}>
                    <label htmlFor="cep">CEP *</label>
                    <input
                        type="text"
                        name="cep"
                        placeholder="Insira seu CEP"
                        required
                        onChange={handleChange}
                        value={formData.cep}
                    />
                </div>
                <div className={style.formGroupInput}>
                    <label htmlFor="complement">Complemento</label>
                    <input
                        type="text"
                        name="complement"
                        placeholder="Insira complemento"
                        onChange={handleChange}
                        value={formData.complement}
                    />
                </div>
            </div>
        </div>
    );
}

DeliveryInfo.propTypes = {
    formData: PropTypes.shape({
        address: PropTypes.any,
        cep: PropTypes.any,
        city: PropTypes.any,
        complement: PropTypes.any,
        neighborhood: PropTypes.any,
    }),
    handleChange: PropTypes.func,
};
