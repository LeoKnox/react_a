import Home from "./kanjiQuiz/home.js";
import Test from "./kanjiQuiz/test.js";
import TestParam from "./kanjiQuiz/testParam.js";
import Update from "./kanjiQuiz/update.js";
import Login from "./kanjiQuiz/login.js";
import Mypage from "./kanjiQuiz/mypage.js";
import Nested from "./components/Nested";
import NestedP from "./components/NestedP";
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
          <Route path="/logged/:id" element={<Mypage />} />
          <Route path="update/:id" element={<Update />} />
          <Route path="logged" element={<Mypage />} />
          <Route path="test" element={<Test />} />
          <Route path="test/:id" element={<TestParam />} />
          <Route path="/nested" element={<Nested />}>
            <Route path=":id" element={<NestedP />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
