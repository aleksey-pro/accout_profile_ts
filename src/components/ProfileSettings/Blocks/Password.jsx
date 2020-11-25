import React from 'react';
import imgHide from '../../../assets/img/hyde.png';

export default function Password () {
    return  <div className="accordion_item">
        <h3 className="tab_accordion">Пароль и уведомления</h3>
        <div className="tab_content">
            <div className="password-container">
                <div className="change-password">
                    <h4>Изменить пароль</h4>
                    <form action="" method="post">
                        <div className="input-label">
                            <label htmlFor="change-password">*Изменить пароль</label>
                            <input id="change-password" type="text" placeholder="Старый пароль" name="name" />
                            <button className="change-img"><img src={imgHide} alt=""/></button>
                        </div>
                        <div className="input-label">
                            <label htmlFor="new-password">*Новый пароль</label>
                            <input id="new-password" type="text" placeholder="Новый пароль" name="name" />
                            <button className="change-img"><img src={imgHide} alt=""/></button>
                        </div>
                        <div className="input-label">
                            <label htmlFor="confirm-password">*Подтвердить пароль</label>
                            <input id="confirm-password" type="text" placeholder="Новый пароль" name="name" />
                            <button className="change-img"><img src={imgHide} alt=""/></button>
                        </div>
                        <input type="submit" value="Сохранить" />
                    </form>
                </div>
            </div>
        </div>
    </div>
}