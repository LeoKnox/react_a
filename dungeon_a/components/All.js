
import Home from "./Home.js";
import { useState } from "react";

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
