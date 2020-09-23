import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import CreateProductForm from "./components/CreateProductForm";

const CreateProductApp: React.FC = () => {
    return <Provider store={store}>
        <CreateProductForm />
    </Provider>
}

export default CreateProductApp;