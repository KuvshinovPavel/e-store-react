import {FC} from "react";
import {Customer} from "../../redux/types/payloadDto/customer";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/actions/authAction";

interface ProfileOptionsProps {
    customer: Customer
}

export const ProfileOptions:FC<ProfileOptionsProps>=(props)=>{
    const {customer} = props
    const dispatch = useDispatch<any>()
    const handleClick = ()=>{
        dispatch(logout())
    }
    return(
        <div className={'profile__options'}>
            <div>{`${customer.firstname} ${customer.lastname}`}</div>
            <div>My purchases</div>
            <div>Settings</div>
            <button onClick={()=>handleClick()}>Logout</button>
        </div>
    )
}