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

        let currentHp = parseInt(currentCard.currentHp) + parseInt(changeHpRef.current.value)

        if (currentHp > parseInt(currentCard.maxHp)) {
            currentHp = parseInt(currentCard.maxHp)
        } else if (currentHp < 0) {
            currentHp = 0
        }

        const status = (currentHp > 0) ? "alive" : "dead"
        const editedCard = {...currentCard, currentHp, status}

        const editedCards = cards.map(card => card.name === editedCard.name ? editedCard : card)

        setCards(editedCards)
    }

    const nextTurn = () => {
        let cardList = cards
        cardList[0].isCurrentTurn = false

        const orderedCards = cardList.concat(cardList.splice(0, 1))

        orderedCards[0].isCurrentTurn = true

        setCards(orderedCards)
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