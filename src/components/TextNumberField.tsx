import {FormControl, TextField} from "@mui/material";
import {changeAmount} from "../store/quizSlice";
import {useAppDispatch} from "../hooks/useStore";

const TextNumberField = () => {
    const dispatch = useAppDispatch();

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