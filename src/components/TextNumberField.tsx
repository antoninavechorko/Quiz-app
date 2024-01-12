import {FormControl, TextField} from "@mui/material";
import {changeAmount} from "../store/quizSlice";
import {useAppDispatch} from "../hooks/useStore";
import React from "react";

const TextNumberField = () => {
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAmount(Number(e.target.value)));
    }

    return (
        <FormControl>
            <TextField
                label="Amount of Questions"
                variant="outlined"
                type="number"
                onChange={handleChange}
            />
        </FormControl>
    );
};

export default TextNumberField;