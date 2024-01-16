import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React, {FC, useState} from "react";
import {changeCategory, changeDifficulty, changeType} from "../store/quizSlice";
import {useAppDispatch} from "../hooks/useStore";

interface ISelectFieldProps {
    options: {id: number | string; name: string} [];
    label: string;
}

const SelectField: FC<ISelectFieldProps> = ({ label, options }) => {
    const [value, setValue] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleChange = (e: SelectChangeEvent<string>) => {
        setValue(e.target.value);

        switch (label){
            case "Category":
                dispatch(changeCategory(e.target.value));
                break;
            case "Difficulty":
                dispatch(changeDifficulty(e.target.value));
                break;
            case "Type":
                dispatch(changeType(e.target.value));
                break;
            default:
                return;
        }
    }

    return (
        <Box mt={3} mb={3}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange} required>
                    {options.map(({ id, name }) => (
                        <MenuItem value={id} key={id}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>

            </FormControl>
        </Box>
    );
};

export default SelectField;