import {combineReducers, configureStore, createAction, createReducer} from "@reduxjs/toolkit";
import {initialCards} from "../data/stubData";
import { Player } from "../shared/model/Player";

type ChangeStatData = {
    name: string,
    amountToAdd: number
}

const calculateHp = (currentHp: number, amountToAdd: number, maxHp: number) => Math.max(Math.min(currentHp + amountToAdd, maxHp), 0)

////////////// COUNTER //////////////
export const removePlayer = createAction<string>("REMOVE_PLAYER")
export const shiftPlayers = createAction<void>("SHIFT_PLAYER")
export const addPlayer = createAction<Player>("ADD_PLAYER")
export const changeHp = createAction<ChangeStatData>("CHANGE_HP")
export const changeArmor = createAction<ChangeStatData>("CHANGE_ARMOR")
export const changeInitiative = createAction<ChangeStatData>("CHANGE_INITIATIVE")

export const playersReducer = createReducer(initialCards, {
    [removePlayer.type]: (players, action) => players.filter(player => player.name !== action.payload),
    [shiftPlayers.type]: (players) => players.slice(1).concat(players.slice(0,1)),
    [addPlayer.type]: (players, action) => [...players, action.payload].sort((a, b) => (a.initiative < b.initiative) ? 1 : -1),
    [changeHp.type]: (players, action) => players.map(
        player => (player.name === action.payload.name) ? {
                ...player,
                currentHp: calculateHp(player.currentHp, action.payload.amountToAdd, player.maxHp)
            } :
            player
    ),
    [changeArmor.type]: (players, action) => players.map(
        playerCard => (playerCard.name === action.payload.name) ? {
            ...playerCard,
            armor: Math.max(playerCard.armor + action.payload.amountToAdd, 0)
        } :
        playerCard
    ),
    [changeInitiative.type]: (players, action) => players.map(
        playerCard => (playerCard.name === action.payload.name) ? {
            ...playerCard,
            armor: Math.max(playerCard.armor + action.payload.amountToAdd, 0)
        } :
        playerCard
    ),
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