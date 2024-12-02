import { useState } from "react";
import "../styles/TechPage.css";
import StartMenu from "../components/StartMenu";
import Window from "../components/Window";
import Taskbar from "../components/Taskbar";

const TechPage = () => {
  // State to manage open windows
  const [windows, setWindows] = useState([]);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const toggleStartMenu = () => setStartMenuOpen(!startMenuOpen);

  const openWindow = (windowName) => {
    // Check if the window is already open
    if (!windows.includes(windowName)) {
      setWindows([...windows, windowName]);
    }
  };

  const closeWindow = (windowName) => {
    setWindows(windows.filter(window => window !== windowName));
  };

  return (
    <div className="tech-page">
      <h1></h1>

      {/* Add Button to Open Window */}
      <button onClick={() => openWindow("Example Window")}>Open Window</button>
      
      {/* Start Menu */}
      <StartMenu open={startMenuOpen} toggleStartMenu={toggleStartMenu} />
      
      {/* Windows */}
      {windows.map((window, index) => (
        <Window key={index} name={window} closeWindow={closeWindow} />
      ))}

      {/* Taskbar */}
      <Taskbar toggleStartMenu={toggleStartMenu} windows={windows} closeWindow={closeWindow} />
    </div>
  );
};

export default TechPage;
