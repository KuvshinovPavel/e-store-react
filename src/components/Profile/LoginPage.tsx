import {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {login} from "../../redux/actions/authAction";


export const LoginPage: FC = () => {
    const dispatch = useDispatch<any>();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onChangeEmail = (value: string) => {
        setEmail(value)
    }
    const onChangePassword = (value: string) => {
        setPassword(value)
    }

    const submitLoginForm=()=>{
        dispatch(login(email, password));
    }
    return (
        <div>
            <div>
                <input value={email} onChange={(e)=>onChangeEmail(e.target.value)} type={'email'}/>
                <input value={password} onChange={(e)=>onChangePassword(e.target.value)} type={'password'}/>
                <button onClick={()=>submitLoginForm()}>Login</button>
            </div>
        </div>
    )
}