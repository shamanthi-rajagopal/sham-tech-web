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
import about from "../assets/images/smile.png";
import project from "../assets/images/computer-home.png";
import experience from "../assets/images/suitcase.png";
import mail from "../assets/images/mail.png";
import Background from "../assets/images/window-background.png";
import Background1 from "../assets/images/windowsblue.png";
import Background2 from "../assets/images/pixelspace.png";
import Background3 from "../assets/images/pixelgalaxy.png";
import Background4 from "../assets/images/pixelspace3.png";
import Background5 from "../assets/images/bluesky.jpg";
import Background6 from "../assets/images/pinksky.png";
import linkedin from "../assets/images/linkedin-1.png";
import github from "../assets/images/github-1.png";
import email from "../assets/images/email-1.png";
/*import youtube from "../assets/images/youtube.png";*/
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
import aboutintro from "../assets/photos/sham-4.jpg";
import spacesham from "../assets/photos/space-sham.jpg";
import robosham from "../assets/photos/robo-sham.jpg";
import funsham from "../assets/photos/sham-11.jpg";
import funsham1 from "../assets/photos/sham-2.jpg";
import funsham2 from "../assets/photos/shamsky.jpg";
import robo from "../assets/photos/robo.jpg";
import ball1 from "../assets/photos/ball1.jpg";
import ball2 from "../assets/photos/ball2.jpg";
import ball3 from "../assets/photos/ball3.jpg";
import ball4 from "../assets/photos/ball4.jpg";
import ball5 from "../assets/photos/ball5.jpg";



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

  const handleHomeClick = (section) => {
    setActiveSection(section);
    // Logic to open the portfolio window or show the content
    openWindow("Portfolio"); // Assuming you have a way to set the window type
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
          newWindowPositions[windowName] = { x: 320, y: 25 };
          newWindowSizes[windowName] = { width: 920, height: 630 };
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
                  <div className="home-text">
                    Dive into my world of <strong><u>TECH</u></strong>—uncover my journey, creations, and contributions.
                  </div>
                  <div className="home-text-1">
                    (Click around to explore my tech portfolio - it operates like any computer!)
                  </div>
                  <br></br>
            
                  {/* Portfolio Navigation Buttons */}
                  <div className="portfolio-home-container">
                  <div className="portfolio-home-buttons">
                  <button
                    className="portfolio-home-button"
                    onClick={() => handleHomeClick("about")}
                  >
                    About Me
                    <img className="home-button-icon-smile" src={about}/>
                  </button>
                  <button
                    className="portfolio-home-button"
                    onClick={() => handleHomeClick("projects")}
                  >
                    Projects
                    <img className="home-button-icon" src={project}/>
                  </button>
                  <button
                    className="portfolio-home-button"
                    onClick={() => handleHomeClick("experiences")}
                  >
                    Experiences
                    <img className="home-button-icon" src={experience} />
                  </button>
                  <button
                    className="portfolio-home-button"
                    onClick={() => handleHomeClick("contact")}
                  >
                    Contact
                    <img className="home-button-icon" src={mail} />
                  </button>
                </div>

                  </div>
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
                          <h2 className="portfolio-contact-header">About Me</h2>
                          <div className="about-intro-container">
                          <div className="about-intro-text">
                            <p>
                              Hello there👋! My name is <a href="https://www.linkedin.com/in/shamanthi-rajagopal/" target="_blank" className="about-intro-here">Shamanthi Rajagopal</a> and I am a Computer Engineering Student at the University of Waterloo. This section showcases a glimpse into my world and is the essence of who I am (well... tech-wise... mostly). I hope you enjoy reading through it and the rest of my portfolio! If you have any questions or comments feel free to reach out to me or connect with me <button
                              className={`about-intro-here ${activeSection === "contact" ? "active" : ""}`}
                              onClick={() => handleNavClick("contact")}>here</button>. Happy Exploring 👾!
                            </p>
                          </div>
                          <div className="about-intro-img-container">
                            <img className="about-intro-img" src={aboutintro} alt="About Intro" />
                            <div className="about-intro-caption">That's Me 🙂‍↔️!</div>
                          </div>
                        </div>

                        <br></br>
                        <div className="about-eng">Why Engineering?</div>
                        <div className="about-eng-text"><p>
                            When I was a kid, I always loved MATH! Whether it was acing multiplication tables or solving for x and y, math was my thing. I thought my obsession with math would last forever, but reality hit when people started asking what I wanted to be when I grew up. That’s when I realized math alone wouldn’t pave a career path.  
                            After some pondering during my early high school days, I discovered something else that fascinated me: <b>TECH!</b> I grew up surrounded by it—my dad’s various <u>retro</u> Windows computers, my first Xbox 360 (which I still treasure today), and more.  
                            Then I learned about engineering and how engineers create amazing gadgets. I didn’t fully understand their role at the time, but I loved the idea of making my own tech. Plus, when I heard engineers use A LOT OF MATH, that sealed the deal.  
                          </p>
                            <p> During my start to university, I learned the importance of engineers and their impact on society. Engineers create new innovations and solve impossible problems, to help improve the future.
                            I realized that I had made the right choice back then. I wanted to be an engineer. An <b>impactful engineer </b> who helps people through my creations, and makes their lives better.</p>
                            <p>I am currently expanding my engineering skill set and experiences for both of my passions of software and hardware (hence why I choose comp eng). I have been learning through school and online courses, working on design teams, internships, and creating really cool projects to expand my knowledge and get my hands dirty. Projects (personal or hackathons) are my favourite method of learning and expanding my knowledge since it allows me to add my own creativity and personalization,
                              while focusing on my own desired objectives and goals.
                              If you're curious about what I've crafted, check out my projects <button className={`about-intro-here ${activeSection === "projects" ? "active" : ""}`} onClick={() => handleNavClick("projects")}>here</button>.
                            </p>
                            <br></br>
                           </div>
                           <div className="about-eng">Areas of Interest</div>
                           <div className="about-interest-text">
                           <p>As a well-rounded and slightly indecisive person, I've consistently looked for opportunities to explore various areas, and I pride myself on being versatile.
                            That's why I work multiple types of jobs, listen to a vast number of different music genres, and why I like to embrace skills from different sectors in the tech industry.
                            At the moment, I am drawn to 3 types of tech sectors:
                           </p>
                           <br></br>
                           <div className="about-space-container">
                            <div className="about-space">
                              <div className="about-space-header">Space</div>
                              <p>
                                When I was younger, I was absolutely fascinated by the wonders of outer space. Even though I wasn’t a big fan of reading, I would always bring home a new library book to dive into planets, galaxies, and the mysteries of the universe. Space ignited my love for sci-fi and sparked my admiration for the breathtaking beauty of the stars in the universe 🌠.  
                                However, as I grew older, I took a LONG hiatus from my passion for space exploration to focus on high school (plus, my fear of heights dashed my dreams of becoming an astronaut). When it came time to choose a field of study, I debated between aerospace and computer engineering and ultimately chose the latter, assuming my space dreams were over.  
                                That all changed when I began interning at the Canadian Space Agency. I realized just how many opportunities there are for engineers in the space tech industry. Now, I’m more determined than ever to make my mark in this incredible field!
                              </p>
                            </div>
                            <div className="about-space-img-container">
                              <img className="about-space-img" src={spacesham} alt="Space and Shamanthi" />
                              <div className="about-intro-caption">Interstellar...a cosmic masterpiece 🪐</div>
                            </div>
                          </div>

                          
                          <br></br>
                          <div className="about-robo-container">
                           <div className="about-robotics">
                           <div className="about-space-header">Robotics & Embedded Systems</div>
                            <p>I have had my fair share of experiences with robotics. From being on my high school robotics team to watching futuristic & dystopian shows, I always thought this cybernetic tech was next level. I am now getting into the more theoretical
                              concepts for robots and embedded systems, and I am excited to develop more in this area through projects and internships 🤖.
                            </p>
                            </div>
                            </div>
                            <br></br>
                            <div className="about-ML">
                           <div className="about-space-header">ML & AI</div>
                            <p>Machine learning and artificial intelligence as a whole is a hot topic right now, and I've hoped on the trend too. In my opinon, the idea of not only mimicing human intelligence but exponentially optimizing
                              our actions through advance calculations, pattern recognition, and data-driven decision-making is not just fascinating but transformative. I never really believed in the whole robots will take over the world, but I have a feeling AI will 🧠!
                            </p>
                            </div>
                           <p className="interest-final"><i>(it is cool to see the overlap that is present between these sectors)</i></p>

                           <div className="about-robo-img-container">
                            <div className="about-robo-img-wrapper">
                              <img className="about-robo-img" src={robo} alt="Robot Image 1" />
                              <div className="about-intro-caption">Our Robot ⚙️</div>
                            </div>
                            <div className="about-robo-img-wrapper">
                              <img className="about-robo-img" src={robosham} alt="Shamanthi with Robot" />
                              <div className="about-intro-caption">FRC Programming Techie 💻 </div>
                            </div>
                          </div>
                          <br />


                          <div className="about-eng">Non-Tech Side Quests</div>
                          <div className="about-interest-text">
                           <p> I know I intended for this portfolio to only display my tech-savviness, but I couldn't resist. I may not have many hobbies...yet (I know I must be SUCH a boring person 😒), but sometimes when I'm not studying, building projects, or working for an internship, I do have some time to explore my other passions.
                           </p>
                           </div>
                          
                            <br></br>
                           <div className="about-space-container">
                           <div className="about-space">
                           <div className="about-space-header">Sports</div>
                           <p>
                                Growing up, I played numerous sports because I valued staying active, and I loved the thrill of competing and collaborating with dynamic teams. <b><i>Basketball</i></b> was my go-to and all-time favorite! I started playing when I was just five years old and essentially grew up with the sport. Over the years, I played for many competitive teams, attended several training camps, and watched countless games.  
                                However, basketball wasn’t always easy. The game was physically and mentally demanding, and things didn’t always go my way. Despite the challenges, I’m genuinely grateful for every setback and triumph I experienced on the court.
                              </p>
                            </div>
                            <div className="about-space-img-container">
                            <img className="about-ball-img" src={ball5}/>
                            <div className="about-intro-caption">Your fav baller 🏀 </div>
                          </div>
                          </div>
                            <p>
                            To me, basketball wasn’t just a game—it was a lesson in dedication and perseverance. It taught me the importance of commitment, grit, and resilience in the face of adversity. The sport shaped my mindset, encouraging me to push through obstacles and stay mentally and physically tough. Ultimately, the lessons I learned on the court extended far beyond basketball and into my everyday life.  
                            Beyond playing, I now work as a basketball coach and referee. I truly value my ongoing involvement in the sport and take pride in being a positive role model for the athletes I train. Basketball will always hold a special place in my heart, and if you’re up for the challenge, <u>let’s play a 1v1!</u>
                            </p>
                            <div className="about-robo-img-container">
                            <div className="about-robo-img-wrapper">
                              <img className="about-ball1-img" src={ball3} />
                              <div className="about-intro-caption">I made that 3-pointer!</div>
                            </div>
                            <div className="about-robo-img-wrapper">
                              <img className="about-ball1-img" src={ball4} />
                              <div className="about-intro-caption"> First place with the kiddos 🤩</div>
                            </div>
                          </div>
                          <br></br>
                          <div className="about-space-header">Trying New Things?</div>
                          <p>
                          Trying new things and exploring unique hobbies is one of my personal goals. As someone who strives for perfection and constantly works hard, I’ve come to realize that balance is essential for both success and happiness (and to avoid burnout).
                          Some people jokingly say I “live under a rock 🪨,” so I’m determined to beat the Patrick Star ⭐ allegations by stepping out of my comfort zone and experiencing new things with my family and friends!
                          </p>
                          <div className="about-robo-img-container">
                            <div className="about-robo-img-wrapper">
                              <img className="about-hobbies" src={funsham} />
                              <div className="about-intro-caption">Roasting a marshmello @ a bonfire 🔥🏕️</div>
                            </div>
                            <div className="about-robo-img-wrapper">
                              <img className="about-hobbies" src={funsham2} />
                              <div className="about-intro-caption"> Admiring the view 🌅</div>
                            </div>
                            <div className="about-robo-img-wrapper">
                              <img className="about-hobbies" src={funsham1} />
                              <div className="about-intro-caption"> Exploring DT and trying yummy foods 🍙</div>
                            </div>
                          </div>
                          <br></br>
                          <p>That's all about me for now...click around my portfolio for more!</p>
                          <br></br>
                          </div>
                        </div>
                      )}
                      {activeSection === "projects" && (
                        <div className="portfolio-projects">
                          <h2 className="portfolio-contact-header">Projects</h2>
                          <div className="about-interest-text">Here are some of the projects I’ve worked on...</div>
                        </div>
                      )}
                      {activeSection === "experiences" && (
                        <div className="portfolio-experiences">
                          <h2 className="portfolio-contact-header">Experiences</h2>
                          <p>Here's a list of my relevant work and academic experiences...</p>
                        </div>
                      )}
                      {activeSection === "contact" && (
                        <div className="portfolio-contact">
                          <h2 className="portfolio-contact-header">Contact & Socials</h2>
                          <p className="portfolio-contact-text">If you want to get in touch, feel free to reach out!</p>
                          <br></br><br></br>
                          <div className="portfolio-contact-buttons">
                          <a href="https://www.linkedin.com/in/shamanthi-rajagopal/" target="_blank" rel="noopener noreferrer" className="contact-button">
                            <img src={linkedin} alt="LinkedIn"></img>
                            LinkedIn
                          </a>
                          <a href="https://github.com/shamanthi-rajagopal" target="_blank" rel="noopener noreferrer" className="contact-button">
                            <img src={github} alt="GitHub"></img>
                            GitHub
                          </a>
                          <a href="mailto:s2rajago@uwaterloo.ca?subject=Inquiry" target="_blank" rel="noopener noreferrer" className="contact-button">
                            <img src={email} alt="Email"></img>
                            Email
                          </a>
                        </div>
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
