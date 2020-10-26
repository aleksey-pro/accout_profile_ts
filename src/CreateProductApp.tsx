import React from 'react';
import {Provider} from "react-redux";
import './scss/create-page.scss';
import store from "./store";
import CreateProductForm from "./components/CreateProductForm";
import {Header} from "./components/Header";

const CreateProductApp: React.FC = () => {
    return <Provider store={store}>
        <section className="create_product">
            <div className="container">
                <CreateProductForm />
            </div>
        </section>
    </Provider>
}

export default CreateProductApp;