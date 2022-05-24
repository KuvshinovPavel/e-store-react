import React, {useState} from 'react';

import './styles/App.css';
import {Header} from './components/Header/Header';
import {MainPage} from "./components/MainPage/MainPage";


function App() {

    return (
        <div className='main'>
            <Header/>
            <MainPage/>
        </div>
    );
}

export default App;
