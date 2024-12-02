import { useState } from "react"; // Import useState
import PropTypes from "prop-types"; // Import PropTypes
import "../styles/Window.css";

const Window = ({ name, closeWindow }) => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleDrag = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - 50,
        y: e.clientY - 50,
      });
    }
  };

  const startDrag = () => {
    setDragging(true);
  };

  const stopDrag = () => {
    setDragging(false);
  };

  return (
    <div
      className="window"
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
      onMouseMove={handleDrag}
      onMouseUp={stopDrag}
    >
      <div className="window-header" onMouseDown={startDrag}>
        <span>{name}</span>
        <button onClick={() => closeWindow(name)}>X</button>
      </div>
      <div className="window-content">
        <p>This is a {name} window content.</p>
      </div>
    </div>
  );
};

// Add PropTypes validation for the props
Window.propTypes = {
  name: PropTypes.string.isRequired, // Expecting a string for the name prop
  closeWindow: PropTypes.func.isRequired, // Expecting a function for closeWindow
};

export default Window;
