import React, { useState, useEffect, useContext, Suspense } from 'react';
import '../../styles/my_account.scss';
import { RouteComponentProps } from 'react-router-dom';

import { getUser } from '../../api';
import { initUser } from '../../reducer';
import { UserContext } from '../../store';
import Tabs from '../Tabs';
import Tab from '../Tabs/Tab';

import About from './Blocks/About/index';
import Products from './Blocks/Products';
import Reviews from './Blocks/Reviews';
import Favorites from './Blocks/Favorites';
import AccountHeader from './AccountHeader';
import AccountInfo from './AccountInfo';
import MostViewed from '../MostViewed';
import MobileApp from '../MobileApp';
import Modal from  '../../Modals';
import { withSuspense } from '../../utils/withSuspense';

const ChangeAvatar = React.lazy(() => import('../../Modals/ChangeAvatar'));
const SuspendedChangeAvatar= withSuspense(ChangeAvatar);


const Profile: React.FC<RouteComponentProps> = () => {
    const { dispatch } = useContext(UserContext);
    const [isModalOpen, setModalIsOpen] = useState<boolean>(false);
    
    // useEffect(() => {
    //     getUser().then(data => dispatch(initUser(data)));
    // }, []);
    
    return <div className="my-account">
        <AccountHeader />
        <AccountInfo setModalOpen={setModalIsOpen}/>
        <Tabs activeTab={0} >
            <Tab label='Обо мне' id="tab1">
                <About />
            </Tab>
            <Tab label='Мои объявления' id="tab2">
                <Products />
            </Tab>
            <Tab label='Отзывы' id="tab3">
                <Reviews />
            </Tab>
            <Tab label='Избранное' id="tab4">
                <Favorites />
            </Tab>
        </Tabs>
        <MostViewed />        
        <MobileApp />
        <Modal isModalOpen={isModalOpen}>
            <SuspendedChangeAvatar isModalOpen={isModalOpen} setModalIsOpen={setModalIsOpen}/>
        </Modal>
    </div>
}

export default Profile;

