import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import {Container} from "@mui/material";

function App() {
  return (
    <BrowserRouter>
        <Container>
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
