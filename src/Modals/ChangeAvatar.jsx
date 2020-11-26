import React, { useState, useEffect, useContext } from 'react';
import { updateUser } from '../api';
import { setUser } from '../reducer';
import { UserContext } from '../store';

import './../styles/components/modals.scss';
import Upload from '../components/FormElements/Upload';
import imgUser from '../assets/img/user.png';
import imgClose from '../assets/img/close.svg';
import replayArrowRight from '../assets/img/replay-arrow-right.svg';
import replayArrowLeft from '../assets/img/replay-arrow-left.svg';
import loadFotoIcon from '../assets/img/load-photo.svg';

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
    
    return (
        <div id="modal-change-avatar" className="modal-frame">
            <div className="content">
                <div className="avatar-wrap upload-avatar">
                    <div className="container">
                        <div>
                            {/* <div className="upload-msg">
                            <img src={mobileAppIcon} alt="gaevy" className="avatar" />
                        </div> */}
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
                                    icon={loadFotoIcon}
                                    setPreview={setPreview}
                                    onChange={(file) => setFile({ avatar: file })}
                                />
                                <div className="block_btn__rotation">
                                    <button className="avatar-rotate"
                                        data-deg="-90">
                                        <img src={replayArrowLeft} alt='' />
                                    </button>
                                    <button className="avatar-rotate"
                                        data-deg="90">
                                        <img src={replayArrowRight} alt='' />
                                    </button>
                                </div>
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
    )
}