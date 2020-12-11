import React, { FC } from "react"
import {useSelector} from "react-redux"
import { PgCard } from "./component/card/PgCard"
import { NextTurnButton } from "./component/button/NextTurnButton"
import { AddPgModal } from "./component/modal/AddPgModal"
import {RootState} from "../../store/store";

export const BattlePage: FC = () => {
  const players = useSelector((state: RootState) => state.players)
  const activePlayer = players[0]?.name

  return (
    <main>
      <AddPgModal />
      <NextTurnButton />
      {players.map((player) => (
        <PgCard
          key={player.name}
          {...player}
          isCurrentTurn={player.name === activePlayer}
        />
      ))}
    </main>
  );
};
