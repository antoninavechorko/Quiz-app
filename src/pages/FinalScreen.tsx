import {Box, Typography, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {changeAmount, changeScore, selectQuizState} from "../store/quizSlice";
import {useAppDispatch, useAppSelector} from "../hooks/useStore";

const FinalScreen = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const quizState = useAppSelector(selectQuizState);
    const {score } = quizState;

    const handleBackToSettings = () => {
        dispatch(changeScore(0));
        dispatch(changeAmount(20));
        navigate("/");
    };

    return (
        <Box mt={30}>
            <Typography variant="h3" fontWeight="bold" mb={3}>
                Final Score {score}
            </Typography>
            <Button onClick={handleBackToSettings} variant="outlined">
                back to settings!
            </Button>
        </Box>
    );
};

export default FinalScreen;