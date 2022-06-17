import {FC} from "react";

export const Filters: FC = () => {

    return (
        <div className={'filters'}>
            <button className={'submit_filters'}>Submit</button>
            <div className={'filters__title'}>Price</div>
            <div className={'filters__wrapper'}>

                <label htmlFor={'from'}>
                    <input placeholder={'from'} className={'filters__input'} type="number" id={'from'}/>
                </label>
                <label htmlFor={'to'}>
                    <input placeholder={'to'} className={'filters__input'} type="number" id={'to'}/>
                </label>
            </div>

        </div>
    )
}