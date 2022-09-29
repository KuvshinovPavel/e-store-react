import {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import {ReactComponent as Search} from '../../assets/search.svg';
import {useDispatch} from "react-redux";
import {findProducts} from "../../redux/actions/productsAction";


interface SearchBarProps {

}

export const SearchBar: FC<SearchBarProps> = (props) => {
const dispatch=useDispatch<any>()
    const [searchString, setSearchString] = useState('')

    const changeSearchString=(e: ChangeEvent<HTMLInputElement>)=>{
    setSearchString(e.target.value)
    }

    const submitSearch=()=>{
dispatch(findProducts(searchString))
    }

    return (
        <div className="wrap">
            <div className="search">
                <input type="text" value={searchString} onChange={changeSearchString} className="searchTerm" placeholder="What are you looking for?" />
                <button onClick={submitSearch} type="submit" className="searchButton">
                    <Search/>
                </button>
            </div>
        </div>);
}