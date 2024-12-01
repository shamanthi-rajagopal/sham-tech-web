//import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import "../styles/Taskbar.css";
import dayjs from "dayjs";

const currentTime = dayjs().format("hh:mm A");

const Taskbar = ({ toggleStartMenu, windows, closeWindow }) => {
  return (
    <div className="taskbar">
      <button className="start-button" onClick={toggleStartMenu}>
        Start
      </button>
      <div className="open-windows">
        {windows.map((window, index) => (
          <button
            key={index}
            onClick={() => alert(`Switching to ${window}`)}
            className="window-button"
          >
            {window}
            <span onClick={(e) => { e.stopPropagation(); closeWindow(window); }}> X</span>
          </button>
        ))}
      </div>
      {/* Display the current time */}
      <p className="current-time">{currentTime}</p>
    </div>
  );
};

// PropTypes validation for the props
Taskbar.propTypes = {
  toggleStartMenu: PropTypes.func.isRequired, // Expecting a function for toggleStartMenu
  windows: PropTypes.array.isRequired,        // Expecting an array for windows
  closeWindow: PropTypes.func.isRequired,     // Expecting a function for closeWindow
};

export default Taskbar;
