import React, { FC } from "react";
import {PgCard} from "./card/PgCard";
import {NextTurnButton} from "./buttons/NextTurnButton";
import { usePlayerCards } from "../hooks/PlayerCardProvider";
import {AddPgModal} from "./modal/AddPgModal";

export const PgCardList: FC = () => {
    const {playerCards, removePlayerCard} = usePlayerCards();

    return (
        <main>
            <AddPgModal />
            <NextTurnButton />
            {playerCards
                .map(playerCard => <PgCard key={playerCard.name} {...playerCard} removePlayerCard={removePlayerCard} />)}
        </main>
    );
}