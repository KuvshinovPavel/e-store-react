import React, {useState} from 'react';

import './styles/App.css';
import {Header} from './components/Header/Header';
import {MainPage} from "./components/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./components/Cart/Cart";
import {Profile} from "./components/Profile/Profile";
import {Product} from "./components/ProductPage/Product";
import {LoginPage} from "./components/Profile/LoginPage";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";
import {Customer} from "./redux/types/payloadDto/customer";


function App() {
    const isAuth: boolean = useSelector((data: RootState) => data.auth.isAuth);
    const customer: Customer  = useSelector((data: RootState) => data.auth.customer);

    return (
        <div className='main'>
            <Header isAuth={isAuth} customer={customer}/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route  path="/login" element={<LoginPage/>}/>
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
