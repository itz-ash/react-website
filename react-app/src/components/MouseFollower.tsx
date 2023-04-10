import { useState } from "react";
import "../styles/App.css";

function MouseFollower() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  const blob = document.getElementById("cursor");
  window.addEventListener("mousemove", (e: any) => {
    setCursorX(e.pageX + -200);
    setCursorY(e.pageY + -200);
  });
  blob?.animate(
    {
      left: `${cursorX}px`,
      top: `${cursorY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );

  return (
    <>
      <div
        id="cursor"
        // style={{ top: cursorY + "px", left: cursorX + "px" }}
      ></div>
      <div className="blurEffect"></div>
    </>
  );
}
export default MouseFollower;
