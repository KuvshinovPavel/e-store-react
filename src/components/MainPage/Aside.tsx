import React, {FC, useEffect, useState} from "react";

import Category from "./Category";
import axios from "axios";
import {CategoryProps} from "../../types/CategoryProps";
import {useDispatch} from "react-redux";
import {fetchProducts} from "../../redux/actions/productsAction";


export const Aside: FC = (props) => {
    const [selectedCategory, setSelectedCategory] = useState<number>(1);

    const [categories, setCategories] = useState<CategoryProps[]>([])

    const dispatch = useDispatch<any>();

    useEffect(() => {
        axios.get('http://localhost:3001/categories')
            .then(
                (response) => {
                    setCategories(response.data);

                });

    }, [])

    useEffect(()=>{
dispatch(fetchProducts(selectedCategory))
        },
        [selectedCategory])

    return (<div className={'aside'}>

            <div className={'categories'}>

                {
                    categories.map(c =>
                        <Category
                            key={c.id}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            type={c.type}
                            id={c.id}
                            name={c.name}/>)}
            </div>
        </div>
    )
}