import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleCloseModal}
        className="modal"
        contentLabel="Selected Task"
        ariaHideApp={false}
        closeTimeoutMS={500}
    >
        <h3 className="modal__title">Selected Task</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleCloseModal}>Done</button>
    </Modal>
)

export default OptionModal;