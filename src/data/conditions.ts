import {IconType} from "react-icons";
import {
    FaDeaf,
    FaWheelchair,
    GiBlindfold,
    GiCharm, GiCrossedChains, GiDeadHead,
    GiInvisible, GiPoisonBottle,
    GiRockGolem,
    GiWoodenPegleg, ImConfused,
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
        icon: GiBlindfold //TODO
    },
    {
        name: "Invisible",
        icon: GiInvisible
    },
    {
        name: "Paralyzed",
        icon: FaWheelchair
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
        icon: GiBlindfold //TODO
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
