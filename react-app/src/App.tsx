import ListGroup from "./components/ListGroups";
import ProjectTemplate from "./utils/ProjectTemplate";
import MouseFollower from "./components/MouseFollower";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <div>
        <div className="container">
          <div className="containerBox">
            <MouseFollower />
            <Navbar />
          </div>
        </div>
      </div>
      <div className="gradient">
        <div className="projectContainer">
          <ProjectTemplate
            thumbnail="./src/assets/placeholder.jpg"
            landingPage="#"
            description="placeholder"
          />
        </div>
      </div>
    </>
  );
}

export default App;
