import {Button} from "../Button/Button.tsx";
import s from "./Counter.module.css"
import st from "./../Button/Button.module.css"

type Props = {
    count: number
    setCount: (count: number) => void
    maxValue: number
    min: number
    validValue: boolean
    changeSettings: boolean
}

export const Counter = ({count, setCount, maxValue, min, validValue, changeSettings}: Props) => {


    const incHandler = () => {
        if (count < maxValue) setCount(count + 1);
    }

    const resetHandler = () => {
        setCount(min);
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
