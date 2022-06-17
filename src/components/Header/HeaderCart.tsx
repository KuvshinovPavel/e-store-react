import {FC} from 'react';
import {NavLink} from "react-router-dom";
import {ReactComponent as CartSVG} from '../../assets/cart.svg';

interface HeaderCartProps {

}

export const HeaderCart: FC<HeaderCartProps> = (props) => {
    return (
        <div className='header__cart'>
            <NavLink to={"/cart"}><CartSVG/></NavLink>

        </div>
    );
}