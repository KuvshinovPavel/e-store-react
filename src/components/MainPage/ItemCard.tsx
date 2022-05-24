import {FC} from 'react';

interface ItemCardProps {
    title: string,
    description: string,
    imgSrc:string,
    price:number
}

export const ItemCard: FC<ItemCardProps>= (props: ItemCardProps) => {
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
                    <img alt={''} src={props.imgSrc}/>
                </figure>

            </div>

            <div className="cta">
                <div className="price">${props.price}</div>
                <button className="btn">Add to cart<span className="bg"></span></button>
            </div>
        </div>
    )
}

