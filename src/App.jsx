import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ValentinePage from "./ValentinePage";
import YesPG from "./yesPG"; // Import the YesPG page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ValentinePage />} />
        <Route path="/yesPG" element={<YesPG />} />
      </Routes>
    </Router>
  );
}

export default App;
