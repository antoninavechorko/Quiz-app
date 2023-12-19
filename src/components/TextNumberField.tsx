import {FormControl, TextField} from "@mui/material";

const TextNumberField = () => {
    const handleChange = () => {}

    return (
        <FormControl fullWidth>
            <TextField
                label="Standard warning"
                variant="outlined"
                color="warning"
            />
        </FormControl>
    );
};

export default TextNumberField;