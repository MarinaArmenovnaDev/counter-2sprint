import './App.css'
import {Counter} from "../components/Counter/Counter.tsx";
import {Settings} from "../components/Settings/Settings.tsx";
import {type ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "./store.ts";
import {changeSettingsAC, setHandlerAC, setMaxAC, setMinAC} from "../model/counter-reducer.ts";

export type CounterState = {
    count: number;
    min: number;
    max: number;
    changeSettings: boolean;
    validValue: boolean;
}

function App() {
    const counter = useSelector<RootState, CounterState>(state => state.counter)
    const dispatch = useDispatch()

    const setHandler = () => {
       dispatch(setHandlerAC())
    }


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxAC(+e.currentTarget.value))
        dispatch(changeSettingsAC(true))
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {

        dispatch(setMinAC(+e.currentTarget.value))
        dispatch(changeSettingsAC(true))
    }

    return (
        <div className="app">
            <Settings
                max={counter.max}
                min={counter.min}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
                setHandler={setHandler}
                validValue={counter.validValue}
            />
            <Counter count={counter.count}
                     maxValue={counter.max}
                     validValue={counter.validValue}
                     changeSettings={counter.changeSettings}
            />

        </div>
    )
}

export default App
