import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  let [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div class="ball">
      <button class="increment-button" ondbClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default App;
