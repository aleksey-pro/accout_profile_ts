import React, { useContext } from 'react';

import imgUser from '../assets/img/user.png';
import imgFacebook from '../assets/img/facebook.svg';
import imgGoogle from '../assets/img/google.svg';
import imgCalendar from '../assets/img/calendar.png';
import imgMessage from '../assets/img/message.svg';
import { UserContext } from '../reducer';
 
export default function AccountInfo ({ setModalOpen }) {
    const { store: { user = {} } } = useContext(UserContext);
    const { avatar, name, surname, city, socialAccountUrl } = user;
    const userAvatar = avatar || imgUser;
    return <section className="main-account-info">
        <div className="container">
            <div className="img-container">
                <div className="avatar">
                    <img src={userAvatar} alt="" />
                    <div className="avatar-change-wrap">
                        <div data-fancybox 
                        data-src="#modal-change-avatar" 
                        onClick={() => setModalOpen(true)} 
                        className="change-avatar">
                            <span>Обновить фото</span>
                        </div>
                    </div>
                </div>
                
                <div className="super-seller">
                <div className="seller-rank"></div>
                    <div className="connect-with">
                        <span>Привязать аккаунт</span>
                        <div className="attachment-social-account">
                            <a href={`${process.env.API_URL}/connect/facebook`} className="social-link"><img src={imgFacebook} alt=''/></a>
                            <a href={`${process.env.API_URL}/connect/google`}><img src={imgGoogle} alt=''/></a>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="name-social-account">
                    <h3>{name} {surname}</h3>                    
                    <a href={socialAccountUrl} className="social-link"><img src={imgFacebook} alt=''/></a>
                </div>
                <div className="place">г. {city}</div>
                <div className="stats">
                    <div className="stat-item">
                        <img src={imgCalendar} alt=''/>
                        На сайте 332 дня</div>
                    <div className="stat-item">
                        <img src={imgMessage} alt=''/>
                        Обычно вы отвечаете в течение 2 часов
                    </div>
                </div>
                <div className="short-info">
                    Краткая информация пользователя о себе, обращение к покупателям, любой текст, которым пользователь
                    захочет поделиться в своем профиле.
                </div>
            </div>
        </div>
    </section>
}