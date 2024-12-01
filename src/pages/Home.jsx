import "../styles/Home.css";
import profileImage from "../assets/images/profile1.jpg";
import star from "../assets/images/bluestar.png";
import computer from "../assets/images/computer.png";
import space from "../assets/images/space.png";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Navbar */}
      <div className="navbar">
      <a href="/" className="nav-icon">
        <img src={star}  alt="Home Icon" className="nav-icon" />
      </a>

        <div className="navbar-buttons">
          <a href="https://github.com/shamanthi-rajagopal" target="_blank" rel="noopener noreferrer" className="nav-button">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shamanthi-rajagopal/" target="_blank" rel="noopener noreferrer" className="nav-button">
            LinkedIn
          </a>
          <a href="https://github.com/shamanthi-rajagopal/shamanthi-rajagopal/blob/main/Shamanthi_Public__Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-button">
            Resume
          </a>
          <Link to="/tech" className="nav-icon1"><img src={computer} alt="Portfolio Icon" className="nav-icon1" /></Link>
          <Link to="/my-world" className="nav-icon1"><img src={space} alt="Portfolio Icon" className="nav-icon2" /></Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="text-container">
          <h1 className="typewriter start">Hello World!</h1>
          <h2 className="typewriter delay-1">I&apos;m...</h2>
          <h1 className="fade-in">
            <span className="first-name">Shamanthi</span>
            <span className="last-name">Rajagopal</span>
          </h1>
          <h3 className="end delay-2">Engineer, Tech Innovator, Lifelong Learner</h3>
          <button className="button" onClick={() => navigate("/tech")}>
            Explore My Portfolio
          </button>
        </div>
        <div className="photo-container">
          <div className="polaroid">
            <img src={profileImage} alt="Your photo" className="polaroid-image" />
            <p className="caption">Me @ CSA</p>
          </div>
          <button className="button" onClick={() => navigate("/my-world")}>
            Enter My World
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="choose">
          I couldn&apos;t choose one style so I did both! [ click the buttons to see what I mean :) ]
        </p>
        <p className="copy">Shamanthi Rajagopal &copy; 2025</p>
      </footer>
    </div>
  );
};

export default Home;
