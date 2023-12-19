import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";

const SelectField = (props: { label: string; }) => {
    const { label }  = props;
    const [value, setValue] = useState('');

    const handleChange = () => {

    }

    return (
        <Box width="100%" mt={3}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                    <MenuItem>Option 3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectField;