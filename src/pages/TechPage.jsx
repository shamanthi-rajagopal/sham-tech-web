import { useState, useEffect } from "react";
import "../styles/TechPage.css";
import StartMenu from "../components/StartMenu";
import Window from "../components/Window";
import Taskbar from "../components/Taskbar";

const TechPage = () => {

  if (window.location.pathname === '/tech') {
    document.body.style.overflow = 'hidden';
  }

  const [windows, setWindows] = useState([]);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [minimizedWindows, setMinimizedWindows] = useState([]); // State to track minimized windows
  const [windowPressedState, setWindowPressedState] = useState({}); // Taskbar button state

  const toggleStartMenu = () => setStartMenuOpen(!startMenuOpen);

  const openWindow = (windowName) => {
    // Open window only if it's not already open
    if (!windows.includes(windowName)) {
      setWindows([...windows, windowName]);
    }
  };

  const closeWindow = (windowName) => {
    setWindows(windows.filter(window => window !== windowName));
    setMinimizedWindows(minimizedWindows.filter(window => window !== windowName)); // Ensure minimized windows are also removed
  };

  const minimizeWindow = (windowName) => {
    setMinimizedWindows((prevState) =>
      prevState.includes(windowName)
        ? prevState.filter((w) => w !== windowName) // If window is minimized, restore it
        : [...prevState, windowName] // If window is not minimized, minimize it
    );
    toggleTaskbarButton(windowName, !minimizedWindows.includes(windowName));
  };

  // Add the toggleTaskbarButton function for communication between Taskbar and Window
  const toggleTaskbarButton = (windowName, isMinimized) => {
    setWindowPressedState((prevState) => ({
      ...prevState,
      [windowName]: isMinimized, // Update the pressed state for the specific window
    }));
  };

  return (
    <div className="tech-page">
      <div className="no-scroll">
        <h1></h1>

        {/* Add Button to Open Window */}
        <button onClick={() => openWindow("Example Window")}>Open Window</button>

        {/* Start Menu */}
        <StartMenu open={startMenuOpen} toggleStartMenu={toggleStartMenu} />

        {/* Windows */}
        {windows.map((window, index) => (
          !minimizedWindows.includes(window) && (  // Only render windows that are not minimized
            <Window
              key={index}
              name={window}
              closeWindow={closeWindow}
              minimizeWindow={minimizeWindow}
              toggleTaskbarButton={toggleTaskbarButton} // Pass the toggleTaskbarButton function to the Window
            />
          )
        ))}

        {/* Taskbar */}
        <Taskbar
          toggleStartMenu={toggleStartMenu}
          windows={windows}
          minimizeWindow={minimizeWindow}
          minimizedWindows={minimizedWindows}
          closeWindow={closeWindow}
          toggleTaskbarButton={toggleTaskbarButton}
          windowPressedState={windowPressedState} // Pass the state of window buttons to Taskbar
        />
      </div>
    </div>
  );
};

export default TechPage;
