import PropTypes from "prop-types"; // Import PropTypes for validation
import { useState, useEffect } from "react"; // Import hooks for managing state and effects
import "../styles/Taskbar.css";
import dayjs from "dayjs";
import earth from "../assets/images/windowsearth.png";
import plug from "../assets/images/windowsplug.png";
import windowslogo from "../assets/images/windowslogo1.png";

const Taskbar = ({ toggleStartMenu, windows, closeWindow }) => {
  const [currentTime, setCurrentTime] = useState(dayjs().format("hh:mm A"));
  const [isPressed, setIsPressed] = useState(false); // Track the pressed state of the button

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("hh:mm A"));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handle button click to toggle pressed state
  const handleStartButtonClick = () => {
    setIsPressed(!isPressed); // Toggle the pressed state
    toggleStartMenu(); // Call the toggleStartMenu function passed via props
  };

  return (
    <div className="taskbar">
      <button 
        className={`start-button ${isPressed ? 'pressed' : ''}`} // Apply 'pressed' class when button is pressed
        onClick={handleStartButtonClick}
      >
        <img src={windowslogo} className="start-button-icon" />
        <span>Start</span>
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
      <div className="taskbar-icon">
        <img src={earth} className="earth" />
      </div>
      <div className="taskbar-icon">
        <img src={plug} className="plug" />
      </div>
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
