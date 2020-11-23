import React from 'react';
import mobileAppIcon from '../assets/img/mobile-app-icon.svg';

export default function ChangeAvatar ({ setModalIsOpen }) {
    return  <div id="modal-change-avatar" className="modal-frame">
        <div className="content">
            <div className="avatar-wrap upload-avatar">
                <div className="container">
                    <div>
                        <div className="upload-msg">
                            <img src={mobileAppIcon} alt="gaevy" className="avatar" />
                        </div>
                        <div className="upload-avatar-wrap">
                            <div id="upload-avatar"></div>
                        </div>
                    </div>
                    <div className="modal-actions">
                        <div className="actions">
                            <a href="/" className="btn-load file-btn">
                                <input type="file" id="upload" accept="image/*" onChange={() => setModalIsOpen(false)}/>
                                <label htmlFor="upload">
                                    <span>Загрузить</span>
                                </label>
                            </a>
                            <button className="avatar-rotate  btn-dark"
                                    data-deg="-90">Повернуть влево</button>
                            <button className="avatar-rotate btn-dark"
                                    data-deg="90">Повернуть вправо</button>
                            <button className="upload-result btn-dark">Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}