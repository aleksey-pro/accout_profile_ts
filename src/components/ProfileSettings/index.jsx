import React from 'react';
import '../../styles/profile_custom.scss';

import Tabs from '../Tabs';
import Tab from '../Tabs/Tab';
import AccountHeader from './AccountHeader';
import Password from './Blocks/Password';
import Notificitaions from './Blocks/Notificitaions';

export default function ProfileSettings () {
    return <div className="my-account">
        <AccountHeader />
        <Tabs activeTab={0} >
            <Tab label='Пароль' id="tab1">
                <Password />
            </Tab>
            <Tab label='Настройка уведомлений' id="tab2">
                <Notificitaions />
            </Tab>
        </Tabs>
    </div>;
}