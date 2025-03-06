import style from "./editModal.module.scss";

import dateFormatter from "../../../../utils/ptBrDateFormatter";
import sequelizeTypeToHtmlInputType from "../../../../utils/sequelizeTypeToHtmlInputType";

import PropTypes from "prop-types";
import { useState } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal";

// Define o elemento raiz para acessibilidade
Modal.setAppElement("#root");

export default function EditModal({
    ElementData,
    inputInfos,
    handleToggleModal,
    handleEdit,
    modalIsOpen,
}) {
    // Define o estado inicial do formulário com os dados do elemento
    const [formData, setFormData] = useState(ElementData);

    // Função para lidar com mudanças nos inputs do formulário
    const handleChange = (event) => {
        const { name, value } = event.target;
        // Atualiza o estado do formulário com o novo valor do input
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        // Atualiza o campo "updatedAt" com a data e hora atual no formato ISO
        setFormData((prevData) => ({
            ...prevData,
            ["updatedAt"]: new Date().toISOString(),
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        // Fecha o modal
        handleToggleModal();
        // Chama a função de edição com o ID do elemento e os dados do formulário
        handleEdit(ElementData["id"], formData);
    };

    return (
        <ReactModal
            isOpen={modalIsOpen} // Controla se o modal está aberto ou fechado
            contentLabel={`Edit ${formData.name}`} // Define o rótulo do conteúdo do modal
            shouldCloseOnEsc={true} // Fecha o modal ao pressionar a tecla Esc
            shouldCloseOnOverlayClick={true} // Fecha o modal ao clicar fora dele
            ariaHideApp={true} // Esconde o aplicativo principal para acessibilidade
            onRequestClose={handleToggleModal} // Função chamada ao solicitar o fechamento do modal
            className={style.content} // Classe CSS para o conteúdo do modal
            overlayClassName={style.overlay} // Classe CSS para a sobreposição do modal
        >
            <h3>Editar {ElementData.name}</h3>
            <form action="post" onSubmit={handleSubmit}>
                {Object.keys(formData).map((key, index) => {
                    return (
                        <div key={index}>
                            <label htmlFor={key}>{key}: </label>

                            {/* Coloca um span no lugar do input caso seja um id, createdAt ou updatedAt */}
                            {key === "id" ? (
                                <span>{formData[key]}</span>
                            ) : key === "updatedAt" || key === "createdAt" ? (
                                <span>{dateFormatter(ElementData[key])}</span>
                            ) : (
                                <input
                                    type={sequelizeTypeToHtmlInputType(
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
