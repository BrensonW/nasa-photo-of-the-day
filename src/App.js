import React from "react";
import "./App.css";
import Header from "./Header";
import NasaPic from "./photo/NasaPic.js";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Header />
      <NasaPic />
    </div>
  );
}

export default App;
