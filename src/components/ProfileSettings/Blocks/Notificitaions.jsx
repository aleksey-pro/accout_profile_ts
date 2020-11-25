import React from 'react';

export default function Notificitaions () {
    return <div className="accordion_item">
        <h3 className="tab_accordion">Настройки уведомлений</h3>
        <div id="notifications" className="tab_content">
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>E-mail</th>
                        <th>СМС</th>
                    </tr>
                    <tr>
                        <td>Нужно подтверждение email-адреса</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="need-email" />
                                <label htmlFor="need-email"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="need-email-sms" />
                                <label htmlFor="need-email-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Регистрация полностью завершена</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="registration-completed" />
                                <label htmlFor="registration-completed"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="registration-completed-sms" />
                                <label htmlFor="registration-completed-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Просьба добавить номера телефона</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="add-number" />
                                <label htmlFor="add-number"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="add-number-sms" />
                                <label htmlFor="add-number-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Нужно подтверждение номера телефона</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="varification-number" />
                                <label htmlFor="varification-number"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="varification-number-sms" />
                                <label htmlFor="varification-number-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Подтверждение смены пароля</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="change-password" />
                                <label htmlFor="change-password"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="change-password-sms" />
                                <label htmlFor="change-password-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Успешное изменение пароля</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="modification-password" />
                                <label htmlFor="modification-password"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="modification-password-sms" />
                                <label htmlFor="modification-password-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Вы не закончили добавление товара</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="dont-finish-adding" />
                                <label htmlFor="dont-finish-adding"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="dont-finish-adding-sms" />
                                <label htmlFor="dont-finish-adding-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Вы успешно добавили свой первый товар</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="seccessfully-first-product" />
                                <label htmlFor="seccessfully-first-product"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="seccessfully-first-product-sms" />
                                <label htmlFor="seccessfully-first-product-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Ваш товар добавили в избранное</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="favorite-product" />
                                <label htmlFor="favorite-product"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="favorite-product-sms" />
                                <label htmlFor="favorite-product-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Ваш товар не прошёл модерацию</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="not-pass-moderation" />
                                <label htmlFor="not-pass-moderation"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="not-pass-moderation-sms" />
                                <label htmlFor="not-pass-moderation-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Ваш товар успешно прошёл модерацию</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="seccessfully-pass-moderation" />
                                <label htmlFor="seccessfully-pass-moderation"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="seccessfully-pass-moderation-sms" />
                                <label htmlFor="seccessfully-pass-moderation-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Вы получили отзыв</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="get-feedback" />
                                <label htmlFor="get-feedback"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="get-feedback-sms" />
                                <label htmlFor="get-feedback-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Ваш товар успешно удалён</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="seccessfully-deleted" />
                                <label htmlFor="seccessfully-deleted"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="seccessfully-deleted-sms" />
                                <label htmlFor="seccessfully-deleted-sms"></label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Вы получили новое сообщение в чате</td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="new-message" />
                                <label htmlFor="new-message"></label>
                            </div>
                        </td>
                        <td>
                            <div className="checkbox">
                                <input type="checkbox" id="new-message-sms" />
                                <label htmlFor="new-message-sms"></label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button type="submit" className="btn-dark">Сохранить</button>
            </div>
        </div>
    </div>
}