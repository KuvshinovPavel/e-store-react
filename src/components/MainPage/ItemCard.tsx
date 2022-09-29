import {FC} from 'react';
import {ProductProps} from "../../types/ProductProps";
import {Link} from "react-router-dom";



export const ItemCard: FC<ProductProps>= (props) => {
    const {title, description, image, price, id, categoryId} =props;
    return (
        <div className="shop-card">
            <div className="title">
              <Link style={{ textDecoration: 'none', color:"black" }} to={`product/${id}`}>
                {title}
              </Link>
            </div>
            <div className="desc">
                {description}
            </div>
            <div className="slider">
                <figure data-color="#E24938, #A30F22">
                    <img alt={''} src={image}/>
                </figure>

            </div>

            <div className="cta">
                <div className="price">${price}</div>
                <button className="btn">Add to cart<span className="bg"></span></button>
            </div>
        </div>
    )
}

