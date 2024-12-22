import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import { Simple } from './Components/Simple';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simple" element={<Simple />} />
    </Routes>
  );
}

export default App;
