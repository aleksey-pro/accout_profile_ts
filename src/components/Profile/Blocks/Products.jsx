import React, { useContext, useState, useEffect, useCallback } from 'react';
import { UserContext } from '../../../store';
import { getItemsFiltered } from '../../../utils';
import { getProducts } from '../../../api';
import { setProducts } from '../../../reducer';
import Paginator from '../../Paginator';

const statusMap = [
    { title: 'Все', status: 0 },
    { title: 'В продаже', status: 1 },
    { title: 'На проверке', status: 2 },
    { title: 'Продано', status: 3 },
];

export default function Products () {
    const { store: { products = {} }, dispatch } = useContext(UserContext);
    const { items, ...paginationProps } = products;
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const productItems = getItemsFiltered(statusMap, items);
    const [filter, setFilter] = useState(0);
    const [error, setError] = useState('');

    const handleClick = (f) => setFilter(f);

    const handlePageChange = useCallback((page) => {
        console.log(page);
        setCurrentPage(page);
    }, []);

    const responseHandler = (response) => {
        if (response.error) {
            setError(response.error);
        } else {
            dispatch(setProducts(response.data));
        }
        setLoading(false);
    }

    // useEffect(() => {
    //     getProducts(currentPage)
    //         .then(responseHandler)
    //         .catch(() => setLoading(false))
    // }, [currentPage]);

    return <div className="accordion_item">
        <h3 className="tab_accordion">Мои объявления</h3>
        <div className="tab_content">
            <div className="container">
                <div className="ad-container">
                    <ul className="tab-nav">
                        <li><a href={`${process.env.API_URL}/create-product`} className="btn-dark">
                                Подать объявление
                            </a>
                        </li>
                        {statusMap.map((v, i) => <li key={i}>
                            <button className="nav-item active" onClick={() => handleClick(v.status)}>{v.title}</button>
                            <span className="quantity">{productItems[v.status].length}</span>
                        </li>)}
                    </ul>
                    <div className="cards">
                        {productItems[filter].map((product, i) => {
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
                        })}
                    </div>
                </div>
               <Paginator 
                {...paginationProps} 
                currentPage={currentPage} 
                handlePageChange={handlePageChange}
               />
            </div>
        </div>
    </div>
}