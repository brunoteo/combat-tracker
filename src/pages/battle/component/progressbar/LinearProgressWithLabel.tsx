import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { FC } from "react";
import {AiFillHeart} from "react-icons/all";
import { useDispatch } from "react-redux";
import { changeMaxHp } from "../../../../store/store";
import { PlayerStat } from "../card/PlayerStat";

const normalise = (value: number, max: number) => (value) * 100 / (max);

type LinearProgressWithLabelType = {
    id: string,
    name: string,
    currentHp: number,
    maxHp: number
}

export const LinearProgressWithLabel: FC<LinearProgressWithLabelType> = ({id, name, currentHp, maxHp}) => {
    const dispatch = useDispatch();

    return (
        <Box display="flex" alignItems="center">
            <Box>
                <PlayerStat modalStatTitle={`${name} Max HP`} changeStat={(amountToAdd) => dispatch(changeMaxHp({id, amountToAdd}))} >
                    <AiFillHeart/>
                </PlayerStat>
            </Box>
            <Box width="100%" ml={1} mr={1}>
                <LinearProgress variant="determinate" value={normalise(currentHp, maxHp)} />
            </Box>
            <Box>
                <Typography variant="body2" color="textSecondary">{currentHp}/{maxHp}</Typography>
            </Box>

        </Box>
    );
}