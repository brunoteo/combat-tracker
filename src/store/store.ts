import {combineReducers, configureStore, createAction, createReducer} from "@reduxjs/toolkit";
import {Player} from "../shared/model/Player";
import {initialCards} from "../data/stubData";

////////////// COUNTER //////////////
export const removePlayer = createAction<string>("REMOVE_PLAYER")

export const playersReducer = createReducer(initialCards, {
    [removePlayer.type]: (players, action) => players.filter(player => player.name !== action.payload)
})

////////////// ROOT REDUCER //////////////
const rootReducer = combineReducers({
    players: playersReducer
})

////////////// STORE //////////////
export const store = configureStore({
    reducer: rootReducer
})
// Store type
export type RootState = ReturnType<typeof rootReducer>