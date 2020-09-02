// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create react component
const App = function () {
    return (
        <div>
            <label className="label" for="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: "blue", color: "white" }}>Submit</button>
        </div>
    );
};

// Take react component and show on page
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);