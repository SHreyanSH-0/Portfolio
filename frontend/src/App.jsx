import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AI from "./pages/AI";

function App() {
    fetch(import.meta.env.VITE_BACKEND_URL);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai" element={<AI />} />
        </Routes>
    );
}

export default App;