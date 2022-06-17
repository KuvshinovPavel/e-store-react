import {FC} from "react";
import {ReactComponent as AvatarSVG} from '../../assets/avatar.svg';

interface HeaderAvatarProps {
    visiblePopup: boolean;
    setVisiblePopup: Function;
}

export const HeaderAvatar: FC<HeaderAvatarProps> = (props) => {
    const {visiblePopup, setVisiblePopup} = props;
    const handleClick = () => {
        setVisiblePopup(!visiblePopup)
    }
    return (
        <div onClick={handleClick} className={'header__avatar'}>
            <AvatarSVG/>
        </div>
    )
}