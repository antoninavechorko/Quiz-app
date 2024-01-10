import {Box, Typography, Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {changeAmount, changeScore} from "../store/quizSlice";

const FinalScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { score } = useSelector((state) => state.quiz);

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