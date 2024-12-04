import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/Window.css";
import square from "../assets/images/square1.png";

const Window = ({
  name,
  closeWindow,
  toggleTaskbarButton,
  minimizeWindow,
  isMinimized,
  x = 400, // Default x position
  y = 100, // Default y position
  width = 700, // Default width
  height = 530, // Default height
  isFullScreen: initialFullScreen = false,
  updateWindowPosition,
  content, // Dynamic content as a prop
}) => {
  const [currentPosition, setCurrentPosition] = useState({ x, y });
  const [currentSize, setCurrentSize] = useState({ width, height });
  const [currentFullScreen, setCurrentFullScreen] = useState(initialFullScreen);

  const positionRef = useRef(currentPosition);
  const sizeRef = useRef(currentSize);
  const previousStateRef = useRef({ position: currentPosition, size: currentSize });
  const minimizedStateRef = useRef({ position: currentPosition, size: currentSize });

  const dragStart = useRef({ x: 0, y: 0 });
  const resizingStart = useRef({ x: 0, y: 0 });

  const dragging = useRef(false);
  const resizing = useRef(false);

  useEffect(() => {
    if (updateWindowPosition) {
      updateWindowPosition(name, currentPosition);
    }
  }, [currentPosition, updateWindowPosition, name]);

  const handlePointerMove = (e) => {
    if (dragging.current) {
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;

      const newPosition = {
        x: positionRef.current.x + deltaX,
        y: positionRef.current.y + deltaY,
      };

      const maxX = window.innerWidth - currentSize.width;
      const maxY = window.innerHeight - currentSize.height;

      const clampedPosition = {
        x: Math.max(0, Math.min(newPosition.x, maxX)),
        y: Math.max(0, Math.min(newPosition.y, maxY)),
      };

      positionRef.current = clampedPosition;
      setCurrentPosition(clampedPosition);

      dragStart.current = { x: e.clientX, y: e.clientY };
    } else if (resizing.current) {
      const deltaX = e.clientX - resizingStart.current.x;
      const deltaY = e.clientY - resizingStart.current.y;

      const newSize = {
        width: sizeRef.current.width + deltaX,
        height: sizeRef.current.height + deltaY,
      };

      const minWidth = 200;
      const minHeight = 150;

      const clampedSize = {
        width: Math.max(minWidth, newSize.width),
        height: Math.max(minHeight, newSize.height),
      };

      sizeRef.current = clampedSize;
      setCurrentSize(clampedSize);

      resizingStart.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handlePointerDown = (e) => {
    if (e.target.classList.contains("window-header")) {
      dragging.current = true;
      dragStart.current = { x: e.clientX, y: e.clientY };

      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerup", handlePointerUp);
    }

    if (e.target.classList.contains("resize-handle")) {
      resizing.current = true;
      resizingStart.current = { x: e.clientX, y: e.clientY };

      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerup", handlePointerUp);
    }
  };

  const handlePointerUp = () => {
    dragging.current = false;
    resizing.current = false;
    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerup", handlePointerUp);
  };

  const toggleFullScreen = () => {
    const newFullScreen = !currentFullScreen;

    if (newFullScreen) {
      previousStateRef.current = { position: currentPosition, size: currentSize };

      setCurrentPosition({ x: 0, y: 0 });
      setCurrentSize({ width: window.innerWidth, height: window.innerHeight });
    } else {
      setCurrentPosition(previousStateRef.current.position);
      setCurrentSize(previousStateRef.current.size);
    }

    setCurrentFullScreen(newFullScreen);
    toggleTaskbarButton(name, newFullScreen);
  };

  const handleMinimize = () => {
    if (isMinimized) {
      setCurrentPosition(minimizedStateRef.current.position);
      setCurrentSize(minimizedStateRef.current.size);
    } else {
      minimizedStateRef.current = { position: currentPosition, size: currentSize };
      setCurrentPosition({ x: 0, y: window.innerHeight });
      setCurrentSize({ width: 0, height: 0 });
    }

    minimizeWindow(name);
    toggleTaskbarButton(name, !isMinimized);
  };

  if (isMinimized) {
    return null;
  }

  return (
    <div
      className="window"
      style={{
        top: `${currentPosition.y}px`,
        left: `${currentPosition.x}px`,
        width: `${currentSize.width}px`,
        height: `${currentSize.height}px`,
      }}
    >
      <div
        className="window-header"
        onPointerDown={handlePointerDown}
        style={{
          cursor: "default",
          zIndex: 1,
          width: `${currentSize.width - 26}px`,
        }}
      >
        <span>{name}</span>
        <div className="window-controls">
          <button className="min" onClick={handleMinimize}>
            _
          </button>
          <button onClick={toggleFullScreen}>
            <img className="square" src={square} alt="Full Screen" />
          </button>
          <button onClick={() => closeWindow(name)}>X</button>
        </div>
      </div>
      
      {/* Navbar: Sticks to top and has a blue background */}

      <div className="window-container">
        <div className="window-content">
          {content || <p>Default Content</p>} {/* Render dynamic content or default */}
        </div>
        <div className="resize-handle" onPointerDown={handlePointerDown} />
      </div>
      <div className="copyright">Shamanthi Rajagopal &copy; 2025</div>
    </div>
  );
};

Window.propTypes = {
  name: PropTypes.string.isRequired,
  closeWindow: PropTypes.func.isRequired,
  toggleTaskbarButton: PropTypes.func.isRequired,
  minimizeWindow: PropTypes.func.isRequired,
  isMinimized: PropTypes.bool.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  isFullScreen: PropTypes.bool,
  updateWindowPosition: PropTypes.func.isRequired,
  content: PropTypes.node,
};

export default Window;
