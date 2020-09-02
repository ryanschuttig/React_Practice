// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create react component
const App = function () {
    const buttonText = "Submit";
    const labelText = "Enter name:";

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: "blue", color: "white" }}>
                {buttonText}
            </button>
        </div>
    );
};

// Take react component and show on page
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);