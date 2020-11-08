import React, {useRef, useState} from "react";
import PgCard from "./PgCard";
import Grid from "@material-ui/core/Grid";
import AddPgDialog from "./AddPgDialog";

const initialCards = [
    {
        "name": "Player 1",
        "maxHp": 10,
        "currentHp": 10,
        "armor": 14,
        "initiative": 15
    },
    {
        "name": "Player 2",
        "maxHp": 20,
        "currentHp": 10,
        "armor": 18,
        "initiative": 14
    },
    {
        "name": "Enemy 1",
        "maxHp": 12,
        "currentHp": 10,
        "armor": 11,
        "initiative": 10
    },
    {
        "name": "Enemy 2",
        "maxHp": 12,
        "currentHp": 10,
        "armor": 11,
        "initiative": 10
    }
]

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
                    "initiative": initiative
                }
            ]);

        nameRef.current.value = ""
        hpRef.current.value = null
        armorRef.current.value = null
        initiativeRef.current.value = null
    };

    const removePg = name => setCards(cards.filter(card => card.name !== name));

    const handleHp = e =>
    {
        e.preventDefault();

        const currentCard = cards.find(card => card.name === hpNameRef.current.value)
        const currentHp = (Math.abs(parseInt(changeHpRef.current.value)) <= currentCard.currentHp) ? currentCard.currentHp + parseInt(changeHpRef.current.value) : 0
        const editedCard = {...currentCard, currentHp}
        const editedCards = cards.map(card => card.name === editedCard.name ? editedCard : card)

        setCards(editedCards);
    }

    return (
        <main>
            <Grid>
                <AddPgDialog addPg={addPg} nameRef={nameRef} hpRef={hpRef} armorRef={armorRef} initiativeRef={initiativeRef}/>
            </Grid>
            {cards.map(card => <PgCard key={card.name}
                                       name={card.name} maxHp={card.maxHp} currentHp={card.currentHp} armor={card.armor} initiative={card.initiative}
                                       removePg={removePg} handleHp={handleHp} changeHpRef={changeHpRef} hpNameRef={hpNameRef}
            />)}
        </main>
    );
}