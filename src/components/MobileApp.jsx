import React from 'react';

export default function MobileApp () {
    return <section className="mobile_app">
        <div className="container">
            <div className="app_container">
                <button type="button" className="icon_btn">
                    {/* <img src="../../img/mobile-app-icon.svg" alt="" /> */}
                </button>
                <div className="app_content">
                    <div className="content">
                        <h1 className="app_title">
                            Додайте Baby Bazaar на робочий стіл вашого телефону
                        </h1>
                        <span className="app_label">
                            Ви зможете користуватись сервісом, як повноцінним додатком
                        </span>
                        <a href="/" className="app_add">Додати</a>
                        <button type="button" className="app_close">Пропустити</button>
                    </div>                        
                </div>                    
            </div>                
        </div>
    </section>
}