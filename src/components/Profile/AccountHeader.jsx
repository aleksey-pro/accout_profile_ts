import React from 'react';
import { Link } from 'react-router-dom'
 
export default function AccountHeader () {
    return <section className="account-header">
        <div className="container">
            <div className="title-settings">
                <h2>Мой профиль</h2>
                <Link to="/settings" className="settings">Перейти в настройки профиля</Link>
            </div>
            <a href="/" className="logout">Выход</a>
        </div>
    </section>
}