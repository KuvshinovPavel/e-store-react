import {FC, useState} from 'react';
import {HeaderCart} from './HeaderCart';
import {SearchBar} from './SearchBar';
import {HeaderAvatar} from "./HeaderAvatar";
import {ProfileOptions} from "./ProfileOptions";


interface HeaderProps {

}

export const Header: FC<HeaderProps> = () => {

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
                (<ProfileOptions/>)
            }
        </div>)
}