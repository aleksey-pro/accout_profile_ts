import React, { useState, useEffect, useContext } from 'react';
import { updateUser } from '../api';
import { setUser } from '../reducer';
import { UserContext } from '../store';

import Upload from '../components/FormElements/Upload';
import imgUser from '../assets/img/user.png';
import imgClose from '../assets/img/close.svg';
import mobileAppIcon from '../assets/img/mobile-app-icon.svg';

const getFormData = (data) => {
	const formData = new FormData();
	for (const key in data) {
		const value = data[key];
		if (value !== null) {
			formData.append(key, value);
		}
	}
	return formData;
};

export default function ChangeAvatar ({ setModalIsOpen, modalIsOpen }) {
    const { store: { user = {} }, dispatch } = useContext(UserContext);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(user.avatar);
    const [file, setFile] = useState();
    const responseHandler = (response) => {
        if (response.error) {
            setError(response.error);
        } else {
            dispatch(setUser(response.data));
        }
        setLoading(false);
    }
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				setModalIsOpen(false);
			}
		}
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
		};
    }, [modalIsOpen]);

    useEffect(() => {
        if(preview !== user.avatar) {
            updateUser(getFormData(file))
                .then(responseHandler)
                .catch(() => setLoading(false));
        }
    }, [preview]);
    
    return  <div id="modal-change-avatar" className="modal-frame">
        <div className="content">
            <div className="avatar-wrap upload-avatar">
                <div className="container">
                    <div>
                        <div className="upload-msg">
                            <img src={mobileAppIcon} alt="gaevy" className="avatar" />
                        </div>
                        <div className="upload-avatar-wrap">
                            <div id="upload-avatar">
                                <img src={preview || imgUser} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-actions">
                        <div className="actions">
                            <Upload 
                                title="Завантажити" 
                                name="avatar" 
                                setPreview={setPreview}
                                onChange={(file) => setFile({ avatar: file })}
                            />
                            <button className="avatar-rotate  btn-dark"
                                    data-deg="-90">Повернуть влево</button>
                            <button className="avatar-rotate btn-dark"
                                    data-deg="90">Повернуть вправо</button>
                            <button className="upload-result btn-dark">Сохранить</button>
                        </div>
                    </div>
                    <button className="modal-change-close" onClick={() => setModalIsOpen(false)}>
                        <img src={imgClose} alt='' />
                    </button>
                    {error && 
                    <div className="msg_err__container"><span className="msg_err">{error}</span></div>}
                </div>
            </div>
        </div>
    </div>
}