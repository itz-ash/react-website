import ListGroup from "./components/ListGroups";

function App() {
  let items = ["paris", "london", "canada", "autralia", "punjab", "usa"];

  const selectHandle = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="cities" onSelectItem={selectHandle} />
    </div>
  );
}

export default App;
