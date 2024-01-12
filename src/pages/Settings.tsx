import {Box, Button, CircularProgress, Stack, Typography} from "@mui/material";
import SelectField from "../components/SelectField";
import useAxios from "../hooks/useAxios";
import {useNavigate} from "react-router-dom";
import TextNumberField from "../components/TextNumberField";
import {FormEvent} from "react";
import {styles} from '../styles/styles';

const Settings = () => {
    const { response, loading, error } = useAxios({ url: "/api_category.php" })
    const navigate = useNavigate();

    if (loading) {
        return <CircularProgress/>
    }

    if (error) {
        return <Typography>Something went wrong</Typography>
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ];

    const typeOptions = [
        { id: "multiple", name: "Multiple Choice" },
        { id: "boolean", name: "True/False" },
    ];

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        navigate('/questions')
    }

    return (
        <Stack sx={styles.settingPage}>
            <Typography variant="h1" fontWeight="bold">Quiz App</Typography>
            <form onSubmit={handleSubmit}>
                <SelectField options={response?.trivia_categories || []} label="Category"/>
                <SelectField options={difficultyOptions} label="Difficulty"/>
                <SelectField options={typeOptions} label="Type"/>
                <TextNumberField />
                <Box mt={3}>
                    <Button variant="contained" type="submit">Get started</Button>
                </Box>
            </form>
        </Stack>
    );
};

export default Settings;