import Home from "./kanjiQuiz/home.js";
import Update from "./kanjiQuiz/update.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Heading</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
