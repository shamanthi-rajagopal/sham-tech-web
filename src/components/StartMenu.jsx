import PropTypes from "prop-types";  // Import PropTypes
import "../styles/StartMenu.css";

const StartMenu = ({ open, toggleStartMenu }) => {
  const handleLinkClick = (event) => {
    // Prevent the toggleStartMenu function from being called when clicking the link
    event.stopPropagation();
  };

  const handleMenuClick = (event) => {
    // Prevent the toggleStartMenu function from being called when clicking inside the menu
    event.stopPropagation();
  };

  return (
    <div
      className={`start-menu ${open ? "open" : ""}`}
      onClick={toggleStartMenu}  // Toggles the menu on outside click
    >
      <div className="menu-name" onClick={handleMenuClick}>Shamanthi's System</div>
      <div className="menu-items" onClick={handleMenuClick}>
        <a
          href="https://github.com/shamanthi-rajagopal/shamanthi-rajagopal/blob/main/Shamanthi_Public__Resume.pdf"
          onClick={(event) => handleLinkClick(event)} target="_blank" rel="noopener noreferrer"
        >
          Resume
        </a>
        <a href="/my-world" onClick={toggleStartMenu}>My World</a>
        <a href="/" onClick={toggleStartMenu}>Main Page</a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          onClick={(event) => handleLinkClick(event)} target="_blank" rel="noopener noreferrer"
        >
          Shutdown
        </a>
      </div>
    </div>
  );
};

// Define prop types for validation
StartMenu.propTypes = {
  open: PropTypes.bool.isRequired,          // Expect open to be a boolean
  toggleStartMenu: PropTypes.func.isRequired, // Expect toggleStartMenu to be a function
};

export default StartMenu;
