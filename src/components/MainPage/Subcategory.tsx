import {FC, useState} from "react";
import {SubcategoryProps} from "../../types/category/SubcategoryProps";
import Category from "./Category";


export const Subcategory: FC<SubcategoryProps> = (props) => {
    const {data} = props;
    const [childVisible, setChildVisible] = useState<boolean>(true);
    const hasChild = !!data.subCategories;


    return (
        <li>
            <div>
                {hasChild && (
                    <div onClick={() => setChildVisible(!childVisible)}>
                        {data.categoryName}
                    </div>
                )}
            </div>

            {hasChild && childVisible && (
                <div className={childVisible ? 'active' : ''}>
                    <ul>
                        <Category data={data.subCategories}/>
                    </ul>
                </div>
            )}

        </li>
    )
}