import { useState } from "react";
import ReactModal from "react-modal";

export default function EditModal(ElementData) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <ReactModal
            isOpen={modalIsOpen}
            contentLabel={`Edit ${ElementData.title}`}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
        >
            <h3>Editar</h3>
            <form action="post">
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" id="name" required />
                </div>
            </form>
        </ReactModal>
    );
}
