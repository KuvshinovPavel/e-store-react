import React, {FC, } from "react";
import '../../styles/category.css';
import classNames from "classnames";
import {CategoryProps} from "../../types/CategoryProps";




 const Category: FC<CategoryProps> = (props) => {
    const {id, categoryName,  selectedCategory, setSelectedCategory, type } = props;


    const expandCategory = () => {


    }
    const selectCategory = (id: number) => {
        setSelectedCategory(id);

    }

    return (
        <div onClick={expandCategory} className='category'>
           <div
               onClick={() => selectCategory(id)}
               className={  classNames('name',{'selected':selectedCategory === id,'subcategory':selectedCategory!==id})}>
               {categoryName} </div>
        </div>
    )
}

export default React.memo(Category)