import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ValentinePage from "./ValentinePage";
import YesPG from "./yesPG"; // Import the YesPG page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/valentine-nd/" element={<ValentinePage />} />
        <Route path="/valentine-nd/yesPG" element={<YesPG />} />
      </Routes>
    </Router>
  );
}

export default App;
