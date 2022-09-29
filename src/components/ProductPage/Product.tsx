import {FC, useEffect} from "react";
import {ProductProps} from "../../types/ProductProps";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../../redux/actions/productsAction";
import {RootState} from "../../redux/store";
import '../../styles/product.css';

export const Product: FC = () => {
    const data: ProductProps = useSelector((data: RootState) => data.products.items);
    const {id} = useParams();
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(fetchProduct(Number(id)))
    }, []);
    return (
        <div>
            <div className="product_info">
                <div className="product__title">
                    <span>{data.title}</span>
                </div>

                <div className="product__image">
                    <img src={data.image} alt=""/>
                </div>

                <div className="product__price">
                    <div className="info">
                        <div className="gallery">
                            <img
                                src="https://funart.pro/src.php?src=https://funart.pro/uploads/posts/2021-07/thumbs/1626712416_21-funart-pro-p-chistokrovnie-britanskie-kotyata-zhivotnie-23.jpg"
                                alt=""/>
                            <img
                                src="https://funart.pro/src.php?src=https://funart.pro/uploads/posts/2021-07/thumbs/1626712416_21-funart-pro-p-chistokrovnie-britanskie-kotyata-zhivotnie-23.jpg"
                                alt=""/>
                            <img
                                src="https://funart.pro/src.php?src=https://funart.pro/uploads/posts/2021-07/thumbs/1626712416_21-funart-pro-p-chistokrovnie-britanskie-kotyata-zhivotnie-23.jpg"
                                alt=""/>

                        </div>
                    </div>
                    <div className="buy">
                        <div className="buy__price">{data.price}</div>
                        <button className="buy__button">Buy</button>
                    </div>
                </div>
            </div>

            <div className="extra">
                2
            </div>

        </div>
    )
}