import React, { useState } from "react";
import Cards from "./components/Cards";
import Cards1 from "./components/Cards1";
import Cards2 from "./components/Cards2";
import "./index.css";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("status");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let selectedComponent;

  if (selectedOption === "status") {
    selectedComponent = <Cards />;
  } else if (selectedOption === "user") {
    selectedComponent = <Cards1 />;
  } else if (selectedOption === "priority") {
    selectedComponent = <Cards2 />;
  }

  return (
    <div>
      <div className="options2">
        <label>
          Grouping
          <select className="app-label"value={selectedOption} onChange={handleSelectChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </label>
      </div>
      <div className="card-container">{selectedComponent}</div>
    </div>
  );
}
