import React, {FC,} from "react";
import '../../styles/category.css';
import classNames from "classnames";
import {CategoryProps} from "../../types/category/CategoryProps";
import {Subcategory} from "./Subcategory";

//TODO TEST DATA


const Category: FC<CategoryProps> = (props) => {
    const {data,} = props;
//selectedCategory, setSelectedCategory, type

    // const expandCategory = () => {
    //
    //
    // }
    // const selectCategory = (id: number) => {
    //     setSelectedCategory(id);
    //
    // }

    return (
        <div>
            <ul>
                {data.map((c) =>  <Subcategory data={c}/>  )}
            </ul>
        </div>
    )
}

export default React.memo(Category)