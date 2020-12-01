import React from "react";
import PgCard from "./PgCard";
import NextTurnButton from "./buttons/NextTurnButton";
import { usePlayerCards } from "../hooks/PlayerCardProvider";
import AddPgModal from "./modal/AddPgModal";

export default function PgCardList() {
    const {playerCards} = usePlayerCards();

    return (
        <main>
            <AddPgModal />
            <NextTurnButton />
            {playerCards
                .map(playerCard => <PgCard key={playerCard.name} {...playerCard}/>)}
        </main>
    );
}