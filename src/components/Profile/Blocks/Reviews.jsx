import React, { useState } from 'react';
import { getItemsFiltered } from '../../../utils';
import BlockWrapper from './BlockWrapper';

import imgUser from '../../../assets/img/user.png';
import imgLike from '../../../assets/img/like_filled.svg';

const statusMap = [
    { title: 'Все', status: 0 },
    { title: 'Позитивные', status: 1 },
    { title: 'Негаивные', status: 2 },
];

export default function Reviews () {    
    const [filter, setFilter] = useState(0);
    const handleSetFilter = (f) => setFilter(f);
    return <BlockWrapper type="reviews">
        {({ store }) => {
            const { reviews: { items } } = store;
            const reviewItems = getItemsFiltered(statusMap, items);
            return <div className="accordion_item">
                <h3 className="tab_accordion">Отзывы</h3>
                <div className="tab_content">
                    <div className="container">
                        <div className="ad-container">
                            <ul className="tab-nav">
                                {statusMap.map((v, i) => <li key={i}>
                                    <button 
                                        className="nav-item active" 
                                        onClick={() => handleSetFilter(v.status)}
                                        >{v.title}</button>
                                    <span className="quantity">{reviewItems[v.status].length}</span>
                                </li>)}
                            </ul>
                            <div className="feedback-list">
                                {reviewItems[filter].map((testimonial, i) => {
                                    const { image, rating, fullname, city,  
                                        purchased, feedbackText, feedbackStatus, date } = testimonial;
                                    return  <div className="feedback-item" key={i}>
                                        <div className="feedback-content">
                                            <div className="avatar-name">
                                                <a href="/" className="avatar">
                                                    <img src={image || imgUser} alt="" />
                                                    <div className={`rating ${rating === 'positive' ? 'like' : 'unlike'}`}
                                                        ><img src={imgLike} alt="" />
                                                    </div>
                                                </a>
                                                <div className="name-place">
                                                    <h4>{fullname}</h4>
                                                    <span>{city}</span>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <div className="purchased">{purchased}</div>
                                                <div className="feedback">{feedbackText}</div>
                                                <div className="date">{date}</div>
                                            </div>
                                            <div className="status">{feedbackStatus}</div>
                                        </div>
                                    </div>
                                })}                      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }}
    </BlockWrapper>;
}