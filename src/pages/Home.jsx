import "../styles/Home.css";
import profileImage from "../assets/images/profile1.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="navbar">
        <h1></h1>
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
          {/* Button in Text Container */}
          <button className="button" onClick={() => navigate("/tech")}>
            Explore My Portfolio
          </button>
        </div>
        <div className="photo-container">
          <div className="polaroid">
            <img src={profileImage} alt="Your photo" className="polaroid-image" />
            <p className="caption">Me @ CSA</p>
          </div>
          {/* Button in Photo Container, Below the Polaroid */}
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
