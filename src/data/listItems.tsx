import {FaCampground, GiBlackKnightHelm, GiSpikedDragonHead, RiSwordLine} from "react-icons/all";
import {MenuItem} from "../component/menu/MenuItem"

export const menuListItems: MenuItem[] = [
    {textToShow:"Quick Battle", iconToShow: RiSwordLine, iconSize: 30, enabled: true},
    {textToShow:"Campaigns", iconToShow: FaCampground, iconSize: 30, enabled: false},
    {textToShow:"Characters", iconToShow: GiBlackKnightHelm, iconSize: 30, enabled: false},
    {textToShow:"Enemies", iconToShow: GiSpikedDragonHead, iconSize: 30, enabled: false}
];