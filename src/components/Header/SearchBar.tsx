import { FC } from 'react';
import {ReactComponent as Search} from '../../assets/search.svg';

interface SearchBarProps {

}

export const SearchBar: FC<SearchBarProps> = (props) => {

    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" className="searchButton">
                    <Search/>
                </button>
            </div>
        </div>);
}