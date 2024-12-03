import { useState, useRef } from "react";
import PropTypes from "prop-types";
import "../styles/Window.css";
import square from "../assets/images/square1.png";

const Window = ({ name, closeWindow, toggleTaskbarButton, minimizeWindow, isMinimized }) => {
  const [position, setPosition] = useState({ x: 300, y: 100 });
  const [size, setSize] = useState({ width: 700, height: 530 });
  const [isHidden, setIsHidden] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const positionRef = useRef(position);
  const sizeRef = useRef(size);

  const dragStart = useRef({ x: 0, y: 0 });
  const resizingStart = useRef({ x: 0, y: 0 });

  const dragging = useRef(false);
  const resizing = useRef(false);

  const handlePointerMove = (e) => {
    if (dragging.current) {
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;

      const newPosition = {
        x: positionRef.current.x + deltaX,
        y: positionRef.current.y + deltaY,
      };

      const maxX = window.innerWidth - size.width;
      const maxY = window.innerHeight - size.height;

      const clampedPosition = {
        x: Math.max(0, Math.min(newPosition.x, maxX)),
        y: Math.max(0, Math.min(newPosition.y, maxY)),
      };

      positionRef.current = clampedPosition;
      setPosition(clampedPosition);

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
      sizeRef.current = {
        width: Math.max(minWidth, newSize.width),
        height: Math.max(minHeight, newSize.height),
      };
      setSize(sizeRef.current);

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

  const hideWindow = () => {
    setIsHidden(true);
    toggleTaskbarButton(name, true); // Notify the Taskbar to toggle its state
  };

  const showWindow = () => {
    setIsHidden(false);
    toggleTaskbarButton(name, false); // Notify the Taskbar to toggle its state
  };

  const toggleFullScreen = () => {
    if (isFullScreen) {
      setSize({ width: 700, height: 530 });
      setPosition({ x: 100, y: 100 });
    } else {
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    setIsFullScreen((prev) => !prev);
  };

  const handleMinimize = () => {
    minimizeWindow(name); // Minimize the window via the Taskbar
  };

  if (isMinimized || isHidden) {
    return null;
  }

  return (
    <div
      className="window"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <div
        className="window-header"
        onPointerDown={handlePointerDown}
        style={{
          cursor: "default",
          zIndex: 10,
          width: `${size.width - 26}px`,
        }}
      >
        <span>{name}</span>
        <div className="window-controls">
          <button className="min" onClick={handleMinimize}>_</button>
          <button onClick={toggleFullScreen}>
            <img className="square" src={square} />
          </button>
          <button onClick={() => closeWindow(name)}>X</button>
        </div>
      </div>
      <div className="test">Test</div>
      <div className="window-container">
        <div className="window-content">
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </div>
        <div
          className="resize-handle"
          onPointerDown={handlePointerDown}
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            width: "20px",
            height: "20px",
            cursor: "se-resize",
          }}
        />
      </div>
      <p className="copyright">Shamanthi Rajagopal &copy; 2025</p>
    </div>
  );
};

Window.propTypes = {
  name: PropTypes.string.isRequired,
  closeWindow: PropTypes.func.isRequired,
  toggleTaskbarButton: PropTypes.func.isRequired,
  minimizeWindow: PropTypes.func.isRequired,
  isMinimized: PropTypes.bool.isRequired, // Prop to indicate whether the window is minimized
};

export default Window;
