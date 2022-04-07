import React, { useState } from "react";
import "./App.css";
import Data from "./Components/data";
import List from "./Components/List";

function App() {
  const [people, setPeople] = useState(Data);

  const clearList = () => {
    if (people) {
      setPeople([]);
    }
  };

  return (
    <div className="App">
      <section className="container">
        <h2> {people.length} Birthdays Today</h2>

        <List people={people} />
        <button className="btn" onClick={clearList}>
          Clear Birthdays
        </button>
      </section>
    </div>
  );
}

export default App;
