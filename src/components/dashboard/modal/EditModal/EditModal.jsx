import style from "./editModal.module.scss";

import dateFormatter from "../../../../utils/ptBrDateFormatter";

import PropTypes from "prop-types";
import { useState } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function EditModal({
    ElementData,
    inputInfos,
    handleToggleModal,
    handleEdit,
    modalIsOpen,
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
                return "text";
            case "BOOLEAN":
                return "checkbox";
            default:
                return "text"; // Padrão para outros tipos desconhecidos
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setFormData((prevData) => ({
            ...prevData,
            ["updatedAt"]: new Date().toISOString(),
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleToggleModal();
        handleEdit(ElementData["id"], formData);
    };

    return (
        <ReactModal
            isOpen={modalIsOpen}
            contentLabel={`Edit ${formData.name}`}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={true}
            onRequestClose={handleToggleModal}
            className={style.content}
            overlayClassName={style.overlay}
        >
            <h3>Editar {ElementData.name}</h3>
            <form action="post" onSubmit={handleSubmit}>
                {Object.keys(formData).map((key, index) => {
                    return (
                        <div key={index}>
                            <label htmlFor={key}>{key}: </label>
                            {/* Coloca um span caso seja um id,createdAt ou um updatedAt */}
                            {key === "id" ? (
                                <span>{formData[key]}</span>
                            ) : key === "updatedAt" || key === "createdAt" ? (
                                <span>{dateFormatter(ElementData[key])}</span>
                            ) : (
                                <input
                                    type={sequelizeToHtmlInputType(
                                        inputInfos.find(
                                            (info) => info.name === key,
                                        )?.type || "STRING",
                                    )}
                                    name={key}
                                    id={key}
                                    placeholder={
                                        ElementData[key] == null
                                            ? ""
                                            : ElementData[key]
                                    }
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                    );
                })}
                <button type="submit">Finish</button>
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
    handleEdit: PropTypes.func,
    modalIsOpen: PropTypes.any,
    title: PropTypes.any,
    inputInfos: PropTypes.array,
};
