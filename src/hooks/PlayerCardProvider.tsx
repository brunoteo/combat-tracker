import React, {createContext, useState, useContext} from "react";
import { Player } from "../shared/Player";
import {initialCards} from "../data/stubData";

type PlayerCardsContextType = {
    playerCards: Array<Player>
    changeHp: (name: string, amountToAdd: number) => void
    removePlayerCard: (name: string) => void
    addPlayerCard: (name: string, hp: number, armor: number, initiative: number) => void
    shiftPlayerCards: () => void
}

const emptyPlayerCardsContextType = {
    playerCards: new Array<Player>(),
    changeHp: (name: string, amountToAdd: number) => {},
    removePlayerCard: (name: string) => {},
    addPlayerCard: (name: string, hp: number, armor: number, initiative: number) => {},
    shiftPlayerCards: () => {}
}

const PlayerCardContext = createContext<PlayerCardsContextType>(emptyPlayerCardsContextType);
export const usePlayerCards = () => useContext(PlayerCardContext);

export const PlayerCardProvider: React.FC = ({children}) => {
    const [playerCards, setPlayerCards] = useState<Array<Player>>(initialCards);

    const calculateHp = (currentHp: number, amountToAdd: number, maxHp: number) => Math.max(Math.min(currentHp + amountToAdd, maxHp), 0);

    const changeHp = (name: string, amountToAdd: number) => {
        setPlayerCards(
            playerCards.map(
                playerCard => (playerCard.name === name) ?
                    {
                        ...playerCard,
                        currentHp: calculateHp(playerCard.currentHp, amountToAdd, playerCard.maxHp)
                    } :
                    playerCard
            )
        );
    }

    const removePlayerCard = (name: string) => {
        setPlayerCards(
            playerCards.filter(playerCard => playerCard.name !== name)
        )
    }

    const addPlayerCard = (name: string, hp: number, armor: number, initiative: number) => {
        setPlayerCards(
            [
                ...playerCards,
                {name: name, maxHp: hp, currentHp: hp, armor: armor, initiative: initiative, isCurrentTurn: false}
            ].sort((a, b) => (a.initiative < b.initiative) ? 1 : -1)
        );
    };

    const shiftPlayerCards = () => setPlayerCards(playerCards.slice(1).concat(playerCards.slice(0,1)))

    return (
        <PlayerCardContext.Provider value={{playerCards, changeHp, removePlayerCard, addPlayerCard, shiftPlayerCards}}>
            {children}
        </PlayerCardContext.Provider>
    );
}