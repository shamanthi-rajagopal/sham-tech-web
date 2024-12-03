import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import "../styles/Taskbar.css";
import dayjs from "dayjs";
import earth from "../assets/images/windowsearth.png";
import plug from "../assets/images/windowsplug.png";
import windowslogo from "../assets/images/windowslogo1.png";

const Taskbar = ({ toggleStartMenu, windows, minimizeWindow }) => {
  const [currentTime, setCurrentTime] = useState(dayjs().format("hh:mm A"));
  
  // State to track the pressed status of each window button
  const [windowPressedState, setWindowPressedState] = useState({});
  const [isPressedStart, setIsPressedStart] = useState(false); // Manage pressed state for the start button

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("hh:mm A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleStartButtonClick = () => {
    // Toggle the start button's pressed state
    setIsPressedStart((prev) => !prev);
    toggleStartMenu();
  };

  // Handle window button click, toggling the pressed state of the window button
  const handleWindowButtonClick = (windowName) => {
    setWindowPressedState((prevState) => ({
      ...prevState,
      [windowName]: !prevState[windowName], // Toggle pressed state for the clicked window
    }));

    minimizeWindow(windowName); // Call minimizeWindow function when a window button is clicked
  };

  return (
    <div className="taskbar">
      <button
        className={`start-button ${isPressedStart ? "pressed" : ""}`} // Apply "pressed" class based on state
        onClick={handleStartButtonClick}
      >
        <img src={windowslogo} className="start-button-icon" />
        <span>Start</span>
      </button>

      <div className="open-windows">
        {windows.map((window, index) => (
          <button
            key={index}
            onClick={() => handleWindowButtonClick(window)} // Toggle the pressed state for each window
            className={`window-button ${windowPressedState[window] ? "pressed" : ""}`} // Apply "pressed" class based on window's pressed state
          >
            {window}
          </button>
        ))}
      </div>

      <p className="current-time">{currentTime}</p>
      <div className="taskbar-icon">
        <img src={earth} className="earth" />
      </div>
      <div className="taskbar-icon">
        <img src={plug} className="plug" />
      </div>
    </div>
  );
};

Taskbar.propTypes = {
  toggleStartMenu: PropTypes.func.isRequired,
  windows: PropTypes.array.isRequired,
  minimizeWindow: PropTypes.func.isRequired,
};

export default Taskbar;
