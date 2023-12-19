import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import {Box, Container, CssBaseline} from "@mui/material";

function App() {
  return (
    <BrowserRouter>
        <CssBaseline />
        <Container maxWidth="sm">
                <Routes>
                    <Route path="/" Component={Settings} />
                    <Route path="/questions" Component={Questions} />
                    <Route path="/score" Component={FinalScreen} />
                </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;
