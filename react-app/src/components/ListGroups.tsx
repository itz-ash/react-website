function ListGroup() {
    let items = ["paris", "london", "canada", "autralia", "punjab", "usa"];
    // items = [];
    return (
        <>
            <h1>Hello world</h1>
            {/* {items.length === 0 ? <p>No items</p> : null} */}
            {items.length === 0 && <p>No items</p>}
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item" key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
