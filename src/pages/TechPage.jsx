import { useState, useEffect } from "react";
import "../styles/TechPage.css";
import StartMenu from "../components/StartMenu";
import Window from "../components/Window";
import Taskbar from "../components/Taskbar";
import HomeImage from "../assets/images/window-home.png";
import PortfolioImage from "../assets/images/window-portfolio.png";
import OtherImage from "../assets/images/window-other.png";
import PhotoImage from "../assets/images/windows-camera.png";
import File from "../assets/images/window-resume.png";
import Background from "../assets/images/window-background.png";
import Background1 from "../assets/images/windowsblue.png";
import Background2 from "../assets/images/pixelspace.png";
import Background3 from "../assets/images/pixelgalaxy.png";
import Background4 from "../assets/images/pixelspace3.png";
import Background5 from "../assets/images/bluesky.jpg";
import Background6 from "../assets/images/pinksky.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import email from "../assets/images/email.png";
import youtube from "../assets/images/youtube.png";
import csa1 from "../assets/photos/csa1.jpg";
import csa2 from "../assets/photos/csa2.jpg";
import csa3 from "../assets/photos/csa3.jpg";
import csa4 from "../assets/photos/csa4.jpg";
import csa5 from "../assets/photos/csa5.jpg";
import csa6 from "../assets/photos/csa6.jpg";
import csa7 from "../assets/photos/csa16.jpg";
import csa8 from "../assets/photos/csa17.jpg";
import csa01 from "../assets/photos/csa-1.jpg";
import csa02 from "../assets/photos/csa-2.jpg";
import csa03 from "../assets/photos/csa-3.jpg";
import csa04 from "../assets/photos/csa-4.jpg";
import csa05 from "../assets/photos/csa-5.jpg";
import csa07 from "../assets/photos/csa-7.jpg";
import sky1 from "../assets/photos/sky1.jpg";
import sky2 from "../assets/photos/sky2.jpg";
import sky3 from "../assets/photos/sky3.jpg";
import sky4 from "../assets/photos/sky4.jpg";
import sky5 from "../assets/photos/sky5.jpg";
import sky8 from "../assets/photos/sky8.jpg";
import csasham from "../assets/photos/csa-sham.jpg";



const TechPage = () => {
  if (window.location.pathname === "/tech") {
    document.body.style.overflow = "hidden";
  }
  

  const backgrounds = [Background1, Background2, Background3, Background4, Background5, Background6]; // Array of backgrounds
  const [currentBackground, setCurrentBackground] = useState(0);

  const switchBackground = () => {
    setCurrentBackground((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  const [windows, setWindows] = useState([]); // Track open windows
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [minimizedWindows, setMinimizedWindows] = useState([]); // Track minimized windows
  const [windowPressedState, setWindowPressedState] = useState({}); // Track window state (pressed or not)
  const [windowPositions, setWindowPositions] = useState({}); // Track window positions
  const [windowSizes, setWindowSizes] = useState({}); // Track window sizes
  const [activeWindow, setActiveWindow] = useState("Portfolio"); // Or any default window
  const [activeSection, setActiveSection] = useState("about"); // Default section for Portfolio

  const handleNavClick = (section) => {
    setActiveSection(section); // Update the active section based on the clicked button
  };

  const toggleStartMenu = () => setStartMenuOpen(!startMenuOpen);

  const openWindow = (windowName) => {

    if (windows.includes(windowName)) {
      return; // Prevent duplicate entries
    }

    if (!windows.includes(windowName)) {
      const newWindowPositions = { ...windowPositions };
      const newWindowSizes = { ...windowSizes };
  
      // Ensure fresh state for new windows
      switch (windowName) {
        case "Home":
          newWindowPositions[windowName] = { x: 500, y: 100 };
          newWindowSizes[windowName] = { width: 570, height: 300 };
          break;
        case "Portfolio":
          newWindowPositions[windowName] = { x: 350, y: 50 };
          newWindowSizes[windowName] = { width: 800, height: 600 };
          break;
        case "Other":
          newWindowPositions[windowName] = { x: 100, y: 200 };
          newWindowSizes[windowName] = { width: 400, height: 300 };
          break;
        case "Photos":
            newWindowPositions[windowName] = { x: 300, y: 50 };
            newWindowSizes[windowName] = { width: 400, height: 400 };
        break;
        case "CSA-1":
          newWindowPositions[windowName] = { x: 700, y: 150 };
          newWindowSizes[windowName] = { width: 700, height: 500 };
          break;
        case "CSA-2":
            newWindowPositions[windowName] = { x: 700, y: 150 };
            newWindowSizes[windowName] = { width: 700, height: 500 };
          break;
        case "Sunsets":
            newWindowPositions[windowName] = { x: 700, y: 150 };
            newWindowSizes[windowName] = { width: 700, height: 500 };
          break;
        default:
          break;
      }
  
      // Remove the position and size of the closed windows to prevent issues
      setWindows((prevWindows) => [...prevWindows, windowName]);
      setWindowPositions(newWindowPositions);
      setWindowSizes(newWindowSizes);
    }
  };
  


  const closeWindow = (windowName) => {
    setWindows(windows.filter((window) => window !== windowName));
    setMinimizedWindows(minimizedWindows.filter((window) => window !== windowName));
  
    // Ensure you clear the position and size state for the closed window
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

  useEffect(() => {
    if (!windows.includes("Home")) {
      setWindows(["Home"]); // Directly set the initial state for windows
      setWindowPositions((prevPositions) => ({
        ...prevPositions,
        Home: { x: 500, y: 100 }, // Customize "Home" position here
      }));
      setWindowSizes((prevSizes) => ({
        ...prevSizes,
        Home: { width: 570, height: 300 }, // Customize "Home" size here
      }));
    }
  }, []);
  


  return (
    
    <div className="tech-page"
    style={{
      backgroundImage: `url(${backgrounds[currentBackground]})`, // Set background dynamically
      backgroundSize: "cover", // Ensure the background covers the entire area
      backgroundRepeat: "no-repeat", // Prevent repeating
      backgroundPosition: "center", // Center the background
      height: "100vh", // Full height of the viewport
      width: "100%",
    }}
    >
      <div className="no-scroll">

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
              <h1 className="home-window">Shamanthi Rajagopal</h1>
              <div className="home-text">Dive into my world of <strong><u>TECH</u></strong>—uncover my journey, creations, and contributions.</div>
              <div className="home-text-1">(Click around to explore my tech portfolio - it operates like any computer!)</div>

            </div>

              );
              break;
            case "Portfolio":
              windowContent = (
                <div className="portfolio-window-container">
                  {/* Portfolio Container */}
                  <div className="portfolio-container">
                    {/* Portfolio Nav Bar */}
                    <div className="portfolio-nav">
                      <button
                        className={`portfolio-nav-button ${activeSection === "about" ? "active" : ""}`}
                        onClick={() => handleNavClick("about")}
                      >
                        About Me
                      </button>
                      <button
                        className={`portfolio-nav-button ${activeSection === "projects" ? "active" : ""}`}
                        onClick={() => handleNavClick("projects")}
                      >
                        Projects
                      </button>
                      <button
                        className={`portfolio-nav-button ${activeSection === "experiences" ? "active" : ""}`}
                        onClick={() => handleNavClick("experiences")}
                      >
                        Experiences
                      </button>
                      <button
                        className={`portfolio-nav-button ${activeSection === "contact" ? "active" : ""}`}
                        onClick={() => handleNavClick("contact")}
                      >
                        Contact
                      </button>
                    </div>
        
                    {/* Content Section */}
                    <div className="portfolio-content">
                      {activeSection === "about" && (
                        <div className="portfolio-about">
                          <h2>About Me</h2>
                          <p>
                            Hello! I'm a passionate developer with a background in computer engineering. I love working on exciting projects that make a real impact. My goal is to use technology to solve meaningful problems.
                          </p>
                        </div>
                      )}
                      {activeSection === "projects" && (
                        <div className="portfolio-projects">
                          <h2>Projects</h2>
                          <p>Here are some of the projects I’ve worked on...</p>
                        </div>
                      )}
                      {activeSection === "experiences" && (
                        <div className="portfolio-experiences">
                          <h2>Experiences</h2>
                          <p>Here's a list of my relevant work and academic experiences...</p>
                        </div>
                      )}
                      {activeSection === "contact" && (
                        <div className="portfolio-contact">
                          <h2>Contact</h2>
                          <p>If you want to get in touch, feel free to reach out!</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
              break;
            case "Other":
              windowContent = (
                <div>
                  <div className="other-back">
                  <button className="basic-photo" onClick={() => openWindow("Photos")}>
                  <img src={PhotoImage} className="button-icon-other-photo" />Photos</button>
                  
                  <button className="basic-drive" onClick={switchBackground}>
                  <img src={Background} className="button-icon-other-drive" />Background</button>
                  </div>
                </div>
              );
              break;
              case "Photos":
                windowContent = (
              <div>
                <div className="other-back">
                  <button className="basic-photo" onClick={() => openWindow("CSA-1")}>
                  <img src={File} className="button-icon-other-csa" />CSA-1</button> 

                  <button className="basic-photo" onClick={() => openWindow("CSA-2")}>
                  <img src={File} className="button-icon-other-csa" />CSA-2</button> 

                  <button className="basic-photo" onClick={() => openWindow("Sunsets")}>
                  <img src={File} className="button-icon-other-csa" />Sunsets</button> 

                </div>
              </div>

                );
                break;
              case "CSA-1":
                windowContent =(
                  <div>
                    
                <h1 className="photo-header">CSA Photo Dump #1</h1>
                <div className="filler">I was an intern @ CSA and here's a photo dump on my first day in-person!</div>
                <div className="filler">Fun fact: There was a special astronaut event happening, and I saw 8 astronauts for the first time!!!</div>
                <div className="filler">(If you ever see me in person, maybe I can show you the photo! 👨‍🚀)</div>
                {/* Content */}
                <div id="csa-section" className="CSA">
                  <div><img className="photo-img" src={csa2}/></div>
                  <div><img className="photo-img" src={csa1}/></div>
                  <div><img className="photo-img" src={csa3}/></div>
                  <div><img className="photo-img" src={csa4}/></div>
                  <div><img className="photo-img" src={csa5}/></div>
                  <div><img className="photo-img" src={csa6}/></div>
                  <div><img className="photo-img" src={csa7}/></div>
                  <div><img className="photo-img" src={csa8}/></div>
                  <div><img className="photo-img" src={csasham}/></div>
                  <div className="photo-heading">I ♥ CSA</div>
                </div>
                  </div>
                );
                break;
                case "CSA-2":
                  windowContent =(
                    <div>
                      
                  <h1 className="photo-header">CSA Photo Dump #2</h1>
                  <div className="filler">Some more csa photos...</div>
                  <div className="filler">Fun Fact: I was on the ✨ moon ✨! 🌚</div>
                
                  {/* Content */}
                  <div id="csa-section" className="CSA">
                    <div><img className="photo-img" src={csa01}/></div>
                    <div className="filler-cap">Trying out a Lunar Rover VR Simulation! 🌑</div>
                    <div><img className="photo-img" src={csa02}/></div>
                    <div className="filler-cap">Another pic with the iconic Canada Arm Bar Thing 🦾</div>
                    <div><img className="photo-img" src={csa07}/></div>
                    <div className="filler-cap">Rocket 🚀</div>
                    <div><img className="photo-img" src={csa04}/></div>
                    <div className="filler-cap">ISS 🛰️</div>
                    <div><img className="photo-img" src={csa03}/></div>
                    <div className="filler-cap">3D csa</div>
                    <div><img className="photo-img" src={csa05}/></div>
                    <div className="filler-cap">Christmas 🎄</div>
                    <div className="photo-heading">I ♥ CSA 🚀🌌 </div>
                  </div>
                    </div>
                  );
                  break;
                  case "Sunsets":
                    windowContent =(
                      <div>
                      <h1 className="photo-header">Pretty Sky 🌌</h1>
                      <div className="filler">Sunsets, sunrises, beautiful colors in the sky!</div>
                      <div className="filler">Yes, I am a sunset person...and a starry sky person too...🌠</div>
                      <div><img className="photo-img" src={sky1}/></div>
                      <div><img className="photo-img" src={sky2}/></div>
                      <div><img className="photo-img" src={sky3}/></div>
                      <div><img className="photo-img" src={sky4}/></div>
                      <div><img className="photo-img" src={sky5}/></div>
                      <div><img className="photo-img" src={sky8}/></div>
                      <div className="filler">Someone please take me to see the ✨ stars ✨...</div>
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
                updateWindowPosition={updateWindowPosition}
                updateWindowSize={updateWindowSize}
                bringToFront={() => bringToFront(windowName)} // Bring window to front on click
                zIndex={zIndex}  // Apply dynamic z-index
                x={windowPositions[windowName]?.x || 400}
                y={windowPositions[windowName]?.y || 100}
                width={windowSizes[windowName]?.width || 700}
                height={windowSizes[windowName]?.height || 530}
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
