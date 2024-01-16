import {Box, Button, CircularProgress, Stack, Typography} from "@mui/material";
import SelectField from "../components/SelectField";
import useAxios from "../hooks/useAxios";
import {useNavigate} from "react-router-dom";
import TextNumberField from "../components/TextNumberField";
import {FormEvent, useState} from "react";
import {styles} from '../styles/styles';
import {difficultyOptions, typeOptions} from "../constants/constant";
import {useAppSelector} from "../hooks/useStore";
import {selectQuizState} from "../store/quizSlice";


const Settings = () => {
    const { response, loading, error } = useAxios({ url: "/api_category.php" });
    const { amount_of_question} = useAppSelector(selectQuizState);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    if (loading) {
        return <CircularProgress/>
    }

    if (error) {
        return <Typography>Something went wrong</Typography>
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (amount_of_question > 50) {
            setErrorMessage("Enter less than or equal to 50 questions");
        } else {
            setErrorMessage(null);
            navigate('/questions');
        }
    }

    return (
        <Stack sx={styles.settingPage}>
            <Typography variant="h1" fontWeight="bold">Quiz App</Typography>
            <form onSubmit={handleSubmit}>
                <SelectField options={response?.trivia_categories || []} label="Category"/>
                <SelectField options={difficultyOptions} label="Difficulty"/>
                <SelectField options={typeOptions} label="Type"/>
                <TextNumberField/>
                {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                <Box mt={3}>
                    <Button variant="contained" type="submit">Get started</Button>
                </Box>
            </form>
        </Stack>
    );
};

export default Settings;