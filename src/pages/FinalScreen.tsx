import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Typography, Button} from "@mui/material";
import PageWrapper from "../components/PageWrapper";
import {changeAmount, changeScore, selectQuizState} from "../store/quizSlice";
import {useAppDispatch, useAppSelector} from "../hooks/useStore";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

const FinalScreen: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {score} = useAppSelector(selectQuizState);

    const handleBackToSettings = () => {
        dispatch(changeScore(0));
        dispatch(changeAmount(10));
        navigate("/");
    };

    return (
        <PageWrapper>
            <Fireworks autorun={{speed: 3}}/>
            <Box display="flex"
                 flexDirection="column"
                 alignItems="center">
                <Typography variant="h2" fontWeight="bold" mb={4} color="primary">
                    Final Score: {score}
                </Typography>
                <Button onClick={handleBackToSettings} variant="contained" sx={{width: "280px"}}>
                    Back to Settings!
                </Button>
            </Box>
        </PageWrapper>
    );
};

export default FinalScreen;