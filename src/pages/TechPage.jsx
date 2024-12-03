import { useState, useEffect } from "react";
import "../styles/TechPage.css";
import StartMenu from "../components/StartMenu";
import Window from "../components/Window";
import Taskbar from "../components/Taskbar";
import HomeImage from "../assets/images/window-home.png";
import PortfolioImage from "../assets/images/window-portfolio.png";
import OtherImage from "../assets/images/window-other.png";

const TechPage = () => {
  if (window.location.pathname === "/tech") {
    document.body.style.overflow = "hidden";
  }

  const [windows, setWindows] = useState([]); // Track open windows
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [minimizedWindows, setMinimizedWindows] = useState([]); // Track minimized windows
  const [windowPressedState, setWindowPressedState] = useState({}); // Track window state (pressed or not)
  const [windowPositions, setWindowPositions] = useState({}); // Track window positions
  const [windowSizes, setWindowSizes] = useState({}); // Track window sizes
  const [activeWindow, setActiveWindow] = useState(null); // Track the active window for z-index

  const toggleStartMenu = () => setStartMenuOpen(!startMenuOpen);

  // Open a new window with a unique size and position
  const openWindow = (windowName) => {
    if (!windows.includes(windowName)) {
      const newWindowPositions = { ...windowPositions };
      const newWindowSizes = { ...windowSizes };

      // Set unique position and size for each window
      switch (windowName) {
        case "Home":
          newWindowPositions[windowName] = { x: 500, y: 100 };
          newWindowSizes[windowName] = { width: 500, height: 300 };
          break;
        case "Portfolio":
          newWindowPositions[windowName] = { x: 250, y: 150 };
          newWindowSizes[windowName] = { width: 600, height: 650 };
          break;
        case "Other":
          newWindowPositions[windowName] = { x: 400, y: 200 };
          newWindowSizes[windowName] = { width: 600, height: 600 };
          break;
        default:
          break;
      }

      setWindows([...windows, windowName]);
      setWindowPositions(newWindowPositions);
      setWindowSizes(newWindowSizes);
    }
  };

  // Close a window
  const closeWindow = (windowName) => {
    setWindows(windows.filter((window) => window !== windowName));
    setMinimizedWindows(minimizedWindows.filter((window) => window !== windowName));
    setWindowPositions((prevPositions) => {
      const { [windowName]: _, ...rest } = prevPositions;
      return rest;
    });
    setWindowSizes((prevSizes) => {
      const { [windowName]: _, ...rest } = prevSizes;
      return rest;
    });
  };

  // Minimize or restore a window
  const minimizeWindow = (windowName) => {
    setMinimizedWindows((prevState) =>
      prevState.includes(windowName)
        ? prevState.filter((w) => w !== windowName)
        : [...prevState, windowName]
    );
    toggleTaskbarButton(windowName, !minimizedWindows.includes(windowName));
  };

  // Update window button state on the taskbar
  const toggleTaskbarButton = (windowName, isMinimized) => {
    setWindowPressedState((prevState) => ({
      ...prevState,
      [windowName]: isMinimized,
    }));
  };

  // Update the position and size of the window
  const updateWindowPosition = (windowName, position) => {
    setWindowPositions((prevPositions) => ({
      ...prevPositions,
      [windowName]: position,
    }));
  };

  const updateWindowSize = (windowName, size) => {
    setWindowSizes((prevSizes) => ({
      ...prevSizes,
      [windowName]: size,
    }));
  };

  // Function to bring the window to the front
  const bringToFront = (windowName) => {
    setActiveWindow(windowName);
  };

  useEffect(() => {
    // Ensure window positions and sizes are applied dynamically when the component is rendered
    windowPositions && setWindowPositions(windowPositions);
    windowSizes && setWindowSizes(windowSizes);
  }, [windows, windowPositions, windowSizes]);

  return (
    <div className="tech-page">
      <div className="no-scroll">
        <h1> </h1>

        {/* Button Container */}
        <div className="button-container">
          {/* Buttons to Open a New Window */}
          <button className="basic" onClick={() => openWindow("Home")}>
            <img src={HomeImage} className="button-icon" />
            Home
          </button>

          <button className="basic" onClick={() => openWindow("Portfolio")}>
            <img src={PortfolioImage} className="button-icon" />
            Portfolio
          </button>

          <button className="basic" onClick={() => openWindow("Other")}>
            <img src={OtherImage} className="button-icon-other" />
            Other
          </button>
        </div>

        {/* Start Menu */}
        <StartMenu open={startMenuOpen} toggleStartMenu={toggleStartMenu} />

        {/* Render Windows */}
        {windows.map((windowName, index) => {
          if (minimizedWindows.includes(windowName)) return null;

          let windowContent;
          switch (windowName) {
            case "Home":
              windowContent = (
                <div>
                  <h2>Welcome to Home</h2>
                  <p>Here is the content for the Home window.</p>
                </div>
              );
              break;
            case "Portfolio":
              windowContent = (
                <div>
                  <h2>Portfolio</h2>
                  <p>Check out my projects and achievements!</p>
                </div>
              );
              break;
            case "Other":
              windowContent = (
                <div>
                  <h2>Other Content</h2>
                  <p>This is the Other window with additional content.</p>
                </div>
              );
              break;
            default:
              windowContent = <div>Default Content</div>;
              break;
          }

          // Apply dynamic z-index based on active window
          const zIndex = windowName === activeWindow ? 10 : 1;

          return (
            <Window
              key={index}
              name={windowName}
              content={windowContent}
              closeWindow={closeWindow}
              minimizeWindow={minimizeWindow}
              toggleTaskbarButton={toggleTaskbarButton}
              updateWindowPosition={updateWindowPosition}
              updateWindowSize={updateWindowSize}
              x={windowPositions[windowName]?.x || 400}  // Set position dynamically
              y={windowPositions[windowName]?.y || 100}  // Set position dynamically
              width={windowSizes[windowName]?.width || 700}  // Set size dynamically
              height={windowSizes[windowName]?.height || 530}  // Set size dynamically
              bringToFront={() => bringToFront(windowName)} // Bring window to the front when clicked
              zIndex={zIndex}  // Apply dynamic z-index
            />
          );
        })}

        {/* Taskbar */}
        <Taskbar
          toggleStartMenu={toggleStartMenu}
          windows={windows}
          minimizeWindow={minimizeWindow}
          minimizedWindows={minimizedWindows}
          closeWindow={closeWindow}
          toggleTaskbarButton={toggleTaskbarButton}
          windowPressedState={windowPressedState}
        />
      </div>
    </div>
  );
};

export default TechPage;
