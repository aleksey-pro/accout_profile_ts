import React from 'react';
import ProfileForm from './ProfileForm';

export default function About () {
    return  <div className="accordion_item">
    <h3 className="tab_accordion">Обо мне</h3>
    <div id="tab1" className="tab_content">
        <div className="container">
            <div className="about-container">
                <ul className="tab-nav">
                    {/* <li><a href="/" className="nav-item active">Информация</a></li> */}
                    {/* <li><a href="/" className="nav-item">Персонализация</a></li> */}
                </ul>
                <ProfileForm />
            </div>
        </div>
    </div>
</div>
}
