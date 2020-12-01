import React, { createContext, useState, useContext } from "react";
import {initialCards} from "../data/stubData.js";

const PlayerCardContext = createContext();
export const usePlayerCards = () => useContext(PlayerCardContext);

export default function PlayerCardProvider({ children }) {
    const [playerCards, setPlayerCards] = useState(initialCards);

    const calculateHp = (currentHp, amountToAdd, maxHp) => Math.max(Math.min(currentHp + parseInt(amountToAdd), maxHp), 0);

    const changeHp = (name, amountToAdd) => {
        setPlayerCards(
            playerCards.map(
                playerCard => (playerCard.name === name) ?
                    {...playerCard, currentHp: calculateHp(playerCard.currentHp, amountToAdd, playerCard.maxHp)} :
                    playerCard
            )
        );
    }

    const removePlayerCard = (name) => {
        setPlayerCards(
            playerCards.filter(playerCard => playerCard.name !== name)
        )
    }

    const addPlayerCard = (name, hp, armor, initiative) => {
        setPlayerCards(
            [...playerCards,
                {
                    "name": name,
                    "maxHp": hp,
                    "currentHp": hp,
                    "armor": armor,
                    "initiative": initiative,
                    "status": "alive"
                }
            ].sort((a, b) => (parseInt(a.initiative) < parseInt(b.initiative)) ? 1 : -1)
        );
    };

    return (
        <PlayerCardContext.Provider value={{ playerCards, changeHp, removePlayerCard, addPlayerCard }}>
            {children}
        </PlayerCardContext.Provider>
    );
}