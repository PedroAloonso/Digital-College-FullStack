import style from "./editModal.module.scss";

import PropTypes from "prop-types";
import { useState } from "react";
import ReactModal from "react-modal";

export default function EditModal({
    ElementData,
    handleToggleModal,
    modalIsOpen,
    inputInfos,
}) {
    const [formData, setFormData] = useState(ElementData);

    const sequelizeToHtmlInputType = (sequelizeType) => {
        switch (sequelizeType) {
            case "STRING":
                return "text";
            case "INTEGER":
                return "number";
            case "DECIMAL":
                return "number";
            case "FLOAT":
                return "number";
            case "DATE":
                return "date";
            case "BOOLEAN":
                return "checkbox";
            default:
                return "text"; // Padrão para outros tipos desconhecidos
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleToggleModal();
        console.log("Dados do formulário:", formData);
    };
    console.log(ElementData);

    return (
        <ReactModal
            isOpen={modalIsOpen}
            contentLabel={`Edit ${formData.name}`}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={false}
        >
            <h3>Editar</h3>
            <form action="post" onSubmit={handleSubmit}>
                <div>
                    {Object.keys(formData).map((key, index) => {
                        return (
                            <div key={index}>
                                <label htmlFor={key}>{key}: </label>

                                {key == "id" ? (
                                    <span>{formData[key]}</span>
                                ) : (
                                    <input
                                        type={sequelizeToHtmlInputType(
                                            inputInfos.find(
                                                (info) => info.name === key,
                                            )?.type || "STRING",
                                        )}
                                        name={key}
                                        id={key}
                                        value={
                                            formData[key] == null
                                                ? ""
                                                : formData[key]
                                        }
                                        onChange={handleChange}
                                        disabled={key == "id" ? true : false}
                                    />
                                )}
                            </div>
                        );
                    })}
                    <button type="submit">Finish</button>
                </div>
            </form>
        </ReactModal>
    );
}

EditModal.propTypes = {
    ElementData: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        stock: PropTypes.number,
        price: PropTypes.number,
        brand_id: PropTypes.number,
        category_id: PropTypes.number,
        updatedAt: PropTypes.any,
        createdAt: PropTypes.any,
    }),
    handleToggleModal: PropTypes.func,
    modalIsOpen: PropTypes.any,
    title: PropTypes.any,
    inputInfos: PropTypes.array,
};
