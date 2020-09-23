import * as React from 'react';

interface SectionTitleProps {
    title: string
    counter: number
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
    return (
        <div className="create_product_header">
            <div className="title">
                <h2>{props.counter}. {props.title}</h2>
            </div>
        </div>
    );
};
