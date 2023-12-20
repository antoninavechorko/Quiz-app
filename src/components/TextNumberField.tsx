import {FormControl, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {changeAmount} from "../store/quizSlice";

const TextNumberField = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeAmount(e.target.value));
    }

    return (
        <FormControl fullWidth>
            <TextField
                label="Amount of Questions"
                variant="outlined"
                color="warning"
                type="number"
                onChange={handleChange}
            />
        </FormControl>
    );
};

export default TextNumberField;