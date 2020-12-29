import {combineReducers, configureStore, createAction, createReducer} from "@reduxjs/toolkit";
import {initialCards} from "../data/stubData";
import { Player } from "../shared/model/Player";

type ChangeStatData = {
    id: string,
    amountToAdd: number
}

type AddConditionData = {
    id: string,
    conditionToAdd: string
}

type RemoveConditionData = {
    id: string,
    conditionToRemove: string
}

const calculateHp = (currentHp: number, amountToAdd: number, maxHp: number) => Math.max(Math.min(currentHp + amountToAdd, maxHp), 0)

////////////// COUNTER //////////////
export const removePlayer = createAction<string>("REMOVE_PLAYER")
export const shiftPlayers = createAction<void>("SHIFT_PLAYER")
export const addPlayer = createAction<Player>("ADD_PLAYER")
export const changeHp = createAction<ChangeStatData>("CHANGE_HP")
export const changeMaxHp = createAction<ChangeStatData>("CHANGE_MAX_HP")
export const changeArmor = createAction<ChangeStatData>("CHANGE_ARMOR")
export const changeInitiative = createAction<ChangeStatData>("CHANGE_INITIATIVE")
export const addCondition = createAction<AddConditionData>("ADD_CONDITION")
export const removeCondition = createAction<RemoveConditionData>("REMOVE_CONDITION")

export const playersReducer = createReducer(initialCards, {
    [removePlayer.type]: (players, action) => players.filter(player => player.id !== action.payload),
    [shiftPlayers.type]: (players) => players.slice(1).concat(players.slice(0,1)),
    [addPlayer.type]: (players, action) => [...players, action.payload].sort((a, b) => (a.initiative < b.initiative) ? 1 : -1),
    [changeHp.type]: (players, action) => players.map(
        player => (player.id === action.payload.id) ? {
                ...player,
                currentHp: calculateHp(player.currentHp, action.payload.amountToAdd, player.maxHp)
            } :
            player
    ),
    [changeMaxHp.type]: (players, action) => players.map(
        player => (player.id === action.payload.id) ? {
                ...player,
                maxHp: Math.max(player.maxHp + action.payload.amountToAdd, 0)
            } :
            player
    ),
    [changeArmor.type]: (players, action) => players.map(
        playerCard => (playerCard.id === action.payload.id) ? {
            ...playerCard,
            armor: Math.max(playerCard.armor + action.payload.amountToAdd, 0)
        } :
        playerCard
    ),
    [changeInitiative.type]: (players, action) => players.map(
        playerCard => (playerCard.id === action.payload.id) ? {
            ...playerCard,
            initiative: Math.max(playerCard.initiative + action.payload.amountToAdd, 0)
        } :
        playerCard
    ),
    [addCondition.type]: (players, action) => players.map(
        playerCard => (playerCard.id === action.payload.id) ? {
            ...playerCard,
            conditionNames: [...playerCard.conditionNames, action.payload.conditionToAdd]
        } :
        playerCard
    ),
    [removeCondition.type]: (players, action) => players.map(
        playerCard => (playerCard.id === action.payload.id) ? {
            ...playerCard,
            conditionNames: playerCard.conditionNames.filter(c => c !== action.payload.conditionToRemove)
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