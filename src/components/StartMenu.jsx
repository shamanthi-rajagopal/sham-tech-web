//import React from "react";
import PropTypes from "prop-types";  // Import PropTypes
import "../styles/StartMenu.css";

const StartMenu = ({ open, toggleStartMenu }) => {
  return (
    <div className={`start-menu ${open ? "open" : ""}`}>
      <button onClick={toggleStartMenu}>Close</button>
      <div className="menu-items">
        <button onClick={() => alert("Opening Programs...")}>Programs</button>
        <button onClick={() => alert("Opening Documents...")}>Documents</button>
        <button onClick={() => alert("Opening Settings...")}>Settings</button>
        <button onClick={() => alert("Shutting Down...")}>Shut Down</button>
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
