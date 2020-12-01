import React from "react";
import PgCard from "./PgCard";
import NextTurnButton from "./buttons/NextTurnButton";
import { usePlayerCards } from "../hooks/PlayerCardProvider";
import AddPgModal from "./modal/AddPgModal";

export default function PgCardList() {
    const {playerCards} = usePlayerCards();

    const nextTurn = () => {}
    //     let cardList = cards
    //     cardList[0].isCurrentTurn = false

    //     const orderedCards = cardList.concat(cardList.splice(0, 1))

    //     orderedCards[0].isCurrentTurn = true

    //     setCards(orderedCards)
    // }

    return (
        <main>
            <AddPgModal />
            <NextTurnButton nextTurn={nextTurn}/>
            {playerCards
                .map(playerCard => <PgCard key={playerCard.name} {...playerCard}/>)}
        </main>
    );
}