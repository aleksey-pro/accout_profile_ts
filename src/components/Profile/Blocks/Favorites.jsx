import React, { useContext, useState } from 'react';
import { UserContext } from '../../../store';
import { getItemsFiltered } from '../../../utils';
import imgQ2 from '../../../assets/img/q2.png';

const statusMap = [
    { title: 'Все', status: 0 },
    { title: 'В продаже', status: 1 },
    { title: 'На проверке', status: 2 },
    { title: 'Продано', status: 3 },
];

export default function Favorites () {
    const { store: { user: { favourites = [] } = {} } } = useContext(UserContext);
    const items = getItemsFiltered(statusMap, favourites);
    const [filter, setFilter] = useState(0);
    const handleClick = (f) => setFilter(f);

    return  <div className="accordion_item favorite">
        <h3 className="tab_accordion" rel="favorite">Избранное</h3>
        <div id="favorite" className="tab_content">
            <div className="container">
                <div className="ad-container">
                    <ul className="tab-nav">
                        {statusMap.map((v, i) => <li key={i}>
                            <button className="nav-item active" onClick={() => handleClick(v.status)}>{v.title}</button>
                            <span className="quantity">{items[v.status].length}</span>
                        </li>)}
                    </ul>
                    <div className="cards">
                        {items[filter].map((product, i) => {
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
}
