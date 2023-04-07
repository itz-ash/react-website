import ListGroup from "./components/ListGroups";
import MouseFollower from "./components/MouseFollower";
import Navbar from "./components/Navbar";

function App() {
  let items = ["paris", "london", "canada", "autralia", "punjab", "usa"];

  const selectHandle = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="containerBox">
            <MouseFollower />
            {/* <Navbar /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
