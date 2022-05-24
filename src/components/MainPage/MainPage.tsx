import React, {FC, useState} from "react";
import {Category} from "./Category";
import {ItemCard} from "./ItemCard";
import {categories} from "../../redux/categories";
import {items} from "../../redux/items";

export const MainPage: FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('A');
    return (
        <div className={'main-wrapper'}>

            <div className={'categories'}>
                {categories.map(c =>
                    <Category
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        id={c.id}
                        subCategories={c.subCategories}
                        name={c.name}/>)}
            </div>

            <div className='items'>

                {
                    items.map(i =>
                        <ItemCard
                            imgSrc={i.imgSrc}
                            price={i.price}
                            title={i.title}
                            description={i.description}
                        />)}


            </div>
        </div>
    )
}