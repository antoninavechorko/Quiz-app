import {Box, Button, Typography} from "@mui/material";
import SelectField from "../components/SelectField";

const Settings = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <div>
            <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
            <form onSubmit={handleSubmit}>
                <SelectField label="Category"/>
                <SelectField label="Difficulty"/>
                <SelectField label="Type"/>
            </form>
            <Box mt={3}>
                <Button fullWidth variant="contained" type="submit">Get started</Button>
            </Box>
        </div>
    );
};

export default Settings;