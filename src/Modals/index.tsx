import * as React from 'react';
import { cloneElement, Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { ModalType } from '../types';

const Modal: React.FC<ModalType> = ({ children, isModalOpen }) => {
    const [modalContainer] = useState(document.createElement('div'));

    useEffect(() => {
        if(isModalOpen) {
            const modalRoot = document.querySelector('body');
            modalContainer.classList.add(`modal-container`);
            modalRoot && modalRoot.appendChild(modalContainer);
            document.body.style.overflow = "hidden";
        } return () => {
            document.body.style.overflow = "visible";
            modalContainer.classList.remove(`modal-container`);
        }
    }, [isModalOpen]);

    return <Fragment>
        {isModalOpen ?             
            ReactDOM
                .createPortal([children].map((el, key) => {
                        if (React.isValidElement(el)) {
                            return cloneElement(el, { key })
                        }
                    }
                ), modalContainer
            ) : null}
    </Fragment>
}

export default Modal;