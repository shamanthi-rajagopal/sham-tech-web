import { useState, useRef } from "react";
import PropTypes from "prop-types";
import "../styles/Window.css";

const Window = ({ name, closeWindow }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 700, height: 530 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const positionRef = useRef(position);
  const sizeRef = useRef(size);

  const dragStart = useRef({ x: 0, y: 0 });
  const resizingStart = useRef({ x: 0, y: 0 });

  const dragging = useRef(false);
  const resizing = useRef(false);

  // Handle window dragging
  const handlePointerMove = (e) => {
    if (dragging.current) {
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;

      // Calculate new position
      const newPosition = {
        x: positionRef.current.x + deltaX,
        y: positionRef.current.y + deltaY,
      };

      // Prevent the window from going off the screen on the top, left, or right side
      const maxX = window.innerWidth - size.width;
      const maxY = window.innerHeight - size.height;

      // Ensure the window doesn't move beyond the viewport
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

      // Prevent the window from resizing beyond the right or bottom side
      const maxWidth = window.innerWidth - position.x;
      const maxHeight = window.innerHeight - position.y;

      // Ensure the window doesn't resize beyond the viewport
      const clampedSize = {
        width: Math.max(100, Math.min(newSize.width, maxWidth)),
        height: Math.max(100, Math.min(newSize.height, maxHeight)),
      };

      sizeRef.current = clampedSize;
      setSize(clampedSize);

      resizingStart.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handlePointerDown = (e) => {
    // If clicked on the window header, start dragging
    if (e.target.classList.contains("window-header")) {
      setIsDragging(true);
      dragging.current = true;
      dragStart.current = { x: e.clientX, y: e.clientY };

      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerup", handlePointerUp);
    }

    // If clicked on the resize handle, start resizing
    if (e.target.classList.contains("resize-handle")) {
      setIsResizing(true);
      resizing.current = true;
      resizingStart.current = { x: e.clientX, y: e.clientY };

      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerup", handlePointerUp);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    dragging.current = false;
    resizing.current = false;
    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerup", handlePointerUp);
  };

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
        }}
      >
        <span>{name}</span>
        <button onClick={() => closeWindow(name)}>X</button>
      </div>
      <div className="window-content">
        <p>This is a {name} window content.</p>
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
          cursor: "se-resize", // Bottom-right resize cursor
        }}
      />
    </div>
  );
};

Window.propTypes = {
  name: PropTypes.string.isRequired,
  closeWindow: PropTypes.func.isRequired,
};

export default Window;
