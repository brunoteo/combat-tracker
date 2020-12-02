import React, {createContext, useState, useContext} from "react";
// import {initialCards} from "../data/stubData";

const PlayerCardContext = createContext();
export const usePlayerCards = () => useContext(PlayerCardContext);

export default function PlayerCardProvider({children}) {
    const [playerCards, setPlayerCards] = useState(initialCards);

    const calculateHp = (currentHp: numeric, amountToAdd: numeric, maxHp: numeric) => Math.max(Math.min(currentHp + parseInt(amountToAdd), maxHp), 0);

    const changeHp = (name, amountToAdd) => {
        setPlayerCards(
            playerCards.map(
                playerCard => (playerCard.name === name) ?
                    {
                        ...playerCard,
                        currentHp: calculateHp(playerCard.currentHp, amountToAdd, playerCard.maxHp),
                        isAlive: calculateHp(playerCard.currentHp, amountToAdd, playerCard.maxHp) > 0 //TODO fa cagare il dover richiamare calculateHP
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

    const addPlayerCard = (name, hp, armor, initiative) => {
        setPlayerCards(
            [...playerCards,
                {
                    "name": name,
                    "maxHp": hp,
                    "currentHp": hp,
                    "armor": armor,
                    "initiative": initiative
                }
            ].sort((a, b) => (parseInt(a.initiative) < parseInt(b.initiative)) ? 1 : -1)
        );
    };

    const shiftPlayerCards = () => setPlayerCards(playerCards.slice(1).concat(playerCards.slice(0,1)))

    return (
        <PlayerCardContext.Provider value={{playerCards, changeHp, removePlayerCard, addPlayerCard, shiftPlayerCards}}>
            {children}
        </PlayerCardContext.Provider>
    );
}