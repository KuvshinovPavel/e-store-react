import {FC} from "react";
import {NavLink} from "react-router-dom";

export const NoAuth:FC=()=>{
    return (
        <>
            <div className={'profile__options'}>
                <NavLink to={'/login'}>Login</NavLink>
                <br/>
                <NavLink to={'/register'}>Register</NavLink>
            </div>
        </>
    )
}