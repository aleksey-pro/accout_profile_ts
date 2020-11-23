import React from 'react';
 
export default function AccountHeader () {
    return <section className="account-header">
        <div className="container">
            <div className="title-settings">
                <h2>Мой профиль</h2>
                <a href="/" className="settings">Перейти в настройки профиля</a>
            </div>
            <a href="/" className="logout">Выход</a>
        </div>
    </section>
}