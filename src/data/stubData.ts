import { Player } from "../shared/model/Player";

export const initialCards: Player[] = [
  {
    id: "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
    name: "Player 2",
    maxHp: 20,
    currentHp: 10,
    armor: 18,
    initiative: 18,
  },
  {
    id: "83c7ba2f-7392-4d7d-9e23-35adbe186046",
    name: "Player 1",
    maxHp: 10,
    currentHp: 10,
    armor: 14,
    initiative: 15,
  },
  {
    id: "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
    name: "Enemy 1",
    maxHp: 12,
    currentHp: 10,
    armor: 11,
    initiative: 10,
  },
  {
    id: "a11e3995-b0bd-4d58-8c48-5e49ae7f7f24",
    name: "Enemy 2",
    maxHp: 12,
    currentHp: 0,
    armor: 11,
    initiative: 10,
  },
];
