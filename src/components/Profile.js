import React from 'react';
// import q4 from './../assets/img/q4.png'
// import likes from './../assets/img/likes.svg'
// import mails from './../assets/img/mails.svg'
// import phones from './../assets/img/phones.svg'
// import views from './../assets/img/views.svg'
import './../styles/myAccount.scss'


export const Profile = () => {
    return (
        <section className="tabs-box">
            <div className="tab-box">
                <ul className="tabs container">
                    <li className="active" rel="tab1">Мої оголошення</li>
                    <li rel="tab2">Повідомлення</li>
                    <li rel="tab3">Відгуки</li>
                    <li rel="tab4">Обране</li>
                    <li rel="tab5">Налаштування</li>
                </ul>
            </div>

            <div className="tab_container" >
                <div className="accordion_item">
                    <h3 className="tab_accordion" rel="tab1">Мої оголошення</h3>
                    <div id="tab1" className="tab_content" style={{display: 'block'}}>
                        <div className="container">
                            <ul className="content_actions">
                                <li><a href="#tab-1" className="filter">Фільтри</a></li>
                                <li><a href="#tab-2" className="sort">Сортування</a></li>
                                <li><a href="#tab-3" className="payment">Гаманець</a></li>
                            </ul>
                            <div className="tab_actions">
                                <div className="tab_action" id="tab-1">
                                    <div className="filters">
                                        <div className="checkbox">
                                            <input type="checkbox" id="all" name="all" value="1"/>
                                            <label htmlFor="all">
                                                <span>Всі</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" id="active" name="active" value="active"/>
                                            <label htmlFor="active">
                                                <span>Активні</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" id="unactive" name="unactive" value="1"/>
                                            <label htmlFor="unactive">
                                                <span>Деактивовані</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" id="advertised" name="advertised" value="1"/>
                                            <label htmlFor="advertised">
                                                <span>Рекламуються</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" id="draft" name="draft" value="1"/>
                                            <label htmlFor="draft">
                                                <span>Чернетки</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab_action" id="tab-2">
                                    <div className="sort">
                                        <div className="checkbox">
                                            <input type="checkbox" id="new" name="new" value="1"/>
                                            <label htmlFor="new">
                                                <span>Від нових до старих</span>
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" id="old" name="old" value="1"/>
                                            <label htmlFor="old">
                                                <span>Від старих до нових</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab_action" id="tab-3">
                                    <div className="payment">
                                        <div className="payment_item">
                                            <span className="item_label">Доступно публікацій</span>
                                            <span className="item_number">45</span>
                                        </div>
                                        <div className="payment_item">
                                            <span className="item_label">Підняття</span>
                                            <span className="item_number">1</span>
                                        </div>
                                        <div className="payment_item">
                                            <span className="item_label">TOP</span>
                                            <span className="item_number">2</span>
                                        </div>
                                        <div className="payment_item">
                                            <span className="item_label">VIP</span>
                                            <span className="item_number">0</span>
                                        </div>
                                        <a href="#" className="payment_add">Поповнити</a>
                                    </div>
                                </div>
                            </div>
                            <div className="my_products">
                                <div className="product_item">
                                    <div className="item_img">
                                        <div className="img_wrapper">
                                            {/* <img src={q4} alt=""/> */}
                                        </div>
                                        <div className="item_status">
                                            <div className="status_active">
                                                <div className="point"/>
                                                <span className="status">Активне</span>
                                            </div>
                                            <div className="status_advertised">
                                                <div className="point"/>
                                                <span className="status">Рекламується</span>
                                            </div>                                         
                                        </div>
                                    </div>
                                    <div className="item_content">
                                        <div className="content_up">
                                            <div className="content_info">
                                                <span className="title">Сукня рожева</span>
                                                <span className="price">400грн</span>
                                            </div>
                                            <div className="content_table">
                                                <div className="content_counts">
                                                    <div className="views">
                                                        {/* <img src={views} alt=""/> */}
                                                        <span>12</span>
                                                    </div>
                                                    <div className="likes">
                                                        {/* <img src={likes} alt=""/> */}
                                                        <span>3</span>
                                                    </div>
                                                    <div className="phones">
                                                        {/* <img src={phones} alt=""/> */}
                                                        <span>2</span>
                                                    </div>
                                                    <div className="mails">
                                                        {/* <img src={mails} alt=""/> */}
                                                        <span>2</span>
                                                    </div>
                                                </div>
                                                <div className="content_time">
                                                    <span>Опубліковано</span>
                                                    <span className="date">03.09.20</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content_bottom">
                                            <div className="content_events">
                                                <button type="button" className="event_look">Переглянути</button>
                                                <button type="button" className="event_edit">Редагувати</button>
                                                <button type="button" className="event_unactive">Деактивувати</button>
                                            </div>
                                            <div className="btn-dark">Рекламувати</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_item">
                                    <div className="item_img">
                                        <div className="img_wrapper">
                                            {/* <img src={q4} alt=""/> */}
                                        </div>
                                        <div className="item_status">
                                            <div className="status_unactive">
                                                <div className="point"/>
                                                <span className="status">Деактивоване</span>
                                            </div>                                       
                                        </div>
                                    </div>
                                    <div className="item_content">
                                        <div className="content_up">
                                            <div className="content_info unactive">
                                                <span className="title">Сукня рожева</span>
                                                <span className="price">400грн</span>
                                            </div>
                                            <div className="content_table">
                                                <div className="content_counts unactive">
                                                    <div className="views">
                                                        {/* <img src={views} alt=""/> */}
                                                        <span>12</span>
                                                    </div>
                                                    <div className="likes">
                                                        {/* <img src={likes} alt=""/> */}
                                                        <span>3</span>
                                                    </div>
                                                    <div className="phones">
                                                        {/* <img src={phones} alt=""/> */}
                                                        <span>2</span>
                                                    </div>
                                                    <div className="mails">
                                                        {/* <img src={mails} alt=""/> */}
                                                        <span>2</span>
                                                    </div>
                                                </div>
                                                <div className="content_time">
                                                    <span>Опубліковано</span>
                                                    <span className="date">03.09.20</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content_bottom">
                                            <div className="content_events">
                                                <button type="button" className="event_look">Переглянути</button>
                                                <button type="button" className="event_edit">Редагувати</button>
                                                <button type="button" className="event_unactive">Деактивувати</button>
                                            </div>
                                            <div className="btn-dark">Рекламувати</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_item">
                                    <div className="item_img">
                                        <div className="img_wrapper">
                                            {/* <img src={q4} alt=""/> */}
                                        </div>
                                        <div className="item_status">
                                            <div className="status_moderated">
                                                <div className="point"/>
                                                <span className="status">На модерації</span>
                                            </div>                                         
                                        </div>
                                    </div>
                                    <div className="item_content">
                                        <div className="content_up">
                                            <div className="content_info">
                                                <span className="title">Сукня рожева</span>
                                                <span className="price">400грн</span>
                                            </div>
                                            <div className="content_table">
                                                <div className="content_counts">
                                                    <div className="views">
                                                        {/* <img src={views} alt=""/> */}
                                                        <span>12</span>
                                                    </div>
                                                    <div className="likes">
                                                        {/* <img src={likes} alt=""/> */}
                                                        <span>3</span>
                                                    </div>
                                                    <div className="phones">
                                                        {/* <img src={phones} alt=""/> */}
                                                        <span>2</span>
                                                    </div>
                                                    <div className="mails">
                                                        {/* <img src={mails} alt=""/> */}
                                                        <span>2</span>
                                                    </div>
                                                </div>
                                                <div className="content_time">
                                                    <span>Опубліковано</span>
                                                    <span className="date">03.09.20</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content_bottom">
                                            <div className="content_events">
                                                <button type="button" className="event_look">Переглянути</button>
                                                <button type="button" className="event_edit">Редагувати</button>
                                                <button type="button" className="event_unactive">Деактивувати</button>
                                            </div>
                                            <div className="btn-dark">Рекламувати</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_item">
                                    <div className="item_img">
                                        <div className="img_wrapper">
                                            {/* <img src={q4} alt=""/> */}
                                        </div>
                                        <div className="item_status">
                                            <div className="status_draft">
                                                <div className="point"/>
                                                <span className="status">Чернетка</span>
                                            </div>                                         
                                        </div>
                                    </div>
                                    <div className="item_content">
                                        <div className="content_up">
                                            <div className="content_info">
                                                <span className="title">Сукня рожева</span>
                                                <span className="price">400грн</span>
                                            </div>
                                            <div className="content_table">
                                                <div className="content_counts draft">
                                                    <div className="views">
                                                        {/* <img src={views} alt=""/> */}
                                                        <span>0</span>
                                                    </div>
                                                    <div className="likes">
                                                        {/* <img src={likes} alt=""/> */}
                                                        <span>0</span>
                                                    </div>
                                                    <div className="phones">
                                                        {/* <img src={phones} alt=""/> */}
                                                        <span>0</span>
                                                    </div>
                                                    <div className="mails">
                                                        {/* <img src={mails} alt=""/> */}
                                                        <span>0</span>
                                                    </div>
                                                </div>
                                                <div className="content_time">
                                                    <span>Опубліковано</span>
                                                    <span className="date">03.09.20</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content_bottom">
                                            <div className="content_events">
                                                <button type="button" className="event_look">Переглянути</button>
                                                <button type="button" className="event_edit">Редагувати</button>
                                                <button type="button" className="event_unactive">Деактивувати</button>
                                            </div>
                                            <div className="btn-dark">Рекламувати</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            {/* <div className="accordion_item">
                <h3 className="tab_accordion" rel="tab2">Мои объявления</h3>
                <div id="tab2" className="tab_content" style={{display: 'none'}}>
                    <div className="container">
                        <div className="ad-container">
                            Повідомлення
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="accordion_item">
                <h3 className="tab_accordion" rel="tab3">Відгуки</h3>
                <div id="tab3" className="tab_content" style={{display: 'none'}}>
                    <div className="container">
                        <div className="feedback-container">
                            Відгуки
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="accordion_item favorite">
                <h3 className="tab_accordion" rel="tab4">Обране</h3>
                <div id="tab4" className="tab_content" style={{display: 'none'}}>
                    <div className="container">
                        <div className="ad-container">
                            Обране
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div className="accordion_item favorite">
                <h3 className="tab_accordion" rel="tab5">Налаштування</h3>
                <div id="tab5" className="tab_content" style={{display: none}}>
                    <div className="container">
                        <div className="ad-container">
                            Налаштування
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
    )
}