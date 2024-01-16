import {Box, Button, CircularProgress, Container, Typography} from "@mui/material";
import SelectField from "../components/SelectField";
import useAxios from "../hooks/useAxios";
import {useNavigate} from "react-router-dom";
import TextNumberField from "../components/TextNumberField";
import React, {FormEvent} from "react";
import {difficultyOptions, typeOptions} from "../constants/constant";
import {useAppSelector} from "../hooks/useStore";
import {selectQuizState} from "../store/quizSlice";
import PageWrapper from "../components/PageWrapper";
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
    const { response, loading, error } = useAxios({ url: "/api_category.php" });
    const { amount_of_question} = useAppSelector(selectQuizState);
    const navigate = useNavigate();

    if (loading) {
        return <PageWrapper><CircularProgress size="4rem"/></PageWrapper>
    }

    if (error) {
        return <PageWrapper><Typography variant="h2" color="error" align="center" fontWeight="bold">Something went wrong...</Typography></PageWrapper>
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (amount_of_question > 50) {
            toast.error("Maximum amount is 50", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                style: {textAlign: "center"},
            });
        } else {
            navigate('/questions');
        }
    }

    return (
        <PageWrapper>
            <Container maxWidth="md">
                    <Typography variant="h1" fontWeight="bold" color="primary">Quiz App</Typography>
                    <form onSubmit={handleSubmit}>
                        <SelectField options={response?.trivia_categories || []} label="Category"/>
                        <SelectField options={difficultyOptions} label="Difficulty"/>
                        <SelectField options={typeOptions} label="Type"/>
                        <TextNumberField/>
                        <ToastContainer />
                        <Box mt={3}>
                            <Button variant="contained" type="submit" fullWidth>Get Started</Button>
                        </Box>
                    </form>
            </Container>
        </PageWrapper>
    );
};

export default Settings;