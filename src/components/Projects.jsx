import { useState, useEffect } from "react";
import neuro from "../assets/project/neuroguard.png";
import neuro1 from "../assets/project/neuro1.png";
import neurovid from "../assets/project/neurovid.mp4";
import fashion from "../assets/project/FashioNova.png";
import fashion1 from "../assets/project/FashioNova2.png";
import fashionvid from "../assets/project/fashionova.mp4"
import tucantravel from "../assets/project/tucantravel.png";
import colourai from "../assets/project/colourai.png";
import myfocuslibrary from "../assets/project/myfocuslibrary.png";
import geesespotter from "../assets/project/geesespotter.jpg";
import humorhaven from "../assets/project/humorhaven.png";
import seniorminder from "../assets/project/seniorminder.jpg";
import seniorminder1 from "../assets/project/seniorminder1.png";
import seniorminder2 from "../assets/project/seniorminder2.png";
import skateboard from "../assets/project/skateboardbattery1.png";
import skateboard1 from "../assets/project/skateboardbattery2.png";
import skateboard2 from "../assets/project/skateboardbattery.png";

/* This page is to organize and add all the project content here, styling however is still in Tech Page CSS */

const Projects = [
    {
      id: 1,
      title: "NeuroGuard",
      category: "AI/ML",
      image: neuro,
      date: "2024-09-17", 
      shortDescription: "A full-stack app designed for Alzheimer's care, featuring computer vision technology for fall detection and an AI-powered personal chatbot to ensure patient safety and streamline communication in critical situations.",
      customContent: (
          <div className="project-expand-container">
          <h1 className="project-expand-title">NeuroGuard</h1>
        
          <div className="project-expand-image-container">
          <video className="project-expand-vid" src={neurovid} alt="NeuroGuard" loop autoPlay muted />
          <div className="project-expand-image-side">
            <img className="project-expand-image-1-neuro" src={neuro} alt="NeuroGuard" />
            <img className="project-expand-image-2-neuro" src={neuro1} alt="NeuroGuard" />
          </div>
        </div>


          <div className="project-expand-content">
            {/* First row: Overview and Features */}
            <div className="project-expand-text">
              <h3>Overview</h3>
              <p>
              NeuroGuard is a full-stack application inspired by my grandmother, who is at risk of falling due to mild dementia and dizziness.
               The project uses AI/ML technologies to support Alzheimer's patients and caregivers, featuring fall detection, an AI chatbot for caregiver assistance, and an emergency alert system.
                The backend leverages OpenCV and MediaPipe for real-time motion analysis, while the chatbot integrates GPT-4 and Voiceflow for personalized support. The front-end, built with React.js and Flask, ensures a seamless user experience. 
                This project helped me gain valuable experience in full-stack development, machine learning, and real-time data processing, with plans to expand its impact by providing behavioral insights to healthcare professionals.</p>
            </div>
            <div className="project-expand-features">
              <h3>Features</h3>
              <ul>
                <li>- Real-time fall detection with computer vision</li>
                <li>- AI chatbot for personalized caregiver support</li>
                <li>- Emergency alerts to caregivers and healthcare providers</li>
              </ul>
            </div>
        
            {/* Second row: Timeline and Tools */}
            <div className="project-expand-timeline">
              <h3>Timeline</h3>
              <ul>
                <li>36 hours (Hack The North 2024)</li>
              </ul>
            </div>
            <div className="project-expand-tools">
              <h3>Skills & Tools</h3>
              <ul>
                <li>OpenCV</li><li>TensorFlow</li><li>MediaPipe</li><li>Python</li><li>Flask</li><li>React</li><li>JavaScript</li><li>Axios</li>
              </ul>
            </div>
          </div>
        
          <div className="project-expand-buttons">
          <div className="project-expand-buttons">
        <button
          className="project-expand-demo"
          onClick={() => window.open("https://devpost.com/software/neuroguard-1cbg2d", "_blank")}
        >
          Demo
        </button>
        <button
          className="project-expand-code"
          onClick={() => window.open("https://github.com/shamanthi-rajagopal/NeuroGuard", "_blank")}
        >
          Github
        </button>
           </div>
          </div>
        </div>
        

      ),
    },
    
    {
      id: 2,
      title: "FashioNova",
      category: "AI/ML",
      image: fashion,
      date: "2024-10-06", 
      shortDescription: "A cutting-edge full-stack app that revolutionizes shopping with AI-powered virtual try-ons and personalized style recommendations.",
      customContent: (
          <div className="project-expand-container">
          <h1 className="project-expand-title">FashioNova</h1>
        
          <div className="project-expand-image-container">
          <video className="project-expand-vid" src={fashionvid} alt="NeuroGuard" loop autoPlay muted />
          <div className="project-expand-image-side">
            <img className="project-expand-image-1" src={fashion} alt="NeuroGuard" />
            <img className="project-expand-image-2" src={fashion1} alt="NeuroGuard" />
          </div>
        </div>


          <div className="project-expand-content">
            {/* First row: Overview and Features */}
            <div className="project-expand-text">
              <h3>Overview</h3>
              <p>
              FashioNova is a full-stack application leveraging AI, VR/AR, and computer vision to revolutionize the shopping experience. Users can input prompts and virtually try on clothes through a real-time video overlay, powered by WebRTC and Cloudflare AI. This feature streamlines shopping, allowing users to "Try before they buy" and enabling fashion retailers to enhance customer engagement.
              The backend, developed in Python with Flask, handles real-time video processing and AI-driven clothing recommendations. The frontend, built with React.js and designed using Figma, offers a polished and user-friendly interface. A custom machine learning model was trained to classify and label clothing data, demonstrating advanced skills in data processing and AI integration.
              This project highlights expertise in full-stack development, computer vision, and machine learning while overcoming challenges like WebSocket optimization and API integration. FashioNova showcases technical innovation and a commitment to sustainable, inclusive fashion solutions.
              </p>
              </div>
            <div className="project-expand-features">
              <h3>Features</h3>
              <ul>
                <li>- Virtual Try-Ons: Real-time video overlay using VR/AR and computer vision.</li>
                <li>- AI-Powered Clothing Recommendations: Suggests outfits based on user prompts.</li>
                <li>- Custom Machine Learning Model: Classifies and labels diverse clothing data.</li>
              </ul>
            </div>
        
            {/* Second row: Timeline and Tools */}
            <div className="project-expand-timeline">
              <h3>Timeline</h3>
              <ul>
                <li>36 hours (Hack The Valley 2024)</li>
              </ul>
            </div>
            <div className="project-expand-tools">
              <h3>Skills & Tools</h3>
              <ul>
                <li>OpenCV</li><li>TensorFlow</li><li>MediaPipe</li><li>VR/AR</li><li>ML model</li><li>WebRTC</li><li>Socket.IO</li><li>Python</li><li>Flask</li><li>React & JSX</li>
              </ul>
            </div>
          </div>
        
          <div className="project-expand-buttons">
          <div className="project-expand-buttons">
        <button
          className="project-expand-demo"
          onClick={() => window.open("https://devpost.com/software/fashionova", "_blank")}
        >
          Demo
        </button>
        <button
          className="project-expand-code"
          onClick={() => window.open("https://github.com/shamanthi-rajagopal/FashioNova", "_blank")}
        >
          Github
        </button>
           </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "TuCanTravel",
      category: "AI/ML",
      image: tucantravel,
      date: "2024-02-06", 
      shortDescription: "An AI-powered travel companion, simplifying trip planning with personalized advice, interactive content, and an engaging chatbot experience for smarter, stress-free journeys.",
      customContent: (
          <div className="project-expand-container">
          <h1 className="project-expand-title">TuCanTravel</h1>
        
          <div className="project-expand-image-tucantravel-container">
          <img className="project-expand-image-tucantravel" src={tucantravel} />
          </div>


          <div className="project-expand-content">
            {/* First row: Overview and Features */}
            <div className="project-expand-text">
              <h3>Overview</h3>
              <p>
              TuCanTravel is a full-stack web application designed to optimize travel planning through advanced AI technology. This project features a user-friendly interface built with HTML, CSS, and JavaScript, where users can input trip details and receive tailored recommendations powered by the Cloudflare AI API. 
              The platform’s interactive chatbot provides in-depth answers to specific travel queries, ensuring a comprehensive and personalized experience. 
              The project showcases skills in front-end development, API integration, and backend logic, demonstrating the ability to connect intelligent AI systems with visually appealing, functional designs. TuCanTravel highlights creativity, adaptability, and technical problem-solving, making it an ideal solution for modern travel needs.
              </p>
              </div>
            <div className="project-expand-features">
              <h3>Features</h3>
              <ul>
                <li>- Personalized Travel Advice: Custom recommendations powered by Cloudflare AI.</li>
                <li>- Interactive AI Chatbot: Provides detailed answers to user travel queries. </li>
                <li>- User-Friendly Interface: Clean and intuitive design for easy navigation.</li>
              </ul>
            </div>
        
            {/* Second row: Timeline and Tools */}
            <div className="project-expand-timeline">
              <h3>Timeline</h3>
              <ul>
                <li>36 hours (ElleHacks 2024)</li>
              </ul>
            </div>
            <div className="project-expand-tools">
              <h3>Tools</h3>
              <ul>
                <li>API Integration</li><li>Cloudflare AI API</li><li>JavaScript</li><li>Node.js</li><li>HTML/CSS</li><li>Web hosting & Deployment</li><li>Git</li>
              </ul>
            </div>
          </div>
        
          <div className="project-expand-buttons">
          <div className="project-expand-buttons">
        <button
          className="project-expand-demo"
          onClick={() => window.open("https://devpost.com/software/tucantravel", "_blank")}
        >
          Demo
        </button>
        <button
          className="project-expand-code"
          onClick={() => window.open("https://github.com/liaorosemary/TuCanTravel", "_blank")}
        >
          Github
        </button>
           </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "ColourAI",
      category: "AI/ML",
      image: colourai,
      date: "2024-01-25", 
      shortDescription: "A machine learning web app that trains a neural network to predict the best text color (black or white) for readability on random backgrounds, demonstrating real-time AI/ML prediction and model training.",
      customContent: (
          <div className="project-expand-container">
          <h1 className="project-expand-title">ColourAI</h1>
        
          <div className="project-expand-image-tucantravel-container">
          <img className="project-expand-image-tucantravel" src={colourai} alt="NeuroGuard" />
          </div>


          <div className="project-expand-content">
            {/* First row: Overview and Features */}
            <div className="project-expand-text">
              <h3>Overview</h3>
              <p>
              ColourAI is a web-based project designed to explore AI and machine learning by training a neural network to predict the best text color for readability on varying background hues. 
              Using Brain.js, the app learns through self-testing and adjusts its predictions based on labeled data. Key features include random color generation and text visibility optimization. 
              This project provided hands-on experience with machine learning models, data preprocessing, and JavaScript-based AI frameworks. (Purpose of project was to learn more pratically about neural networks and AI/ML concepts).</p>
              </div>
            <div className="project-expand-features">
              <h3>Features</h3>
              <ul>
                <li>- Neural network training for text color prediction</li>
                <li>- Self-testing model with labeled data</li>
                <li>- Model adaptation through learning from data</li>
              </ul>
            </div>
        
            {/* Second row: Timeline and Tools */}
            <div className="project-expand-timeline">
              <h3>Timeline</h3>
              <ul>
                <li>2 days? (January 2024)</li>
              </ul>
            </div>
            <div className="project-expand-tools">
              <h3>Skills & Tools</h3>
              <ul>
                <li>Neural Networks</li><li>Data Preprocessing</li><li>Supervised Learning</li><li>Hyperparameter Tuning</li><li>Brain.js</li><li>JavaScript & HTML/CSS</li>
              </ul>
            </div>
          </div>
        
          <div className="project-expand-buttons">
          <div className="project-expand-buttons">
        <button
          className="project-expand-demo"
          onClick={() => window.open("https://shamanthi-rajagopal.github.io/ColourAI/", "_blank")}
        >
          Demo
        </button>
        <button
          className="project-expand-code"
          onClick={() => window.open("https://github.com/shamanthi-rajagopal/ColourAI", "_blank")}
        >
          Github
        </button>
           </div>
          </div>
        </div>
      ),
    },

    {
      id: 5,
      title: "My Focus Library",
      category: "Software",
      image: myfocuslibrary,
      date: "2023-08-10", 
      shortDescription: " A virtual library experience for when you can't visit the library to get into the ZONE.",
      customContent: (
          <div className="project-expand-container">
          <h1 className="project-expand-title">My Focus Library</h1>
        
          <div className="project-expand-image-tucantravel-container">
          <img className="project-expand-image-tucantravel" src={myfocuslibrary} />
          </div>


          <div className="project-expand-content">
            {/* First row: Overview and Features */}
            <div className="project-expand-text">
              <h3>Overview</h3>
              <p>
              My Focus Library is a web application designed to simulate the experience of a virtual library. 
              Aimed at students, it offers an alternative for those unable to access physical libraries. 
              The website incorporates various study features to enhance users' learning experience, such as a study timer and virtual study rooms. 
              Through this project, I gained valuable experience in front-end development and honed my skills in HTML, CSS, and JavaScript, allowing me to create a user-friendly interface and interactive features. 
              It reflects my creativity, as I built this project with the goal of providing educational support for students anytime and anywhere. </p></div>
            <div className="project-expand-features">
              <h3>Features</h3>
              <ul>
                <li>- User-friendly Interface: Simplified navigation to make the website accessible to all users.</li>
                <li>- Study Timer: Helps users manage time during study sessions to enhance productivity.</li>
                <li>- Virtual Library Simulation: Emulates a library setting online to support study sessions.</li>
              </ul>
            </div>
        
            {/* Second row: Timeline and Tools */}
            <div className="project-expand-timeline">
              <h3>Timeline</h3>
              <ul>
                <li>2 weeks (August 2023)</li>
              </ul>
            </div>
            <div className="project-expand-tools">
              <h3>Skills & Tools</h3>
              <ul>
                <li>Front-End Development</li><li>JavaScript</li><li>HTML/CSS</li><li>Git & Git Pages</li>
              </ul>
            </div>
          </div>
        
          <div className="project-expand-buttons">
          <div className="project-expand-buttons">
        <button
          className="project-expand-demo"
          onClick={() => window.open("https://shamanthi-rajagopal.github.io/MyFocusLibrary.github.io/", "_blank")}
        >
          Demo
        </button>
        <button
          className="project-expand-code"
          onClick={() => window.open("https://github.com/shamanthi-rajagopal/MyFocusLibrary.github.io/tree/main", "_blank")}
        >
          Github
        </button>
           </div>
          </div>
        </div>
      ),
    },

    {
      id: 6,
      title: "GeeseSpotter",
      category: "Software",
      image: geesespotter,
      date: "2023-11-10", 
      shortDescription: " A C++ console game that challenges players to uncover hidden geese using clues from neighboring fields, combining strategy with fun!",
      customContent: (
          <div className="project-expand-container">
          <h1 className="project-expand-title">GeeseSpotter</h1>
        
          <div className="project-expand-image-tucantravel-container">
          <img className="project-expand-image-tucantravel" src={geesespotter} />
          </div>


          <div className="project-expand-content">
            {/* First row: Overview and Features */}
            <div className="project-expand-text">
              <h3>Overview</h3>
              <p>
              GeeseSpotter is a text-based, single-player game developed in C++ that replicates a unique version of Minesweeper with a creative Waterloo twist. 
              The goal is to identify which fields contain geese by interpreting clues from neighboring fields that indicate the presence of geese through droppings. 
              This project allowed me to apply core programming concepts such as functions, bitwise operations, arrays, and dynamic memory allocation to build an engaging, interactive game. 
              Through this experience, I strengthened my skills in C++ and learned how to implement game logic, manage memory dynamically, and develop a console-based application with an emphasis on efficiency and user experience. 
              (Project's main purpose was to learn and develop skills mentioned =>)</p></div>
            <div className="project-expand-features">
              <h3>Features</h3>
              <ul>
                <li>- Console-Based Interface (Text-driven UI & engaging gaming experience).</li>
                <li>- 2D Board Layout (Interactive game environment).</li>
              </ul>
            </div>
        
            {/* Second row: Timeline and Tools */}
            <div className="project-expand-timeline">
              <h3>Timeline</h3>
              <ul>
                <li>1 Month (November 2023)</li>
              </ul>
            </div>
            <div className="project-expand-tools">
              <h3>Skills & Tools</h3>
              <ul>
                <li>C++</li><li>Game Development</li><li>Functions | Arrays | Bitwise Operations</li>
              </ul>
            </div>
          </div>
        
          <div className="project-expand-buttons">
          <div className="project-expand-buttons">
        <button
          className="project-expand-demo"
          onClick={() => window.open("https://drive.google.com/file/d/1ZNa1lu5cox61KNyAdE8FkkI9JPc11UOn/view", "_blank")}
        >
          Demo
        </button>
        <button
          className="project-expand-code"
          onClick={() => window.open("https://github.com/shamanthi-rajagopal/Geesespotter--C-plusplus-Game", "_blank")}
        >
          Github
        </button>
           </div>
          </div>
        </div>
      ),
    },
    
    {
      id: 7,
      title: "HumorHaven",
      category: "Software",
      image: humorhaven,
      date: "2024-01-10", 
      shortDescription: "A dynamic PHP-based website that connects users to a joke database, allowing them to search, add, and enjoy jokes, all with secure encryption.",
      customContent: (
          <div className="project-expand-container">
          <h1 className="project-expand-title">HumorHaven</h1>
        
          <div className="project-expand-image-tucantravel-container">
          <img className="project-expand-image-tucantravel" src={humorhaven} />
          </div>


          <div className="project-expand-content">
            {/* First row: Overview and Features */}
            <div className="project-expand-text">
              <h3>Overview</h3>
              <p>
              Humor Haven is an interactive website built using PHP and MySQL, hosted on an Apache web server. 
              The website serves as a fun, user-friendly platform for accessing a wide variety of jokes and puns, aimed at boosting personality and charm. 
              Users can browse jokes based on specific keywords or contribute their own to the site. 
              This project gave me hands-on experience with web development technologies such as PHP, HTML, and MySQL, and helped me sharpen my skills in server-side programming and database management. 
              Additionally, the website is encrypted to ensure security, demonstrating my ability to implement web security practices alongside dynamic web development. (Project was created to help practice new skills for internship - SWD intern @ PinkByte)</p></div>
            <div className="project-expand-features">
              <h3>Features</h3>
              <ul>
                <li>- Database-Driven: Usage of a robust MySQL database.</li>
                <li>- User-Generated Content: Feature to add and share jokes with the community.</li>
                <li>- Encryption: The site is encrypted to ensure secure user interactions and data handling.</li>
              </ul>
            </div>
        
            {/* Second row: Timeline and Tools */}
            <div className="project-expand-timeline">
              <h3>Timeline</h3>
              <ul>
                <li>6 hours (January 2024)</li>
              </ul>
            </div>
            <div className="project-expand-tools">
              <h3>Skills & Tools</h3>
              <ul>
                <li>MySQL</li><li>PHP</li><li>Apache Web Server</li><li>Database Mangement</li><li>Web Hosting</li><li>Encryption</li><li>HTML/CSS</li>
              </ul>
            </div>
          </div>
        
          <div className="project-expand-buttons">
          <div className="project-expand-buttons">
        <button
          className="project-expand-demo"
          onClick={() => window.open("https://www.youtube.com/watch?v=bEdtgVBG8zU", "_blank")}
        >
          Demo
        </button>
        <button
          className="project-expand-code"
          onClick={() => window.open("https://github.com/shamanthi-rajagopal/HumorHaven", "_blank")}
        >
          Github
        </button>
           </div>
          </div>
        </div>
      ),
    },

    {
      id: 8,
      title: "SeniorMinder",
      category: "Hardware",
      image: seniorminder,
      date: "2023-12-10", 
      shortDescription: "A microcontroller-powered alarm clock designed to assist the elderly, especially those with Alzheimer's or dementia, in managing their medication schedule with enhanced accessibility features.",
      customContent: (
          <div className="project-expand-container">
          <h1 className="project-expand-title">SeniorMinder</h1>
        
          <div className="project-expand-image-container">
          <img className="project-expand-vid" src={seniorminder} />
          <div className="project-expand-image-side">
            <img className="project-expand-image-1" src={seniorminder1}/>
            <img className="project-expand-image-2" src={seniorminder2}></img>
          </div>
        </div>


          <div className="project-expand-content">
            {/* First row: Overview and Features */}
            <div className="project-expand-text">
              <h3>Overview</h3>
              <p>
              SeniorMinder is an innovative hardware solution developed to support elderly individuals, particularly those with memory health issues like Alzheimer's and dementia. 
              This medicine alarm clock ensures that seniors take their medications on time, with added features designed to assist visually impaired and hard-of-hearing users. 
              The device is powered by an STM32 microcontroller and programmed using C & C++ (for testing) with Arduino, incorporating various electrical components and schematics to ensure reliability and ease of use. 
              The project was built with careful consideration of the user experience and technological design processes, ensuring that it effectively meets the needs of its target audience. 
              The result is a user-friendly, life-improving product that not only helps seniors with medication management but also provides them with an intuitive way to stay on track with their daily health regimen.
              </p></div>
            <div className="project-expand-features">
              <h3>Features</h3>
              <ul>
                <li>- STM32 Microcontroller: Provides reliable, efficient control for the device's functions.</li>
                <li>- Accessibility Features: Visual & audio cues to assist visually impaired and hard-of-hearing users.</li>
                <li>- Medicine Reminder (easy-to-use alarm system).</li>
              </ul>
            </div>
        
            {/* Second row: Timeline and Tools */}
            <div className="project-expand-timeline">
              <h3>Timeline</h3>
              <ul>
                <li>4 months (September 2023 - December 2023)</li>
              </ul>
            </div>
            <div className="project-expand-tools">
              <h3>Skills & Tools</h3>
              <ul>
                <li>STM32 Microcontroller</li><li>C & C++</li><li>Arduino</li><li>Electrical components & circuits</li><li>Schematics Design</li>
              </ul>
            </div>
          </div>
        
          <div className="project-expand-buttons">
          <div className="project-expand-buttons">
        <button
          className="project-expand-demo"
          onClick={() => window.open("https://drive.google.com/file/d/1Pf9fEsvhXH0x4DrDYoLy8TE1J7STuqTo/view", "_blank")}
        >
          Demo
        </button>
        <button
          className="project-expand-code"
          onClick={() => window.open("https://github.com/shamanthi-rajagopal/ECE_198_Microcontroller-Project", "_blank")}
        >
          Github
        </button>
           </div>
          </div>
        </div>
      ),
    },

    {
      id: 9,
      title: "E-Skateboard Battery Box",
      category: "Hardware",
      image: skateboard,
      date: "2024-06-10", 
      shortDescription: "Engineered a waterproof battery box for an electric skateboard, enhancing durability and optimizing balance for improved performance.",
      customContent: (
          <div className="project-expand-container">
          <h1 className="project-expand-title">E-Skateboard Battery Box</h1>
        
          <div className="project-expand-image-container">
          <img className="project-expand-vid" src={skateboard} />
          <div className="project-expand-image-side">
            <img className="project-expand-image-1-skate" src={skateboard1}/>
            <img className="project-expand-image-2-skate" src={skateboard2}></img>
          </div>
        </div>


          <div className="project-expand-content">
            {/* First row: Overview and Features */}
            <div className="project-expand-text">
              <h3>Overview</h3>
              <p>
              I helped design and engineer a waterproof battery box for an electric skateboard, enhancing durability and optimizing balance. 
              Using SolidWorks for precise CAD modeling, I incorporated material selection, waterproofing techniques, and manufacturing processes to protect the battery in harsh conditions. 
              I also focused on optimizing the center of gravity for improved stability and performance. This project involved a blend of mechanical and electrical engineering skills, including CAD design, material analysis, balance optimization, and hardware integration. (For Electrium Design Team @ UWaterloo).
             </p></div>
            <div className="project-expand-features">
              <h3>Features</h3>
              <ul>
                <li>- SolidWorks Modeling (Precise 3D model).</li>
                <li>- Waterproof Design.</li>
                <li>- Optimized Balance.</li>
              </ul>
            </div>
        
            {/* Second row: Timeline and Tools */}
            <div className="project-expand-timeline">
              <h3>Timeline</h3>
              <ul>
                <li>2 months (May 2024 - June 2024)</li>
              </ul>
            </div>
            <div className="project-expand-tools">
              <h3>Skills & Tools</h3>
              <ul>
                <li>CAD Desigin</li><li>SolidWorks</li><li>Material Selection</li><li>Manufacturing Techniques (prototyping, assembly)</li><li>3D Printing</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

  ];
  
export default Projects;
