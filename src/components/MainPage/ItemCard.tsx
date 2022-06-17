import {FC} from 'react';
import {ProductProps} from "../../types/ProductProps";



export const ItemCard: FC<ProductProps>= (props) => {
    const {title, description, imgUrl, price, id, categoryId} =props;
    return (
        <div className="shop-card">
            <div className="title">
                {props.title}
            </div>
            <div className="desc">
                {props.description}
            </div>
            <div className="slider">
                <figure data-color="#E24938, #A30F22">
                    <img alt={''} src={props.imgUrl}/>
                </figure>

            </div>

            <div className="cta">
                <div className="price">${props.price}</div>
                <button className="btn">Add to cart<span className="bg"></span></button>
            </div>
        </div>
    )
}

