import React, { useContext, useState } from 'react';
import { UserContext } from '../../reducer';

export default function Ads () {
    const { store: { user: { products = [] } = {} } } = useContext(UserContext);
    const productsFiltered = {
        0: products,
        1: products.filter(d => d.status === 1),
        2: products.filter(d => d.status === 2),
        3: products.filter(d => d.status === 3),
    };
    const [items, setItems] = useState(products);
    const setFilter = (status) => setItems(productsFiltered[status]);

    return <div className="accordion_item">
        <h3 className="tab_accordion" rel="tab2">Мои объявления</h3>
        <div className="tab_content">
            <div className="container">
                <div className="ad-container">
                    <ul className="tab-nav">
                        <li><a href={`${process.env.API_URL}/create-product`} className="btn-dark">
                                Подать объявление
                            </a>
                        </li>
                        <li>
                            <button className="nav-item active" onClick={() => setFilter(0)}>Все</button>
                            <span className="quantity">{productsFiltered[0].length}</span>
                        </li>
                        <li>
                            <button className="nav-item" onClick={() => setFilter(1)}>В продаже</button>
                            <span className="quantity">{productsFiltered[1].length}</span>
                        </li>
                        <li>
                            <button className="nav-item" onClick={() => setFilter(2)}>На проверке</button>
                            <span className="quantity">{productsFiltered[2].length}</span>
                        </li>
                        <li>
                            <button className="nav-item" onClick={() => setFilter(3)}>Продано</button>
                            <span className="quantity">{productsFiltered[3].length}</span>
                        </li>
                    </ul>
                    <div className="cards">
                        {items.map((product, i) => {
                            const { image, rank, age, brand, price, title } = product;
                            return <a href="/" className="product-card-view" key={i}>
                                <div className="img-container">
                                    <div className="img-wrapper">
                                        <div className="seller-rank">{rank}</div>
                                        <img src={image} alt=''/>
                                    </div>
                                </div>
                                <div className="product-description">
                                    <span className="card-heading">{title}</span>
                                    <div>
                                        <ul className="edge-brand">
                                            <li>{age}</li>
                                            <li>{brand}</li>
                                        </ul>
                                        <div className="price-like">
                                            <span className="price">{price} грн</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        })};
                    </div>
                </div>
            </div>
        </div>
    </div>
}