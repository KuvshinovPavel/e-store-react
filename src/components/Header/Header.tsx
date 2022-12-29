import {FC, useState} from 'react';
import {HeaderCart} from './HeaderCart';
import {SearchBar} from './SearchBar';
import {HeaderAvatar} from "./HeaderAvatar";
import {ProfileOptions} from "./ProfileOptions";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {NoAuth} from "./NoAuth";
import {Customer} from "../../redux/types/payloadDto/customer";


interface HeaderProps {
isAuth:boolean,
    customer: Customer
}

export const Header: FC<HeaderProps> = (props) => {

    const {isAuth, customer} =props;

    const [visiblePopup, setVisiblePopup] = useState(false);
    return (
        <div className='header'>
            <SearchBar/>
            <HeaderCart/>
            <HeaderAvatar
                visiblePopup={visiblePopup}
                setVisiblePopup={setVisiblePopup}
            />

            {visiblePopup &&
                (isAuth?<ProfileOptions customer={customer}/>:<NoAuth/>)
            }
        </div>)
}