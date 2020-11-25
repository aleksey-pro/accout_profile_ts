import React, { useContext, useState } from 'react';

import { UserContext } from '../../../store';
import imgUser from '../../../assets/img/user.png';
import imgLike from '../../../assets/img/like_filled.svg';
import { getItemsFiltered } from '../../../utils';

const statusMap = [
    { title: 'Все', status: 0 },
    { title: 'Позитивные', status: 1 },
    { title: 'Негаивные', status: 2 },
];

export default function Testimonials () {
    const { store: { user: { testimonials = [] } = {} } } = useContext(UserContext);
    const items = getItemsFiltered(statusMap, testimonials);
    const [filter, setFilter] = useState(0);
    const handleClick = (f) => setFilter(f);

    return <div className="accordion_item">
        <h3 className="tab_accordion" rel="tab3">Отзывы</h3>
        <div className="tab_content">
            <div className="container">
                <div className="feedback-container">
                    <ul className="tab-nav">
                        {statusMap.map((v, i) => <li key={i}>
                            <button className="nav-item active" onClick={() => handleClick(v.status)}>{v.title}</button>
                            <span className="quantity">{items[v.status].length}</span>
                        </li>)}
                    </ul>
                    <div className="feedback-list">
                        {items[filter].map((testimonial, i) => {
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
}
