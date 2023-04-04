import { useState } from "react";
import "../App.css";

function MouseFollower() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e: any) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
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
