import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import { Simple } from './Components/Simple';
import { Compound } from './Components/Compound';
import { Credit } from './Components/Credit';
import { Share } from './Components/Share';
import { Aboutme } from './Components/Aboutme';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/simple" element={<Simple />} />
      <Route path="/compound" element={<Compound />} />
      <Route path="/credit" element={<Credit />} />
      <Route path="/share" element={<Share />} />
      <Route path="/aboutme" element={<Aboutme />} />
    </Routes>
  );
}

export default App;
