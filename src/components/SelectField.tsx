import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {changeCategory, changeDifficulty, changeType} from "../store/quizSlice";

const SelectField = (props) => {
    const { label, options }  = props;
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
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
        <Box width="100%" mt={3}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
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