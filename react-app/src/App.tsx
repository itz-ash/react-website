import ListGroup from "./components/ListGroups";
import MouseFollower from "./components/MouseFollower";

function App() {
  let items = ["paris", "london", "canada", "autralia", "punjab", "usa"];

  const selectHandle = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        {/* <ListGroup items={items} heading="cities" onSelectItem={selectHandle} /> */}
        <MouseFollower />
      </div>
    </>
  );
}

export default App;
