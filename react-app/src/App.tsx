import ListGroup from "./components/ListGroups";
import ProjectTemplate from "./utils/ProjectTemplate";
import MouseFollower from "./components/MouseFollower";
import Navbar from "./components/Navbar";
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
      <div className="container-2">
        <div className="test">
          <ProjectTemplate />
        </div>
      </div>
    </>
  );
}

export default App;
