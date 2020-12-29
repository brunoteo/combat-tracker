import {IconType} from "react-icons";
import {
    FaBed,
    FaDeaf,
    GiBlindfold,
    GiCharm, GiCrossedChains, GiDeadHead, GiFrozenBody,
    GiInvisible, GiPoisonBottle,
    GiRockGolem,
    GiWoodenPegleg, ImConfused, IoIosBody,
    RiGhost2Fill
} from "react-icons/all";

type ConditionsProps = {
    name: string,
    icon: IconType
}

export const conditions: ConditionsProps[] = [
    {
        name: "Blinded",
        icon: GiBlindfold
    },
    {
        name: "Charmed",
        icon: GiCharm
    },
    {
        name: "Deafened",
        icon: FaDeaf
    },
    {
        name: "Frightened",
        icon: RiGhost2Fill
    },
    {
        name: "Grappled",
        icon: GiWoodenPegleg
    },
    {
        name: "Incapacitated",
        icon: FaBed
    },
    {
        name: "Invisible",
        icon: GiInvisible
    },
    {
        name: "Paralyzed",
        icon: GiFrozenBody
    },
    {
        name: "Petrified",
        icon: GiRockGolem
    },
    {
        name: "Poisoned",
        icon: GiPoisonBottle
    },
    {
        name: "Prone",
        icon: IoIosBody
    },
    {
        name: "Restrained",
        icon: GiCrossedChains
    },
    {
        name: "Stunned",
        icon: ImConfused
    },
    {
        name: "Unconscious",
        icon: GiDeadHead
    }
]
