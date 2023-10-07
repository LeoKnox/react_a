import "./styles.css";
import Home from "./components/Home.js";
import { useState } from "React";

export default function App() {
  const [currPage, setCurrPage] = useState("home");
  const pages = {
    'home': <Home />
  }
  return (
    <div className="App">
      {pages.currPage}
    </div>
  );
}
