import * as React from 'react';
import Slider from "react-slick";
import {useState} from "react";
import apiUrl from "../../apiUrl";
import {useTranslation} from "react-i18next";

type PropsType = {};

export const Foreshortening: React.FC<PropsType> = (props) => {
    const { t } = useTranslation();
    let [isShowing, setIsShowing] = useState(true);
    const ArrowLeft = (props: any) => {
        const {currentSlide, slideCount, ...arrowProps} = props;
        return <div {...arrowProps} className={"arrow left"}/>;
    };
    const ArrowRight = (props: any) => {
        const {currentSlide, slideCount, ...arrowProps} = props;
        return <div {...arrowProps} className={"arrow right"}/>;
    };
    const settings = {
        dots: true,
        autoplay: false,
        prevArrow: <ArrowLeft/>,
        nextArrow: <ArrowRight/>,
        rows: 1,
        slidesToShow: 1
    };
    return <>
        <div className="d-block mobile-hide mobile-toggle">
            <button type={"button"} onClick={() => setIsShowing(!isShowing)} className="btn-foreshortening btn-light">
                {isShowing ? t('Hide the correct angle') : t('Show the correct angle')}
            </button>
        </div>
        {isShowing &&
        <Slider {...settings} className="panel how panel-foreshortening">
            <div className="block">
                <div className="left-block">
                    <div className="slick-text">
                        <div className="text-block">
                            <div className="panel-title">
                                <h3>{t('Correct angle')}</h3>
                            </div>
                            <div className="panel-text">
                                <p>{t('Take a photo of the product on a model or on a hanger, it will look much better than on the floor or bed. In the main photo, the item should be shown in full height.')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-block">
                    <div className="img-container">
                        <img src={apiUrl + "/assets/img/card_good.png"} alt=""/>
                        <img src={apiUrl + "/assets/img/card_bad.png"} alt=""/>
                    </div>
                </div>
            </div>
            <div className="block">
                <div className="left-block">
                    <div className="slick-text">
                        <div className="text-block">
                            <div className="panel-title">
                                <h3>{t('Correct angle')}</h3>
                            </div>
                            <div className="panel-text">
                                <p>{t('Take a photo of the product on a model or on a hanger, it will look much better than on the floor or bed. In the main photo, the item should be shown in full height.')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-block">
                    <div className="img-container">
                        <img src={apiUrl + "/assets/img/card_good.png"} alt=""/>
                        <img src={apiUrl + "/assets/img/card_bad.png"} alt=""/>
                    </div>
                </div>
            </div>
        </Slider>}
    </>
};