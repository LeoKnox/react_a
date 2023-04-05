import Home from "./kanjiQuiz/home.js";
import Update from "./kanjiQuiz/update.js";
import Login from "./kanjiQuiz/login.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Heading</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />}>
            <Route path=":user" element={<p>tt</p>} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
