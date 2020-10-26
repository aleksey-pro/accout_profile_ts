import React from 'react';
import './scss/create-page.scss';

import uploadIcon from './assets/img/upload_icon_1.svg';
import reload from './assets/img/reload.svg';
import t_shirt from './assets/img/tshirt.svg';
import priceTag from './assets/img/price-tag.svg';
import water from './assets/img/water.svg';

import dress from './assets/img/dress.svg';
import shirt1 from './assets/img/shirt1.svg';
import rattle from './assets/img/rattle.svg';
import diaper from './assets/img/diaper.svg';
import babyStroller from './assets/img/baby-stroller.svg';
import tricycle from './assets/img/tricycle.svg';
import carSeat from './assets/img/car-seat.svg';
import crib from './assets/img/crib.svg';
import abacus from './assets/img/abacus.svg';
import pregnant from './assets/img/pregnant.svg';
import feeder from './assets/img/feeder.svg';

import rotateIcon from './assets/img/rotate.svg';
import deleteIcon from './assets/img/del.svg';

const Create = () => {
    return (
        <section className="create_product">
            <div className="container">
                <div className="create_product__title">
                    <h1>Створення нового оголошення</h1>
                    <span className="title_info">Коротка інформація про те, що зараз буде відбуватися, для чого нам інформація і який проофіт від цього користувачеві. </span>
                    <span className="title_necessarily">Обов’язкові до заповнення поля позначені зірочкою - *.</span>
                </div>
                <div className="progress_bar">
                    <div className="bar_high__items">
                        <div className="number active">1</div>
                        <div className="line active"/>
                        <div className="number">2</div>
                        <div className="line"/>
                        <div className="number">3</div>
                        <div className="line"/>
                        <div className="number">4</div>
                        <div className="line"/>
                        <div className="number">5</div>
                    </div>
                    <div className="bar_low__items">
                        <div className="text">Коротко про товар</div>
                        <div className="text">Особливості та деталі</div>
                        <div className="text">Ціна та умови продажу</div>
                        <div className="text">Додайте фото</div>
                        <div className="text">Контактний телефон</div>
                    </div>
                </div>

                <div className="create_product__category">
                    <div className="category_number">
                        <div className="number mobile_hide active">1</div>
                        {/*<div className="count_done">Заповнено 1/5</div>*/}
                    </div>
                    <div className="category_title">Введіть назву товару *</div>
                    <div className="input-label product_name">
                        <label htmlFor="product_title">Назва з’явиться угорі сторінки Вашого товару</label>
                        <input type="text" id="product_title" required="required"
                            placeholder="Наприклад, Зелена сукня H&amp;M в горошок"/>
                    </div>
                    <div className="category_title">Напишіть короткий опис товару *</div>
                    <div className="input-label product_description">
                        <label htmlFor="product_description">Опис допоможе потенційним покупцям знайти Ваш товар
                            швидше</label>
                        <textarea
                            id="product_description"
                            required="required"
                            placeholder="Наприклад, Зелена сукня H&M в горошок для дівчинки 5-7 років. Нова. Довжина по коліно."/>
                    </div>
                    <span className="max-length">Максимум 255 знаків</span>
                    <div className="category_steps">
                        <button type="button" className="category_next done">Далі</button>
                    </div>
                </div>

                <div className="create_product__category">
                    <div className="category_number">
                        <div className="number mobile_hide active">2</div>
                        {/*<div className="count_done">Заповнено 2/5</div>*/}
                    </div>
                    <div className="category_title">До якої категорії віднести Ваш товар? *</div>
                    <div className="category_label">Правильно вказана категорія допоможе продати товар швидше</div>
                    <div className="categories-items__title">
                        <span>Введіть назву</span> товару вище, і тут з’являться пропоновані категорії:
                    </div>
                    <div className="categories_inputs">
                        <div className="row">
                            <input type="radio" value="girls" name="quality" id="girls"/>
                            <label htmlFor="girls" className="icon">
                                <div className="content">
                                    <img src={dress} alt="dress"/>
                                    <p>Вещи для девочек</p>
                                </div>
                            </label>
                            <input type="radio" value="girls" name="quality" id="boys"/>
                            <label htmlFor="boys" className="icon">
                                <div className="content">
                                    <img src={shirt1} alt="shirt1"/>
                                    <p>Вещи для мальчиков</p>
                                </div>
                            </label>
                            <input type="radio" value="girls" name="quality" id="toys"/>
                            <label htmlFor="toys" className="icon">
                                <div className="content">
                                    <img src={rattle} alt="rattle"/>
                                    <p>Игрушки, игры</p>
                                </div>
                            </label>
                            <input type="radio" value="girls" name="quality" id="care"/>
                            <label htmlFor="care" className="icon">
                                <div className="content">
                                    <img src={diaper} alt="diaper"/>
                                    <p>Уход за ребенком</p>
                                </div>
                            </label>
                            <input type="radio" value="girls" name="quality" id="pram"/>
                            <label htmlFor="pram" className="icon">
                                <div className="content">
                                    <img src={babyStroller} alt="baby-stroller"/>
                                    <p>Коляски, рюкзаки</p>
                                </div>
                            </label>
                            <input type="radio" value="girls" name="quality" id="means"/>
                            <label htmlFor="means" className="icon">
                                <div className="content">
                                    <img src={tricycle} alt="tricycle"/>
                                    <p>Средства передвижения</p>
                                </div>
                            </label>
                            <input type="radio" value="girls" name="quality" id="carseat"/>
                            <label htmlFor="carseat" className="icon">
                                <div className="content">
                                    <img src={carSeat} alt="car-seat"/>
                                    <p>Автокресла</p>
                                </div>
                            </label>
                            <input type="radio" value="girls" name="quality" id="furniture"/>
                            <label htmlFor="furniture" className="icon">
                                <div className="content">
                                    <img src={crib} alt="crib"/>
                                    <p>Мебель для детей</p>
                                </div>
                            </label>
                            <input type="radio" value="girls" name="quality" id="books"/>
                            <label htmlFor="books" className="icon">
                                <div className="content">
                                    <img src={abacus} alt="abacus"/>
                                    <p>Книги, школьные принадлености</p>
                                </div>
                            </label>
                            <input type="radio" value="girls" name="quality"
                                   id="accessories"/>
                            <label htmlFor="accessories" className="icon">
                                <div className="content">
                                    <img src={pregnant} alt="pregnant"/>
                                    <p>Аксесуары для беременных и мам</p>
                                </div>
                            </label>
                            <input type="radio" value="girls" name="quality"
                                   id="other"/>
                            <label htmlFor="other" className="icon">
                                <div className="content">
                                    <img src={feeder} alt="feeder"/>
                                    <p>Другое</p>
                                </div>
                            </label>
                            <div className="show_categories">
                                <span>Показати всі категоріїї</span>
                            </div>
                        </div>
                    </div>
                    <div className="categories-items__subcategories">
                        <div className="subcategories_title">Доречні підкатегорії:</div>
                        <div className="subcategories_items">
                            <input type="radio" id="1"/>
                            <label htmlFor="1" className="item">Сукні</label>

                            <input type="radio" id="2"/>
                            <label htmlFor="2" className="item">Халати</label>

                            <input type="radio" id="3"/>
                            <label htmlFor="3" className="item">Підкатегорія</label>
                        </div>
                    </div>
                    <div className="category_title">Додайте більше деталей про товар</div>
                    <div className="category_label">Чим більше інформації заповнено, тим легше покупцеві прийняти
                        рішення
                        про покупку
                    </div>
                    <div className="brand_input">
                        <div className="input-label brand">
                            <select
                                id="product_condition"
                                required="required"
                                placeholder="Почніть вводити">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            <label htmlFor="product_condition">Бренд *</label>
                        </div>
                        <div className="no_brand">Бренду немає у списку?</div>
                    </div>
                    <div className="input-label condition">
                        <select
                            id="product_condition"
                            required="required"
                            placeholder="Почніть вводити">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <label htmlFor="product_condition">В якому стані товар? *</label>
                    </div>
                    <div className="color_input">
                        <div className="category_title">Вкажіть максимум 3 кольори товару *</div>
                        <div className="colors-list mobile-hide">
                            <div className="row">
                                <input type="checkbox" value="white" name="quality" id="white"/>
                                <label htmlFor="white" className="color label_white">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{border: '1px solid #eaeaf7', background: '#ffffff'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Білий</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="yellow" name="quality" id="yellow"/>
                                <label htmlFor="yellow" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#F4D42D'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Жовтий</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="orange" name="quality" id="orange"/>
                                <label htmlFor="orange" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#FBA018'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Оранжевий</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="blue" name="quality" id="blue"/>
                                <label htmlFor="blue" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#89DFFA'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Блакитний</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="purple" name="quality" id="purple"/>
                                <label htmlFor="purple" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#FB9BFD'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Рожевий</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="gold" name="quality" id="gold"/>
                                <label htmlFor="gold" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: 'linear-gradient(135deg, #F7D681 0%, #B98500 100%)'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Золотий</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="beige" name="quality" id="beige"/>
                                <label htmlFor="beige" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#FAF3DC'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Бежевий</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="light-green" name="quality" id="light-green"/>
                                <label htmlFor="light-green" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#ADFA4B'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Салатовий</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="red" name="quality" id="red"/>
                                <label htmlFor="red" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#FA1B1B'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Червоний</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="dark-blue" name="quality" id="dark-blue"/>
                                <label htmlFor="dark-blue" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#3467EB'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Синій</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="violet" name="violet" id="violet"/>
                                <label htmlFor="violet" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#9011F4'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Фіолетовий</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="silver" name="quality" id="silver"/>
                                <label htmlFor="silver" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: 'linear-gradient(311.28deg, #D9DDDF 11.69%, #EDF1F3 92.23%)'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Срібний</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="grey" name="quality" id="grey"/>
                                <label htmlFor="grey" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#C4C4C4'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Сірий</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="green" name="quality" id="green"/>
                                <label htmlFor="green" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#00AD5D'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Зелений</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="brown" name="quality" id="brown"/>
                                <label htmlFor="brown" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#7F430B'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Коричневий</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="black" name="quality" id="black"/>
                                <label htmlFor="black" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: '#000000'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Чорний</p>
                                        </div>
                                    </div>
                                </label>
                                <input type="checkbox" value="multicolor" name="quality" id="multicolor"/>
                                <label htmlFor="multicolor" className="color">
                                    <div className="content-color">
                                        <div
                                            className="circle d-inline"
                                            style={{background: 'conic-gradient(from 180deg at 50% 50%, #3FF752 -28.03deg, #72E5FE 28.05deg, #287EFF 78.28deg, #9516F8 129.48deg, #FF2020 177.74deg, #FF9E0D 235.46deg, #FEF525 286.8deg, #3FF752 331.97deg, #72E5FE 388.05deg)'}}
                                        />
                                        <div className="color-name d-inline">
                                            <p>Різнокольор...</p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="input-label condition">
                        <select
                            id="age"
                            required="required"
                            placeholder="Почніть вводити">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <label htmlFor="age">На який вік підходить товар?</label>
                    </div>
                    <div className="input-label condition">
                        <select
                            id=""
                            required="required"
                            placeholder="Почніть вводити">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <label htmlFor="growth">На який зріст підходить товар?</label>
                    </div>
                    <div className="other">
                        Вказати додаткові деталі
                    </div>
                    <div className="category_steps">
                        <div className="wrap__category_back">
                            <button type="button" className="category_back btn-light">Назад</button>
                        </div>
                        <div className="wrap__category_next">
                            <button type="button" className="category_next">Далі</button>
                        </div>
                    </div>
                </div>

                <div className="create_product__category">
                    <div className="category_number">
                        <div className="number mobile_hide active">3</div>
                        {/*<div className="count_done">Заповнено 3/5</div>*/}
                    </div>
                    <div className="category_title ">Ціна та умови продажу</div>
                    <div className="category_label">Чим більше інформації заповнено, тим легше покупцеві прийняти
                        рішення
                    </div>
                    <div className="price_items">
                        <div className="input-label">
                            <label htmlFor="price">Вкажіть ціну товару *</label>
                            <input
                                type="text"
                                id="price"
                                required="required"
                                placeholder="0 грн"/>
                        </div>
                        <div className="input-label">
                            <label htmlFor="bought_price">За скільки Ви купили товар?</label>
                            <input
                                type="text"
                                id="bought_price"
                                required="required"
                                placeholder="0 грн"/>
                        </div>
                    </div>
                    <div className="input-label additional_condition">
                        <label htmlFor="additional_condition">Додаткова умова продажу</label>
                        <textarea
                            id="additional_condition"
                            required="required"
                            placeholder="Наприклад, Відправлю лише після передплати"/>
                    </div>
                    <div className="checkbox_items">
                        <div className="checkbox">
                            <input type="checkbox" id="bargain"/>
                            <label htmlFor="bargain">Можливий торг</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="barter"/>
                            <label htmlFor="barter">Можливий бартер</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="free"/>
                            <label htmlFor="free">Віддам даром</label>
                        </div>
                    </div>
                    <div className="category_steps">
                        <div className="wrap__category_back">
                            <button type="button" className="category_back btn-light">Назад</button>
                        </div>
                        <div className="wrap__category_next">
                            <button type="button" className="category_next">Далі</button>
                        </div>
                    </div>
                </div>

                <div className="create_product__category">
                    <div className="category_number">
                        <div className="number mobile_hide active">4</div>
                        {/*<div className="count_done">Заповнено 4/5</div>*/}
                    </div>
                    <div className="category_title">Додайте фото *</div>
                    <div className="category_label">Ви можете додати мінімум 1 зображення, максимум - 5.</div>
                    <div className="inputs-block">
                        <div className="input-wrap">
                            <div className="input-wrap_title">1. Фото товару спереду</div>
                            <div className="block-foto__edit">
                                <button className="delete">
                                    <img src={deleteIcon} alt=""/>
                                </button>
                                <button className="btn-dark">Замінити</button>
                                <button className="rotate">
                                    <img src={rotateIcon} alt=""/>
                                </button>
                            </div>
                            <div className="input">
                                <input type="file"/>
                                <img src="" alt="" className="preview"/>
                                <label className="text">
                                    <img src={uploadIcon} alt=""/>
                                    <span>Натисніть, щоб завантажати</span>
                                </label>
                            </div>
                        </div>
                        <div className="input-wrap">
                            <div className="input-wrap_title">2. Фото товару ззаду</div>
                            <div className="block-foto__edit">
                                <button className="delete">
                                    <img src={deleteIcon} alt=""/>
                                </button>
                                <button className="btn-dark">Замінити</button>
                                <button className="rotate">
                                    <img src={rotateIcon} alt=""/>
                                </button>
                            </div>
                            <div className="input">
                                <input type="file"/>
                                <img src="" alt="" className="preview"/>
                                <label className="text">
                                    <img src={reload} alt=""/>
                                    <span>Натисніть, щоб завантажати</span>
                                </label>
                            </div>
                        </div>
                        <div className="input-wrap">
                            <div className="input-wrap_title">3. Фото важливих деталей</div>
                            <div className="block-foto__edit">
                                <button className="delete">
                                    <img src={deleteIcon} alt=""/>
                                </button>
                                <button className="btn-dark">Замінити</button>
                                <button className="rotate">
                                    <img src={rotateIcon} alt=""/>
                                </button>
                            </div>
                            <div className="input">
                                <input type="file"/>
                                <img src="" alt="" className="preview"/>
                                <label className="text">
                                    <img src={t_shirt} alt=""/>
                                    <span>Натисніть, щоб завантажати</span>
                                </label>
                            </div>
                        </div>
                        <div className="input-wrap">
                            <div className="input-wrap_title">4. Фото бірки, етикетки, коробки</div>
                            <div className="block-foto__edit">
                                <button className="delete">
                                    <img src={deleteIcon} alt=""/>
                                </button>
                                <button className="btn-dark">Замінити</button>
                                <button className="rotate">
                                    <img src={rotateIcon} alt=""/>
                                </button>
                            </div>
                            <div className="input">
                                <input type="file"/>
                                <img src="" alt="" className="preview"/>
                                <label className="text">
                                    <img src={priceTag} alt=""/>
                                    <span>Натисніть, щоб завантажати</span>
                                </label>
                            </div>
                        </div>
                        <div className="input-wrap">
                            <div className="input-wrap_title">5. Фото плям та інших вад</div>
                            <div className="block-foto__edit">
                                <button className="delete">
                                    <img src={deleteIcon} alt=""/>
                                </button>
                                <button className="btn-dark">Замінити</button>
                                <button className="rotate">
                                    <img src={rotateIcon} alt=""/>
                                </button>
                            </div>
                            <div className="input">
                                <input type="file"/>
                                <img src="" alt="" className="preview"/>
                                <label className="text">
                                    <img src={water} alt=""/>
                                    <span>Натисніть, щоб завантажати</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="category_steps">
                        <div className="wrap__category_back">
                            <button type="button" className="category_back btn-light">Назад</button>
                        </div>
                        <div className="wrap__category_next">
                            <button type="button" className="category_next">Далі</button>
                        </div>
                    </div>
                </div>

                <div className="create_product__category">
                    <div className="telephone_category">
                        <div className="category_number">
                            <div className="number mobile_hide active">5</div>
                            {/*<div className="count_done">Заповнено 5/5</div>*/}
                        </div>
                        <div className="input-label">
                            <label htmlFor="price">Вкажіть ціну товару *</label>
                            <input
                                type="text"
                                id="price"
                                required="required"
                                placeholder="+38 0 00 00 00 000"/>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="telephone"/>
                            <label htmlFor="telephone">Показувати телефон в оголошенні</label>
                        </div>
                    </div>
                    <div className="category_steps">
                        <div className="wrap__category_back">
                            <button type="button" className="category_back btn-light">Назад</button>
                        </div>
                        <div className="wrap__category_next">
                            <button type="button" className="category_next">Далі</button>
                        </div>
                    </div>
                </div>

                <div className="btn_block">
                    <button type="button" className="btn-dark">Створити оголошення</button>
                    <button type="button" className="btn-light">Зберегти чернетку</button>
                </div>
            </div>
        </section>
    );
}

export default Create;
