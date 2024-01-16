import {Box, Typography, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {changeAmount, changeScore, selectQuizState} from "../store/quizSlice";
import {useAppDispatch, useAppSelector} from "../hooks/useStore";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

const FinalScreen = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { score } = useAppSelector(selectQuizState);

    const handleBackToSettings = () => {
        dispatch(changeScore(0));
        dispatch(changeAmount(10));
        navigate("/");
    };

    return (
        <>
            <Fireworks autorun={{ speed: 3 }}/>
            <Box mt={30}>
                <Typography variant="h3" fontWeight="bold" mb={3}>
                    Final Score {score}
                </Typography>
                <Button onClick={handleBackToSettings} variant="contained">
                    back to settings!
                </Button>
            </Box>
        </>
    );
};

export default FinalScreen;