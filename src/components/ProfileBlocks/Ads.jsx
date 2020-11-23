import React from 'react';
import imgQ2 from '../../assets/img/q2.png';

export default function Ads () {
    return <div className="accordion_item">
        <h3 className="tab_accordion" rel="tab2">Мои объявления</h3>
        <div id="tab2" className="tab_content">
            <div className="container">
                <div className="ad-container">
                    <ul className="tab-nav">
                        <li><a href="/" className="btn-dark">Подать объявление</a></li>
                        <li><a href="/" className="nav-item active">Все</a><span className="quantity">27</span></li>
                        <li><a href="/" className="nav-item">В продаже</a><span className="quantity">23</span></li>
                        <li><a href="/" className="nav-item">На проверке</a><span className="quantity">18</span></li>
                        <li><a href="/" className="nav-item">Продано</a><span className="quantity">7</span></li>
                    </ul>
                    <div className="cards">
                        <a href="/" className="product-card-view">
                            <div className="img-container">
                                <div className="img-wrapper">
                                    <div className="seller-rank">Опытный продавец</div>
                                    <img src={imgQ2} alt=''/>
                                </div>
                            </div>
                            <div className="product-description">
                                <span className="card-heading">Ботинки (ботиночки) ортопедические фирмы "panda orthopedic" для девочки</span>
                                <div>
                                    <ul className="edge-brand">
                                        <li>4-5 лет</li>
                                        <li>Zara</li>
                                    </ul>
                                    <div className="price-like">
                                        <span className="price">200 грн</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/" className="product-card-view">
                            <div className="img-container">
                                <div className="img-wrapper">
                                    <div className="seller-rank">Опытный продавец</div>
                                    <img src={imgQ2} alt='' />
                                </div>
                            </div>
                            <div className="product-description">
                                <span className="card-heading">Ботинки (ботиночки) ортопедические фирмы "panda orthopedic" для девочки</span>
                                <div>
                                    <ul className="edge-brand">
                                        <li>4-5 лет</li>
                                        <li>Zara</li>
                                    </ul>
                                    <div className="price-like">
                                        <span className="price">200 грн</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/" className="product-card-view">
                            <div className="img-container">
                                <div className="img-wrapper">
                                    <div className="seller-rank">Опытный продавец</div>
                                    <img src={imgQ2} alt=''/>
                                </div>
                            </div>
                            <div className="product-description">
                                <span className="card-heading">Ботинки (ботиночки) ортопедические фирмы "panda orthopedic" для девочки</span>
                                <div>
                                    <ul className="edge-brand">
                                        <li>4-5 лет</li>
                                        <li>Zara</li>
                                    </ul>
                                    <div className="price-like">
                                        <span className="price">200 грн</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/" className="product-card-view">
                            <div className="img-container">
                                <div className="img-wrapper">
                                    <div className="seller-rank">Опытный продавец</div>
                                    <img src={imgQ2} alt='' />
                                </div>
                            </div>
                            <div className="product-description">
                                <span className="card-heading">Ботинки (ботиночки) ортопедические фирмы "panda orthopedic" для девочки</span>
                                <div>
                                    <ul className="edge-brand">
                                        <li>4-5 лет</li>
                                        <li>Zara</li>
                                    </ul>
                                    <div className="price-like">
                                        <span className="price">200 грн</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="/" className="product-card-view">
                            <div className="img-container">
                                <div className="img-wrapper">
                                    <div className="seller-rank">Опытный продавец</div>
                                    <img src={imgQ2} alt='' />
                                </div>
                            </div>
                            <div className="product-description">
                                <span className="card-heading">Ботинки (ботиночки) ортопедические фирмы "panda orthopedic" для девочки</span>
                                <div>
                                    <ul className="edge-brand">
                                        <li>4-5 лет</li>
                                        <li>Zara</li>
                                    </ul>
                                    <div className="price-like">
                                        <span className="price">200 грн</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <select className="select">
                        <option>Все объявления</option>
                        <option>В продаже</option>
                        <option>На проверке</option>
                        <option>Продано</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
}