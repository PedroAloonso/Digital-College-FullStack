import style from "./createModal.module.scss";

import sequelizeTypeToHtmlInputType from "../../../../utils/sequelizeTypeToHtmlInputType";

import PropTypes from "prop-types";
import { useState } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function CreateModal({
    inputInfos,
    handleToggleModal,
    handleCreate,
    modalIsOpen,
}) {
    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event);
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setFormData((prevData) => ({
            ...prevData,
            ["createdAt"]: new Date().toISOString(),
        }));
        setFormData((prevData) => ({
            ...prevData,
            ["updatedAt"]: new Date().toISOString(),
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleToggleModal();
        handleCreate(formData);
    };

    return (
        <ReactModal
            isOpen={modalIsOpen}
            contentLabel={`Cria Produto`}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={true}
            onRequestClose={handleToggleModal}
            className={style.content}
            overlayClassName={style.overlay}
        >
            <h3>Criar produto</h3>
            <form action="post" onSubmit={handleSubmit}>
                {Object.values(inputInfos).map((value, index) => {
                    return value.name == "id" ? (
                        ""
                    ) : value.name == "createdAt" ||
                      value.name == "updatedAt" ? (
                        <div key={index}>
                            <label htmlFor={value.name}>{value.name}: </label>
                            <input
                                type={sequelizeTypeToHtmlInputType(value.type)}
                                id={value.name}
                                name={value.name}
                                value={new Date().toISOString()}
                                disabled
                            />
                        </div>
                    ) : (
                        <div key={index}>
                            <label htmlFor={value.name}>{value.name}: </label>
                            <input
                                type={sequelizeTypeToHtmlInputType(value.type)}
                                id={value.name}
                                name={value.name}
                                onChange={handleChange}
                            />
                        </div>
                    );
                })}
                <button type="submit">Finish</button>
            </form>
        </ReactModal>
    );
}

CreateModal.propTypes = {
    handleToggleModal: PropTypes.func,
    handleCreate: PropTypes.func,
    modalIsOpen: PropTypes.any,
    inputInfos: PropTypes.array,
};
