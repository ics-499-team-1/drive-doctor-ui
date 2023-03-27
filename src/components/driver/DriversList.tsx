const DriversList = () => {
  let items = ["driver1", "driver2", "driver3"];

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

export default DriversList;
