import * as React from 'react';
import {useTranslation} from "react-i18next";
import { useFormikContext } from 'formik';
import {ProductType} from '../types/types';

export const Header: React.FC = () => {
    const { t } = useTranslation();
    const { errors, values } = useFormikContext<ProductType>();
    const [lineActive, setLineActive] = React.useState<boolean>(false);
    const isActive = (inputValues: Array<string>): string => {
        return inputValues && inputValues.every(val => Object.keys(values).includes(val)) 
        && inputValues.every(val => !Object.keys(errors).includes(val)) ? " active" : "";
    }

    React.useEffect(() => {
        const isFullActive = () => Object.keys(values).length > 0 && Object.keys(errors).length === 0;
        setLineActive(isFullActive);
    }, [errors, values ]);

    return (
        <>
            <div className="create_product__title">
                <h1>{t('Create a new product')}</h1>
                {/*<span className="title_info">Коротка інформація про те, що зараз буде відбуватися, для чого нам інформація і який проофіт від цього користувачеві. </span>*/}
                <span className="title_necessarily">{t('Required fields are marked *')}</span>
            </div>
            <div className="progress_bar">
                <div className="bar_high__items">
                    <div className={"number" + isActive(['title', 'description'])}>1</div>
                    <div className={`line ${lineActive ? "active" : ""}`} />
                    <div className={"number" + isActive(['brand', 'condition'])}>2</div>
                    <div className={`line ${lineActive ? "active" : ""}`} />
                    <div className={"number" + isActive(['price_current', 'price_origin'])}>3</div>
                    <div className={`line ${lineActive ? "active" : ""}`} />
                    <div className={"number" + isActive(['photos'])}>4</div>
                    <div className={`line ${lineActive ? "active" : ""}`} />
                    <div className={"number" + isActive(['phone'])}>5</div>
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
