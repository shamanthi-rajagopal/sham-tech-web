import { useState, useRef } from "react";
import PropTypes from "prop-types";
import "../styles/Window.css";
import square from "../assets/images/square1.png";

const Window = ({ name, closeWindow }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 700, height: 530 });
  const [isHidden, setIsHidden] = useState(false);

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

      sizeRef.current = newSize;
      setSize(newSize);

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
  };

  const showWindow = () => {
    setIsHidden(false);
  };

  const fullScreenWindow = () => {
    setPosition({ x: 0, y: 0 });
    setSize({ width: window.innerWidth, height: window.innerHeight });
  };

  if (isHidden) {
    return (
      <button onClick={showWindow} className="show-window-button">
        Show {name} Window
      </button>
    );
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
        <button className="min" onClick={hideWindow}>_</button>
        <button onClick={fullScreenWindow}>
          <img className="square" src={square}/>
        </button>
        <button onClick={() => closeWindow(name)}>X</button>
        </div>
      </div>
      <div className="test">Test</div>
      <div className="window-container">
      <div className="window-content">
        <p> sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
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
};

export default Window;
