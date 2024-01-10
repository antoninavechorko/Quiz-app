import {Box, Button, CircularProgress, Typography} from "@mui/material";
import { decode } from "html-entities";
import {useNavigate} from "react-router-dom";
import useAxios from "../hooks/useAxios";
import React, {useEffect, useState} from "react";
import {changeScore, selectQuizState} from "../store/quizSlice";
import {useAppDispatch, useAppSelector} from "../hooks/useStore";

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

    const { response, loading } = useAxios({ url: apiUrl});
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        if (response?.results.length) {
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
        return <CircularProgress/>
    }

    const handleClickAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (response) {
            const question = response.results[questionIndex];
            const clickedButton = e.target as HTMLButtonElement;

            if (clickedButton.textContent === question.correct_answer) {
                dispatch(changeScore(score + 1))
            }

            if (questionIndex + 1 < response.results.length) {
                setQuestionIndex(questionIndex + 1);
            } else {
                navigate("/score");
            }
        }
    }

    return (
        <Box>
            <Typography variant="h4">Questions {questionIndex + 1}</Typography>
            <Typography mt={5}>
                {decode(response?.results[questionIndex].question)}
            </Typography>
            {options.map((data, id) => (
                <Box mt={2} key={id}>
                    <Button onClick={handleClickAnswer} variant="contained">
                        {decode(data)}
                    </Button>
                </Box>
            ))}
            <Box mt={5}>
                <p> Score: {score} / {response?.results.length}</p>
            </Box>
        </Box>
    );
};

export default Questions;