import { FC } from 'react';
import { HeaderCart } from './HeaderCart';
import { SearchBar } from './SearchBar';
import {HeaderAvatar} from "./HeaderAvatar";


interface HeaderProps {

}

export const Header: FC<HeaderProps> = () => {
    return (
        <div className='header'>
         <SearchBar/>
           <HeaderCart/>
            <HeaderAvatar/>
        </div>)
}