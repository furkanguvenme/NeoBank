import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import { Simple } from './Components/Simple';
import { Compound } from './Components/Compound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simple" element={<Simple />} />
      <Route path="/compound" element={<Compound />} />
    </Routes>
  );
}

export default App;
