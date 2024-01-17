import {Box, Typography, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {changeAmount, changeScore, selectQuizState} from "../store/quizSlice";
import {useAppDispatch, useAppSelector} from "../hooks/useStore";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import PageWrapper from "../components/PageWrapper";

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
        <PageWrapper>
            <Fireworks autorun={{ speed: 3 }}/>
            <Box  display="flex"
                  flexDirection="column"
                  alignItems="center">
                <Typography variant="h3" fontWeight="bold" mb={4}>
                    Final Score: {score}
                </Typography>
                <Button onClick={handleBackToSettings} variant="contained" sx={{width: "260px"}}>
                    Back to Settings!
                </Button>
            </Box>
        </PageWrapper>
    );
};

export default FinalScreen;