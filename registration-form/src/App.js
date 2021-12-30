import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import RegistrationForm from "./components/RegistrationForm.js";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route exact path="/" element={<RegistrationForm/>} />
    <Route exact path="/welcome" element={<WelcomePage/>} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
