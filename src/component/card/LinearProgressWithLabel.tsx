import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { FC } from "react";
import {AiFillHeart} from "react-icons/all";

const normalise = (value: number, max: number) => (value) * 100 / (max);

type LinearProgressWithLabelType = {
    currentHp: number,
    maxHp: number
}

export const LinearProgressWithLabel: FC<LinearProgressWithLabelType> = ({currentHp, maxHp}) => {
    return (
        <Box display="flex" alignItems="center">
            <Box>
                <AiFillHeart/>
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