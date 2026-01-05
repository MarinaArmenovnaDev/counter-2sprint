import {createAction, createReducer} from "@reduxjs/toolkit";
import type {CounterState} from "../app/App.tsx";

const initState: CounterState = {
    min: 0,
    max: 5,
    count: 0,
    changeSettings: false,
    validValue: true
}

export const incrementAC = createAction("counter/incrementAC");
export const resetAC = createAction("counter/resetAC");
export const setMinAC = createAction<number>("counter/setMinAC");
export const setMaxAC = createAction<number>("counter/setMaxAC");
export const changeSettingsAC = createAction<boolean>("counter/changeSettingsAC");
export const setHandlerAC = createAction("counter/setHandlerAC");
export const setCountAC = createAction<number>("counter/setCountAC");


export const counterReducer = createReducer(initState, (builder) => {
    builder
        .addCase(incrementAC, (state) => {
            if (state.count < state.max) state.count += 1;
        })
        .addCase(resetAC, (state) => {
            state.count = state.min
        })
        .addCase(setMinAC, (state, action) => {
            state.min = action.payload
            state.validValue = state.min >= 0 && state.max >= 1 && state.max > state.min;
        })
        .addCase(setMaxAC, (state, action) => {
            state.max = action.payload
            state.validValue = state.min >= 0 && state.max >= 1 && state.max > state.min;
        })
        .addCase(changeSettingsAC, (state, action) => {
            state.changeSettings = action.payload
        })
        .addCase(setHandlerAC, (state) => {
            state.count = state.min
            state.changeSettings = false
        })
        .addCase(setCountAC, (state, action) => {
            state.count = action.payload
        })
})
