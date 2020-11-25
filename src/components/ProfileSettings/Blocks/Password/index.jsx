import React from 'react';
import PasswordForm from './PasswordForm';

export default function Password () {
    return  <div className="accordion_item">
        <h3 className="tab_accordion">Пароль и уведомления</h3>
        <div className="tab_content">
            <div className="password-container">
                <div className="change-password">
                    <h4>Изменить пароль</h4>
                    <PasswordForm />
                </div>
            </div>
        </div>
    </div>
}