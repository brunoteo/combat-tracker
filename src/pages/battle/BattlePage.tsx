import React, { FC } from "react";
import { PgCard } from "./component/card/PgCard";
import { NextTurnButton } from "./component/button/NextTurnButton";
import { AddPgModal } from "./component/modal/AddPgModal";
import { usePlayerCards } from "./hooks/PlayerCardProvider";

export const BattlePage: FC = () => {
  const { playerCards, removePlayerCard } = usePlayerCards();

  return (
    <main>
      <AddPgModal />
      <NextTurnButton />
      {playerCards.map((playerCard) => (
        <PgCard
          key={playerCard.name}
          {...playerCard}
          removePlayerCard={removePlayerCard}
        />
      ))}
    </main>
  );
};
