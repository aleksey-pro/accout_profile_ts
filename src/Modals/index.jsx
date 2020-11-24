import React, { cloneElement, Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ children, isModalOpen, setModalIsOpen }) {
    const [modalContainer] = useState(document.createElement('div'));

    useEffect(() => {
        if(isModalOpen) {
            const modalRoot = document.querySelector('body');
            modalContainer.classList.add(`modal-container`);
            modalRoot.appendChild(modalContainer);
            document.body.style.overflow = "hidden";
        } return () => {
            document.body.style.overflow = "visible";
            modalContainer.classList.remove(`modal-container`);
        }
    }, [isModalOpen]);

    return <Fragment>
        {isModalOpen ?             
            ReactDOM.createPortal([children].map((el, key) =>
                cloneElement(el, { setModalIsOpen, key })), modalContainer) : null}
    </Fragment>
}