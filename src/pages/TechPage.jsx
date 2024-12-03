import { useState } from "react";
import "../styles/TechPage.css";
import StartMenu from "../components/StartMenu";
import Window from "../components/Window";
import Taskbar from "../components/Taskbar";


const TechPage = () => {
  const [windows, setWindows] = useState([]);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [minimizedWindows, setMinimizedWindows] = useState([]); // State to track minimized windows

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
      prevState.includes(windowName) ? prevState.filter((w) => w !== windowName) : [...prevState, windowName]
    );
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
          <Window key={index} name={window} closeWindow={closeWindow} minimizeWindow={minimizeWindow} />
        )
      ))}

      {/* Taskbar */}
      <Taskbar
        toggleStartMenu={toggleStartMenu}
        windows={windows}
        minimizeWindow={minimizeWindow}
        minimizedWindows={minimizedWindows}
        closeWindow={closeWindow}
      />
      </div>
    </div>
  );
};

export default TechPage;
