import React, { cloneElement, Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ children, isModalOpen, setModalIsOpen }) {
    const [modalContainer] = useState(document.createElement('div'));
    useEffect(() => {
      const modalRoot = document.querySelector('body');
      modalContainer.classList.add(`modal-container`);
      modalRoot.appendChild(modalContainer);
      return function cleanup() {
        modalRoot.removeChild(modalContainer);
      };
    }, []);

    return <Fragment>
        {isModalOpen ?             
            ReactDOM.createPortal([children].map((el, key) =>
                 cloneElement(el, { setModalIsOpen, key })), modalContainer) : null}
    </Fragment>
}