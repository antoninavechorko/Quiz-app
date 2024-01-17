import React, {FC} from "react";
import {FormControl, TextField} from "@mui/material";
import {changeAmount} from "../store/quizSlice";
import {useAppDispatch} from "../hooks/useStore";

const TextNumberField: FC = () => {
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeAmount(Number(e.target.value)));
    }

    return (
        <FormControl fullWidth>
            <TextField
                label="Amount of Questions"
                variant="outlined"
                type="number"
                onChange={handleChange}
                required
            />
        </FormControl>
    );
};

export default TextNumberField;