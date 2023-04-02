import { MouseEvent } from "react";

const clickHandler = (event: MouseEvent) => {
  console.log(event);
};

function ListGroup() {
  let items = ["paris", "london", "canada", "autralia", "punjab", "usa"];
  return (
    <>
      <h1>Hello world</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" onClick={clickHandler} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
