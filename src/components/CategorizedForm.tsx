import * as React from 'react';
import {CategorizedFormFieldsType, ProductType} from "../types/types";
import {SectionTitle} from "./Common/SectionTitle";
import {Select} from "./Common/FormElements/Select";
import {Text} from "./Common/FormElements/Text";
import {Checkbox} from "./Common/FormElements/Checkbox";
import {Foreshortening} from "./Photos/Foreshortening";
import {BrandAndCondition} from "./BrandAndCondition/BrandAndCondition";
import {CheckboxList} from "./Common/FormElements/CheckboxList";
import {Photos} from "./Photos/Photos";
import {useSelector} from "react-redux";
import {AppStateType} from "../store";
import {SizeList} from "./Common/FormElements/SizeList";
import {ColorList} from "./Common/FormElements/ColorList";
import {FieldArray} from "formik";
import {useTranslation} from "react-i18next";
type PropsType = {
    product: ProductType
}

export const CategorizedForm: React.FC<PropsType> = (props) => {
    const { t } = useTranslation();

    let product = props.product;
    const fields: CategorizedFormFieldsType = useSelector((state: AppStateType) => state.categorizedForm.categorizedFormFields);

    let counter = 4;
    if (fields) {
        return (
            <>
                <section className="container create">
                    <SectionTitle counter={counter++} title={t('Select brand and condition')}/>
                    <BrandAndCondition categorizedFormFields={fields} product={product}/>
                </section>
                {fields.photos &&
                <section className="container create">
                    <Foreshortening/>
                    <Photos/>
                </section>
                }
                {fields.color &&
                <section className="container create">
                    <SectionTitle counter={counter++} title={t('Choose color')}/>
                    <div className="colors-list mobile-hide mobile-toggle">
                        <ColorList settings={fields.color} value={product.color}/>
                    </div>
                </section>
                }
                {fields.year &&
                <section className="container create size">
                    <SectionTitle counter={counter++} title={t('Choose age')}/>
                    <div className="size-list mobile-toggle">
                        <SizeList settings={fields.year} value={product.year}/>
                    </div>
                </section>
                }
                {fields.height &&
                <section className="container create size">
                    <SectionTitle counter={counter++} title={t('Choose height')}/>
                    <div className="size-list mobile-toggle">
                        <SizeList settings={fields.height} value={product.height}/>
                    </div>
                </section>
                }
                {fields.size &&
                <section className="container create size">
                    <SectionTitle counter={counter++} title={t('Choose size')}/>
                    <div className="size-list mobile-toggle">
                        <SizeList settings={fields.size} value={product.size}/>
                    </div>
                </section>
                }
                {fields && fields.filters && fields.filters.items &&
                <section className="container create size">
                    <SectionTitle counter={counter++} title={t('Additional information')}/>
                    <div className="inputs-block mobile-hide mobile-toggle">
                        <FieldArray name="filters">
                            {() => fields.filters.items.map((item: any, index: number) => {
                                let className = 'left';
                                if ((index + 1) % 3 === 0) {
                                    className = 'right';
                                } else if ((index + 1) % 2 === 0) {
                                    className = 'center';
                                }
                                let value = product.filters?.filter(el => el.key === item.attributes.name).shift()?.value;
                                if (item.type === 2) {
                                    return <div key={index} className={className}><Select settings={item} value={value}/></div>;
                                } else if (item.type === 4) {
                                    return <div key={index} className={className}><CheckboxList settings={item} value={value}/></div>;
                                }
                                return;
                            })}
                        </FieldArray>
                    </div>
                </section>
                }
                <section className="container create">
                    <SectionTitle counter={counter} title={t('Price and terms of sale')}/>
                    <div className="panel price">
                        <div className="inputs-block">
                            <div className="inputs-label">
                                <Text settings={fields.price_current} value={product.price_current}/>
                                <Text settings={fields.price_origin} value={product.price_origin}/>
                            </div>
                            <div className="checkboxes-block">
                                <Checkbox settings={fields.is_bargain}/>
                                <Checkbox settings={fields.is_barter}/>
                            </div>
                        </div>
                        <div className="checkbox-present">
                            <Checkbox settings={fields.is_gift}/>
                        </div>
                    </div>
                </section>
                <section className="container create">
                    <SectionTitle counter={counter} title={t('Contact information')}/>
                    <div className="panel price">
                        <div className="inputs-block">
                            <div className="inputs-label">
                                <Text settings={fields.phone} value={product.phone}/>
                                <Checkbox settings={fields.show_phone}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container create">
                    <div className="submit-container">
                        <div className="btn-save">
                            <div className="save">
                                <button type="submit" id="product_save" name="save" className="btn-dark">
                                    {t('Add product')}
                                </button>
                            </div>
                            <div className="save-draft">
                                <button type="submit" id="product_saveDraft" name="saveDraft" className="btn-light">
                                    {t('Save as draft')}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    } else {
        return <></>;
    }
}
