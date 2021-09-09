/**
 * @author: alexandercds
 * @description: 
 * @date: 08/septiembre/2021 
**/
import { useEffect, useState } from 'react';
import './assets/scss/App.scss';
import Image from './components/Image';
import InputWithButton from './components/InputWithButton';
import Paragraph from './components/Paragraph';
import Title from './components/Title';
import image from './assets/images/hero-desktop.jpg';
import logo from './assets/svgs/logo.svg';

const App = (props) => { 
    return (
        <section className="section">
            <div className="col left"> 
                <div className="col-content">
                    <Image image={logo}/>
                    <Title>
                        We're coming soon
                    </Title>
                    <Paragraph>
                        Hello fellow shoppers! We're currently building our new 
                        fashion store. Add your email below to stay up-to-date with
                        announcements and our launch deals.
                    </Paragraph>
                    <InputWithButton  
                        name="email"  
                        required={true} 
                        placeholder="Email Address" />
                </div>
            </div>
            <div className="col right">
                <Image image={image}/>
            </div> 
        </section>
    );
 }
 
 export default App;
 