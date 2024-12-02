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
          href="https://github.com/shamanthi-rajagopal"
          onClick={(event) => handleLinkClick(event)} target="_blank" rel="noopener noreferrer"
        >
          Programs
        </a>
        <a href="/documents" onClick={toggleStartMenu}>Documents</a>
        <a href="/settings" onClick={toggleStartMenu}>Settings</a>
        <a href="/shutdown" onClick={toggleStartMenu}>Shut Down</a>
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
