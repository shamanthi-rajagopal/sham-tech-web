import "../styles/Home.css";
import profileImage from "../assets/images/profile1.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="navbar">
        <h1>My Portfolio</h1>
      </div>
      {/* Main Content */}
      <div className="content">
        <div className="text-container">
          <h1 className="typewriter start">Hello World!</h1>
          <h2 className="typewriter delay-1">I'm...</h2>
          <h1 className="fade-in">
            <span className="first-name">Shamanthi</span>
            <span className="last-name">Rajagopal</span>
            </h1>
          <h3 className="end delay-2">Engineer, Tech Innovator, Lifelong Learner</h3>
        </div>
        <div className="photo-container">
          <div className="polaroid">
            <img src={profileImage} alt="Your photo" className="polaroid-image" />
            <p className="caption">Me @ CSA</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="choose"> I couldn't choose one style so I did both! [ click the buttons to see what I mean :) ]</p>
        <p>&copy; 2025 Shamanthi Rajagopal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
