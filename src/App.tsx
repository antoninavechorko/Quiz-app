import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Settings} />
            <Route path="/questions" Component={Questions} />
            <Route path="/score" Component={FinalScreen} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
