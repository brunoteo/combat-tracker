import React, {useRef, useState} from "react";
import PgCard from "./PgCard";
import AddPgButton from "./buttons/AddPgButton";
import {initialCards} from "../data/stubData";
import NextTurnButton from "./buttons/NextTurnButton";

export default function PgCardList() {
    const [cards, setCards] = useState(initialCards);

    const nameRef = useRef();
    const hpRef = useRef();
    const armorRef = useRef();
    const initiativeRef = useRef();
    const changeHpRef = useRef();
    const hpNameRef = useRef();

    const addPg = e => {
        e.preventDefault();

        const name = nameRef.current.value;
        const hp = hpRef.current.value;
        const armor = armorRef.current.value;
        const initiative = initiativeRef.current.value;

        setCards(
            [...cards,
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

        nameRef.current.value = ""
        hpRef.current.value = null
        armorRef.current.value = null
        initiativeRef.current.value = null
    };

    const removePg = name => setCards(cards.filter(card => card.name !== name));

    const handleHp = e => {
        e.preventDefault()

        const currentCard = cards.find(card => card.name === hpNameRef.current.value)
        const currentHp = (Math.abs(parseInt(changeHpRef.current.value)) <= currentCard.maxHp) ? currentCard.currentHp + parseInt(changeHpRef.current.value) : 0
        const status = (currentHp > 0) ? "alive" : "dead"
        const withHpChanged = {...currentCard, currentHp}
        const editedCard = {...withHpChanged, status}
        const editedCards = cards.map(card => card.name === editedCard.name ? editedCard : card)

        setCards(editedCards)
    }

    const nextTurn = () => {
        let cardList = cards
        cardList[0].isCurrentTurn = false

        const moveCurrentToTheEnd = cardList.concat(cardList.splice(0, 1))

        moveCurrentToTheEnd[0].isCurrentTurn = true

        setCards(moveCurrentToTheEnd)
    }

    return (
        <main>
            <AddPgButton addPg={addPg}
                         nameRef={nameRef} hpRef={hpRef} armorRef={armorRef} initiativeRef={initiativeRef}/>
            <NextTurnButton nextTurn={nextTurn}/>
            {cards
                .map(card => <PgCard key={card.name}
                                     {...card}
                                     removePg={removePg} handleHp={handleHp}
                                     changeHpRef={changeHpRef} hpNameRef={hpNameRef}
                />)}
        </main>
    );
}