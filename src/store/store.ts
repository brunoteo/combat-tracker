import {combineReducers, configureStore, createAction, createReducer} from "@reduxjs/toolkit";
import {initialCards} from "../data/stubData";
import { Player } from "../shared/model/Player";

////////////// COUNTER //////////////
export const removePlayer = createAction<string>("REMOVE_PLAYER")
export const shiftPlayers = createAction<void>("SHIFT_PLAYER")
export const addPlayer = createAction<Player>("ADD_PLAYER")

export const playersReducer = createReducer(initialCards, {
    [removePlayer.type]: (players, action) => players.filter(player => player.name !== action.payload),
    [shiftPlayers.type]: (players) => players.slice(1).concat(players.slice(0,1)),
    [addPlayer.type]: (players, action) => [...players, action.payload].sort((a, b) => (a.initiative < b.initiative) ? 1 : -1),
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