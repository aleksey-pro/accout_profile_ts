import React, { useEffect, useContext } from 'react';
import { UserContext } from '../reducer';
import { initUser } from '../api';
import Tabs from './../components/Tabs';
import Tab from './../components/Tabs/Tab';

import About from './ProfileBlocks/About/index';
import Ads from '../components/ProfileBlocks/Ads';
import Testimonials from '../components/ProfileBlocks/Testimonials';
import Favorites from '../components/ProfileBlocks/Favorites';
import AccountHeader from '../components/AccountHeader';
import AccountInfo from '../components/AccountInfo';
import MostViewed from '../components/MostViewed';
import MobileApp from '../components/MobileApp';

export default function Profile () {
    const { dispatch } = useContext(UserContext);
    
    useEffect(() => {
        initUser().then(data => dispatch(initUser(data)));
    }, []);

    return <div className="my-account">
        <AccountHeader />
        <AccountInfo /> 
        <Tabs activeTab={0} >
            <Tab label='Обо мне' id="tab1">
                <About />
            </Tab>
            <Tab label='Мои объявления' id="tab2">
                <Ads />
            </Tab>
            <Tab label='Отзывы' id="tab3">
                <Testimonials />
            </Tab>
            <Tab label='Избранное' id="tab4">
                <Favorites />
            </Tab>
        </Tabs>
        <MostViewed />        
        <MobileApp />       
    </div>
}

