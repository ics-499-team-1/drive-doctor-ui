const TripsList = () => {
  let items = ["Trip1", "Trip2", "Trip3"];

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TripsList;
