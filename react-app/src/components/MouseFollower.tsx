import { useState } from "react";
import "../styles/App.css";

function MouseFollower() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e: any) => {
    setCursorX(e.pageX + -75);
    setCursorY(e.pageY + -75);
  });

  return (
    <>
      <div
        className="cursor"
        style={{ top: cursorY + "px", left: cursorX + "px" }}
      ></div>
    </>
  );
}
export default MouseFollower;
