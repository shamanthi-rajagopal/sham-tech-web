import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import earth from "../assets/images/windowsearth.png";
import plug from "../assets/images/windowsplug.png";
import windowslogo from "../assets/images/windowslogo1.png";
import "../styles/Taskbar.css";

const Taskbar = ({ toggleStartMenu, windows, minimizeWindow, minimizedWindows, toggleTaskbarButton, windowPressedState }) => {
  const [currentTime, setCurrentTime] = useState(dayjs().format("hh:mm A"));
  const [isPressedStart, setIsPressedStart] = useState(false); // Manage pressed state for the start button

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("hh:mm A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleStartButtonClick = () => {
    setIsPressedStart((prev) => !prev);
    toggleStartMenu();
  };

  const handleWindowButtonClick = (windowName) => {
    minimizeWindow(windowName);
    toggleTaskbarButton(windowName, !minimizedWindows.includes(windowName)); // Update the button's state when clicked
  };

  return (
    <div className="taskbar">
      <button
        className={`start-button ${isPressedStart ? "pressed" : ""}`}
        onClick={handleStartButtonClick}
      >
        <img src={windowslogo} className="start-button-icon" />
        <span>Start</span>
      </button>

      <div className="open-windows">
        {windows.map((window, index) => (
          <button
            key={index}
            onClick={() => handleWindowButtonClick(window)}
            className={`window-button ${windowPressedState[window] ? "pressed" : ""}`}
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
  minimizedWindows: PropTypes.array.isRequired,
  closeWindow: PropTypes.func.isRequired,
  toggleTaskbarButton: PropTypes.func.isRequired,
  windowPressedState: PropTypes.object.isRequired, // Prop type for windowPressedState
};

export default Taskbar;
