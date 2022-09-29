import React, {useState} from 'react';

import './styles/App.css';
import {Header} from './components/Header/Header';
import {MainPage} from "./components/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./components/Cart/Cart";
import {Profile} from "./components/Profile/Profile";
import {Product} from "./components/ProductPage/Product";


function App() {

    return (
        <div className='main'>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route
                    path={"/product/:id"}
                    element={
                        <Product/>
                    }/>
            </Routes>
        </div>
    );
}

export default App;
