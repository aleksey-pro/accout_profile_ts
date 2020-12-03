
export interface ModalType {
    children: React.ReactNode;
    setModalIsOpen: (v: boolean) => void,
    isModalOpen: Boolean,
}

export interface ChangeAvatarType {
    isModalOpen: Boolean,
    setModalIsOpen: (v: boolean) => void,
}


