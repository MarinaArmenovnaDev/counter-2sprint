import {Button} from "../Button/Button.tsx";
import s from "./Counter.module.css"
import st from "./../Button/Button.module.css"
import {useDispatch} from "react-redux";
import {incrementAC, resetAC} from "../../model/counter-reducer.ts";

type Props = {
    count: number
    maxValue: number
    validValue: boolean
    changeSettings: boolean
}

export const Counter = ({count, maxValue, validValue, changeSettings}: Props) => {
    const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(incrementAC())
    }

    const resetHandler = () => {
        dispatch(resetAC())
    }

    return (
        <div className={"mainContainer"}>
            <div className={`${s.counterValue} ${count === maxValue ? s.maxValue : ''}`}>
                {!validValue
                    ? (<span className={s.textError}>Invalid Value!</span>)
                    : changeSettings
                        ? <span className={s.text}>Enter Value and press "set"</span>
                        : count}

            </div>
            <div className={"buttonContainer"}>
                <Button onClick={incHandler} className={st.button}
                        disabled={count === maxValue || changeSettings}>inc</Button>
                <Button onClick={resetHandler} className={st.button}
                        disabled={changeSettings || count < maxValue}>reset</Button>
            </div>
        </div>
    )
}
