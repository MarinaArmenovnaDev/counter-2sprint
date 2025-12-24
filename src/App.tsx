import './App.css'
import {Counter} from "./components/Counter/Counter.tsx";
import {Settings} from "./components/Settings/Settings.tsx";
import {type ChangeEvent, useState} from "react";

function App() {

    const loadInitialValues = () => {
        const savedSettings = localStorage.getItem('counterSettings');
        if (savedSettings) {
            const {maxValue, minValue} = JSON.parse(savedSettings);
            return { max: maxValue, min: minValue };
        }
        return { max: 5, min: 0 };
    };

    const initialValues = loadInitialValues();

    const [count, setCount] = useState(initialValues.min);
    const [max, setMax] = useState(initialValues.max);
    const [min, setMin] = useState(initialValues.min);
    const [changeSettings, setChangeSettings] = useState<boolean>(false);


    const setHandler = () => {
        if (validValue) {
            localStorage.setItem('counterSettings', JSON.stringify({
                minValue: min,
                maxValue: max
            }));
            setCount(min)
        }
        setChangeSettings(false)
    }


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(e.currentTarget.value))
        setChangeSettings(true)
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMin(Number(e.currentTarget.value))
        setChangeSettings(true)
    }


    const validValue = min >= 0 && max >= 1 && max > min

    return (
        <div className="app">
            <Settings
                max={max}
                min={min}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
                setHandler={setHandler}
                validValue={validValue}
            />
            <Counter count={count}
                     setCount={setCount}
                     maxValue={max}
                     min={min}
                     validValue={validValue}
                     changeSettings={changeSettings}
            />

        </div>
    )
}

export default App
