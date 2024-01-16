import {Box, Button, CircularProgress, FormControlLabel, Typography, Radio, RadioGroup, LinearProgress} from "@mui/material";
import { decode } from "html-entities";
import {useNavigate} from "react-router-dom";
import useAxios from "../hooks/useAxios";
import React, {useEffect, useState} from "react";
import {changeScore, selectQuizState} from "../store/quizSlice";
import {useAppDispatch, useAppSelector} from "../hooks/useStore";
import PageWrapper from "../components/PageWrapper";

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const Questions = () => {
    const quizState = useAppSelector(selectQuizState);
    const { question_category, question_difficulty, question_type, amount_of_question, score } = quizState;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    let apiUrl = `/api.php?amount=${amount_of_question}`;

    if (question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`);
    }
    if (question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
    }
    if (question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`);
    }

    const { response, loading, error } = useAxios({ url: apiUrl});
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [options, setOptions] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        if (response?.results && response.results.length > 0) {
            const question = response.results[questionIndex];
            let answers = [...question.incorrect_answers];
            answers.splice(
                getRandomInt(question.incorrect_answers.length),
                0,
                question.correct_answer
            );
            setOptions(answers);
        }
    }, [response, questionIndex]);

    if (loading) {
        return <PageWrapper><CircularProgress size="4rem"/></PageWrapper>
    }

    if (!response) {
        return <PageWrapper><Typography variant="h2" color="error" align="center" fontWeight="bold">Something went wrong...</Typography></PageWrapper>
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" && selectedOption) {
            handleClick();
        }
    };

    const handleClick = () => {
        if (response) {
            const question = response.results[questionIndex];

            if (selectedOption === question.correct_answer) {
                dispatch(changeScore(score + 1))
            }

            if (questionIndex + 1 < response.results.length) {
                setQuestionIndex(questionIndex + 1);
                setSelectedOption(null);
                setProgress(((questionIndex + 1) / response.results.length) * 100);
            } else {
                navigate("/score");
            }
        }
    }

    return (
        <PageWrapper>
        <Box onKeyPress={handleKeyPress}>
            <Typography variant="h4">Questions {questionIndex + 1}</Typography>
            <LinearProgress variant="determinate"
                            color="primary"
                            value={progress} />
            <Typography mt={5}>
                {decode(response?.results[questionIndex].question)}
            </Typography>
            <RadioGroup value={selectedOption} onChange={handleChange}>
                {options.map((data, id) => (
                    <Box mt={2} key={id}>
                        <FormControlLabel
                            control={<Radio />}
                            label={decode(data)}
                            value={decode(data)}
                        />
                    </Box>
                ))}
            </RadioGroup>
            <Box mt={5}>
                <Button onClick={handleClick} variant="contained" disabled={!selectedOption}>
                    Next
                </Button>
            </Box>
            <Box mt={5}>
                <p> Score: {score} / {response?.results.length}</p>
            </Box>
        </Box>
        </PageWrapper>
    );
};

export default Questions;