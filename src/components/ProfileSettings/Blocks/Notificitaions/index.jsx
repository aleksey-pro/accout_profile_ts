import React from 'react';
import NotificationForm from './NotificationForm';

const notifications = [
    { 
        title: 'Нужно подтверждение email-адреса',
        id1: 'need-email',
        id2: 'need-email-sms',
    },
    {
        title: 'Регистрация полностью завершена',
        id1: 'registration-completed',
        id2: 'nregistration-completed-sms',
    },
    {
        title: 'Просьба добавить номера телефона', 
        id1: 'add-number', 
        id2: 'add-number-sms',
    },
    {
        title: 'Нужно подтверждение номера телефона', 
        id1: 'varification-number', 
        id2: 'varification-number-sms',
    },
    {
        title: 'Подтверждение смены пароля',
        id1: 'change-password', 
        id2: 'change-password-sms',
    },
    {
        title: 'Успешное изменение пароля',
        id1: 'modification-password', 
        id2: 'modification-password-sms',
    },
    {
        title: 'Вы не закончили добавление товара', 
        id1: 'dont-finish-adding', 
        id2: 'dont-finish-adding-sms',
    },
    {
        title: 'Вы успешно добавили свой первый товар', 
        id1: 'seccessfully-first-product', 
        id2: 'seccessfully-first-product-sms',
        isChecked: 'val8',
    },
    {
        title: 'Ваш товар добавили в избранное', 
        id1: 'favorite-product', 
        id2: 'favorite-product-sms',
    },
    {
        title: 'Ваш товар не прошёл модерацию', 
        id1: 'not-pass-moderation', 
        id2: 'not-pass-moderation-sms',
    },
    {
        title: 'Ваш товар успешно прошёл модерацию', 
        id1: 'seccessfully-pass-moderation', 
        id2: 'seccessfully-pass-moderation-sms',
    },
    {
        title: 'Вы получили отзыв', 
        id1: 'get-feedback', 
        id2: 'get-feedback-sms',
    },
    {
        title: 'Вы получили новое сообщение в чате', 
        id1: 'new-message', 
        id2: 'new-message-sms',
    },
]

export default function Notificitaions () {
    return <div className="accordion_item">
        <h3 className="tab_accordion">Настройки уведомлений</h3>
        <div id="notifications" className="tab_content">
            <NotificationForm notificationFileds={notifications}/>
        </div>
    </div>
}