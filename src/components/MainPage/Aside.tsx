import React, {FC, useEffect, useState} from "react";

import Category from "./Category";
import axios from "axios";
import {CategoryProps} from "../../types/category/CategoryProps";
import {useDispatch} from "react-redux";
import {fetchProductsByCategory} from "../../redux/actions/productsAction";
import {CategoryElement} from "../../types/category/CategoryElement";

export const testData =[
    {
        "id": 1,
        "categoryName": "Мужское",
        "parentId": null,
        "subCategories": [
            {
                "id": 4,
                "categoryName": "Мужская обувь",
                "parentId": 1,
                "subCategories": []
            }
        ]
    },
    {
        "id": 2,
        "categoryName": "Женское",
        "parentId": null,
        "subCategories": [
            {
                "id": 5,
                "categoryName": "Женская обувь",
                "parentId": 2,
                "subCategories": []
            }
        ]
    },
    {
        "id": 3,
        "categoryName": "Детям",
        "parentId": null,
        "subCategories": [
            {
                "id": 6,
                "categoryName": "Детская обувь",
                "parentId": 3,
                "subCategories": []
            },
            {
                "id": 7,
                "categoryName": "Детское порно",
                "parentId": 3,
                "subCategories": []
            }
        ]
    }
]

export const Aside: FC = (props) => {
    const [selectedCategory, setSelectedCategory] = useState<number>(1);

    const [categories, setCategories] = useState<CategoryElement[]>([]);

    const dispatch = useDispatch<any>();

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(
                (response) => {
                    setCategories(response.data);

                });

    }, [])

    useEffect(()=>{
dispatch(fetchProductsByCategory(selectedCategory))
        },
        [selectedCategory])

    return (<div className={'aside'}>

            <div className={'categories'}>

                <Category data={categories}/>
                {/*<Category data={testData}/>*/}


            </div>
        </div>
    )
}