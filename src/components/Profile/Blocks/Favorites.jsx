import React, { useState } from 'react';
import { getItemsFiltered } from '../../../utils';
import BlockWrapper from './BlockWrapper';

import imgQ2 from '../../../assets/img/q2.png';

const statusMap = [
    { title: 'Все', status: 0 },
    { title: 'В продаже', status: 1 },
    { title: 'На проверке', status: 2 },
    { title: 'Продано', status: 3 },
];

export default function Favorites () {    
    const [filter, setFilter] = useState(0);
    const handleSetFilter = (f) => setFilter(f);
    return <BlockWrapper type="favourites">
        {({ store }) => {
            const { favourites: { items } } = store;
            const favoriteItems = getItemsFiltered(statusMap, items);
            return <div className="accordion_item">
                <h3 className="tab_accordion">Избранное</h3>
                <div className="tab_content">
                    <div className="container">
                        <div className="ad-container">
                            <ul className="tab-nav">
                                <li><a href={`${process.env.API_URL}/create-product`} className="btn-dark">
                                        Подать объявление
                                    </a>
                                </li>
                                {statusMap.map((v, i) => <li key={i}>
                                    <button 
                                        className="nav-item active" 
                                        onClick={() => handleSetFilter(v.status)}
                                        >{v.title}</button>
                                    <span className="quantity">{favoriteItems[v.status].length}</span>
                                </li>)}
                            </ul>
                            <div className="cards">
                                {favoriteItems[filter].map((product, i) => {
                                    const { image, rank, age, brand, price, title } = product;
                                    return <a href="/" className="product-card-view" key={i}>
                                        <div className="img-container">
                                            <div className="img-wrapper">
                                                <div className="seller-rank">{rank}</div>
                                                <img src={image || imgQ2} alt=''/>
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
        }}
    </BlockWrapper>;
}