import {FC, useState} from "react";
import '../../styles/category.css';

interface CategoryProps {
    id: string,
    name: string,
    subCategories: SubCategory[],
    selectedCategory: string,
    setSelectedCategory: Function
}

interface SubCategory {
    id: string,
    name: string,
    type: string
}

export const Category: FC<CategoryProps> = (props) => {
    const {id, name, subCategories, selectedCategory, setSelectedCategory} = props;


    const expandCategory = () => {


    }
    const minimizeCategory = (type: string) => {
        setSelectedCategory(type);

    }
    return (
        <div onClick={expandCategory} className="select">
            {name}
            <ul className='subcategories'>
                {subCategories.map(c =>
                    <li className={selectedCategory === c.type ? 'selected' : ''}
                        onClick={() => minimizeCategory(c.type)}>{c.name}</li>
                )}
            </ul>
        </div>
    )
}