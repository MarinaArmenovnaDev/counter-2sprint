import s from "./Settings.module.css";
import {Button} from "../Button/Button.tsx";
import st from "../Button/Button.module.css";
import {type ChangeEvent} from "react";

type Props = {
    max: number
    min: number
    validValue: boolean
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    changeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    setHandler: () => void
}

export const Settings = ({max, min, validValue, changeMaxValue, changeMinValue, setHandler}: Props) => {


    return (
        <div className={"mainContainer"}>
            <div className={s.settingsValueContainer}>
                <div className={s.setting}>
                    <span>max value: </span>
                    <input type="number" value={max} onChange={changeMaxValue}
                           className={`${s.input} ${max <= min || max <= 0 ? s.errorInput : ""}`}/>
                </div>


                <div className={s.setting}>
                    <span>min value: </span>
                    <input type="number" value={min} onChange={changeMinValue}
                           className={`${s.input} ${min < 0 || min >= max ? s.errorInput : ""}`}/>
                </div>

            </div>
            <div className={"buttonContainer"}>
                <Button onClick={setHandler} className={st.button} disabled={!validValue}>set</Button>
            </div>
        </div>
    )
}
