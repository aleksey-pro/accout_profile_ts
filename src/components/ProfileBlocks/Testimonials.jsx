import React from 'react';
import imgUser from '../../assets/img/user.png';

export default function Testimonials () {
    return <div className="accordion_item">
        <h3 className="tab_accordion" rel="tab3">Отзывы</h3>
        <div id="tab3" className="tab_content">
            <div className="container">
                <div className="feedback-container">
                    <select className="select">
                        <option>Все объявления</option>
                        <option>Позитивные</option>
                        <option>Негаивные</option>
                    </select>
                    <ul className="tab-nav">
                        <li><a href="/" className="nav-item active">Все</a><span className="quantity">27</span></li>
                        <li><a href="/" className="nav-item">Позитивные</a><span className="quantity">23</span></li>
                        <li><a href="/" className="nav-item">Негаивные</a><span className="quantity">18</span></li>
                    </ul>
                    <div className="feedback-list">
                        <div className="feedback-item">
                            <div className="feedback-content">
                                <div className="avatar-name">
                                    <a href="/" className="avatar">
                                        <img src={imgUser} alt="" />
                                        <div className="rating like"></div>
                                    </a>
                                    <div className="name-place">
                                        <h4>Ольга Морозова,</h4>
                                        <span>г. Кропивницкий</span>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="purchased">
                                        Сарафан зеленый для девочки в горошек новый | 200 грн
                                    </div>
                                    <div className="feedback"> Рекомендую!</div>
                                    <div className="date">
                                        11 ноября 2018 г., 12:56
                                    </div>
                                </div>
                                <div className="status">Новый</div>
                            </div>
                        </div>
                        <div className="feedback-item">
                            <div className="feedback-content">
                                <div className="avatar-name">
                                    <a href="/" className="avatar">
                                        <img src={imgUser} alt="" />
                                        <div className="rating unlike"></div>
                                    </a>
                                    <div className="name-place">
                                        <h4>Ольга Морозова,</h4>
                                        <span>г. Кропивницкий</span>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="purchased">
                                        Сарафан зеленый для девочки в горошек новый | 200 грн
                                    </div>
                                    <div className="feedback">
                                        Очень довольна покупкой, сарафан оказался намного лучше, чем на фото )
                                        Спасибо
                                        огромное
                                        продавцу: красиво, быстро и приятно! ))) Рекомендую!
                                    </div>
                                    <div className="date">
                                        11 ноября 2018 г., 12:56
                                    </div>
                                </div>
                            </div>
                        {/* <div className="status">Новый</div> */}
                        </div>
                        <div className="feedback-item">
                            <div className="feedback-content">
                                <div className="avatar-name">
                                    <a href="/" className="avatar">
                                        <img src={imgUser} alt="" />
                                        <div className="rating unlike"></div>
                                    </a>
                                    <div className="name-place">
                                        <h4>Ольга Морозова,</h4>
                                        <span>г. Кропивницкий</span>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="purchased">
                                        Сарафан зеленый для девочки в горошек новый | 200 грн
                                    </div>
                                    <div className="feedback">
                                        Очень довольна покупкой, сарафан оказался намного лучше, чем на фото )
                                        Спасибо
                                        огромное
                                        продавцу: красиво, быстро и приятно! ))) Рекомендую!
                                    </div>
                                    <div className="date">
                                        11 ноября 2018 г., 12:56
                                    </div>
                                </div>
                            </div>
                            {/* <div className="status">Новый</div> */}
                        </div>
                        <div className="pagination">
                            <a href="/" className="page">1</a>
                            <a href="/" className="page current">2</a>
                            <a href="/" className="page">3</a>
                            <a href="/" className="points">...</a>
                            <a href="/" className="page">5</a>
                            <a href="/" className="forward">Вперёд</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
