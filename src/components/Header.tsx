import * as React from 'react';
import {useTranslation} from "react-i18next";

type PropsType = {
    actives: number[]
}

export const Header: React.FC<PropsType> = (props) => {
    const { t } = useTranslation();

    const isActive = (pos:number) => (props.actives.includes(pos))?" active":"";
    const isFullActive = () => (props.actives.length === 5)?" active":"";

    return (
        <>
            <div className="create_product__title">
                <h1>{t('Create a new product')}</h1>
                {/*<span className="title_info">Коротка інформація про те, що зараз буде відбуватися, для чого нам інформація і який проофіт від цього користувачеві. </span>*/}
                <span className="title_necessarily">{t('Required fields are marked *')}</span>
            </div>
            <div className="progress_bar">
                <div className="bar_high__items">
                    <div className={"number" + isActive(1)}>1</div>
                    <div className={"line" + isFullActive()} />
                    <div className={"number" + isActive(2)}>2</div>
                    <div className={"line" + isFullActive()} />
                    <div className={"number" + isActive(3)}>3</div>
                    <div className={"line" + isFullActive()} />
                    <div className={"number" + isActive(4)}>4</div>
                    <div className={"line" + isFullActive()} />
                    <div className={"number" + isActive(5)}>5</div>
                </div>
                <div className="bar_low__items">
                    <div className="text">{t('About product')}</div>
                    <div className="text">{t('Features and details')}</div>
                    <div className="text">{t('Price and terms of sale')}</div>
                    <div className="text">{t('Add photo')}</div>
                    <div className="text">{t('Contact phone')}</div>
                </div>
            </div>
        </>
    );
};
