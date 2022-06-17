import React, {FC, useEffect, useState} from "react";
import {ItemCard} from "./ItemCard";
import {Aside} from "./Aside";
import {Filters} from "./Filters";
import {ProductProps} from "../../types/ProductProps";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../redux/actions/productsAction";
import {RootState} from "../../redux/store";

export const MainPage: FC = () => {
const dispatch = useDispatch<any>();

const products:ProductProps[]=useSelector((data:RootState)=>data.products.items)

    useEffect(()=>{
        dispatch(fetchProducts(null))
    },[] )
    return (
        <div className={'main-wrapper'}>
            <Aside />
            <div className='items'>
                {
                    products.map(i =>
                        <ItemCard
                            id={i.id}
                            key={`${i.id}_${i.title}_${i.price}_${i.description}`}
                            imgUrl={i.imgUrl}
                            price={i.price}
                            title={i.title}
                            description={i.description}
                            categoryId={i.categoryId}
                        />
                    )}
            </div>
            <Filters/>
        </div>
    )
}