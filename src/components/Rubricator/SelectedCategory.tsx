import * as React from 'react';

type PropsType = {
    list: { 'slug': string, 'title': string }[]
    isSuggested?: boolean
    goBackFunction: (slug: string) => void
};

export const SelectedCategory: React.FC<PropsType> = (props) => {
    const listLength = props.list.length;
    const selectedItems = props.list.map(
        (item, index) => {
            if (props.isSuggested) {
                return <button type={'button'} className="btn-light" disabled={(listLength === index + 1)}
                               key={index} onClick={() => {
                    props.goBackFunction(item.slug)
                }}>{item.title}</button>;
            } else {
                return <button type={'button'} className="btn-light" key={index}>{item.title}</button>;
            }
        }
    );
    return <>{selectedItems}</>;
}