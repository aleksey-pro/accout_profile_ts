import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../reducer';
import { initUser } from '../api';
import Tabs from './Tabs';
import Tab from './Tabs/Tab';

import About from './ProfileBlocks/About/index';
import Ads from './ProfileBlocks/Ads';
import Testimonials from './ProfileBlocks/Testimonials';
import Favorites from './ProfileBlocks/Favorites';
import AccountHeader from './AccountHeader';
import AccountInfo from './AccountInfo';
import MostViewed from './MostViewed';
import MobileApp from './MobileApp';
import Modal from '../Modals';
import ChangeAvatar from '../Modals/ChangeAvatar';

export default function Profile () {
    const { dispatch } = useContext(UserContext);
    const [isModalOpen, setModalIsOpen] = useState(false);
    console.log("🚀 ~ file: Profile.jsx ~ line 21 ~ Profile ~ isModalOpen", isModalOpen)

    
    useEffect(() => {
        initUser().then(data => dispatch(initUser(data)));
    }, []);
    
    return <div className="my-account">
        <AccountHeader />
        <AccountInfo setModalOpen={setModalIsOpen}/>
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
        <Modal isModalOpen={isModalOpen} setModalIsOpen={setModalIsOpen}>
            <ChangeAvatar />
        </Modal>
    </div>
}

